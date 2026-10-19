"use client";

import { useEffect } from "react";

type Gtag = (
  command: "event",
  eventName: string,
  parameters: Record<string, string>
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

/**
 * Measures only links explicitly marked as affiliate links.
 *
 * GA4 is injected by CookieConsent only after analytics consent, so this
 * component does not load analytics or store its own tracking identifiers.
 * Mark a link with data-affiliate="true" only after the affiliate relationship
 * is active. A rel="sponsored" attribute alone is not enough to track a link.
 */
export default function AffiliateClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[data-affiliate="true"]');
      if (!link || !link.href) return;

      let destination: URL;
      try {
        destination = new URL(link.href, window.location.href);
      } catch {
        return;
      }

      if (destination.protocol !== "https:" && destination.protocol !== "http:") return;

      // No gtag means analytics is not loaded (including when consent is absent).
      if (typeof window.gtag !== "function") return;

      window.gtag("event", "affiliate_click", {
        link_url: destination.href,
        link_domain: destination.hostname,
        link_text: (link.innerText || link.getAttribute("aria-label") || "").trim().slice(0, 100),
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
