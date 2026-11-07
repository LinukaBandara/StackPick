import type { Metadata } from "next";
import Link from "next/link";
import SoftwareFinder from "@/components/SoftwareFinder";
import { SOFTWARE_PROFILES } from "@/lib/software";

export const metadata: Metadata = {
  title: "Software Finder — Find Tools That Fit Your Work | StackPick",
  description: "Build a software shortlist around your workflow, team size, budget preference and must-have priorities.",
  alternates: { canonical: "/software-finder" },
};

export default function SoftwareFinderPage() {
  return <main className="bg-white">
    <section className="border-b border-black/[0.07] bg-[#f5f5f7]"><div className="sp-container py-14 sm:py-20">
      <Link href="/software" className="text-sm font-semibold text-[#001D39] hover:underline">← Browse the catalogue</Link>
      <p className="sp-eyebrow mt-8">StackPick software finder</p>
      <h1 className="sp-display mt-4 max-w-4xl">Find software that fits the way you work.</h1>
      <p className="sp-body-large mt-5 max-w-2xl">Start with the job, your team and your budget preference. Get a shortlist with clear reasons and trade-offs — not a one-size-fits-all winner.</p>
    </div></section>
    <section className="sp-container py-12 sm:py-16"><SoftwareFinder software={SOFTWARE_PROFILES} />
      <div className="mt-14 border-t border-black/[0.08] pt-8"><h2 className="text-lg font-semibold text-[#1d1d1f]">Want to compare your shortlist?</h2><p className="mt-2 text-sm leading-6 text-[#6e6e73]">Open any profile to review plan details, or add two or three products to the comparison workspace.</p><Link href="/compare" className="mt-4 inline-flex text-sm font-semibold text-[#001D39] hover:underline">Open comparison workspace →</Link></div>
    </section>
  </main>;
}
