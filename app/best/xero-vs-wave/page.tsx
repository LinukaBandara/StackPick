import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Xero vs Wave (2026): Paid Cloud Accounting vs Free Invoicing",
  description: "Compare Xero and Wave for small businesses and freelancers: double-entry bookkeeping, invoice caps, bank reconciliation, and total cost of ownership.",
  alternates: { canonical: "/best/xero-vs-wave" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Xero vs Wave"
      slug="xero-vs-wave"
      intro="For self-employed professionals, freelancers, and small business owners, choosing between Xero and Wave comes down to accounting rigor versus cost. Wave offers an accessible, low-friction invoicing and bookkeeping platform with a free tier. Xero provides true double-entry bookkeeping, unlimited collaborators, and advanced reconciliation built for scaling businesses and professional CPAs."
      pricingNote="Pricing verified for 2026. Wave offers a free Starter tier (pay-as-you-go for payment processing) and a Pro plan at $16/month (or $170/year) that unlocks automatic bank feeds and unlimited receipt scanning. Xero starts at $27/month for its Early plan (capped at 20 invoices and 5 bills), with Growing at $59/month and Established at $97/month."
      tools={[
        {
          name: "Xero",
          bestFor: "Growing businesses, agencies, and e-commerce companies that require robust double-entry bookkeeping, multi-user accountant collaboration, and third-party app integrations",
          freeOption: "30-day free trial; no permanent free plan. US Early tier starts at $27/month; Growing is $59/month.",
          tradeoff: "Strict caps on the Early plan (20 invoices/5 bills per month) require most active businesses to upgrade to the $59/month Growing tier.",
          url: "https://www.xero.com/pricing-plans/",
        },
        {
          name: "Wave",
          bestFor: "Freelancers, independent consultants, and solo service providers who want free, straightforward invoicing and simple expense tracking without complex accounting overhead",
          freeOption: "Free Starter plan covers unlimited invoicing, manual bookkeeping, and credit card/bank payment processing (standard transaction fees apply).",
          tradeoff: "Lacks formal inventory management, audit trails, and multi-currency exchange rate adjustments. Automated bank sync requires the $16/month Pro plan.",
          url: "https://www.waveapps.com/pricing",
        },
      ]}
      bottomLine="Choose Wave if you are a solo freelancer or service provider whose primary needs are sending clean client invoices, accepting online card payments, and tracking basic tax write-offs without paying $300-$700 annually in software subscriptions. Choose Xero if you have employees, hold inventory, work closely with an external bookkeeper, or need automated multi-currency accounting."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">Bookkeeping depth</p>
          <h2 className="sp-title mt-4 max-w-4xl">Simplicity vs. Full Financial Controls</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            While both tools allow you to send an invoice and log an expense, their underlying engines differ significantly. Wave operates on a simplified general ledger suitable for cash-basis business owners who manage their own books. Xero is an enterprise-grade double-entry accounting engine with formal audit trails, fixed asset tracking, purchase order workflows, and over 1,000 app integrations.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Bank reconciliation</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Xero's rule-based bank matching learns your habits and reconciles dozens of transactions in seconds. Wave relies on simpler manual categorization.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Accountant collaboration</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Every Xero plan allows inviting unlimited accounting advisors and staff without per-user seat fees. Wave allows basic guest collaborators.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Total annual cost</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Wave is $0 to $192/year. Xero ranges from $324 to $1,164+/year depending on invoice volume and multi-currency requirements.
              </p>
            </div>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Which one fits your business?</h3>
          <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="border-b border-black/10 p-6 sm:border-b-0 sm:border-r">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#6e6e73]">Shortlist Wave if…</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6e6e73]">
                  <li>You are a solo operator, contractor, or creative freelancer with straightforward income and expenses.</li>
                  <li>You want to keep software overhead at zero while getting professional-looking invoice templates.</li>
                  <li>You do not need inventory tracking, purchase orders, or bill approval routing.</li>
                  <li>You only operate in the US or Canada and bill in your primary local currency.</li>
                </ul>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#6e6e73]">Shortlist Xero if…</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6e6e73]">
                  <li>You employ staff or hire subcontractors who need to submit receipts and expense claims.</li>
                  <li>Your CPA or bookkeeper specifically requests access to a double-entry cloud accounting ledger.</li>
                  <li>You bill clients or purchase materials in multiple international currencies (USD, EUR, GBP, CAD).</li>
                  <li>You integrate with specialized tools like Shopify, Stripe, Gusto, or Zapier.</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Where the entry plans stop fitting</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Wave's free Starter tier was historically completely free, but now restricts automatic bank transaction imports and receipt OCR to the paid Pro tier ($16/month). For founders who dislike entering transactions manually from paper statements, Wave Pro is the true starting point.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Xero's entry Early plan ($27/month) caps outgoing invoices and quotes at 20 per month and incoming supplier bills at 5 per month. Any growing agency or e-commerce shop will surpass these caps immediately, making the $59/month Growing tier the realistic baseline.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#e4e7ec]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-[#f7f8fc] text-[#101828]">
                <tr>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Decision point</th>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Xero</th>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Wave</th>
                </tr>
              </thead>
              <tbody className="text-[#424245]">
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Pricing Model</th>
                  <td className="border-b border-[#e4e7ec] p-4">Paid only ($27 to $97/month)</td>
                  <td className="border-b border-[#e4e7ec] p-4">Free Starter tier; Pro tier at $16/month</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Monthly Invoicing Limits</th>
                  <td className="border-b border-[#e4e7ec] p-4">Capped at 20 on Early; unlimited on Growing ($59/mo)</td>
                  <td className="border-b border-[#e4e7ec] p-4">Unlimited invoices on all plans (including free Starter)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Bank Feeds & Reconciliation</th>
                  <td className="border-b border-[#e4e7ec] p-4">Automated live feeds with machine-learning matching</td>
                  <td className="border-b border-[#e4e7ec] p-4">Manual upload on free; automated bank sync on Pro tier</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Multi-Currency Support</th>
                  <td className="border-b border-[#e4e7ec] p-4">Comprehensive auto-revalued rates on Established tier ($97/mo)</td>
                  <td className="border-b border-[#e4e7ec] p-4">Basic invoicing currency selection without unrealized gain/loss tracking</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Third-Party App Store</th>
                  <td className="p-4">1,000+ certified financial and operational integrations</td>
                  <td className="p-4">Limited native integrations; relies on Zapier</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">A practical migration checklist</h3>
          <ol className="mt-5 max-w-3xl list-decimal space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><strong>Export transaction history:</strong> Download CSVs of your customer database, vendor contacts, and paid invoices from Wave or your current system.</li>
            <li><strong>Reconcile before switching:</strong> Ensure all cash accounts and credit card balances match bank statements exactly as of your chosen cutover date.</li>
            <li><strong>Set opening balances:</strong> Input your balance sheet accounts (Accounts Receivable, Cash, Accounts Payable, Retained Earnings) accurately into your new ledger.</li>
            <li><strong>Connect bank feeds:</strong> Authenticate direct bank feeds via Plaid or Yodlee and verify that initial imported transactions do not duplicate historical opening balances.</li>
          </ol>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Official plan sources checked</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Pricing checked for 2026. Payment processing fees (credit card 2.9% + 60¢ on Wave; varies by gateway on Xero) apply on invoice payments:
          </p>
          <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><a className="underline underline-offset-4" href="https://www.xero.com/pricing-plans/" target="_blank" rel="noreferrer">Xero Official Pricing</a> — Early, Growing, and Established tiers with add-on options.</li>
            <li><a className="underline underline-offset-4" href="https://www.waveapps.com/pricing" target="_blank" rel="noreferrer">Wave Pricing & Plans</a> — free Starter and Pro subscription breakdown.</li>
          </ul>
        </div>
      </section>
    </ComparisonArticle>
  );
}

