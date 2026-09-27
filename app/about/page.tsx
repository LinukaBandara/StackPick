import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About StackPick",
  description: "What StackPick is and how we pick which software to recommend.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold text-ink mb-6">About StackPick</h1>
      <div className="text-[15px] text-slate space-y-4">
        <p>
          StackPick compares business software for freelancers and small teams, with a specific
          focus on budget-conscious picks — not just the biggest enterprise names.
        </p>
        <p>
          We're not a large team, and we're upfront about how these comparisons get built:
          researched from vendor documentation, pricing pages, and public reviews, structured
          around the trade-offs that actually matter (not just feature checklists).
        </p>
        <p>
          Some of our links are affiliate links — see our{" "}
          <a href="/affiliate-disclosure" className="text-indigo hover:underline">
            Affiliate Disclosure
          </a>{" "}
          for exactly how that works and how it does (and doesn't) affect our recommendations.
        </p>
      </div>
    </div>
  );
}
