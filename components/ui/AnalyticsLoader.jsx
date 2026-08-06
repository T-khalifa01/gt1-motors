/**
 * components/ui/AnalyticsLoader.jsx
 * ------------------------------------------------------------------
 * Client-only wrapper that gates GA4 script loading behind analytics
 * consent. Pulled out into its own client component specifically so
 * the consent check (needs localStorage, only available client-side)
 * doesn't force app/layout.jsx into client-side rendering — keeps the
 * homepage statically pre-rendered, same reasoning as the earlier CSP
 * nonce decision. Only this small piece hydrates and decides at
 * runtime whether to inject the GA4 scripts.
 *
 * Uses useSyncExternalStore rather than useEffect+useState — this is
 * the React-recommended pattern for reading a browser-only external
 * store (localStorage, via lib/consent.js) without a hydration
 * mismatch. Confirmed by a real dry-run lint: a naive
 * useEffect(() => setState(...)) version triggers the
 * react-hooks/set-state-in-effect rule, and useSyncExternalStore also
 * genuinely avoids a flash-of-wrong-state that the useEffect version
 * had for returning visitors, not just a lint workaround.
 *
 * LOADING STRATEGY: "lazyOnload", not "afterInteractive". This is the
 * least aggressive of next/script's strategies — it holds the script
 * back until the browser's `load` event fires and the main thread is
 * idle, so GA4's script never competes with anything the page itself
 * needs to load or become interactive. See PERFORMANCE.md for the
 * fuller reasoning and the trade-off this creates (a visitor who
 * clicks a WhatsApp button in the first second or two, before `load`
 * fires, won't have that click tracked — trackEvent() already
 * no-ops safely if gtag isn't ready yet, so this doesn't break
 * anything, it just means very-early interactions go uncounted).
 *
 * Rendered from layout.jsx only when config.analytics.ga4MeasurementId
 * is set (see lib/analytics.js isAnalyticsEnabled) — this component
 * doesn't check that itself, it only handles the consent layer on top.
 * ------------------------------------------------------------------
 */

"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { getConsent, onConsentChange } from "@/lib/consent";

// The server never has access to localStorage, so it can't know a
// returning visitor's stored choice — this is the value used during
// SSR/static generation and the very first client render before
// hydration syncs to the real value.
function getServerSnapshot() {
  return null;
}

export default function AnalyticsLoader({ measurementId }) {
  const consent = useSyncExternalStore(
    onConsentChange,
    getConsent,
    getServerSnapshot
  );

  if (consent !== "granted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}