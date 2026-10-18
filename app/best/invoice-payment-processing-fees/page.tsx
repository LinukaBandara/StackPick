import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Invoice Payment Processing Fees Compared (2026)",
  description: "Compare US invoice payment fees from Stripe, Square and Wave, with example costs for $500 and $1,000 invoices.",
  alternates: { canonical: "/best/invoice-payment-processing-fees" },
};

export default function InvoicePaymentProcessingFeesPage() {
  return (
    <ComparisonArticle
      title="Invoice Payment Processing Fees Compared"
      slug="invoice-payment-processing-fees"
      intro="A free invoice app can still charge a fee every time a client pays online. For a freelancer or small business, the useful comparison is the amount that reaches your bank after card or bank-transfer fees—not only the monthly subscription. This guide compares published US online-payment rates and shows how fees change with invoice size."
      pricingNote="US public pricing pages checked October 18, 2026. Rates vary by payment method, plan, transaction type, country and account eligibility. Examples use published standard domestic online card rates, exclude taxes and currency conversion, and do not include disputes, refunds, instant payouts or optional subscriptions. Confirm your exact rate before sending a payment link."
      tools={[
        {
          name: "Stripe Invoicing",
          bestFor: "Businesses that need online invoice payments and flexible payment-method integrations",
          freeOption: "Stripe's standard US domestic online card rate is 2.9% + $0.30 per successful transaction. Check whether any invoice-specific fee applies to your chosen Invoicing setup.",
          tradeoff: "Processing and paid Invoicing features are separate considerations. International cards, currency conversion, ACH, disputes and custom pricing can change the final cost. Availability and payouts depend on the country where your business is established.",
          url: "https://stripe.com/pricing",
        },
        {
          name: "Square Invoices",
          bestFor: "Eligible US businesses that want invoicing connected to in-person sales or Square's business tools",
          freeOption: "Square Free has no monthly subscription fee for invoices; its published US online invoice card rate is 3.3% + $0.30. Square's higher paid plans list a lower online rate of 2.9% + $0.30.",
          tradeoff: "A paid plan may make sense if you also use Square's POS or team workflows, but calculate the subscription alongside processing savings. Merchant services are country-specific; a US pricing page does not mean every country can open an account.",
          url: "https://squareup.com/us/en/invoices/pricing",
        },
        {
          name: "Wave Payments",
          bestFor: "Eligible US and Canadian small businesses that want invoicing alongside Wave bookkeeping",
          freeOption: "Wave's US Starter plan has no monthly subscription fee. Its published standard online card rate is 2.9% + $0.60 for Visa, Mastercard and Discover, and 3.4% + $0.60 for American Express. ACH is listed at 1% with a $1 minimum.",
          tradeoff: "The fixed $0.60 portion matters more on small invoices. Payment availability and pricing vary by country and card type; Wave Pro may have different rates for some initial monthly transactions. Check the official fee table.",
          url: "https://www.waveapps.com/pricing",
        },
      ]}
      bottomLine="For eligible US businesses, Stripe's published standard domestic online card rate is lower than Square Free's invoice rate and Wave's standard Visa/Mastercard/Discover rate in the examples below. But the processing rate alone does not decide the best choice: consider country eligibility, bookkeeping integration, payout timing, payment methods your clients use, and any subscription or invoice-specific fees."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">Example calculations</p>
          <h2 className="sp-title mt-4 max-w-4xl">What would a $500 or $1,000 invoice cost?</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6e6e73]">
            Estimates below apply each provider's listed standard US domestic online card rate to one successful transaction. These are arithmetic examples, not a promise of the rate your account will receive.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead><tr className="border-b border-black/10">
                <th className="py-3 pr-4 font-semibold">Provider / rate</th><th className="py-3 pr-4 font-semibold">$500 fee</th><th className="py-3 pr-4 font-semibold">Net received</th><th className="py-3 pr-4 font-semibold">$1,000 fee</th><th className="py-3 pr-4 font-semibold">Net received</th>
              </tr></thead>
              <tbody>{[
                ["Stripe · 2.9% + $0.30", "$14.80", "$485.20", "$29.30", "$970.70"],
                ["Square Free · 3.3% + $0.30", "$16.80", "$483.20", "$33.30", "$966.70"],
                ["Wave standard card · 2.9% + $0.60", "$15.10", "$484.90", "$29.60", "$970.40"],
                ["Wave American Express · 3.4% + $0.60", "$17.60", "$482.40", "$34.60", "$965.40"],
              ].map(([provider, fee500, net500, fee1000, net1000]) => (
                <tr key={provider} className="border-b border-black/[0.06] align-top">
                  <td className="py-4 pr-4 font-medium">{provider}</td><td className="py-4 pr-4">{fee500}</td><td className="py-4 pr-4">{net500}</td><td className="py-4 pr-4">{fee1000}</td><td className="py-4 pr-4">{net1000}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[#6e6e73]">Formula: invoice amount × percentage rate + fixed transaction fee. Excludes refunds, disputes, international-card fees, currency conversion, taxes and any extra invoicing-product fee. Square paid plans list 2.9% + $0.30 online, but the subscription can outweigh processing savings at low volume.</p>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight">How to choose a payment setup</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Estimate monthly card volume", "Multiply typical invoice value by the number of invoices paid by card. Apply the percentage and fixed fee to each transaction."],
              ["Count small invoices separately", "Fixed fees consume a larger share of a $25 invoice than a $1,000 invoice. Use your real invoice-size mix."],
              ["Compare ACH and bank transfer", "Bank payments can be cheaper for large invoices, but providers may set minimums, caps, availability rules or different settlement times."],
              ["Compare the whole workflow", "Include bookkeeping sync, reminders, recurring invoices, refund handling and payout timing—not just the headline rate."],
              ["Check country eligibility", "Payment providers require a supported business location and verification. A US pricing page does not prove a provider will onboard a business in another country."],
              ["Read the complete fee schedule", "International cards, currency conversion, disputes, instant payouts and some payment methods may have separate charges."],
            ].map(([title, desc]) => <div key={title} className="rounded-3xl bg-[#f5f5f7] p-6"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">{desc}</p></div>)}
          </div>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight">Who should not use this comparison?</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">This is a US domestic online-card pricing comparison, not a universal payment quote. It is not a final estimate for international payments, multi-currency billing, in-person terminals, subscription billing, custom enterprise pricing or businesses that cannot open accounts in the listed providers' supported countries. Check the fee schedule for your exact payment method and merchant location.</p>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight">Official fee schedules</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">{[
            ["Stripe US pricing", "https://stripe.com/pricing"],
            ["Square Invoices US pricing", "https://squareup.com/us/en/invoices/pricing"],
            ["Wave pricing and payment fees", "https://www.waveapps.com/pricing"],
          ].map(([label, url]) => <li key={label}><a href={url} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-black/[0.08] bg-white p-4 text-sm font-semibold text-[#004bb5] hover:underline">{label} ↗</a></li>)}</ul>

          <div className="mt-10 rounded-2xl border border-black/10 bg-[#f5f5f7] p-6"><h3 className="text-lg font-semibold">Related StackPick guides</h3><div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <a href="/best/invoicing-software" className="text-[#004bb5] underline underline-offset-4">Best invoicing software</a>
            <a href="/best/free-invoicing-software" className="text-[#004bb5] underline underline-offset-4">Free invoicing software</a>
            <a href="/best/multi-currency-invoicing" className="text-[#004bb5] underline underline-offset-4">Multi-currency invoicing</a>
            <a href="/best/accounting-software-cost" className="text-[#004bb5] underline underline-offset-4">Accounting software costs</a>
          </div></div>
        </div>
      </section>
    </ComparisonArticle>
  );
}
