"use client";

import { useEffect } from "react";
import Script from "next/script";
import { ANALYTICS_DOMAIN } from "@/lib/constants";

type Plausible = ((
  event: string,
  options?: { props?: Record<string, string> }
) => void) & { q?: unknown[] };

declare global {
  interface Window {
    plausible?: Plausible;
  }
}

const enabled = process.env.NODE_ENV === "production";

// Any element with data-analytics-event sends that event on click, with
// data-analytics-position (if set) as the "position" prop.
function useTrackedClicks() {
  useEffect(() => {
    if (!enabled) return;
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>(
        "[data-analytics-event]"
      );
      if (!el) return;
      const { analyticsEvent, analyticsPosition } = el.dataset;
      window.plausible?.(
        analyticsEvent!,
        analyticsPosition ? { props: { position: analyticsPosition } } : undefined
      );
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

export function Analytics() {
  useTrackedClicks();
  if (!enabled) return null;

  return (
    <>
      {/* Queues events fired before the script has loaded. */}
      <Script id="plausible-init" strategy="afterInteractive">
        {`window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
      </Script>
      <Script
        src="https://plausible.io/js/script.js"
        data-domain={ANALYTICS_DOMAIN}
        strategy="afterInteractive"
      />
    </>
  );
}
