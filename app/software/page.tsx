import type { Metadata } from "next";
import Link from "next/link";
import SoftwareLogo from "@/components/SoftwareLogo";
import ProductScreenshot from "@/components/ProductScreenshot";
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

        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-[#6e6e73]">
          <span className="rounded-full border border-black/10 px-3 py-1.5">Sales & CRM</span>
          <span className="rounded-full border border-black/10 px-3 py-1.5">Free-plan limits</span>
          <span className="rounded-full border border-black/10 px-3 py-1.5">Official pricing links</span>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SOFTWARE_PROFILES.map((software) => (
            <article
              key={software.slug}
              className="flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#d2d2d7] bg-white transition-all hover:-translate-y-0.5 hover:border-[#001D39]/35 hover:shadow-[0_16px_40px_rgba(0,29,57,0.08)]"
            >
              <ProductScreenshot
                src={software.productImage.src}
                alt={software.productImage.alt}
                className="border-b border-black/[0.06]"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <SoftwareLogo name={software.name} url={software.officialUrl} />
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]">{software.category}</p>
                    <h2 className="mt-1 text-lg font-semibold tracking-tight text-[#1d1d1f]">{software.name}</h2>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#6e6e73]">{software.tagline}</p>
                <p className="mt-3 text-sm leading-6 text-[#1d1d1f]">{software.summary}</p>
                <div className="mt-5 rounded-2xl bg-[#f5f5f7] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">Free plan</p>
                  <p className="mt-2 text-sm leading-6 text-[#1d1d1f]">{software.freePlan}</p>
                </div>
                <Link
                  href={`/software/${software.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#001D39] hover:underline"
                >
                  Read software profile <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

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
