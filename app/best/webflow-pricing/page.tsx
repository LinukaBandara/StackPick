import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webflow Pricing (2026): Site Plans vs Workspace Costs",
  description: "Understand Webflow's free Starter, Basic and Premium site plans, separate Workspace costs, ecommerce fees and what to check before publishing.",
  alternates: { canonical: "/best/webflow-pricing" },
  openGraph: {
    title: "Webflow Pricing: Site Plans vs Workspace Plans",
    description: "A practical guide to Webflow's separate site and workspace plans, annual billing and ecommerce costs.",
    url: "/best/webflow-pricing",
    type: "article",
  },
};

const sitePlans = [
  { name: "Starter", price: "$0", billing: "Free", domain: "webflow.io subdomain", limits: "2 static pages, 1 GB bandwidth, 50 form submissions", fit: "Learning, prototyping and low-stakes experiments" },
  { name: "Basic", price: "$15/month", billing: "Billed yearly", domain: "Custom domain", limits: "300 static pages, 10 GB bandwidth, unlimited form submissions", fit: "A simple production site without CMS requirements" },
  { name: "Premium", price: "$25/month", billing: "Billed yearly", domain: "Custom domain", limits: "CMS features and higher content capacity; confirm current bandwidth and CMS limits", fit: "Content-rich sites that need CMS publishing" },
];

export default function WebflowPricingPage() {
  return (
    <article className="bg-white">
      <div className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Product pricing guide · Reviewed October 17, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">Webflow pricing: remember that Site and Workspace plans are different</h1>
        <p className="sp-body-large mt-6 max-w-3xl">Webflow's pricing can look confusing because a site's hosting and publishing features are purchased through a Site plan, while collaboration and staging capabilities belong to a Workspace plan. Some projects need only a free Workspace and one paid Site plan; others may need paid collaboration features as well.</p>

        <section className="mt-8 rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#001D39]">Quick answer</p>
          <h2 className="mt-3 text-xl font-semibold text-[#1d1d1f]">Price the site and the workflow around it separately.</h2>
          <p className="mt-3 text-sm leading-6 text-[#6e6e73]">The current official pricing page lists Starter at $0, Basic at $15/month billed yearly, and Premium at $25/month billed yearly for Site plans. Workspace plans are separate, and ecommerce plans have their own prices and transaction-fee rules. These figures are USD per site before applicable taxes.</p>
          <a href="https://webflow.com/pricing" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-semibold text-[#001D39] underline underline-offset-4">Check Webflow's official pricing →</a>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">Site plans at a glance</h2>
          <p className="mt-2 text-sm leading-6 text-[#6e6e73]">This is a high-level snapshot of the current standard Site plan labels. Webflow may change plan names, limits or existing-customer migration dates. Confirm the complete feature matrix for your account and site before buying.</p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#d2d2d7]">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-[#f5f5f7] text-[#1d1d1f]"><tr>{["Site plan", "Price shown", "Publishing", "Example limits / scope", "Likely fit"].map((label) => <th key={label} className="border-b border-[#d2d2d7] px-4 py-3 font-semibold">{label}</th>)}</tr></thead>
              <tbody>{sitePlans.map((plan) => <tr key={plan.name} className="align-top"><th scope="row" className="border-b border-[#e5e5e7] px-4 py-4 font-semibold text-[#1d1d1f]">{plan.name}</th><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.price}<p className="mt-1 text-xs text-[#6e6e73]">{plan.billing}</p></td><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.domain}</td><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.limits}</td><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.fit}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-[24px] border border-[#d2d2d7] p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-[#1d1d1f]">Costs to include</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#6e6e73]">
              <li>• Site plan for every production site that needs a custom domain.</li>
              <li>• Workspace tier if you need extra staging sites, code export or team collaboration features.</li>
              <li>• Additional seats, localization, analytics or other optional add-ons.</li>
              <li>• Ecommerce plan and payment processor fees if you sell products.</li>
              <li>• Bandwidth, CMS and usage limits, plus the actual annual charge and renewal date.</li>
            </ul>
          </div>
          <div className="rounded-[24px] border border-[#d2d2d7] p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-[#1d1d1f]">Webflow may not be the best fit if…</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#6e6e73]">
              <li>• You need the lowest possible cost for a simple brochure site.</li>
              <li>• You require extensive dynamic functionality better served by a custom application.</li>
              <li>• You need to export a fully dynamic CMS-backed site and continue hosting it elsewhere; export limitations matter.</li>
              <li>• Your team needs complex workflows or compliance terms that are not included in the plan you can afford.</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">Site plan or Workspace plan?</h2>
          <p className="mt-3 text-sm leading-6 text-[#6e6e73]">A Site plan controls what an individual site can publish and use. A Workspace plan controls staging and collaboration across the account. A freelancer working on one client site may need a different setup from an agency managing multiple projects and client access. Do not add both plan prices together automatically—first verify which Workspace features your workflow actually needs.</p>
          <ul className="mt-5 list-disc space-y-2 pl-6 text-sm leading-6 text-[#001D39]">
            <li><Link href="/best/website-builders" className="underline underline-offset-4">Compare website builders</Link></li>
            <li><Link href="/best/website-builder-for-freelancers" className="underline underline-offset-4">Website builders for freelancers</Link></li>
            <li><Link href="/best/website-builder-for-small-businesses" className="underline underline-offset-4">Website builders for small businesses</Link></li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">Frequently asked questions</h2>
          <div className="mt-5 divide-y divide-[#e5e5e7] border-y border-[#e5e5e7]">
            <div className="py-5"><h3 className="font-semibold text-[#1d1d1f]">Can I publish a Webflow site for free?</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">The Starter Site plan publishes to a Webflow subdomain and has limits. A custom domain requires an appropriate paid Site plan.</p></div>
            <div className="py-5"><h3 className="font-semibold text-[#1d1d1f]">Do I need a paid Workspace?</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">Not always. Every account has a free Workspace option. Upgrade only if you need capabilities such as more staging sites, code export, advanced collaboration or other features gated to a paid Workspace tier.</p></div>
            <div className="py-5"><h3 className="font-semibold text-[#1d1d1f]">Are the listed prices monthly or annual?</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">The Basic and Premium Site plan figures shown here are monthly equivalents billed yearly. Confirm the total billed amount, tax, renewal terms and monthly-billing option at checkout.</p></div>
          </div>
        </section>

        <section className="mt-10 rounded-[24px] bg-[#f5f5f7] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[#1d1d1f]">Sources and method</h2>
          <p className="mt-3 text-sm leading-6 text-[#6e6e73]">Desk research based on Webflow's official pricing page and its 2026 plan-change documentation, not a hands-on product benchmark. Prices are USD and can vary by plan, billing term, existing-account transition and add-ons. Confirm the current live matrix before purchasing.</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#001D39]"><a href="https://webflow.com/pricing" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Official Webflow pricing →</a><a href="https://help.webflow.com/hc/en-us/articles/51059955082387-Updated-pricing-and-simplified-plans-for-May-2026" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Official 2026 pricing changes →</a></div>
          <p className="mt-5 text-xs leading-5 text-[#86868b]">Last reviewed October 17, 2026. Product recommendations are editorial; any future affiliate relationship will be disclosed.</p>
        </section>
      </div>
    </article>
  );
}
