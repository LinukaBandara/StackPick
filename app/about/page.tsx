import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About StackPick",
  description: "What StackPick is and how we pick which software to recommend.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-white w-full">
      <div className="sp-container max-w-3xl py-16 sm:py-24">
        <p className="sp-eyebrow uppercase tracking-wider text-xs">About us</p>
        <h1 className="sp-title mt-3 text-[#1d1d1f]">About StackPick</h1>
        <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-[#6e6e73]">
          <p>
            StackPick compares business software for freelancers and small teams, with a specific
            focus on budget-conscious picks - not just the biggest enterprise names.
          </p>
          <p>
            We are upfront about how these comparisons get built: researched from vendor
            documentation, pricing pages, and public reviews, structured around the trade-offs that
            actually matter (not just endless feature checklists).
          </p>
          <p>
            Some of our links are affiliate links - see our{" "}
            <Link href="/affiliate-disclosure" className="text-[#004bb5] font-medium hover:underline">
              Affiliate Disclosure
            </Link>{" "}
            for exactly how that works and how it does (and doesn't) affect our recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
