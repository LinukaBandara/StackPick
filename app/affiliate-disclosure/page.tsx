import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "StackPick's current affiliate-link status and editorial policy for any future commercial relationships.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="bg-white w-full">
      <div className="sp-container max-w-3xl py-16 sm:py-24">
        <p className="sp-eyebrow uppercase tracking-wider text-xs">Editorial policy</p>
        <h1 className="sp-title mt-3 text-[#1d1d1f]">Affiliate Disclosure</h1>
        <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-[#6e6e73]">
          <p>
            StackPick currently links directly to software vendors and does not currently earn
            affiliate commissions from the vendor links on this site. We are publishing this
            policy so readers can understand our approach before any commercial links are added.
          </p>
          <p>
            If we introduce affiliate links in the future, we will update this page and clearly
            identify those relationships on relevant pages before using them. An affiliate link
            may earn StackPick a commission if you purchase or sign up through it; the vendor's
            terms determine the transaction, and any commission should not increase the price you
            pay.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f] pt-4">How this affects our content</h2>
          <p>
            Our comparisons should explain who a product suits, its practical trade-offs and what
            readers should verify before buying. Any future commercial relationship will not be a
            reason to recommend a tool that is a poor fit. We aim to make the basis for our
            recommendations clear and to correct material errors when they are identified.
          </p>
          <p>
            Vendor links currently go to the vendors' websites. If an individual link becomes an
            affiliate link, we will disclose that relationship and mark the link appropriately.
          </p>
        </div>
      </div>
    </div>
  );
}
