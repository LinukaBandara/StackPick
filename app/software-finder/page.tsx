"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SOFTWARE_PROFILES } from "@/lib/software";

const NEEDS = ["Any", "Sales & customers", "Finance", "Marketing", "Projects & productivity", "Operations", "Security", "Web & development", "Automation & AI"] as const;
const BUDGETS = ["Any", "Free-first", "Under $25/user/month", "$25+ / user / month"] as const;
type Need = typeof NEEDS[number];
type Budget = typeof BUDGETS[number];

const NEED_MAP: Record<string, Need> = {
  Sales: "Sales & customers", Finance: "Finance", Marketing: "Marketing",
  Productivity: "Projects & productivity", Operations: "Operations",
  Security: "Security", Infrastructure: "Web & development",
  Development: "Web & development", Automation: "Automation & AI", People: "Operations",
};

const GUIDES = [
  { title: "CRM & customer management", description: "Organize leads, client details, deals and follow-ups.", href: "/best/crm-software", need: "Sales & customers" },
  { title: "Invoicing & accounting", description: "Send invoices, track income and keep books organized.", href: "/best/invoicing-software", need: "Finance" },
  { title: "Email marketing", description: "Build lists, send campaigns and automate follow-up.", href: "/best/email-marketing-software", need: "Marketing" },
  { title: "Projects & tasks", description: "Plan work, assign tasks and keep small teams aligned.", href: "/best/project-management-software", need: "Projects & productivity" },
  { title: "Scheduling", description: "Let customers book time and reduce back-and-forth.", href: "/best/appointment-scheduling-software", need: "Operations" },
  { title: "Forms & surveys", description: "Collect leads, feedback and customer details.", href: "/best/form-builders", need: "Projects & productivity" },
  { title: "Password & account security", description: "Protect shared business accounts and team access.", href: "/best/password-managers", need: "Security" },
  { title: "Web hosting", description: "Choose hosting for a business website or web project.", href: "/best/web-hosting", need: "Web & development" },
  { title: "AI & automation", description: "Explore AI tools and connect repetitive workflows.", href: "/best/ai-tools-small-businesses", need: "Automation & AI" },
  { title: "Help desk & customer support", description: "Manage customer requests, tickets and support conversations.", href: "/best/help-desk-software", need: "Operations" },
];

export default function SoftwareFinderPage() {
  const [need, setNeed] = useState<Need>("Any");
  const [budget, setBudget] = useState<Budget>("Any");
  const [business, setBusiness] = useState("Any business");
  const [priority, setPriority] = useState("Easy to use");
  const [showAll, setShowAll] = useState(false);

  const results = useMemo(() => SOFTWARE_PROFILES.filter((profile) => {
    const mappedNeed = NEED_MAP[profile.category] ?? "Operations";
    const matchesNeed = need === "Any" || mappedNeed === need;
    const pricingText = profile.freePlan + " " + profile.pricingSummary;
    const hasPermanentFreePlan = /permanent free|free plan|free tier|free forever|free access|no time limit/i.test(pricingText) && !/no permanent free|no free plan/i.test(pricingText);
    const matchesBudget = budget === "Any" ||
      (budget === "Free-first" && hasPermanentFreePlan) ||
      (budget === "Under $25/user/month" && (hasPermanentFreePlan || /\$([0-9]|1[0-9]|2[0-4])(\.|\s|\/)/i.test(pricingText))) ||
      (budget === "$25+ / user / month" && /\$([2-9][5-9]|[3-9][0-9]|[1-9][0-9]{2,})/i.test(pricingText));
    return matchesNeed && matchesBudget;
  }).map((profile) => {
    const text = [profile.tagline, profile.summary, ...profile.bestFor, ...profile.keyFeatures].join(" ").toLowerCase();
    let score = 0;
    if (priority === "Simple setup" && /simple|straightforward|easy|visual|clear/i.test(text)) score += 2;
    if (priority === "Room to grow" && /integrat|scal|suite|automation|advanced|customiz/i.test(text)) score += 2;
    if (priority === "More free features" && /free|no-expiry|permanent/i.test(profile.freePlan + " " + profile.pricingSummary)) score += 2;
    if (business === "Freelancer" && /freelancer|solo|client|independent/i.test(text)) score += 2;
    if (business === "Small team" && /team|shared|collaborat|users/i.test(text)) score += 2;
    if (business === "Online business" && /online|website|marketing|integrat|e-commerce/i.test(text)) score += 2;
    if (business === "Local service business" && /service|appointment|customer|invoice|client/i.test(text)) score += 2;
    return { profile, score };
  }).sort((a, b) => b.score - a.score || a.profile.name.localeCompare(b.profile.name)).map((item) => item.profile), [need, budget, business, priority]);

  const filteredGuides = GUIDES.filter((guide) => need === "Any" || guide.need === need);
  const visible = showAll ? results : results.slice(0, 6);

  return (
    <section className="bg-white">
      <div className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">StackPick software finder</p>
        <h1 className="sp-display mt-4 max-w-4xl">Find software for the work you actually do.</h1>
        <p className="sp-body-large mt-6 max-w-3xl">Start with your job to be done, budget and team. The finder points you to relevant StackPick guides and product profiles—not a claim that one tool is perfect for everyone.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.75fr)]">
          <div className="rounded-[28px] border border-[#d2d2d7] bg-white p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="finder-need" className="block text-sm font-semibold text-[#1d1d1f]">What do you need help with?</label>
                <select id="finder-need" value={need} onChange={(e) => { setNeed(e.target.value as Need); setShowAll(false); }} className="mt-2 w-full rounded-xl border border-[#d2d2d7] bg-white px-3 py-3 text-sm text-[#1d1d1f] focus:border-[#001D39] focus:outline-none focus:ring-2 focus:ring-[#001D39]/15">
                  {NEEDS.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="finder-budget" className="block text-sm font-semibold text-[#1d1d1f]">Budget preference</label>
                <select id="finder-budget" value={budget} onChange={(e) => { setBudget(e.target.value as Budget); setShowAll(false); }} className="mt-2 w-full rounded-xl border border-[#d2d2d7] bg-white px-3 py-3 text-sm text-[#1d1d1f] focus:border-[#001D39] focus:outline-none focus:ring-2 focus:ring-[#001D39]/15">
                  {BUDGETS.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="finder-business" className="block text-sm font-semibold text-[#1d1d1f]">Which best describes you?</label>
                <select id="finder-business" value={business} onChange={(e) => { setBusiness(e.target.value); setShowAll(false); }} className="mt-2 w-full rounded-xl border border-[#d2d2d7] bg-white px-3 py-3 text-sm text-[#1d1d1f] focus:border-[#001D39] focus:outline-none focus:ring-2 focus:ring-[#001D39]/15">
                  {["Any business", "Freelancer", "Small team", "Online business", "Local service business"].map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="finder-priority" className="block text-sm font-semibold text-[#1d1d1f]">What matters most?</label>
                <select id="finder-priority" value={priority} onChange={(e) => { setPriority(e.target.value); setShowAll(false); }} className="mt-2 w-full rounded-xl border border-[#d2d2d7] bg-white px-3 py-3 text-sm text-[#1d1d1f] focus:border-[#001D39] focus:outline-none focus:ring-2 focus:ring-[#001D39]/15">
                  {["Easy to use", "Simple setup", "Room to grow", "More free features"].map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>
            </div>
            <button type="button" onClick={() => { setNeed("Any"); setBudget("Any"); setBusiness("Any business"); setPriority("Easy to use"); setShowAll(false); }} className="mt-6 text-sm font-semibold text-[#001D39] underline underline-offset-4">Reset preferences</button>
          </div>

          <aside className="rounded-[28px] bg-[#001D39] p-7 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">How this works</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">A shortlist, not a sales pitch.</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/80">
              <li>• Filters use current StackPick product categories and published plan notes.</li>
              <li>• Results are a starting point, not a guarantee of fit or a paid ranking.</li>
              <li>• Pricing, plan caps and regional availability can change; confirm terms with each vendor.</li>
              <li>• Affiliate relationships will be disclosed if affiliate links are introduced.</li>
            </ul>
            <Link href="/how-we-verify" className="mt-6 inline-flex text-sm font-semibold text-white underline underline-offset-4">Read our verification approach →</Link>
          </aside>
        </div>

        <div className="mt-14 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="sp-eyebrow">Your shortlist</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f]">{results.length} product {results.length === 1 ? "profile" : "profiles"} to explore</h2></div>
          <p className="max-w-xl text-sm leading-6 text-[#6e6e73]">Budget matching uses published text as a rough filter, not a verified live price calculator. Use the vendor pricing link before purchasing.</p>
        </div>

        {results.length > 0 ? <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((profile) => <article key={profile.slug} className="flex flex-col rounded-[24px] border border-[#d2d2d7] p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#001D39]">{profile.category}</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#1d1d1f]">{profile.name}</h3>
            <p className="mt-2 text-sm font-medium text-[#6e6e73]">{profile.tagline}</p>
            <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{profile.summary}</p>
            <div className="mt-4 rounded-xl bg-[#f5f5f7] p-4"><p className="text-xs font-semibold text-[#1d1d1f]">Plan note</p><p className="mt-1 text-xs leading-5 text-[#6e6e73]">{profile.freePlan}</p></div>
            <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm font-semibold text-[#001D39]">
              <Link href={"/software/" + profile.slug} className="hover:underline">Profile →</Link>
              {profile.comparisons[0] && <Link href={profile.comparisons[0].href} className="hover:underline">Compare →</Link>}
            </div>
          </article>)}
        </div> : <div className="mt-6 rounded-2xl border border-[#d2d2d7] p-8 text-sm text-[#6e6e73]">No product profile matches those filters yet. Try “Any budget” or browse a category guide below.</div>}

        {results.length > 6 && <button type="button" onClick={() => setShowAll((current) => !current)} className="mt-6 rounded-full border border-[#d2d2d7] px-5 py-3 text-sm font-semibold text-[#001D39] hover:border-[#001D39]">{showAll ? "Show fewer profiles" : "Show all " + results.length + " profiles"}</button>}

        <div className="mt-16">
          <p className="sp-eyebrow">Explore by job</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f]">Start with a practical guide.</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((guide) => <Link key={guide.href} href={guide.href} className="group rounded-[22px] border border-[#d2d2d7] p-6 transition hover:-translate-y-0.5 hover:shadow-md"><h3 className="text-lg font-semibold text-[#1d1d1f]">{guide.title}</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">{guide.description}</p><span className="mt-4 inline-flex text-sm font-semibold text-[#001D39] group-hover:underline">Explore guide →</span></Link>)}
          </div>
        </div>

        <div className="mt-14 rounded-[24px] border border-black/10 bg-[#f5f5f7] p-7 sm:p-9">
          <h2 className="text-xl font-semibold text-[#1d1d1f]">Before you sign up</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#6e6e73]">Check the exact plan, billing cycle, renewal price, seat count, data export options and cancellation terms. A free trial is not the same as a permanent free plan. Availability and payment support may vary by country.</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#001D39]"><Link href="/best/free-crm-software" className="hover:underline">Compare free CRM tools →</Link><Link href="/best/free-invoicing-software" className="hover:underline">Compare free invoicing tools →</Link><Link href="/best" className="hover:underline">Browse all comparison guides →</Link></div>
        </div>
      </div>
    </section>
  );
}
