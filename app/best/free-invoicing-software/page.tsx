import type { Metadata } from "next";
import Link from "next/link";
import ComparisonArticle from "@/components/ComparisonArticle";
import SoftwareLogo from "@/components/SoftwareLogo";

export const metadata: Metadata = {
  title: "Best Free Invoicing Software in 2026",
  description:
    "Compare free invoicing software for US freelancers and small businesses. Client limits, payment processing fees, recurring billing, exports and upgrade gates.",
  alternates: { canonical: "/best/free-invoicing-software" },
};

const INVOICE_PROFILES = [
  { name: "Wave", url: "https://www.waveapps.com/", href: "/software/wave", note: "Free invoicing plus basic bookkeeping for eligible US businesses" },
  { name: "Zoho Invoice", url: "https://www.zoho.com/us/invoice/", href: "https://www.zoho.com/us/invoice/", note: "Dedicated free invoicing workflow for freelancers" },
  { name: "Invoice Ninja", url: "https://invoiceninja.com/", href: "https://invoiceninja.com/", note: "Flexible invoicing with free and self-hosted options" },
  { name: "Square Invoices", url: "https://squareup.com/us/en/invoices", href: "https://squareup.com/us/en/invoices", note: "Unlimited free invoices tied to Square payments" },
];

export default function FreeInvoicingSoftwarePage() {
  return (
    <ComparisonArticle
      title="Best Free Invoicing Software"
      slug="free-invoicing-software"
      intro="For US freelancers and small businesses, free invoicing software is useful only if the free workflow covers the invoices you actually send. Compare invoice and client limits, recurring billing, reminders, payment collection, exports and country eligibility. This page separates a genuinely usable free workflow from tools that waive the monthly fee but still charge for payment processing or gate important features."
      pricingNote="US-facing free-plan details checked November 7, 2026. Zoho Invoice's US plan lists 2 users, 3 projects and 500 invoices/year; Invoice Ninja Free allows 5 clients with unlimited invoices and explicitly requires no card; Wave is available to businesses in the US and Canada; Square's cited Free invoicing plan has no monthly subscription but payment-processing fees apply. These are not global offers. Verify regional eligibility, processor fees, tax handling, exports and local terms before moving live records. Sources: https://www.zoho.com/us/invoice/pricing/; https://invoiceninja.com/pricing-plans/; https://support.waveapps.com/hc/en-us/articles/32449161224852-Create-a-Wave-account; https://squareup.com/us/en/invoices/pricing."
      tools={[
        {
          name: "Zoho Invoice",
          bestFor: "Freelancers who mainly need invoices, clients, recurring billing and payment records",
          freeOption:
            "Zoho Invoice's US Free plan supports up to 2 users, 3 projects and 500 invoices per year, with estimates, recurring invoices, reminders and expense tracking. Payment-gateway charges are separate. This is a US-edition reference; confirm the plan and limits for your country.",
          tradeoff:
            "Designed for invoicing rather than being a complete replacement for every accounting or CRM workflow. Available features and limits can differ by country, so check the US terms carefully.",
          url: "https://www.zoho.com/us/invoice/pricing/",
        },
        {
          name: "Wave",
          bestFor: "US small businesses that want invoicing plus basic bookkeeping on a free plan",
          freeOption:
            "Wave Starter has no monthly subscription fee for eligible businesses in the US and Canada and includes invoicing plus basic accounting. Online payment processing and optional add-ons can still cost extra. Do not assume Wave account availability outside those two countries.",
          tradeoff:
            "Useful when you also want simple bookkeeping. Wave’s service availability is region-specific. The free plan does not include every Pro workflow feature.",
          url: "https://support.waveapps.com/hc/en-us/articles/208621296-Is-Wave-free",
        },
        {
          name: "Invoice Ninja",
          bestFor: "Users who value flexible invoice workflows, control or self-hosting options",
          freeOption:
            "Invoice Ninja Free is $0 forever, requires no credit card, and includes up to 5 clients with unlimited invoices. The current pricing page lists Ninja Pro at US$14/month on monthly billing (or US$140/year); prices and payment options may vary by region.",
          tradeoff:
            "Flexibility can require more setup than a freelancer who only needs to send a few simple invoices. The hosted free plan is typically capped on clients.",
          url: "https://invoiceninja.com/",
        },
        {
          name: "Square Invoices",
          bestFor: "US businesses that want to create invoices and collect payments through Square",
          freeOption:
            "Square Invoices Free has no monthly subscription fee in the US; payment processing fees apply when clients pay online. Square's invoicing and merchant services are country-specific, so verify business eligibility and current processing rates before choosing it.",
          tradeoff:
            "Most useful when Square’s payment methods and merchant services fit your business. Eligibility and payment features are region-dependent. Advanced features may require a paid plan.",
          url: "https://squareup.com/us/en/invoices/pricing",
        },
      ]}
      bottomLine="For a dedicated free invoicing workflow, start by checking Zoho Invoice’s current free terms. US businesses that also want basic bookkeeping can evaluate Wave. Square suits businesses that want invoices tied to its payment system. Invoice Ninja is worth considering if flexibility or self-hosting matters. Always compare the full cost of collecting payment — not just the monthly software fee — and test export before migrating live client data."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">Free-plan reality</p>
          <h2 className="sp-title mt-4 max-w-4xl">
            The invoice may be free. The transaction usually is not.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Before calling a tool free, separate the cost of creating an invoice from the cost of collecting money. Also check invoice limits, recurring billing, reminders, branding, client portals, exports and regional payment support.
          </p>

          <div className="mt-10 overflow-x-auto rounded-[28px] border border-black/10 bg-white">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="p-5 font-semibold">What to check</th>
                  <th className="p-5 font-semibold">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/10">
                  <td className="p-5 font-medium">Invoice & client limits</td>
                  <td className="p-5 text-[#6e6e73]">Some free plans cap monthly invoices or active clients.</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="p-5 font-medium">Payment processing fees</td>
                  <td className="p-5 text-[#6e6e73]">Card and bank fees are separate from the software subscription.</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="p-5 font-medium">Recurring billing & reminders</td>
                  <td className="p-5 text-[#6e6e73]">Often gated or limited on free tiers.</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="p-5 font-medium">Regional eligibility</td>
                  <td className="p-5 text-[#6e6e73]">Some free plans are US-only or restricted by country.</td>
                </tr>
                <tr>
                  <td className="p-5 font-medium">Export & data ownership</td>
                  <td className="p-5 text-[#6e6e73]">Confirm you can leave with your invoice history intact.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight">
            A five-minute invoice test
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Create one realistic invoice instead of judging a product from its marketing page. Add a line item, tax or discount if relevant, payment instructions and a client note. Preview it on a phone and inspect the payment flow. This exposes editing speed, professional output, required fields and free-tier limits that feature lists can hide.
          </p>

          <div className="mt-10 rounded-[24px] border border-black/10 bg-[#f5f5f7] p-6 sm:p-8">
            <p className="sp-eyebrow">Product profiles</p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-[#1d1d1f]">See the tools before you choose.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6e6e73]">
              Open a dedicated profile for plan details, strengths, trade-offs and official pricing.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {INVOICE_PROFILES.map((profile) => (
                <Link
                  key={profile.name}
                  href={profile.href}
                  className="group rounded-2xl border border-black/10 bg-white p-4 transition hover:border-[#001D39]/35 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <SoftwareLogo name={profile.name} url={profile.url} size="small" />
                    <span className="text-sm font-semibold text-[#1d1d1f]">{profile.name}</span>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-[#6e6e73]">{profile.note}</p>
                  <span className="mt-4 inline-flex text-xs font-semibold text-[#001D39] group-hover:underline">
                    View profile →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight">
            Official pricing and plan sources
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            We compared published provider information in late October 2026. This is a desk-based comparison, not a claim that every feature was tested in a live paid account. Check the latest plan terms before making a business decision.
          </p>
          <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li>
              <a className="underline underline-offset-4" href="https://www.zoho.com/us/invoice/pricing/" target="_blank" rel="noreferrer">Zoho Invoice US pricing</a> — free invoicing features and country-specific terms.
            </li>
            <li>
              <a className="underline underline-offset-4" href="https://support.waveapps.com/hc/en-us/articles/208621296-Is-Wave-free" target="_blank" rel="noreferrer">Wave’s official free-plan explanation</a> — Starter features and paid services.
            </li>
            <li>
              <a className="underline underline-offset-4" href="https://invoiceninja.com/" target="_blank" rel="noreferrer">Invoice Ninja</a> — current product and plan information.
            </li>
            <li>
              <a className="underline underline-offset-4" href="https://squareup.com/us/en/invoices/pricing" target="_blank" rel="noreferrer">Square Invoices pricing</a> — free plan and payment processing fees.
            </li>
          </ul>
        </div>
      </section>
    </ComparisonArticle>
  );
}
