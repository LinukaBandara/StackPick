import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Multi-Currency Invoicing Software (2026)",
  description:
    "Compare QuickBooks, Xero, Zoho Books, FreshBooks and Stripe for foreign-currency invoices, exchange rates, payment collection and the real cost of getting paid.",
  alternates: { canonical: "/best/multi-currency-invoicing" },
};

export default function MultiCurrencyInvoicingPage() {
  return (
    <ComparisonArticle
      title="Best Multi-Currency Invoicing Software"
      slug="multi-currency-invoicing"
      intro="If clients pay in USD, EUR, GBP or another currency, the right tool should do more than print a different currency symbol. Check whether it remembers a currency for each customer, converts transactions into your accounting currency, records exchange-rate differences, supports your payment method and exports records your accountant can reconcile. This guide compares tools for US-based freelancers and small businesses billing international clients; country availability and features can differ."
      pricingNote="Official vendor pages were checked on October 18, 2026. Prices below are standard US list prices where clearly published, before tax, payment-processing charges and optional add-ons; introductory promotions can make the first months look much cheaper. Currency support can be plan- and country-specific, so confirm the exact plan and supported currency list before migrating live invoices."
      tools={[
        {
          name: "QuickBooks Online",
          bestFor: "Small businesses that need foreign-currency invoices and accounting in the same ledger",
          freeOption: "No permanent free accounting plan. The US Essentials plan is listed at $85/month at standard pricing (promotions may apply); multicurrency is available in Essentials, Plus and Advanced, not Simple Start.",
          tradeoff: "Once multicurrency is enabled, QuickBooks says it cannot be turned off because the currency-conversion information becomes part of the accounting records. Confirm your plan and discuss the irreversible setting with your accountant before switching it on.",
          url: "https://quickbooks.intuit.com/pricing/",
        },
        {
          name: "Xero",
          bestFor: "Growing teams that need multi-currency accounting, bank reconciliation and shared accountant access",
          freeOption: "No permanent free plan. The US Established plan is listed at $97/month after its current introductory offer and includes multiple currencies; the lower Early and Growing plans do not list this feature.",
          tradeoff: "Multi-currency is gated to the Established plan in the US, so the price jump can be significant if you only need to send a few foreign-currency invoices. Check payment fees and local bank-feed availability separately.",
          url: "https://www.xero.com/us/pricing-plans/",
        },
        {
          name: "Zoho Books",
          bestFor: "Small businesses that want customer-specific currencies and connected cloud accounting",
          freeOption: "A free plan is available in the US, and paid plans are listed from $20/month on monthly billing. Zoho states that foreign-currency invoicing is only available on certain plans, so do not assume the free plan includes it.",
          tradeoff: "Each customer can have one associated currency, and item prices are stored in the organisation's base currency before conversion. Confirm which US plan enables multi-currency before choosing it for international billing.",
          url: "https://www.zoho.com/us/books/",
        },
        {
          name: "FreshBooks",
          bestFor: "Freelancers and service businesses that want client-friendly invoices and project/time workflows",
          freeOption: "A 30-day trial is available, not a permanent free plan. The US Lite plan is listed at $23/month at standard pricing and allows up to five billable clients; verify that the plan you choose supports your required currency workflow.",
          tradeoff: "FreshBooks lets you set currency per client and on invoices, estimates and proposals. That makes client-facing billing straightforward, but confirm how foreign-currency transactions flow into your books and payment setup before relying on it for complex accounting.",
          url: "https://www.freshbooks.com/pricing",
        },
        {
          name: "Stripe Invoicing",
          bestFor: "Eligible businesses that mainly need to issue invoices and collect international online payments",
          freeOption: "No fixed monthly fee for Starter invoicing; Stripe lists a 0.4% fee per paid one-time invoice. Payment-processing fees are separate, and recurring invoices may fall under Stripe Billing pricing.",
          tradeoff: "Stripe supports invoices in 135+ currencies and offers hosted payment pages, but it is a payment and accounts-receivable workflow rather than a full small-business accounting ledger. Stripe account availability depends on your business country.",
          url: "https://stripe.com/invoicing",
        },
      ]}
      bottomLine="For full accounting with multi-currency transactions, shortlist QuickBooks Online Essentials or Xero Established and compare the cost against your accountant's workflow. Zoho Books can be a more affordable fit if the plan available in your country includes foreign-currency invoicing. FreshBooks is worth testing for service businesses that prioritize client experience. Stripe is the most payment-focused option here, not a replacement for accounting software. Before signing up, confirm business-country eligibility, the exact plan gate, payment methods, exchange-rate handling and exports."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">Choose by workflow</p>
          <h2 className="sp-title mt-4 max-w-4xl">An invoice in another currency is not the same as multi-currency accounting.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6e6e73]">
            A PDF that shows €1,000 is only the first step. If your books are in USD, your system may
            also need to record the exchange rate, convert the transaction to your base currency,
            reconcile the eventual payment and account for a gain or loss when the rate changes.
            Confirm which parts the software handles automatically and which require manual work.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              ["I only need to send invoices", "Prioritize customer currency defaults, invoice templates, due dates, reminders and a payment route your client can use."],
              ["I need books in one base currency", "Check foreign-currency bills and expenses, exchange-rate adjustments, realised gains/losses and accountant-ready reports."],
              ["I need clients to pay online", "Verify your business country is eligible, the currencies you can charge, supported payment methods, settlement currency and conversion fees."],
              ["I have recurring international clients", "Test recurring invoices, whether a customer's currency is remembered, and what happens when an invoice is edited or refunded."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl bg-[#f5f5f7] p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{desc}</p>
              </div>
            ))}
          </div>
          <h2 className="mt-14 text-2xl font-semibold tracking-tight">Compare the ongoing cost, not just the headline price</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="py-3 pr-4 font-semibold">Tool</th>
                  <th className="py-3 pr-4 font-semibold">Published US price signal</th>
                  <th className="py-3 pr-4 font-semibold">What to verify</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["QuickBooks Online", "$85/mo Essentials standard list price", "Multicurrency is not in Simple Start; turning it on cannot be reversed."],
                  ["Xero", "$97/mo Established standard price after promo", "Multi-currency is listed in Established, not the lower US plans."],
                  ["Zoho Books", "Paid plans from $20/mo monthly", "Which plan includes multi-currency; the free plan is not guaranteed to include it."],
                  ["FreshBooks", "$23/mo Lite standard price; up to 5 clients", "Per-client currency workflow, client cap and accounting treatment."],
                  ["Stripe Invoicing", "0.4% per paid one-time invoice", "Payment processing, currency conversion, recurring billing and country eligibility."],
                ].map(([tool, price, check]) => (
                  <tr key={tool} className="border-b border-black/[0.06] align-top">
                    <td className="py-4 pr-4 font-semibold">{tool}</td>
                    <td className="py-4 pr-4">{price}</td>
                    <td className="py-4 pr-4 text-[#6e6e73]">{check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#6e6e73]">
            These are not like-for-like prices: accounting platforms bundle different workflows,
            while Stripe charges for paid invoices and payment processing. Confirm the current
            checkout price, local edition, taxes and any conversion or payout fees.
          </p>
          <h2 className="mt-14 text-2xl font-semibold tracking-tight">Who should not pay for multi-currency features?</h2>
          <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-5 text-base leading-7 text-[#6e6e73]">
            <li>If every customer pays in your business's base currency, a simpler invoicing plan may be enough.</li>
            <li>If you only need a one-off invoice, compare a simple invoice tool or your existing payment provider before upgrading accounting software.</li>
            <li>If your business country is not supported by a payment processor, don't assume a foreign-currency invoice feature means you can open an account or receive payouts there.</li>
            <li>If you need local VAT/GST compliance, tax reporting or statutory invoices, check your jurisdiction's requirements with a qualified accountant; currency support alone does not establish compliance.</li>
          </ul>
          <h2 className="mt-14 text-2xl font-semibold tracking-tight">Migration and export checklist</h2>
          <ol className="mt-5 max-w-3xl list-decimal space-y-3 pl-5 text-base leading-7 text-[#6e6e73]">
            <li>Export a backup of customers, invoices, payments, credit notes and item lists before importing anything.</li>
            <li>Record each customer's agreed invoice currency and your organisation's base currency.</li>
            <li>Test one paid invoice and one partial payment; compare invoice currency, base-currency value, exchange rate and fees.</li>
            <li>Check how the tool records refunds, credit notes, overdue invoices and exchange-rate differences.</li>
            <li>Keep original invoice PDFs and a dated export until your accountant confirms that the new records reconcile.</li>
          </ol>
        </div>
      </section>
      <section className="border-t border-black/[0.06] bg-[#f5f5f7]">
        <div className="sp-container py-12 sm:py-14">
          <p className="sp-eyebrow">Primary sources</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f]">Official plan and feature details</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#6e6e73]">
            Checked October 18, 2026. Promotions and plan inclusions can change. Read the current
            vendor documentation for the edition and country where your business is registered.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ["QuickBooks US pricing", "https://quickbooks.intuit.com/pricing/"],
              ["QuickBooks multicurrency plans and setup", "https://quickbooks.intuit.com/learn-support/en-us/help-article/multicurrency/learn-multicurrency-quickbooks-online/L5krkKQi8_US_en_US"],
              ["Xero US pricing and multi-currency", "https://www.xero.com/us/pricing-plans/"],
              ["Zoho Books US pricing", "https://www.zoho.com/us/books/"],
              ["Zoho Books foreign-currency invoicing limits", "https://www.zoho.com/us/books/kb/invoices/invoice-in-multiple-currencies.html"],
              ["FreshBooks pricing", "https://www.freshbooks.com/pricing"],
              ["FreshBooks client currency settings", "https://support.freshbooks.com/hc/en-us/articles/217212017-How-do-I-change-my-client-s-currency-and-language"],
              ["Stripe Invoicing features and supported currencies", "https://stripe.com/invoicing"],
              ["Stripe Invoicing fees", "https://support.stripe.com/questions/stripe-invoicing-pricing"],
            ].map(([label, url]) => (
              <li key={label}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-black/[0.08] bg-white p-4 text-sm font-semibold text-[#004bb5] hover:underline">
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6">
            <h3 className="text-lg font-semibold">Related StackPick guides</h3>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <a href="/best/invoicing-software" className="text-[#004bb5] underline underline-offset-4">Best invoicing software</a>
              <a href="/best/accounting-software" className="text-[#004bb5] underline underline-offset-4">Best accounting software</a>
              <a href="/best/quickbooks-vs-xero" className="text-[#004bb5] underline underline-offset-4">QuickBooks vs Xero</a>
              <a href="/best/zoho-invoice-vs-wave" className="text-[#004bb5] underline underline-offset-4">Zoho Invoice vs Wave</a>
            </div>
          </div>
        </div>
      </section>
    </ComparisonArticle>
  );
}
