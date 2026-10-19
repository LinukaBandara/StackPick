import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Form Builder Pricing (2026): Typeform, Jotform & Fillout",
  description: "Compare form builder prices, response limits, branding, seats and payment collection for Typeform, Jotform and Fillout.",
  alternates: { canonical: "/best/online-form-builder-pricing" },
};

const plans = [
  { name: "Fillout Free", price: "$0", billing: "Free forever", fit: "Teams needing flexible forms with conditional logic and integrations", limits: "Unlimited forms and seats, but 1,000 responses per month; branding remains.", url: "https://www.fillout.com/pricing" },
  { name: "Fillout Starter", price: "$15/mo", billing: "$180 billed annually; $19 monthly", fit: "Teams needing more question types and up to 2,000 responses monthly", limits: "Unlimited seats; check which custom branding and redirect features are included.", url: "https://www.fillout.com/pricing" },
  { name: "Fillout Pro", price: "$40/mo", billing: "$480 billed annually; $49 monthly", fit: "Teams needing 5,000 responses, custom fonts and no Fillout branding", limits: "Custom domain and advanced analytics are on Business.", url: "https://www.fillout.com/pricing" },
  { name: "Fillout Business", price: "$75/mo", billing: "$900 billed annually; $89 monthly", fit: "Organizations needing unlimited responses, custom domain and form analytics", limits: "Check any organization-level controls and data-handling requirements before rollout.", url: "https://www.fillout.com/pricing" },
  { name: "Jotform Starter", price: "$0", billing: "Free plan", fit: "Individuals testing forms, surveys and simple payment collection", limits: "5 forms, 100 monthly submissions, 100 MB storage and 500 total stored submissions.", url: "https://www.jotform.com/pricing/" },
  { name: "Jotform Bronze", price: "$34/mo", billing: "Billed annually", fit: "Small businesses needing more forms and about 1,000 monthly submissions", limits: "25 forms, 1,000 monthly submissions and 1 GB storage.", url: "https://www.jotform.com/pricing/" },
  { name: "Jotform Silver", price: "$39/mo", billing: "Billed annually", fit: "Businesses with more forms and up to 2,500 monthly submissions", limits: "50 forms, 2,500 monthly submissions and 10 GB storage.", url: "https://www.jotform.com/pricing/" },
  { name: "Jotform Gold", price: "$99/mo", billing: "Billed annually", fit: "High-volume workflows with up to 10,000 monthly submissions", limits: "100 forms, 10,000 monthly submissions and 100 GB storage.", url: "https://www.jotform.com/pricing/" },
  { name: "Typeform Basic", price: "$25/mo", billing: "$300 billed yearly; $29 monthly", fit: "Branded conversational forms and surveys for a solo user", limits: "100 responses per month; additional responses may require a higher allowance or add-on.", url: "https://www.typeform.com/pricing" },
  { name: "Typeform Plus", price: "$50/mo", billing: "$600 billed yearly; $59 monthly", fit: "Small teams needing branding removal and more collaboration", limits: "1,000 responses per month and 3 users.", url: "https://www.typeform.com/pricing" },
  { name: "Typeform Business", price: "$83/mo", billing: "$996 billed yearly; $99 monthly", fit: "Teams needing conversion analytics and more response capacity", limits: "10,000 responses per month and 5 users; verify maximum-response caps and add-on prices.", url: "https://www.typeform.com/pricing" },
];

export default function Page() {
  return (
    <main className="bg-white">
      <article className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Software pricing · Updated October 19, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">Online form builder pricing: compare response limits, seats and branding</h1>
        <p className="sp-body-large mt-6 max-w-3xl">Form builders may charge by response volume, form count, seats or feature access. A low subscription can stop being economical when you exceed submission limits or need to remove vendor branding. This comparison covers Fillout, Jotform and Typeform, with attention to monthly response allowances and the practical costs of surveys, lead capture, client intake and payment forms.</p>

        <section className="mt-10 overflow-x-auto rounded-2xl border border-[#d2d2d7]">
          <table className="w-full min-w-[850px] border-collapse text-left text-sm">
            <thead className="bg-[#f5f5f7]"><tr><th className="p-4">Plan</th><th className="p-4">Published price</th><th className="p-4">Best fit</th><th className="p-4">Limit to check</th></tr></thead>
            <tbody>{plans.map((p) => <tr key={p.name} className="border-t border-[#d2d2d7] align-top"><td className="p-4"><a className="font-semibold text-[#001D39] underline" href={p.url} target="_blank" rel="noreferrer">{p.name}</a><p className="mt-2 text-[#6e6e73]">{p.billing}</p></td><td className="p-4 whitespace-nowrap">{p.price}</td><td className="p-4">{p.fit}</td><td className="p-4">{p.limits}</td></tr>)}</tbody>
          </table>
        </section>
        <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">Published USD pricing and allowances checked October 19, 2026. Annual-billing monthly equivalents may be charged upfront. Prices, taxes, regional offers and response allowances can change; confirm the exact amount and plan limits on the official pricing pages.</p>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Calculate cost by expected responses</h2>
          <p className="mt-4 leading-relaxed text-[#424245]">Estimate the number of submissions you expect each month, including internal tests, duplicate entries and spam. A 1,000-response plan may be plenty for a small contact form but inadequate for a survey promoted to a large audience. Also check whether a plan counts partial submissions, deleted responses or submissions from every form combined.</p>
          <p className="mt-4 leading-relaxed text-[#424245]">Compare total annual cost rather than the monthly label alone. Typeform's Basic, Plus and Business tiers have different response allowances and seat counts. Jotform has form, submission and storage caps. Fillout offers unlimited forms and seats on its plans, but the response limit changes by tier. These pricing models are not directly interchangeable.</p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Which form builder should you consider?</h2>
          <div className="mt-5 space-y-5 text-[#424245]">
            <div><h3 className="font-semibold text-[#1d1d1f]">Fillout: flexible forms and team seats</h3><p className="mt-2 leading-relaxed">Fillout is worth evaluating when you want conditional logic, integrations, file uploads or payment collection without per-seat pricing. The free tier allows unlimited forms and seats but caps monthly responses. Branding removal and custom-domain capabilities are higher-tier considerations.</p></div>
            <div><h3 className="font-semibold text-[#1d1d1f]">Jotform: broad form types and submission tiers</h3><p className="mt-2 leading-relaxed">Jotform's plan ladder is explicit about forms, monthly submissions, storage and total submission retention. It may fit businesses building payment forms, signed documents or many different workflows, but check the exact caps for your plan and whether regulated-data requirements are supported in that tier.</p></div>
            <div><h3 className="font-semibold text-[#1d1d1f]">Typeform: conversational forms and surveys</h3><p className="mt-2 leading-relaxed">Typeform emphasizes a conversational respondent experience. Compare response allowance, users, branding, analytics and any add-on costs. A small response allowance can make a low entry price unsuitable for campaigns with large audiences.</p></div>
          </div>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Costs beyond the subscription</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li><strong>Payment processing:</strong> form builders may connect to Stripe, PayPal or other processors; processing fees are usually separate from the form plan.</li>
            <li><strong>Branding and domains:</strong> removing a logo, customizing a share URL or using your own domain may require a paid tier.</li>
            <li><strong>Storage and files:</strong> uploads can consume storage or trigger file-size restrictions, especially for intake forms.</li>
            <li><strong>Integrations and automation:</strong> confirm whether webhooks, CRM sync, workflow tools, email notifications and API access are included.</li>
            <li><strong>Data retention:</strong> distinguish the monthly submission allowance from how many historical submissions the account can store.</li>
            <li><strong>Privacy and compliance:</strong> check data residency, access controls, deletion, export and any required compliance add-ons before collecting sensitive information.</li>
          </ul>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Who should not pay for an upgrade?</h2>
          <p className="mt-4 leading-relaxed text-[#424245]">A simple contact form may work on a free tier if its response allowance and branding are acceptable. Avoid paying for advanced analytics if you do not use them, or for a high response tier without estimating actual volume. Conversely, do not rely on a free plan for a business-critical form until you understand its submission cap, storage limit, notification behavior and export options.</p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Before switching form providers</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li>Export historical submissions to CSV or another supported format and preserve file attachments separately.</li>
            <li>Document field names, hidden fields, conditional logic, validation, calculations and notification rules.</li>
            <li>Reconnect CRM, spreadsheets, payment processors, webhooks and email notifications.</li>
            <li>Test mobile layouts, confirmation messages, spam protection, payment receipts and failed submissions.</li>
            <li>Update embedded forms and links, then verify that old URLs and existing records remain accessible before cancelling.</li>
          </ol>
        </section>

        <section className="mt-12 rounded-2xl bg-[#f5f5f7] p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Related StackPick guides</h2>
          <ul className="mt-4 space-y-2 text-[#001D39]">
            <li><Link className="underline" href="/best/form-builders">Best form builder guide</Link></li>
            <li><Link className="underline" href="/best/appointment-scheduling-software"href="/best/appointment-scheduling-software">Appointment scheduling software</Link></li>
            <li><Link className="underline" href="/best/crm-software-pricing">CRM software pricing</Link></li>
          </ul>
        </section>
        <p className="mt-8 text-xs leading-relaxed text-[#6e6e73]">Editorial comparison of published USD prices checked October 19, 2026. Plan limits and prices change; confirm current allowances and the final checkout amount on each official vendor pricing page.</p>
      </article>
    </main>
  );
}
