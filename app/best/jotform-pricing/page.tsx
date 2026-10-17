import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jotform Pricing and Free Plan Limits (2026)",
  description: "Understand Jotform's Starter free plan, paid tiers, submission limits, branding and the checks to make before upgrading.",
  alternates: { canonical: "/best/jotform-pricing" },
  openGraph: {
    title: "Jotform Pricing and Free Plan Limits",
    description: "A practical guide to Jotform plan limits, pricing caveats and when a small business may need to upgrade.",
    url: "/best/jotform-pricing",
    type: "article",
  },
};

const PLANS = [
  { name: "Starter", price: "$0", basis: "Free", forms: "5 active forms", submissions: "100 monthly submissions", storage: "100 MB upload space", fit: "Testing forms or collecting a small volume of enquiries", caveat: "Jotform branding remains; submission and storage caps are shared across the account." },
  { name: "Bronze", price: "$34/mo", basis: "Displayed with annual billing", forms: "25 active forms", submissions: "1,000 monthly submissions", storage: "1 GB upload space", fit: "A solo operator whose form volume has outgrown Starter", caveat: "The listed price is tied to annual billing; check monthly billing and renewal terms before checkout." },
  { name: "Silver", price: "$39/mo", basis: "Displayed with annual billing", forms: "50 active forms", submissions: "2,500 monthly submissions", storage: "10 GB upload space", fit: "Businesses running more forms or collecting more responses", caveat: "Compare the incremental submission capacity with the cost of the next tier." },
  { name: "Gold", price: "$99/mo", basis: "Displayed with annual billing", forms: "100 active forms", submissions: "10,000 monthly submissions", storage: "100 GB upload space", fit: "Higher-volume collection and workflows that may require HIPAA-enabled features", caveat: "Confirm the specific compliance features and requirements directly with Jotform." },
];

export default function JotformPricingPage() {
  return (
    <article className="bg-white">
      <div className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Pricing guide · Updated October 17, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">Jotform pricing: what the free plan includes and when to upgrade</h1>
        <p className="sp-body-large mt-6 max-w-3xl">Jotform can handle lead forms, registrations, surveys, payments and operational data collection. The plan decision is less about the number of features and more about your monthly submission volume, active form count, storage, branding and whether you need a team or compliance-specific setup.</p>

        <div className="mt-8 rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#001D39]">Quick answer</p>
          <h2 className="mt-3 text-xl font-semibold text-[#1d1d1f]">Starter is useful for small-volume forms—not unlimited lead capture.</h2>
          <p className="mt-3 text-sm leading-6 text-[#6e6e73]">Jotform's published Starter limits include 5 active forms and 100 monthly submissions. If a campaign can exceed that cap, estimate response volume before sending traffic to the form; hitting a limit can interrupt collection.</p>
          <a href="https://www.jotform.com/pricing/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-semibold text-[#001D39] underline underline-offset-4">Check Jotform's official pricing page →</a>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">Plan comparison</h2>
          <p className="mt-2 text-sm leading-6 text-[#6e6e73]">The paid prices below were displayed on Jotform's official pricing experience with annual billing selected. Promotions, billing currency, account type and plan details can change. Verify the live checkout price before buying.</p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#d2d2d7]">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-[#f5f5f7] text-[#1d1d1f]"><tr>{["Plan", "Displayed price", "Forms", "Monthly submissions", "Upload storage", "Likely fit"].map((label) => <th key={label} className="border-b border-[#d2d2d7] px-4 py-3 font-semibold">{label}</th>)}</tr></thead>
              <tbody>{PLANS.map((plan) => <tr key={plan.name} className="align-top"><th scope="row" className="border-b border-[#e5e5e7] px-4 py-4 font-semibold text-[#1d1d1f]">{plan.name}</th><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.price}<p className="mt-1 text-xs text-[#6e6e73]">{plan.basis}</p></td><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.forms}</td><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.submissions}</td><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.storage}</td><td className="border-b border-[#e5e5e7] px-4 py-4">{plan.fit}</td></tr>)}</tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <section className="rounded-[24px] border border-[#d2d2d7] p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-[#1d1d1f]">Count these limits before you pay</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#6e6e73]">
              <li>• Monthly submissions across your forms, not just per form.</li>
              <li>• Active form count and total submission storage.</li>
              <li>• Monthly form views and file-upload storage.</li>
              <li>• Payment submissions and signed documents if you use those features.</li>
              <li>• Branding, number of users and any compliance requirements.</li>
            </ul>
          </section>
          <section className="rounded-[24px] border border-[#d2d2d7] p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-[#1d1d1f]">When Jotform may not be the right fit</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#6e6e73]">
              <li>• You only need a basic internal survey and already use Google Workspace.</li>
              <li>• Your forms receive far more responses than the plan allows and the upgrade cost no longer makes sense.</li>
              <li>• You need several collaborators on a plan that is limited to one user.</li>
              <li>• You need to meet a specific compliance requirement but have not verified the exact plan, settings and contract terms.</li>
            </ul>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">Frequently asked questions</h2>
          <div className="mt-5 divide-y divide-[#e5e5e7] border-y border-[#e5e5e7]">
            <div className="py-5"><h3 className="font-semibold text-[#1d1d1f]">Does Jotform have a free plan?</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">Yes. The Starter plan is free and includes a limited number of forms, monthly submissions, storage and other usage caps. It is not an unlimited plan, and Jotform branding remains on the free tier.</p></div>
            <div className="py-5"><h3 className="font-semibold text-[#1d1d1f]">Is the paid price shown monthly or annually?</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">The listed Bronze, Silver and Gold amounts above were displayed as monthly equivalents with annual billing. Jotform offers monthly and yearly subscription periods; compare the actual charge today and the renewal amount before checking out.</p></div>
            <div className="py-5"><h3 className="font-semibold text-[#1d1d1f]">What happens if I reach my submission limit?</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">Jotform says usage limits can trigger notifications and an upgrade prompt. Its documentation also warns that exceeding total submission storage can cause the oldest responses to be removed to make room. Export and retention practices should be planned before a form becomes business-critical.</p></div>
            <div className="py-5"><h3 className="font-semibold text-[#1d1d1f]">What should I compare it with?</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">Start with the workflow: Google Forms for basic collection, Typeform for a conversational form experience, and Jotform when you need a broader set of form and workflow capabilities. See our <Link href="/best/form-builders" className="font-semibold text-[#001D39] underline">form-builder comparison</Link>.</p></div>
          </div>
        </section>

        <div className="mt-10 rounded-[24px] bg-[#f5f5f7] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[#1d1d1f]">Official sources and review method</h2>
          <p className="mt-3 text-sm leading-6 text-[#6e6e73]">This is desk research based on Jotform's public pricing and support information, not a hands-on benchmark. Prices and limits can change; verify your account's live pricing page and plan selector before making a purchase.</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#001D39]"><a href="https://www.jotform.com/pricing/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Official pricing →</a><a href="https://www.jotform.com/answers/4068080-pricing-and-plans" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Official support answer on plan limits →</a><Link href="/how-we-verify" className="underline underline-offset-4">How StackPick verifies facts →</Link></div>
        </div>
      </div>
    </article>
  );
}
