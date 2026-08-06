# Performance Checklist

## Why this file exists

Same category as `ACCESSIBILITY.md`: a design-time checklist, not
something a script fully enforces. `components/sections` is currently
all stubs except `Contact.jsx` (no images), so there's no existing code
to fix — these are the rules to follow *when* Hero/About/Location/etc.
actually get built with real media.

**Target Core Web Vitals** (Google's "good" thresholds — monitored via
`@vercel/speed-insights`, already wired into `app/layout.jsx`):
- **LCP** (Largest Contentful Paint): under 2.5s
- **CLS** (Cumulative Layout Shift): under 0.1
- **INP** (Interaction to Next Paint): under 200ms

---

## Images — always `next/image`, never a plain `<img>`

Even though Model 1 never needs `remotePatterns` (all assets are
self-hosted in `/public` — confirmed, see README section 13),
`next/image` still matters for local files: automatic WebP/AVIF
conversion, responsive `srcset` generation, and lazy loading by
default.

- [ ] **The Hero section's main image (if it has one) gets `priority`.**
      This disables lazy loading for that specific image and tells
      Next.js to preload it — critical, since a lazy-loaded LCP
      candidate directly hurts the LCP metric. Every other image on
      the page should NOT have `priority` — only the one image most
      likely to be the actual LCP element.
- [ ] Every image needs explicit `width`/`height` (or `fill` + a sized
      parent) — this is what prevents layout shift (CLS) as the image
      loads in.
- [ ] Below-the-fold images (About, a future Reviews/Location section,
      etc.) use `next/image`'s default lazy loading — no extra
      configuration needed, don't override this to eager-load
      something off-screen.

## Hero video (≤10 seconds, per Model 1 scope)

- [ ] `preload="metadata"`, not `"auto"` — downloads just enough to
      know duration/dimensions, not the full file, before the browser
      decides whether to actually play it
- [ ] Always provide a real `poster` image (an actual compressed JPG
      of a meaningful frame, not a placeholder) — video itself isn't
      reliably treated as the LCP element across browsers, so the
      poster image is usually what LCP actually measures. No poster =
      no meaningful LCP paint until the video itself loads.
- [ ] `muted` and `playsInline` are required for autoplay to work at
      all on mobile browsers — this is a technical requirement, not
      optional, if the design calls for autoplay
- [ ] Compress aggressively — a 10-second clip should be a few MB, not
      tens of MB. H.264 MP4 for broad compatibility; a WebM source as
      an additional smaller alternative is a nice-to-have, not
      required

## Section-level code splitting — deliberately NOT doing this

`next/dynamic` code-splitting per section (Hero, About, Location, etc.
each as a separately-loaded chunk) was considered and rejected for this
project. These are small, mostly-static JSX components on a single
marketing page — the complexity of dynamic imports isn't worth it here.
If a specific section ever turns out to be unusually heavy (e.g. a
complex interactive map in a future Location variant), reconsider for
that one section specifically, not as a blanket pattern.

## Fonts — already optimal, no action needed

`next/font/google` (see `app/layout.jsx`) self-hosts and preloads
automatically for whichever weights are actually used. Nothing to
configure here beyond what's already documented in the layout file's
own header comment (pick real fonts, only request weights that
actually exist).

## Third-party scripts — deferred as far as each one allows

- **GA4:** consent-gated (section 14) AND `strategy="lazyOnload"` (see
  `components/ui/AnalyticsLoader.jsx`) — the least aggressive of
  `next/script`'s loading strategies. Holds the script back until the
  browser's `load` event fires and the main thread is idle, so it
  never competes with anything the page itself needs. **Trade-off,
  accepted deliberately:** a visitor who clicks a WhatsApp button in
  the first second or two — before `load` fires — won't have that
  specific click tracked, since `gtag` isn't loaded yet.
  `trackEvent()` already no-ops safely when `gtag` isn't available (no
  error, no crash), so this doesn't break anything — it just means
  very-early interactions go uncounted in GA4. Given the whole point of
  deferring is to not cost real visitors real load-time performance,
  this is judged worth it.
- **Sentry:** tunneled through `/monitoring`, same-origin, no extra DNS
  lookup. Bundled into the app's own JS via the `@sentry/nextjs`
  wizard's instrumentation files, not a separate `next/script` tag —
  not something this project's code controls the loading strategy of
  directly.
- **Speed Insights:** loading behavior is handled internally by
  `@vercel/speed-insights` itself, no public strategy prop exposed to
  configure — the package is already built for minimal load impact by
  design.
- **JSON-LD structured data:** not a script in the performance sense at
  all — `type="application/ld+json"` is a non-executable MIME type,
  browsers parse it for crawlers but never run it as JavaScript.
  Nothing to defer.

This list is a confirmation that the infrastructure layer makes the
right call for each script type, not a uniform TODO — some (GA4) had
a real strategy choice to make, others (Sentry, Speed Insights, JSON-LD)
genuinely don't expose one or don't need one.

---

## What NOT to do

- Don't add `priority` to more than one image — it defeats the purpose
  (everything becomes "high priority," nothing actually is)
- Don't lazy-load the Hero's own image/video — it's the first thing a
  visitor sees, by definition above the fold
- Don't reach for `next/dynamic` section-splitting as a default habit
  — see above, deliberately not the pattern here
- Don't skip the poster image on the hero video "because the video
  loads fast enough anyway" — measure LCP with Speed Insights, don't
  assume