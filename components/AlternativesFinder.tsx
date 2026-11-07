"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SoftwareLogo from "@/components/SoftwareLogo";
import type { SoftwareProfile } from "@/lib/software";

export default function AlternativesFinder({ software, initialSlug = "" }: { software: SoftwareProfile[]; initialSlug?: string }) {
  const [slug, setSlug] = useState(initialSlug);
  const selected = software.find((item) => item.slug === slug);
  const alternatives = useMemo(() => {
    if (!selected) return [];
    const curated = selected.alternatives.map((alternative) => ({
      ...alternative,
      profile: software.find((item) => item.name.toLowerCase() === alternative.name.toLowerCase()
        || alternative.href === `/software/${item.slug}`),
    }));
    const known = new Set(curated.map((item) => item.profile?.slug).filter(Boolean));
    const related = software.filter((item) => item.category === selected.category && item.slug !== selected.slug && !known.has(item.slug))
      .slice(0, Math.max(0, 4 - curated.length))
      .map((profile) => ({ name: profile.name, href: `/software/${profile.slug}`, reason: `Another option in the ${selected.category} category to compare against your requirements.`, profile }));
    return [...curated, ...related].slice(0, 6);
  }, [selected, software]);

  return (
    <div>
      <div className="max-w-2xl">
        <label htmlFor="alternatives-product" className="block text-sm font-semibold text-[#1d1d1f]">Which product are you considering?</label>
        <select id="alternatives-product" value={slug} onChange={(event) => setSlug(event.target.value)} className="mt-2 min-h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-sm text-[#1d1d1f] outline-none focus:border-[#001D39]">
          <option value="">Choose software…</option>
          {software.map((item) => <option key={item.slug} value={item.slug}>{item.name} · {item.category}</option>)}
        </select>
      </div>

      {selected ? <>
        <div className="mt-8 flex items-center gap-4 rounded-[22px] border border-black/10 bg-[#f5f5f7] p-5">
          <SoftwareLogo name={selected.name} url={selected.officialUrl} />
          <div className="min-w-0"><p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]">Starting point</p><h2 className="mt-1 text-lg font-semibold text-[#1d1d1f]">{selected.name}</h2><p className="mt-1 text-xs text-[#6e6e73]">{selected.tagline}</p></div>
          <Link href={`/software/${selected.slug}`} className="ml-auto shrink-0 text-xs font-semibold text-[#001D39] hover:underline">Profile ↗</Link>
        </div>
        <div className="mt-7 flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6e6e73]">Other options</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f]">Alternatives to consider.</h2></div><span className="text-xs text-[#6e6e73]">{alternatives.length} options</span></div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {alternatives.map((item) => <article key={item.profile?.slug || item.href} className="rounded-[22px] border border-black/10 p-5 sm:p-6">
            <div className="flex items-center gap-3">{item.profile ? <SoftwareLogo name={item.profile.name} url={item.profile.officialUrl} /> : <div className="h-11 w-11 rounded-xl bg-[#f5f5f7]" />}<div className="min-w-0"><h3 className="font-semibold text-[#1d1d1f]">{item.name}</h3><p className="mt-0.5 text-[10px] text-[#6e6e73]">{item.profile?.category || selected.category}</p></div></div>
            <p className="mt-4 text-sm leading-6 text-[#6e6e73]">{item.reason}</p>
            <div className="mt-5 flex flex-wrap gap-4"><Link href={item.href} className="text-xs font-semibold text-[#001D39] hover:underline">Explore option →</Link>{item.profile && <Link href={`/compare?tools=${selected.slug},${item.profile.slug}`} className="text-xs font-semibold text-[#001D39] hover:underline">Compare both →</Link>}</div>
          </article>)}
        </div>
        <p className="mt-6 text-xs leading-5 text-[#86868b]">Alternatives are based on StackPick's published product relationships and category. They are not ranked as universally better; compare capabilities, plan limits and your workflow before switching.</p>
      </> : <div className="mt-8 rounded-[24px] border border-black/10 bg-[#f5f5f7] p-8"><h2 className="text-xl font-semibold text-[#1d1d1f]">Start with a product.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-[#6e6e73]">Choose a tool to see editorially listed alternatives and other products in its category.</p></div>}
    </div>
  );
}
