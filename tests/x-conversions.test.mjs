import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { test, afterEach, mock } from "node:test";
import vm from "node:vm";
import { buildXConversion, getXClickId, sendXConversion } from "../lib/x-conversions.ts";

const eventId = "tw-rbeyc-test123";
const previousToken = process.env.X_PIXEL_TOKEN;
afterEach(() => {
  mock.restoreAll();
  if (previousToken === undefined) delete process.env.X_PIXEL_TOKEN;
  else process.env.X_PIXEL_TOKEN = previousToken;
});

test("base pixel snippet is unchanged, global, and queues rbeyc configuration", () => {
  const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, /<head>[\s\S]*<Script id="x-pixel-rbeyc" strategy="afterInteractive">[\s\S]*<\/head>/);
  const snippet = layout.match(/\{`(!function[\s\S]*?twq\('config','rbeyc'\);)`\}/)?.[1];
  assert.ok(snippet);
  assert.equal(layout.split("twq('config','rbeyc')").length - 1, 1);
  const inserted = [];
  const script = { parentNode: { insertBefore: node => inserted.push(node) } };
  const context = vm.createContext({ document: {
    createElement: tag => ({ tag }),
    getElementsByTagName: () => [script],
  } });
  context.window = context;
  vm.runInContext(snippet, context);
  assert.equal(inserted.length, 1);
  assert.equal(inserted[0].src, "https://static.ads-twitter.com/uwt.js");
  assert.equal(inserted[0].async, true);
  assert.deepEqual(Array.from(context.twq.queue[0]), ["config", "rbeyc"]);
  // The supplied guard doesn't inject another library if called again.
  vm.runInContext(snippet, context);
  assert.equal(inserted.length, 1);
});

test("trims/lowercases email, formats phone, then hashes as SHA-256 hex", () => {
  const conversion = buildXConversion({ eventId, identifiers: {
    email: "  USER@Example.COM  ", phoneNumber: " +1 (555) 123-4567 ",
  } });
  const sha = value => createHash("sha256").update(value).digest("hex");
  assert.deepEqual(conversion.identifiers, [{
    hashed_email: sha("user@example.com"),
    hashed_phone_number: sha("+15551234567"),
  }]);
  assert.equal(JSON.stringify(conversion).includes("USER@"), false);
});

test("extracts the real landing-page click ID and preserves deduplication ID", () => {
  const twclid = getXClickId("https://www.fizzy.blog/eyeballs?twclid=click%2B123");
  assert.equal(twclid, "click+123");
  assert.equal(getXClickId("https://www.fizzy.blog/"), undefined);
  const conversion = buildXConversion({
    eventId, conversionId: "action-123",
    conversionTime: new Date("2026-10-22T10:00:00Z"),
    eventSourceUrl: "https://www.fizzy.blog/eyeballs",
    identifiers: { twclid },
  });
  assert.equal(conversion.conversion_id, "action-123");
  assert.equal(conversion.conversion_time, "2026-10-22T10:00:00.000Z");
  assert.equal(conversion.event_source_url, "https://www.fizzy.blog/eyeballs");
  assert.deepEqual(conversion.identifiers, [{ twclid: "click+123" }]);
});

test("accepts paired IP/user agent and rejects incomplete identifiers", () => {
  assert.deepEqual(buildXConversion({ eventId, identifiers: {
    ipAddress: "192.0.2.1", userAgent: "Mozilla/5.0",
  } }).identifiers, [{ ip_address: "192.0.2.1", user_agent: "Mozilla/5.0" }]);
  for (const identifiers of [{}, { twclid: " " }, { ipAddress: "192.0.2.1" },
    { userAgent: "Mozilla/5.0" }, { ipAddress: "invalid", userAgent: "Mozilla/5.0" },
    { email: " " }, { phoneNumber: "5551234567" }]) {
    assert.throws(() => buildXConversion({ eventId, identifiers }));
  }
});

test("rejects placeholder or unrelated event IDs", () => {
  for (const invalid of ["tw-rbeyc-xxxxx", "tw-other-123", ""]) {
    assert.throws(() => buildXConversion({ eventId: invalid, identifiers: { twclid: "click" } }));
  }
});

test("requires an environment token and does not send without it", async () => {
  delete process.env.X_PIXEL_TOKEN;
  const fetchMock = mock.method(globalThis, "fetch", async () => new Response(null));
  await assert.rejects(sendXConversion({ eventId, identifiers: { twclid: "click" } }), /X_PIXEL_TOKEN/);
  assert.equal(fetchMock.mock.callCount(), 0);
});

test("posts the exact server-only API format and returns the mocked status", async () => {
  process.env.X_PIXEL_TOKEN = "local-test-token-not-a-real-secret";
  const fetchMock = mock.method(globalThis, "fetch", async () => new Response(null, { status: 200 }));
  const result = await sendXConversion({ eventId, conversionId: "action-123", identifiers: { twclid: "click" } });
  assert.equal(result.status, 200);
  const [url, options] = fetchMock.mock.calls[0].arguments;
  assert.equal(url, "https://ads-api.x.com/12/measurement/conversions/rbeyc");
  assert.equal(options.method, "POST");
  assert.equal(options.headers["X-Pixel-Token"], process.env.X_PIXEL_TOKEN);
  assert.equal(options.headers["Content-Type"], "application/json");
  assert.equal(options.cache, "no-store");
  assert.equal(options.redirect, "error");
  const body = JSON.parse(options.body);
  assert.equal(body.conversions.length, 1);
  assert.equal(body.conversions[0].conversion_id, "action-123");
  assert.deepEqual(body.conversions[0].identifiers, [{ twclid: "click" }]);
});

test("surfaces API failure status without exposing response data", async () => {
  process.env.X_PIXEL_TOKEN = "local-test-token-not-a-real-secret";
  mock.method(globalThis, "fetch", async () => new Response("private provider response", { status: 401 }));
  await assert.rejects(sendXConversion({ eventId, identifiers: { twclid: "click" } }),
    { message: "X Conversion API returned HTTP 401." });
});
