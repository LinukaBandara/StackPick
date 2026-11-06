"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SoftwareLogo from "@/components/SoftwareLogo";
import type { SoftwareProfile } from "@/lib/software";

type Props = {
  initialProfiles: SoftwareProfile[];
  allProfiles: SoftwareProfile[];
};

const ROWS: { label: string; key: keyof SoftwareProfile; values: (profile: SoftwareProfile) => string }[] = [
  { label: "Category", key: "category", values: (p) => p.category },
  { label: "Pricing", key: "pricingSummary", values: (p) => p.pricingSummary },
  { label: "Free plan or trial", key: "freePlan", values: (p) => p.freePlan },
  { label: "Best for", key: "bestFor", values: (p) => p.bestFor.join(" · ") },
  { label: "Key capabilities", key: "keyFeatures", values: (p) => p.keyFeatures.join(" · ") },
  { label: "Strengths", key: "strengths", values: (p) => p.strengths.join(" · ") },
  { label: "Trade-offs", key: "tradeoffs", values: (p) => p.tradeoffs.join(" · ") },
];

export default function CompareWorkspace({ initialProfiles, allProfiles }: Props) {
  const [selected, setSelected] = useState<SoftwareProfile[]>(initialProfiles);
  const [candidate, setCandidate] = useState("");
  const [showDifferences, setShowDifferences] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem("stackpick-compare", JSON.stringify(selected.map((item) => item.slug)));
    } catch {}
    const params = new URLSearchParams();
    if (selected.length) params.set("tools", selected.map((item) => item.slug).join(","));
    window.history.replaceState(null, "", params.size ? `/compare?${params.toString()}` : "/compare");
  }, [selected]);

  const rows = useMemo(() => ROWS.map((row) => {
    const values = selected.map(row.values);
    return { ...row, values, differs: new Set(values).size > 1 };
  }), [selected]);

  const differenceCount = rows.filter((row) => row.differs).length;
  const available = allProfiles.filter((profile) => !selected.some((item) => item.slug === profile.slug));

  function addCandidate() {
    const match = available.find((item) => item.slug === candidate);
    if (!match || selected.length >= 3) return;
    setSelected((current) => [...current, match]);
    setCandidate("");
  }

  function removeProfile(slug: string) {
    setSelected((current) => current.filter((item) => item.slug !== slug));
  }

  function resetComparison() {
    setSelected([]);
    setCandidate("");
  }

  return (
    <section className="bg-white">
      <div className="sp-container py-14 sm:py-20">
        <Link href="/software" className="text-sm font-semibold text-[#001D39] hover:underline">← Back to software catalogue</Link>
        <p className="sp-eyebrow mt-8">Your comparison</p>
        <h1 className="sp-display mt-4 max-w-4xl">Make the differences clear.</h1>
        <p className="sp-body-large mt-5 max-w-2xl">Compare pricing, plan limits, capabilities and trade-offs side by side. StackPick does not declare a universal winner: the right choice depends on your workflow.</p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[22px] border border-black/[0.08] bg-[#f5f5f7] p-5 sm:p-6">
          <div>
            <p className="text-sm font-semibold text-[#1d1d1f]">{selected.length} of 3 tools selected</p>
            <p className="mt-1 text-xs leading-5 text-[#6e6e73]">{selected.length >= 2 ? `${differenceCount} of ${rows.length} comparison areas contain differences.` : "Choose at least two tools to compare."}</p>
          </div>
          <div className="flex w-full flex-wrap gap-2 sm:w-auto">
            <label className="sr-only" htmlFor="compare-add-tool">Add another tool</label>
            <select id="compare-add-tool" value={candidate} onChange={(event) => setCandidate(event.target.value)} disabled={selected.length >= 3 || available.length === 0} className="min-w-0 flex-1 rounded-full border border-[#d2d2d7] bg-white px-4 py-2.5 text-sm text-[#1d1d1f] outline-none focus:border-[#001D39] sm:min-w-[220px]">
              <option value="">Add another tool…</option>
              {available.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
            </select>
            <button type="button" onClick={addCandidate} disabled={!candidate || selected.length >= 3} className="rounded-full bg-[#001D39] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#123b5d] disabled:cursor-not-allowed disabled:opacity-40">Add tool</button>
            <button type="button" onClick={resetComparison} disabled={!selected.length} className="rounded-full border border-[#d2d2d7] bg-white px-4 py-2.5 text-sm font-semibold text-[#4b5563] transition hover:border-[#001D39] disabled:opacity-40">Clear</button>
          </div>
        </div>

        {selected.length < 2 ? (
          <div className="mt-8 rounded-[24px] border border-black/10 p-7 sm:p-10">
            <h2 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">{selected.length === 0 ? "Start a comparison." : "Add one more tool."}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6e6e73]">Select tools from the catalogue, or use the selector above to build a comparison of up to three products.</p>
            <Link href="/software" className="mt-6 inline-flex rounded-full bg-[#001D39] px-5 py-3 text-sm font-semibold text-white hover:bg-[#123b5d]">Browse software <span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
        ) : (
          <>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[#1d1d1f]">Side-by-side overview</p>
              <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-[#4b5563]">
                <input type="checkbox" checked={showDifferences} onChange={(event) => setShowDifferences(event.target.checked)} className="h-4 w-4 accent-[#001D39]" />
                Show differences only
              </label>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {selected.map((item) => (
                <article key={item.slug} className="min-w-0 rounded-[22px] border border-[#d2d2d7] bg-[#f5f5f7] p-4 sm:p-6">
                  <div className="flex items-center gap-3">
                    <SoftwareLogo name={item.name} url={item.officialUrl} />
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#6e6e73]">{item.category}</p>
                      <h2 className="mt-1 break-words text-base font-semibold tracking-tight text-[#1d1d1f] sm:text-lg">{item.name}</h2>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-[#6e6e73]">{item.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link href={`/software/${item.slug}`} className="text-xs font-semibold text-[#001D39] hover:underline">Full profile ↗</Link>
                    <a href={item.pricingUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold text-[#6e6e73] hover:text-[#001D39] hover:underline">Official pricing ↗</a>
                  </div>
                  <button type="button" onClick={() => removeProfile(item.slug)} className="mt-5 border-t border-black/[0.08] pt-3 text-xs font-semibold text-[#6e6e73] hover:text-[#001D39]">Remove from comparison −</button>
                </article>
              ))}
            </div>

            <div className="mt-6 overflow-x-auto rounded-[22px] border border-black/10">
              <table className="w-full min-w-[720px] table-fixed border-collapse text-left">
                <thead>
                  <tr className="bg-[#001D39] text-white">
                    <th className="w-40 px-5 py-4 text-xs font-semibold uppercase tracking-wide">Compare</th>
                    {selected.map((item) => <th key={item.slug} className="px-5 py-4 text-sm font-semibold">{item.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {rows.filter((row) => !showDifferences || row.differs).map((row, index) => (
                    <tr key={row.label} className={row.differs ? "bg-[#f5f5f7]" : index % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
                      <th scope="row" className="align-top px-5 py-5 text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">
                        {row.label}
                        {row.differs && <span className="mt-2 block text-[10px] font-semibold normal-case tracking-normal text-[#001D39]">Different</span>}
                      </th>
                      {row.values.map((value, valueIndex) => (
                        <td key={selected[valueIndex].slug} className="align-top border-l border-black/[0.06] px-5 py-5 text-sm leading-6 text-[#4b5563]">{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {showDifferences && differenceCount === 0 && <p className="p-6 text-sm text-[#6e6e73]">No differences were found in the available profile fields.</p>}
            </div>

            <div className="mt-8 rounded-[22px] border border-black/[0.08] p-6 sm:p-7">
              <h2 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">Before you choose</h2>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-[#6e6e73] sm:grid-cols-2">
                <li>• Check whether the free plan is permanent and whether its limits fit your usage.</li>
                <li>• Compare standard renewal prices, not only temporary introductory offers.</li>
                <li>• Confirm regional availability, taxes, billing currency and payment methods.</li>
                <li>• Open the official pricing page to verify current terms before purchasing.</li>
              </ul>
            </div>
          </>
        )}
        <p className="mt-8 text-xs leading-5 text-[#6e6e73]">Comparison details reflect StackPick's published software profiles and may change. Verify current prices, plan limits and availability with each provider before making a purchase.</p>
      </div>
    </section>
  );
}
