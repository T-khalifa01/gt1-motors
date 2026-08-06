/**
 * components/ui/CookieConsentBanner.jsx
 * ------------------------------------------------------------------
 * Shared primitive. Shows a bottom banner until the visitor makes a
 * choice; hidden permanently after (choice persisted via
 * lib/consent.js). Only gates analytics — this app has no other
 * non-essential cookies (no sessions, no ads, no third-party trackers
 * besides GA4).
 *
 * Uses useSyncExternalStore, not useEffect+useState — see
 * AnalyticsLoader.jsx for why (React-recommended pattern for
 * browser-only external state, avoids both a lint error and a real
 * flash-of-wrong-state bug the naive version had).
 *
 * COPY BELOW IS A PLACEHOLDER, NOT LEGAL ADVICE. The actual wording,
 * which jurisdictions require it, and whether "decline" needs to be
 * as prominent as "accept" all depend on real legal review per
 * project — same category as the privacy notice flagged in README
 * section 10. Do not ship this placeholder text to a real client
 * without that review.
 *
 * Only renders when GA4 is actually enabled for this project — see
 * app/layout.jsx, which conditionally renders both this and
 * AnalyticsLoader together.
 * ------------------------------------------------------------------
 */

"use client";

import { useSyncExternalStore } from "react";
import Button from "./Button";
import { getConsent, setConsent, onConsentChange } from "@/lib/consent";

function getServerSnapshot() {
  return null;
}

export default function CookieConsentBanner() {
  const consent = useSyncExternalStore(
    onConsentChange,
    getConsent,
    getServerSnapshot
  );

  // null = no choice made yet, banner should show. Any other value
  // ("granted" or "denied") means the visitor already decided.
  if (consent !== null) return null;

  return (
    <div class="fixed inset-x-0 bottom-0 z-50 flex flex-col gap-3 border-t border-gray-800 bg-gray-900 p-4 text-white sm:flex-row sm:items-center sm:justify-between">
      <p class="text-sm text-gray-400">
        We use analytics cookies to understand how visitors use this site. You can accept or decline.
      </p>
      <div class="flex shrink-0 gap-3">
        <button class="rounded-md border border-gray-600 px-4 py-2 text-sm hover:bg-gray-800">
          Decline
        </button>
        <button class="rounded-md bg-white px-4 py-2 text-sm text-black hover:bg-gray-200">
          Accept
        </button>
      </div>
    </div>
  );
}