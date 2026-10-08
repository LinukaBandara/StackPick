import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About StackPick",
  description: "How StackPick researches and compares software for freelancers and small businesses.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="sp-container py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-indigo-600">About the publication</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">Software choices, without the sales pitch.</h1>
        <div className="mt-8 space-y-8 text-[15px] leading-7 text-slate-600">
          <section><h2 className="text-xl font-bold text-slate-950">What StackPick does</h2><p className="mt-2">StackPick compares software for freelancers, creators and small teams. The goal is not to declare one universal winner. It is to explain which product fits a specific job, budget or team size - and where the compromises start.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950">Our editorial approach</h2><p className="mt-2">We start with the decision a reader is trying to make, then compare products around practical criteria: current plan structure, meaningful limits, core workflow, integrations, ease of use, and trade-offs that can change the recommendation. Vendor documentation and pricing pages are important sources, but the finished article is written as an independent comparison rather than a copied feature list.</p><p className="mt-2">Pricing and product limits change. When a claim is time-sensitive, readers should verify the live vendor page before buying. We aim to update comparisons when material pricing or product changes make the existing recommendation misleading.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950">What we do not promise</h2><p className="mt-2">StackPick does not claim that every product has been personally tested by a large review lab, nor that a vendor's marketing claims are independently verified unless the article explicitly says so. We would rather be clear about the evidence behind a recommendation than make a stronger testing claim than we can support.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950">Affiliate relationships</h2><p className="mt-2">Some links are affiliate links. A commission may be earned if a reader signs up through one of those links, at no additional cost to the reader. Affiliate relationships do not determine the editorial verdict. See our <Link href="/affiliate-disclosure" className="font-semibold text-indigo-600 hover:underline">Affiliate Disclosure</Link> for more information.</p></section>
          <section><h2 className="text-xl font-bold text-slate-950">Corrections</h2><p className="mt-2">If you spot an outdated price, broken link or incorrect product detail, please use the <Link href="/contact" className="font-semibold text-indigo-600 hover:underline">Contact</Link> page. Corrections are welcome.</p></section>
        </div>
      </div>
    </div>
  );
}