import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How StackPick uses affiliate links and how that relates to our recommendations.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold text-ink mb-6">Affiliate Disclosure</h1>
      <div className="text-[15px] text-slate space-y-4">
        <p>
          Some links on StackPick are affiliate links. If you sign up for a tool through one of
          these links, we may earn a commission from the software provider, at no additional
          cost to you.
        </p>
        <p>
          This is how StackPick stays free to use and ad-light. It does not change the price you
          pay for any tool.
        </p>
        <h2 className="text-xl font-semibold text-ink pt-2">How this affects our content</h2>
        <p>
          Our rankings and recommendations are based on our own research into features, pricing,
          and trade-offs — not on which tool pays the highest commission. Where a tool is a
          genuinely poor fit for a use case, we say so, even if it has an affiliate program and a
          competitor doesn't.
        </p>
        <p>
          We disclose affiliate relationships on any page where they're present, and mark
          individual affiliate links with a "sponsored" attribute per search engine disclosure
          guidelines.
        </p>
        <p>
          This site also displays advertising (via Google AdSense once live), which is separate
          from affiliate partnerships and is not influenced by which tools we cover.
        </p>
      </div>
    </div>
  );
}
