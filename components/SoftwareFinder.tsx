"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import SoftwareLogo from "@/components/SoftwareLogo";
import { FINDER_GOALS, FINDER_PRIORITIES, recommendSoftware, type FinderBudget, type FinderGoal, type FinderTeam } from "@/lib/recommendations";
import type { SoftwareProfile } from "@/lib/software";

export default function SoftwareFinder({ software }: { software: SoftwareProfile[] }) {
  const [goal, setGoal] = useState<FinderGoal>("any");
  const [team, setTeam] = useState<FinderTeam>("small");
  const [budget, setBudget] = useState<FinderBudget>("value");
  const [priorities, setPriorities] = useState<string[]>(["simple"]);
  const results = useMemo(() => recommendSoftware(software, { goal, team, budget, priorities }), [software, goal, team, budget, priorities]);
  const toggle = (value: string) => setPriorities((current) => current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
  return <div className="grid gap-8 lg:grid-cols-[minmax(300px,0.78fr)_minmax(0,1.22fr)]">
    <section className="h-fit rounded-[28px] border border-black/10 bg-[#f5f5f7] p-5 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6e6e73]">Your requirements</p><h2 className="mt-3 text-2xl font-semibold text-[#1d1d1f]">Tell us what matters.</h2><p className="mt-2 text-sm leading-6 text-[#6e6e73]">A few practical details help narrow the catalogue to a useful shortlist.</p>
      <label htmlFor="finder-goal" className="mt-7 block text-sm font-semibold text-[#1d1d1f]">What do you need software to do?</label>
      <select id="finder-goal" value={goal} onChange={(e) => setGoal(e.target.value as FinderGoal)} className="mt-2 min-h-12 w-full rounded-xl border border-black/15 bg-white px-3 text-sm">{FINDER_GOALS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select>
      <label htmlFor="finder-team" className="mt-5 block text-sm font-semibold text-[#1d1d1f]">Who will use it?</label>
      <select id="finder-team" value={team} onChange={(e) => setTeam(e.target.value as FinderTeam)} className="mt-2 min-h-12 w-full rounded-xl border border-black/15 bg-white px-3 text-sm"><option value="solo">Just me / freelancer</option><option value="small">2–10 people</option><option value="growing">11–50 people</option><option value="large">More than 50 people</option></select>
      <label htmlFor="finder-budget" className="mt-5 block text-sm font-semibold text-[#1d1d1f]">Budget preference</label>
      <select id="finder-budget" value={budget} onChange={(e) => setBudget(e.target.value as FinderBudget)} className="mt-2 min-h-12 w-full rounded-xl border border-black/15 bg-white px-3 text-sm"><option value="free">Permanent free plan only</option><option value="value">Prefer free or lower-entry options</option><option value="flexible">Open to paid software</option></select>
      <fieldset className="mt-6"><legend className="text-sm font-semibold text-[#1d1d1f]">What else matters? <span className="font-normal text-[#86868b]">(optional)</span></legend><div className="mt-3 grid gap-2">{FINDER_PRIORITIES.map((item) => <label key={item.value} className="flex cursor-pointer items-center gap-3 rounded-xl border border-black/10 bg-white px-3 py-3 text-sm text-[#374151]"><input type="checkbox" checked={priorities.includes(item.value)} onChange={() => toggle(item.value)} className="h-4 w-4 accent-[#001D39]" />{item.label}</label>)}</div></fieldset>
      <button type="button" onClick={() => { setGoal("any"); setTeam("small"); setBudget("value"); setPriorities(["simple"]); }} className="mt-5 text-xs font-semibold text-[#001D39] hover:underline">Reset preferences</button>
    </section>
    <section aria-live="polite">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6e6e73]">Your shortlist</p><h2 className="mt-2 text-2xl font-semibold text-[#1d1d1f]">{results.length ? "Options worth exploring." : "No exact matches yet."}</h2></div><span className="text-xs text-[#6e6e73]">{results.length} of {software.length} profiles shown</span></div>
      <p className="mt-3 text-sm leading-6 text-[#6e6e73]">Results use published profile details, your workflow, priorities and plan information. A fit score is a shortlist aid, not a product quality rating.</p>
      {results.length ? <div className="mt-6 space-y-4">{results.map(({ profile, score, free, reasons, teamNote }, index) => <article key={profile.slug} className="rounded-[24px] border border-black/10 bg-white p-5 sm:p-6">
        <div className="flex items-start gap-4"><SoftwareLogo name={profile.name} url={profile.officialUrl} /><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]">#{index+1} · {profile.category}</span>{free && <span className="rounded-full bg-[#eef3f7] px-2.5 py-1 text-[10px] font-semibold text-[#001D39]">Permanent free plan</span>}</div><h3 className="mt-2 text-lg font-semibold text-[#1d1d1f]"><Link href={`/software/${profile.slug}`} className="hover:underline">{profile.name}</Link></h3><p className="mt-1 text-sm leading-6 text-[#6e6e73]">{profile.tagline}</p></div><div className="shrink-0 text-right"><p className="text-2xl font-semibold tabular-nums text-[#001D39]">{score}</p><p className="text-[10px] text-[#86868b]">fit / 100</p></div></div>
        <div className="mt-5 grid gap-4 border-t border-black/[0.07] pt-4 sm:grid-cols-2"><div><p className="text-xs font-semibold text-[#1d1d1f]">Why it appears</p><ul className="mt-2 space-y-1.5 text-xs leading-5 text-[#6e6e73]">{reasons.map((reason) => <li key={reason}>• {reason}</li>)}</ul></div><div><p className="text-xs font-semibold text-[#1d1d1f]">Check before choosing</p><p className="mt-2 text-xs leading-5 text-[#6e6e73]">{teamNote} Review current plan limits, regional availability and renewal pricing with the provider.</p></div></div>
        <div className="mt-5 flex flex-wrap gap-4"><Link href={`/software/${profile.slug}`} className="text-xs font-semibold text-[#001D39] hover:underline">Read profile →</Link><Link href={`/compare?tools=${profile.slug}`} className="text-xs font-semibold text-[#001D39] hover:underline">Add to comparison →</Link><Link href={`/alternatives?software=${profile.slug}`} className="text-xs font-semibold text-[#001D39] hover:underline">See alternatives →</Link></div>
      </article>)}</div> : <div className="mt-6 rounded-[24px] border border-black/10 bg-[#f5f5f7] p-7"><p className="text-sm leading-6 text-[#6e6e73]">Try a broader workflow or a different budget preference. Free-only results require a published permanent free plan.</p><button type="button" onClick={() => setBudget("value")} className="mt-4 text-sm font-semibold text-[#001D39] hover:underline">Include lower-entry options →</button></div>}
      <p className="mt-6 text-xs leading-5 text-[#86868b]">Scoring: workflow fit (45), selected priorities (up to 30), team-size signals (up to 15), budget preference (up to 10). Signals are inferred from profile text; missing information is not a verified capability.</p>
    </section>
  </div>;
}
