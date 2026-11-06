import type { Metadata } from "next";
import Link from "next/link";
import { SOFTWARE_PROFILES } from "@/lib/software";
import SoftwareLogo from "@/components/SoftwareLogo";

export const metadata: Metadata = {
  title: "Compare Selected Software",
  description: "Compare selected software profiles side by side across pricing, free-plan limits, use cases and capabilities.",
  robots: { index: false, follow: true },
};

type PageProps = { searchParams: Promise<{ tools?: string | string[] }> };

const ROWS = [
  { label: "Category", value: (item: (typeof SOFTWARE_PROFILES)[number]) => item.category },
  { label: "Pricing", value: (item: (typeof SOFTWARE_PROFILES)[number]) => item.pricingSummary },
  { label: "Free plan / trial", value: (item: (typeof SOFTWARE_PROFILES)[number]) => item.freePlan },
  { label: "Best for", value: (item: (typeof SOFTWARE_PROFILES)[number]) => item.bestFor.join(" · ") },
  { label: "Key capabilities", value: (item: (typeof SOFTWARE_PROFILES)[number]) => item.keyFeatures.join(" · ") },
  { label: "Strengths", value: (item: (typeof SOFTWARE_PROFILES)[number]) => item.strengths.join(" · ") },
  { label: "Trade-offs", value: (item: (typeof SOFTWARE_PROFILES)[number]) => item.tradeoffs.join(" · ") },
];

export default async function ComparePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const raw = Array.isArray(params.tools) ? params.tools.join(",") : params.tools || "";
  const requested = [...new Set(raw.split(",").map((slug) => slug.trim()).filter(Boolean))].slice(0, 3);
  const selected = requested.map((slug) => SOFTWARE_PROFILES.find((item) => item.slug === slug)).filter((item): item is (typeof SOFTWARE_PROFILES)[number] => Boolean(item));

  return (
    <section className="bg-white">
      <div className="sp-container py-14 sm:py-20">
        <Link href="/software" className="text-sm font-semibold text-[#001D39] hover:underline">← Back to software catalogue</Link>
        <p className="sp-eyebrow mt-8">Your shortlist</p>
        <h1 className="sp-display mt-4 max-w-4xl">Compare the tools side by side.</h1>
        <p className="sp-body-large mt-5 max-w-2xl">Look beyond the headline price. Compare plan limits, intended use, core capabilities and trade-offs before you decide.</p>

        {selected.length < 2 ? (
          <div className="mt-10 rounded-[24px] border border-black/10 bg-[#f5f5f7] p-7 sm:p-9">
            <h2 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">Select at least two tools.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6e6e73]">Return to the catalogue and select up to three software profiles using the “Add to comparison” option on each card.</p>
            <Link href="/software" className="mt-6 inline-flex rounded-full bg-[#001D39] px-5 py-3 text-sm font-semibold text-white hover:bg-[#123b5d]">Choose software <span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
        ) : (
          <>
            <div className="mt-10 grid gap-4" style={{ gridTemplateColumns: `repeat(${selected.length}, minmax(0, 1fr))` }}>
              {selected.map((item) => (
                <div key={item.slug} className="min-w-0 rounded-[22px] border border-[#d2d2d7] bg-[#f5f5f7] p-4 sm:p-6">
                  <SoftwareLogo name={item.name} url={item.officialUrl} />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">{item.category}</p>
                  <h2 className="mt-2 break-words text-lg font-semibold tracking-tight text-[#1d1d1f]">{item.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{item.tagline}</p>
                  <Link href={`/software/${item.slug}`} className="mt-5 inline-flex text-sm font-semibold text-[#001D39] hover:underline">Full profile →</Link>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-x-auto rounded-[22px] border border-black/10">
              <table className="w-full min-w-[680px] table-fixed border-collapse text-left">
                <thead>
                  <tr className="bg-[#001D39] text-white">
                    <th className="w-40 px-5 py-4 text-xs font-semibold uppercase tracking-wide">Compare</th>
                    {selected.map((item) => <th key={item.slug} className="px-5 py-4 text-sm font-semibold">{item.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, index) => (
                    <tr key={row.label} className={index % 2 === 0 ? "bg-white" : "bg-[#f5f5f7]"}>
                      <th scope="row" className="align-top px-5 py-5 text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">{row.label}</th>
                      {selected.map((item) => <td key={item.slug} className="align-top border-l border-black/[0.06] px-5 py-5 text-sm leading-6 text-[#4b5563]">{row.value(item)}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[22px] border border-black/10 p-6">
              <div>
                <h2 className="font-semibold text-[#1d1d1f]">Ready to explore another option?</h2>
                <p className="mt-1 text-sm text-[#6e6e73]">Your shortlist is limited to three tools at a time.</p>
              </div>
              <Link href="/software" className="rounded-full bg-[#001D39] px-5 py-3 text-sm font-semibold text-white hover:bg-[#123b5d]">Edit shortlist →</Link>
            </div>
          </>
        )}
        <p className="mt-8 text-xs leading-5 text-[#6e6e73]">Pricing and feature information is based on StackPick's editorial profile notes and can change. Always verify current terms on each provider's official pricing page before purchasing.</p>
      </div>
    </section>
  );
}
