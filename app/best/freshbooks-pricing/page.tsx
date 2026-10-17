import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FreshBooks Pricing (2026): Plans, Client Limits and Renewal Cost",
  description: "Compare FreshBooks Lite, Plus and Premium by billable-client caps, add-ons, annual billing and the costs freelancers should check before upgrading.",
  alternates: { canonical: "/best/freshbooks-pricing" },
  openGraph: {
    title: "FreshBooks Pricing: Client Limits and Upgrade Decisions",
    description: "Understand FreshBooks plan tiers, billable-client limits, add-ons and promotional pricing caveats.",
    url: "/best/freshbooks-pricing",
    type: "article",
  },
};

const plans = [
  { name: "Lite", standard: "$23/month", clients: "5 billable clients", fit: "Freelancers with a small active client list", watch: "Active and archived clients count toward the plan limit; extra team members and Advanced Payments cost more." },
  { name: "Plus", standard: "$43/month", clients: "50 billable clients", fit: "Independent professionals with a larger client roster", watch: "Estimate the number of clients you will retain, including archived records, before choosing this tier." },
  { name: "Premium", standard: "$70/month", clients: "Unlimited billable clients", fit: "Businesses that need a larger client list", watch: "Unlimited clients does not mean every feature or team seat is included; check add-ons and current plan details." },
];

export default function FreshBooksPricingPage() {
  return (
    <article className="bg-white">
      <div className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Product pricing guide · Reviewed October 17, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">FreshBooks pricing: the client limit can matter more than the headline price</h1>
        <p className="sp-body-large mt-6 max-w-3xl">FreshBooks combines invoicing with expense tracking, estimates and accounting workflows for freelancers and service businesses. Before choosing a plan, estimate your billable-client count and the add-ons your day-to-day process requires. A promotional first-month price is not the same as your ongoing subscription cost.</p>

        <section className="mt-8 rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#001D39]">Quick answer</p>
          <h2 className="mt-3 text-xl font-semibold text-[#1d1d1f]">Choose by client count and workflow—not by a temporary discount.</h2>
          <p className="mt-3 text-sm leading-6 text-[#6e6e73]">FreshBooks' US pricing information lists Lite at $23/month for 5 billable clients, Plus at $43/month for 50, and Premium at $70/month for unlimited clients at standard monthly list prices. The vendor may display promotions separately. Annual billing is discounted, and actual offers, taxes and renewal terms should be confirmed at checkout.</p>
          <a href="https://www.freshbooks.com/pricing" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-semibold text-[#001D39] underline underline-offset-4">Check FreshBooks official pricing →</a>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">US standard-price snapshot</h2>
          <p className="mt-2 text-sm leading-6 text-[#6e6e73]">The table uses standard monthly list prices, not the temporary introductory offer displayed on the vendor site when reviewed. FreshBooks publishes different prices by currency and region, so these figures are not universal outside the US pricing context.</p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#d2d2d7]">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-[#f5f5f7] text-[#1d1d1f]"><tr>{["Plan", "Standard monthly list price", "Client limit", "Potential fit", "Important caveat"].map((label) => <th key={label} className="border-b border-[#d2d2d7] px-4 py-3 font-semibold">{label}</th>)}</tr></thead>
              <tbody>{plans.map((plan) => <tr key={plan.name} className="align-top"><th scope="row" className="border-b border-[#e5e5e7] px-4 py-4 font-semibold text-[#1d1d1f]">{plan.name}</th><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.standard}</td><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.clients}</td><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.fit}</td><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.watch}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-[24px] border border-[#d2d2d7] p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-[#1d1d1f]">Include these costs</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#6e6e73]">
              <li>• Team-member seats, currently listed as an additional monthly cost per user.</li>
              <li>• Advanced Payments and any payment-processing fees that apply to your setup.</li>
              <li>• Payroll or other optional services if your workflow needs them.</li>
              <li>• The standard renewal price after any introductory promotion ends.</li>
              <li>• Taxes, currency conversion and the correct country-specific plan.</li>
            </ul>
          </div>
          <div className="rounded-[24px] border border-[#d2d2d7] p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-[#1d1d1f]">Who may prefer another tool?</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#6e6e73]">
              <li>• Someone who only needs occasional invoices and no wider accounting workflow.</li>
              <li>• A business with a growing client list that repeatedly outgrows entry tiers.</li>
              <li>• A company whose local tax, bank-feed or payment needs are not supported.</li>
              <li>• A team that needs deeper inventory, accounting or enterprise controls.</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">How to decide if the upgrade is worth it</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li>Count billable clients and include archived clients, since they may still count against the plan cap.</li>
            <li>List the tasks you perform every month: estimates, recurring invoices, time tracking, expense capture and reports.</li>
            <li>Check whether collaborators need their own paid seats and whether payment features require an add-on.</li>
            <li>Compare the full recurring price with alternatives using the same client count and feature requirements.</li>
            <li>Export a sample of your records and verify the migration path before moving business-critical data.</li>
          </ol>
          <ul className="mt-5 list-disc space-y-2 pl-6 text-sm leading-6 text-[#001D39]">
            <li><Link href="/best/invoicing-software" className="underline underline-offset-4">Compare invoicing software</Link></li>
            <li><Link href="/best/quickbooks-vs-freshbooks" className="underline underline-offset-4">QuickBooks vs FreshBooks</Link></li>
            <li><Link href="/best/freshbooks-vs-wave" className="underline underline-offset-4">FreshBooks vs Wave</Link></li>
            <li><Link href="/best/freshbooks-alternatives" className="underline underline-offset-4">FreshBooks alternatives</Link></li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">Frequently asked questions</h2>
          <div className="mt-5 divide-y divide-[#e5e5e7] border-y border-[#e5e5e7]">
            <div className="py-5"><h3 className="font-semibold text-[#1d1d1f]">Does FreshBooks have a free plan?</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">FreshBooks advertises a free trial rather than a permanent $0 plan on its standard pricing page. Check the current trial length, eligibility and what happens when it ends before entering business records.</p></div>
            <div className="py-5"><h3 className="font-semibold text-[#1d1d1f]">Do archived clients count toward the limit?</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">FreshBooks' published plan guidance states that active and archived clients count toward the billable-client limit. Confirm the current rule in the official help documentation before selecting a tier.</p></div>
            <div className="py-5"><h3 className="font-semibold text-[#1d1d1f]">Why is the price on the website lower than the table?</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">The vendor may display a time-limited introductory offer alongside the regular list price. Compare the promotion's duration, the renewal amount and annual-billing total before buying.</p></div>
          </div>
        </section>

        <section className="mt-10 rounded-[24px] bg-[#f5f5f7] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[#1d1d1f]">Sources and method</h2>
          <p className="mt-3 text-sm leading-6 text-[#6e6e73]">Desk research based on FreshBooks' public pricing and 2026 price-change FAQ; this is not a hands-on product benchmark. Pricing differs by currency and can change. Confirm the current regional price, trial terms, client caps, add-ons and renewal amount before purchase.</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#001D39]"><a href="https://www.freshbooks.com/pricing" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Official FreshBooks pricing →</a><a href="https://www.freshbooks.com/2026-faq-price-change" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Official 2026 price-change FAQ →</a></div>
          <p className="mt-5 text-xs leading-5 text-[#86868b]">Last reviewed October 17, 2026. Product recommendations are editorial; any future affiliate relationship will be disclosed.</p>
        </section>
      </div>
    </article>
  );
}
