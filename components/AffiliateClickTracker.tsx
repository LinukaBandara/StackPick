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
 * Measures vendor outbound intent only when analytics is available.
 * CookieConsent is responsible for loading GA4 after analytics consent.
 * This component never loads analytics or stores tracking identifiers.
 */
export default function AffiliateClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[data-vendor-outbound="true"]');
      if (!link?.href || typeof window.gtag !== "function") return;

      let destination: URL;
      try {
        destination = new URL(link.href, window.location.href);
      } catch {
        return;
      }

      if (destination.protocol !== "https:" && destination.protocol !== "http:") return;

      const parameters = {
        link_url: destination.href,
        link_domain: destination.hostname,
        link_text: (link.innerText || link.getAttribute("aria-label") || "").trim().slice(0, 100),
        page_path: window.location.pathname,
        software_slug: link.dataset.softwareSlug || "",
        vendor_action: link.dataset.vendorAction || "website",
      };

      window.gtag("event", "vendor_outbound_click", parameters);

      // Keep the affiliate-specific event for partner reporting. This attribute
      // is only set when a verified programme URL is configured.
      if (link.dataset.affiliate === "true") {
        window.gtag("event", "affiliate_click", parameters);
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
