# X conversion tracking

The root layout installs pixel `rbeyc` once using the supplied snippet and
`next/script` with `afterInteractive`. It applies to the homepage, About, and all
blog posts, including client-side navigation without loading a second pixel.
The component is declared in the shared head. Next.js injects `afterInteractive`
scripts client-side after hydration; it controls their physical DOM placement.

## What still needs configuring

This site has no confirmed checkout, account creation, or other server-side
conversion flow. No conversion events are invented or fired on ordinary page
renders. Provide the real `tw-rbeyc-...` event IDs from Events Manager and identify
the action that should trigger each one before wiring those events.

In the X Ads Manager Manual setup window, click **Next**, then **Generate access
token**. Set the value as `X_PIXEL_TOKEN` in the server environment (for local work,
use `.env.local`; for production, set it as a Vercel Production Secret and redeploy).
Never add `NEXT_PUBLIC_` to this name or commit the token. The committed
`.env.example` contains only an empty placeholder.

## Server-only integration

Import `sendXConversion` from `@/lib/x-conversions` into the existing trusted
server action/route which confirms the conversion. Call it only after that action
succeeds, not while rendering a page or from the browser. Handle tracking failure
separately so it cannot undo a completed user action.

Pass:

- `eventId`: the real event ID for this pixel, not `tw-rbeyc-xxxxx`.
- `conversionTime`: the time the action was confirmed, or omit to use the current time.
- `eventSourceUrl`: the real URL where the action happened, if available.
- `conversionId`: a stable ID for that one action, if available. If also sending
  the event through `twq('event', eventId, { conversion_id: ... })`, use exactly
  the same ID on both sides to deduplicate. Reuse it on retries too.
- `identifiers`: at least one of `twclid`, `email`, `phoneNumber`, or the pair
  `ipAddress` and `userAgent`. Only send data you are authorized to share.

The helper trims/lowercases email and SHA-256 hashes it as hex. For phone numbers,
it strips common display formatting, requires an explicit `+` country code,
validates E.164 structure, and hashes that normalized value. Raw emails and phone
numbers are never sent in the API request.

For click attribution, `getXClickId(landingPageUrl)` extracts the actual `twclid`
URL parameter. When a conversion flow is added, retain that landing-page value
in its consent-aware session/attribution storage and supply it when confirming
the conversion. The current blog has no such flow, so no additional tracking
cookie or attribution storage has been introduced.

IP addresses must be valid IPv4/IPv6 values, not a comma-separated proxy header.
Use the site's trusted hosting/proxy mechanism to obtain the visitor IP; never
blindly trust a browser-supplied IP header.

## Verification

Run `npm run test:x-tracking`, `npm run lint`, and the production build. Tests mock
the Conversion API and never transmit a real conversion or use a real token.

Open the deployed site with the [X Pixel Helper Chrome extension](https://chrome.google.com/webstore/detail/twitter-pixel-helper/jepminnlebllinfmkhfbkpckogoiefpd)
and verify pixel `rbeyc` fires. Repeat on `/about`, `/eyeballs`, and `/mumbai`.

After the token and real event IDs are configured and a confirmed conversion is
wired, send one deliberate test conversion and verify HTTP `200`. A mocked `200`
in the local tests is not proof that the production token or X event is valid.
