import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How StackPick uses affiliate links and how that relates to our recommendations.",
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
            Some links on StackPick are affiliate links. If you sign up for a tool through one of
            these links, we may earn a commission from the software provider, at no additional
            cost to you.
          </p>
          <p>
            This is how StackPick stays free to use and ad-light. It does not change the price you
            pay for any tool.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f] pt-4">How this affects our content</h2>
          <p>
            Our rankings and recommendations are based on our own research into features, pricing,
            and trade-offs - not on which tool pays the highest commission. Where a tool is a
            genuinely poor fit for a use case, we say so, even if it has an affiliate program and a
            competitor doesn't.
          </p>
          <p>
            We disclose affiliate relationships on any page where they're present, and mark
            individual affiliate links with a "sponsored" attribute per search engine disclosure
            guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}
