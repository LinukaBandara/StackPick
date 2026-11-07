/**
 * Central registry for approved affiliate destinations.
 *
 * Keep this registry empty until StackPick has written approval and a working
 * tracking URL from a vendor/program. Never infer or manufacture affiliate URLs.
 * Keys must match a SOFTWARE_PROFILES slug.
 */
export type AffiliatePartner = {
  url: string;
  program: string;
  disclosure: string;
};

export const AFFILIATE_PARTNERS: Partial<Record<string, AffiliatePartner>> = {
  // Example shape only — add a real entry after approval and link verification:
  // "vendor-slug": {
  //   url: "https://verified-partner-tracking-url.example/",
  //   program: "Vendor affiliate programme",
  //   disclosure: "StackPick may earn a commission if you sign up through this link.",
  // },
};

export function getAffiliatePartner(slug: string): AffiliatePartner | null {
  const partner = AFFILIATE_PARTNERS[slug];
  if (!partner) return null;

  try {
    const destination = new URL(partner.url);
    if (destination.protocol !== "https:") return null;
  } catch {
    return null;
  }

  return partner;
}
