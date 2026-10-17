import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Systeme.io Pricing: Free Plan, Limits and Paid Tiers (2026)",
  description: "Compare Systeme.io's free, Startup, Webinar and Unlimited plans, including contact, funnel and automation limits and monthly versus annual billing.",
  alternates: { canonical: "/best/systeme-io-pricing" },
  openGraph: {
    title: "Systeme.io Pricing: Free Plan and Limits",
    description: "A practical guide to Systeme.io pricing, plan caps, billing options and when an all-in-one marketing platform fits.",
    url: "/best/systeme-io-pricing",
    type: "article",
  },
};

const PLANS = [
  { name: "Free", monthly: "$0/month", annual: "$0/month", contacts: "2,000", funnels: "3", rules: "1 automation rule", fit: "Testing a simple funnel, email list and digital-product workflow", caveat: "Limited funnels, automation, campaigns and other features." },
  { name: "Startup", monthly: "$27/month", annual: "Official annual selector has displayed a lower monthly equivalent; confirm current checkout", contacts: "5,000", funnels: "10", rules: "10 automation rules", fit: "A small business that has outgrown the free plan's limits", caveat: "Check annual commitment, the exact annual price and any promotion before paying." },
  { name: "Webinar", monthly: "$47/month", annual: "Official annual selector has displayed a lower monthly equivalent; confirm current checkout", contacts: "10,000", funnels: "50", rules: "100 automation rules", fit: "A business that needs more capacity and evergreen webinar functionality", caveat: "Only pay for the webinar and automation capacity you will actually use." },
  { name: "Unlimited", monthly: "$97/month", annual: "Official annual selector has displayed a lower monthly equivalent; confirm current checkout", contacts: "Unlimited", funnels: "Unlimited", rules: "Unlimited", fit: "Larger contact lists and businesses that need the broadest included capacity", caveat: "Confirm any team, account, migration or support requirements against the current plan details." },
];

export default function SystemePricingPage() {
  return (
    <article className="bg-white">
      <div className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Pricing guide · Updated October 17, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">Systeme.io pricing: is the free plan enough for your business?</h1>
        <p className="sp-body-large mt-6 max-w-3xl">Systeme.io combines sales funnels, email marketing, a website and blog builder, online courses and affiliate-management features in one platform. That bundle can reduce the number of tools a new creator needs—but it is only good value if the included workflows meet your needs.</p>

        <div className="mt-8 rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#001D39]">Quick answer</p>
          <h2 className="mt-3 text-xl font-semibold text-[#1d1d1f]">Start with Free if your contact list and funnel count fit its limits.</h2>
          <p className="mt-3 text-sm leading-6 text-[#6e6e73]">The official pricing information lists a free tier with up to 2,000 contacts, three sales funnels and one automation rule. It also advertises unlimited email sends. The practical upgrade trigger is usually a limit you actually hit—such as more funnels, contacts, campaigns or automation—not a feature list you may never use.</p>
          <a href="https://systeme.io/pricing" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-semibold text-[#001D39] underline underline-offset-4">Check Systeme.io's official pricing →</a>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">Plans at a glance</h2>
          <p className="mt-2 text-sm leading-6 text-[#6e6e73]">Monthly prices below are those displayed on the vendor's monthly pricing selector when checked. The annual selector may show lower monthly equivalents and promotions; because billing offers can vary, we do not present a single annual figure as universal. Confirm the amount charged, billing period and renewal terms directly with the vendor.</p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#d2d2d7]">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <thead className="bg-[#f5f5f7] text-[#1d1d1f]"><tr>{["Plan", "Monthly price shown", "Contact limit", "Sales funnels", "Automation rules", "Likely fit"].map((label) => <th key={label} className="border-b border-[#d2d2d7] px-4 py-3 font-semibold">{label}</th>)}</tr></thead>
              <tbody>{PLANS.map((plan) => <tr key={plan.name} className="align-top"><th scope="row" className="border-b border-[#e5e5e7] px-4 py-4 font-semibold text-[#1d1d1f]">{plan.name}</th><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.monthly}<p className="mt-1 text-xs leading-5 text-[#6e6e73]">{plan.annual}</p></td><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.contacts}</td><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.funnels}</td><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.rules}</td><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.fit}</td></tr>)}</tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <section className="rounded-[24px] border border-[#d2d2d7] p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-[#1d1d1f]">What makes the all-in-one model useful?</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#6e6e73]">
              <li>• Build landing pages and sales funnels alongside email follow-up.</li>
              <li>• Keep contact records, campaigns and basic automations in one workspace.</li>
              <li>• Sell courses or digital products without assembling a large stack first.</li>
              <li>• Manage an affiliate program for your own products using included platform features.</li>
            </ul>
          </section>
          <section className="rounded-[24px] border border-[#d2d2d7] p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-[#1d1d1f]">When to look elsewhere</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#6e6e73]">
              <li>• You already have a well-integrated website, email and course stack.</li>
              <li>• Your team needs deep automation, reporting or integrations that the plan does not include.</li>
              <li>• You need advanced design control or a specialized learning platform.</li>
              <li>• You cannot confirm that your payment processor, country, tax setup and checkout flow support your business.</li>
            </ul>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">Frequently asked questions</h2>
          <div className="mt-5 divide-y divide-[#e5e5e7] border-y border-[#e5e5e7]">
            <div className="py-5"><h3 className="font-semibold text-[#1d1d1f]">Does Systeme.io have a free plan?</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">Yes. The official pricing page lists a $0 plan with a 2,000-contact cap and three funnels, plus limits on automation and other features. Confirm the live plan matrix before building a business-critical workflow.</p></div>
            <div className="py-5"><h3 className="font-semibold text-[#1d1d1f]">Why do annual prices look different?</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">The vendor offers monthly and annual billing selectors, and annual billing or promotions can display a lower monthly equivalent. Compare the total upfront charge, contract period and renewal amount—not just the monthly-equivalent headline.</p></div>
            <div className="py-5"><h3 className="font-semibold text-[#1d1d1f]">Is Systeme.io a replacement for a dedicated email platform?</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">It can cover basic campaigns and funnel follow-up in an all-in-one setup. Businesses with complex segmentation, reporting, deliverability controls or mature integrations should test their actual workflows before migrating from a dedicated email tool. See our <Link href="/best/email-marketing-software" className="font-semibold text-[#001D39] underline">email marketing comparison</Link>.</p></div>
            <div className="py-5"><h3 className="font-semibold text-[#1d1d1f]">Does it have an affiliate program?</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">Systeme.io publishes an affiliate program agreement and affiliate-program information. That is separate from the product's built-in feature for running an affiliate program for your own products. Anyone considering either should review the applicable current terms.</p></div>
          </div>
        </section>

        <div className="mt-10 rounded-[24px] bg-[#f5f5f7] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[#1d1d1f]">Official sources and review method</h2>
          <p className="mt-3 text-sm leading-6 text-[#6e6e73]">This is desk research from Systeme.io's public pricing page and affiliate agreement, not a hands-on benchmark. Prices and plan limits can change and may vary by billing selector or promotion. Confirm your exact plan before purchasing or moving an existing contact list.</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#001D39]"><a href="https://systeme.io/pricing" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Official pricing →</a><a href="https://systeme.io/affiliate-agreement" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Official affiliate agreement →</a><Link href="/how-we-verify" className="underline underline-offset-4">How StackPick verifies facts →</Link></div>
        </div>
      </div>
    </article>
  );
}
