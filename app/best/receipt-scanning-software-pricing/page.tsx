import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Receipt Scanning Software Pricing (2026): Dext vs Hubdoc",
  description:
    "Compare receipt scanning and document capture costs for Dext, Hubdoc, Wave and accounting-suite tools. Check document caps, users, integrations and hidden costs.",
  alternates: { canonical: "/best/receipt-scanning-software-pricing" },
};

export default function ReceiptScanningSoftwarePricingPage() {
  return (
    <ComparisonArticle
      title="Receipt Scanning Software Pricing: What Small Businesses Pay"
      slug="receipt-scanning-software-pricing"
      intro="Receipt scanning tools range from features bundled into accounting software to separate subscriptions priced by document volume and users. Before paying for a dedicated app, check whether your existing accounting plan already includes capture, whether your accountant needs access, and whether the tool exports clean data or only stores receipt images."
      pricingNote="Official vendor pages checked October 18, 2026. Prices are USD and reflect the published US pages where available. Annual-billing prices are not equivalent to month-to-month rates. Country availability, taxes, promotions and included allowances may change; confirm the vendor's current checkout price."
      tools={[
        {
          name: "Hubdoc",
          bestFor: "Small businesses already using Xero or QuickBooks Online that need receipts, bills and statements captured and filed",
          freeOption: "Hubdoc is included with Xero subscriptions in eligible markets. Its standalone US pricing page lists a 30-day free trial and then $12 USD per month, with unlimited document capture and multiple collaborators.",
          tradeoff: "Hubdoc focuses on capturing and extracting document data and syncing it to supported accounting platforms. Confirm whether it is already included in your Xero plan before buying a separate subscription, and check integrations and data export requirements.",
          url: "https://www.hubdoc.com/pricing",
        },
        {
          name: "Dext",
          bestFor: "Businesses and bookkeepers who need receipt, invoice and statement extraction with structured data sent to accounting software",
          freeOption: "The US pricing page lists $25.21/month when billed annually ($302.50 per year, excluding tax), including 250 documents per month and 5 users. A 14-day free trial is available without a credit card.",
          tradeoff: "The displayed price is an annual-billing monthly equivalent, not the same as paying month to month. Document allowance and additional extraction features matter: check the slider, add-ons, tax and renewal total for your workload.",
          url: "https://dext.com/us/business/product/capture-receipts-and-invoices",
        },
        {
          name: "Wave Pro",
          bestFor: "Eligible US solo businesses that want receipt capture inside the same product they use for invoices and bookkeeping",
          freeOption: "Wave Starter is $0. Wave Pro is listed at $19/month or $190/year and includes receipt capture and bank transaction imports alongside other bookkeeping conveniences.",
          tradeoff: "Wave Pro is not a standalone receipt-only tool. If you need document capture connected to a different accounting platform, compare integration support and the full accounting workflow before subscribing.",
          url: "https://www.waveapps.com/pricing",
        },
        {
          name: "Xero + Hubdoc",
          bestFor: "Businesses that want document capture integrated into their existing Xero bookkeeping workflow",
          freeOption: "Hubdoc is included with Xero business subscriptions in supported markets, so the incremental receipt-capture cost may be $0 if you already pay for Xero.",
          tradeoff: "The accounting subscription still has a cost, and Xero's plan limits, bank feeds and transaction needs remain relevant. Do not treat bundled Hubdoc as a free accounting package.",
          url: "https://www.xero.com/us/pricing-plans/",
        },
      ]}
      bottomLine="If you already subscribe to Xero, check Hubdoc first because paying for a separate capture tool may be unnecessary. Hubdoc's standalone $12/month option can suit straightforward capture and syncing. Dext costs more but is aimed at higher-volume document processing and richer extraction workflows. Wave Pro is worth considering only if you also want its invoicing and bookkeeping features. Compare the cost per document, user limits and accounting integration before committing."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">Published US prices</p>
          <h2 className="sp-title mt-4 max-w-4xl">Compare receipt capture costs</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="py-3 pr-4 font-semibold">Option</th>
                  <th className="py-3 pr-4 font-semibold">Published price</th>
                  <th className="py-3 pr-4 font-semibold">Allowance / fit</th>
                  <th className="py-3 pr-4 font-semibold">Best first check</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Hubdoc standalone", "$12/month after 30-day trial", "Unlimited document capture; multiple collaborators", "Is it already included in your Xero subscription?"],
                  ["Dext US Business", "$25.21/month billed annually ($302.50/year)", "250 documents/month; 5 users on displayed plan", "Monthly vs annual rate, document allowance and add-ons"],
                  ["Wave Starter", "$0", "Invoicing and bookkeeping; not a standalone capture app", "Country eligibility and feature requirements"],
                  ["Wave Pro", "$19/month or $190/year", "Receipt capture and bank transaction imports within Wave", "Do you also need Wave's accounting workflow?"],
                  ["Xero + Hubdoc", "Hubdoc included in eligible Xero plans", "Capture linked to Xero bookkeeping", "Total Xero subscription cost and plan limits"],
                ].map(([option, price, allowance, check]) => (
                  <tr key={option} className="border-b border-black/[0.06] align-top">
                    <td className="py-4 pr-4 font-semibold">{option}</td>
                    <td className="py-4 pr-4">{price}</td>
                    <td className="py-4 pr-4">{allowance}</td>
                    <td className="py-4 pr-4">{check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#6e6e73]">
            Pricing checked October 18, 2026. Dext's displayed US price is an annual-billing
            monthly equivalent and excludes tax. Bundled availability can vary by region and
            accounting subscription.
          </p>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight">Calculate the cost of your document workflow</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Estimate monthly volume", "Count receipts, supplier invoices, bills and bank statements. Compare that total with each tool's document allowance and check whether different extraction types use separate credits."],
              ["Count every person who needs access", "Include the owner, employee, bookkeeper and accountant. A low subscription can become less attractive if it limits collaborators or requires extra seats."],
              ["Check the accounting connection", "Confirm that the tool sends extracted data to your actual accounting product and plan. A searchable folder of receipt images is not the same as a reconciled bookkeeping workflow."],
              ["Price the full workflow", "Include the accounting subscription, tax, add-ons and annual commitment. Avoid paying twice for capture that is already bundled into software you use."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl bg-[#f5f5f7] p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight">Before you move receipt records</h2>
          <ol className="mt-5 max-w-3xl list-decimal space-y-3 pl-5 text-base leading-7 text-[#6e6e73]">
            <li>Export original images and PDFs, not only extracted totals.</li>
            <li>Check that supplier, date, tax, currency and total fields can be exported in a usable format.</li>
            <li>Test how duplicate receipts are flagged and how corrections reach your accounting ledger.</li>
            <li>Confirm retention, access permissions and multi-factor authentication for anyone handling financial documents.</li>
            <li>Keep a copy of the original documents and reconcile a sample month before ending the old service.</li>
          </ol>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight">Who should not use this comparison?</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            This guide focuses on US pricing and general small-business receipt capture. It is not
            tax or accounting advice, and it may not suit firms that need country-specific e-invoice
            compliance, specialized audit controls, complex multi-entity workflows or unsupported
            accounting integrations. Confirm regional availability and document retention rules.
          </p>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight">Official vendor sources</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              ["Hubdoc pricing", "https://www.hubdoc.com/pricing"],
              ["Dext US receipt and invoice capture", "https://dext.com/us/business/product/capture-receipts-and-invoices"],
              ["Wave pricing", "https://www.waveapps.com/pricing"],
              ["Xero US pricing", "https://www.xero.com/us/pricing-plans/"],
            ].map(([label, url]) => (
              <li key={label}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-black/[0.08] bg-white p-4 text-sm font-semibold text-[#004bb5] hover:underline">
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-black/10 bg-[#f5f5f7] p-6">
            <h3 className="text-lg font-semibold">Related StackPick guides</h3>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <a href="/best/expense-management-software" className="text-[#004bb5] underline underline-offset-4">Expense management software</a>
              <a href="/best/accounting-software" className="text-[#004bb5] underline underline-offset-4">Best accounting software</a>
              <a href="/best/accounting-software-cost" className="text-[#004bb5] underline underline-offset-4">Accounting software pricing</a>
              <a href="/best/track-business-expenses-without-spreadsheets" className="text-[#004bb5] underline underline-offset-4">Track expenses without spreadsheets</a>
            </div>
          </div>
        </div>
      </section>
    </ComparisonArticle>
  );
}
