import "server-only";
import { createHash } from "node:crypto";
import { isIP } from "node:net";

const endpoint = "https://ads-api.x.com/12/measurement/conversions/rbeyc";

export type XConversionInput = {
  eventId: string;
  conversionTime?: Date;
  eventSourceUrl?: string;
  // Reuse this exact ID in the browser pixel if it sends the same event.
  conversionId?: string;
  identifiers: {
    twclid?: string;
    email?: string;
    // Include the country code; national numbers cannot be safely inferred.
    phoneNumber?: string;
    ipAddress?: string;
    userAgent?: string;
  };
};

function hash(value: string) {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

export function getXClickId(landingPageUrl: string) {
  return new URL(landingPageUrl).searchParams.get("twclid")?.trim() || undefined;
}

export function buildXConversion(input: XConversionInput) {
  if (!/^tw-rbeyc-[a-z0-9]+$/i.test(input.eventId) || input.eventId === "tw-rbeyc-xxxxx") {
    throw new Error("Use a real event ID for pixel rbeyc from X Events Manager.");
  }

  if (input.eventSourceUrl) {
    const url = new URL(input.eventSourceUrl);
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      throw new Error("eventSourceUrl must be an HTTP(S) URL.");
    }
  }
  const { identifiers } = input;
  const twclid = identifiers.twclid?.trim() || undefined;
  const email = identifiers.email?.trim().toLowerCase();
  // Remove display formatting, but never guess a missing country code.
  const phone = identifiers.phoneNumber?.trim().replace(/[\s().-]/g, "");
  const ip = identifiers.ipAddress?.trim() || undefined;
  const userAgent = identifiers.userAgent?.trim() || undefined;

  if (identifiers.email !== undefined && (!email || !/^[^\s@]+@[^\s@]+$/.test(email))) {
    throw new Error("Provide a valid email address.");
  }
  if (identifiers.phoneNumber !== undefined && (!phone || !/^\+[1-9]\d{1,14}$/.test(phone))) {
    throw new Error("Provide a phone number with its country code in E.164 format.");
  }
  if (ip && !isIP(ip)) {
    throw new Error("Provide a valid IP address.");
  }
  if (Boolean(ip) !== Boolean(userAgent)) {
    throw new Error("IP address and user agent must be supplied together.");
  }
  if (!twclid && !email && !phone && !(ip && userAgent)) {
    throw new Error("At least one supported conversion identifier is required.");
  }
  if (input.conversionId !== undefined && !input.conversionId.trim()) {
    throw new Error("conversionId cannot be empty.");
  }

  return {
    conversion_time: (input.conversionTime ?? new Date()).toISOString(),
    event_id: input.eventId,
    ...(input.eventSourceUrl ? { event_source_url: input.eventSourceUrl } : {}),
    ...(input.conversionId ? { conversion_id: input.conversionId } : {}),
    identifiers: [{
      ...(twclid ? { twclid } : {}),
      ...(email ? { hashed_email: hash(email) } : {}),
      ...(phone ? { hashed_phone_number: hash(phone) } : {}),
      ...(ip && userAgent ? { ip_address: ip, user_agent: userAgent } : {}),
    }],
  };
}

// Call only from trusted server code after the action has been confirmed.
// Intentionally not exposed as an unauthenticated browser-callable endpoint.
export async function sendXConversion(input: XConversionInput) {
  const conversion = buildXConversion(input);
  const token = process.env.X_PIXEL_TOKEN?.trim();
  if (!token) {
    throw new Error("Set X_PIXEL_TOKEN in the server environment before sending conversions.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "X-Pixel-Token": token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ conversions: [conversion] }),
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) {
    // Do not include the response body, identifiers or token in errors/logs.
    throw new Error(`X Conversion API returned HTTP ${response.status}.`);
  }
  return { status: response.status };
}
