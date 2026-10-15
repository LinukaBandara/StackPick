import type { Metadata } from "next";
import Link from "next/link";
import SoftwareCatalogue from "@/components/SoftwareCatalogue";
import { SOFTWARE_PROFILES } from "@/lib/software";

export const metadata: Metadata = {
  title: "Software Catalogue",
  description:
    "Explore practical software profiles for small businesses and freelancers, with plan notes, strengths, trade-offs, genuine product previews and related comparisons.",
  alternates: { canonical: "/software" },
};

export default function SoftwareCataloguePage() {
  return (
    <section className="bg-white">
      <div className="sp-container py-16 sm:py-24">
        <p className="sp-eyebrow">The catalogue</p>
        <h1 className="sp-display mt-4 max-w-4xl">Know the tool before you choose it.</h1>
        <p className="sp-body-large mt-6 max-w-2xl">
          Explore the tools themselves: what their interfaces look like, who they suit, what their plans include,
          and where the trade-offs begin. We start with software already covered in StackPick comparisons.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-[#6e6e73]">
          <span className="rounded-full border border-black/10 px-3 py-1.5">Product screenshots with source links</span>
          <span className="rounded-full border border-black/10 px-3 py-1.5">Free-plan checks</span>
          <span className="rounded-full border border-black/10 px-3 py-1.5">Official pricing links</span>
        </div>

        <SoftwareCatalogue software={SOFTWARE_PROFILES} />

        <div className="mt-14 rounded-[24px] border border-black/10 bg-[#f5f5f7] p-7 sm:p-9">
          <h2 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">Still comparing your options?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6e6e73]">
            A profile explains one product; a comparison helps you choose between alternatives for a real task.
          </p>
          <Link href="/best/crm-software" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#001D39] hover:underline">
            Read our small-business CRM comparison <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
