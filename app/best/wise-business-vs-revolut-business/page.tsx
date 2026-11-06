import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Wise Business vs Revolut Business (2026): Multi-Currency Compared",
  description: "Compare Wise Business and Revolut Business: international transfer fees, foreign exchange markups, multi-currency accounts, and team expense cards.",
  alternates: { canonical: "/best/wise-business-vs-revolut-business" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Wise Business vs Revolut Business"
      slug="wise-business-vs-revolut-business"
      intro="For companies transacting across borders, traditional bank international wire fees and hidden 3% foreign exchange (FX) markups drain profitability. Wise Business and Revolut Business provide multi-currency accounts with local bank details in major currencies, allowing you to get paid and pay suppliers globally like a local. However, their pricing philosophies differ: Wise charges transparent pay-as-you-go fees at the mid-market rate, while Revolut utilizes a tiered monthly SaaS subscription model with included allowance thresholds."
      pricingNote="Pricing verified for 2026. Wise Business charges a one-time setup fee (typically $31 in the US or £45 in the UK) with zero recurring monthly platform fees, executing currency conversions at the real mid-market rate plus a small transparent fee (0.33%–0.6%). Revolut Business offers a basic Free plan, followed by Grow ($30–$40/month), Scale ($119–$150/month), and Enterprise tiers that include fee-free FX allowances and team card management."
      tools={[
        {
          name: "Wise Business",
          bestFor: "Freelancers, international agencies, and exporters who want true mid-market exchange rates without paying ongoing monthly software subscription fees",
          freeOption: "One-time registration fee ($31 USD) unlocks local account details in 9+ currencies (USD, EUR, GBP, AUD, CAD, etc.) with no recurring monthly maintenance costs.",
          tradeoff: "Every currency conversion incurs a variable percentage fee (0.33%–0.65%); fewer integrated corporate spend controls and employee card management tools compared to Revolut.",
          url: "https://wise.com/us/business/",
        },
        {
          name: "Revolut Business",
          bestFor: "Fast-growing companies and distributed teams needing an all-in-one financial hub with corporate expense cards, automated spend limits, and zero-markup FX allowances",
          freeOption: "Free tier with basic multi-currency accounts. Paid tiers (Grow at ~$30/mo, Scale at ~$119/mo) include allowances for fee-free foreign exchange and international transfers.",
          tradeoff: "Weekend foreign exchange markup (typically 1%) applies when markets are closed; strict geographic restrictions for non-EEA/UK entities.",
          url: "https://www.revolut.com/business/",
        },
      ]}
      bottomLine="Choose Wise Business if your transfer volumes fluctuate and you never want to pay an ongoing monthly software fee—you receive local account details in 9+ currencies and pay the exact mid-market exchange rate every single time. Choose Revolut Business if you need a full fintech operating hub with physical and virtual company cards for your team, granular expense approval policies, and predictable monthly FX allowances."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">Cross-border banking</p>
          <h2 className="sp-title mt-4 max-w-4xl">Pay-As-You-Go vs. Tiered Subscription FX</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            When you convert $50,000 to Euros with a traditional bank, you lose $1,500 to $2,000 in hidden exchange spreads. Both Wise and Revolut eliminate hidden margins by showing real rates. The question is how you prefer to pay for access: Wise charges a tiny, transparent margin on every single transaction with zero monthly commitments, while Revolut bundles fee-free volume into fixed monthly membership plans.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Foreign exchange pricing</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Wise always quotes the mid-market rate 24/7. Revolut provides interbank rates during market hours, but adds a 1% markup on weekends.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Employee spend cards</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Revolut Business shines with multi-user corporate debit cards, customizable spending limits, and automated receipt matching.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Batch payouts & API</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Both platforms provide powerful batch payroll upload tools (CSV) and developer APIs to pay thousands of international contractors at once.
              </p>
            </div>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Which one fits your business?</h3>
          <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="border-b border-black/10 p-6 sm:border-b-0 sm:border-r">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#6e6e73]">Shortlist Wise Business if…</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6e6e73]">
                  <li>You want to pay a one-time onboarding fee ($31) and never worry about monthly account fees.</li>
                  <li>You receive customer payments in foreign currencies (USD, EUR, GBP, CAD, AUD, SGD, NZD) and want local routing/IBAN numbers.</li>
                  <li>You make occasional large currency conversions where a fixed monthly subscription does not make economic sense.</li>
                  <li>You want straightforward accounting sync with Xero, QuickBooks, and FreeAgent.</li>
                </ul>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#6e6e73]">Shortlist Revolut Business if…</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6e6e73]">
                  <li>You have multiple employees traveling or purchasing tools internationally who need company debit cards.</li>
                  <li>You convert predictable monthly volumes of currency that fit neatly within Revolut's fee-free tier allowances.</li>
                  <li>You want integrated merchant payments to accept card payments directly on your website or via payment links.</li>
                  <li>You operate primarily out of the UK or European Economic Area where Revolut's banking features are most mature.</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Where the entry plans stop fitting</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Wise Business has no subscription tiers: after paying the one-time $31 fee to unlock receiving bank account details, all features (including batch payments and API access) are available without paying per-user or monthly fees. You only pay when money moves.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Revolut Business Free has modest limits: foreign exchange without markup is capped at relatively low thresholds (often around $1,000/month), after which a 0.6% markup applies. Once your cross-border payroll or supplier payments exceed $10,000 to $20,000 monthly, upgrading to the Grow ($30/mo) or Scale ($119/mo) tier becomes mandatory to unlock higher allowances.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#e4e7ec]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-[#f7f8fc] text-[#101828]">
                <tr>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Decision point</th>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Wise Business</th>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Revolut Business</th>
                </tr>
              </thead>
              <tbody className="text-[#424245]">
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Monthly Fee Structure</th>
                  <td className="border-b border-[#e4e7ec] p-4">$0 monthly fee ($31 one-time setup fee)</td>
                  <td className="border-b border-[#e4e7ec] p-4">Tiered: Free, Grow (~$30/mo), Scale (~$119/mo)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Exchange Rate Markup</th>
                  <td className="border-b border-[#e4e7ec] p-4">0% markup; mid-market rate + transparent fee (0.33%–0.6%)</td>
                  <td className="border-b border-[#e4e7ec] p-4">0% within plan allowance (market hours); 1% weekend markup</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Local Receiving Accounts</th>
                  <td className="border-b border-[#e4e7ec] p-4">9+ currencies (USD, EUR, GBP, AUD, NZD, CAD, SGD, etc.)</td>
                  <td className="border-b border-[#e4e7ec] p-4">Local GBP and EUR; multi-currency IBAN for 25+ currencies</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Team Corporate Cards</th>
                  <td className="border-b border-[#e4e7ec] p-4">Physical/virtual cards available; basic spending controls</td>
                  <td className="border-b border-[#e4e7ec] p-4">Advanced multi-user cards, team limits, and approval policies</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Accounting Integration</th>
                  <td className="p-4">Direct sync with Xero, QuickBooks Online, FreeAgent</td>
                  <td className="p-4">Direct sync with Xero, QuickBooks Online, and NetSuite</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">A cross-border setup checklist</h3>
          <ol className="mt-5 max-w-3xl list-decimal space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><strong>Identify key operating currencies:</strong> Map out the primary currencies where you bill customers and pay suppliers (e.g., receive USD, pay EUR contractors).</li>
            <li><strong>Provide local bank details to clients:</strong> Add your local ACH routing number (for US clients) or IBAN (for European clients) directly on invoices to avoid international wire fees.</li>
            <li><strong>Time conversions during market hours:</strong> If using Revolut, execute foreign exchange trades Monday through Friday to avoid the weekend spread surcharge.</li>
            <li><strong>Automate accounting feeds:</strong> Connect your multi-currency account to your accounting software to ensure realized currency gains and losses are calculated automatically.</li>
          </ol>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Official plan sources checked</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Information verified with official provider disclosures in 2026. Exchange rates fluctuate continuously based on wholesale foreign exchange markets:
          </p>
          <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><a className="underline underline-offset-4" href="https://wise.com/us/business/" target="_blank" rel="noreferrer">Wise Business Pricing & Rates</a> — one-time setup fee and transparent conversion fee calculator.</li>
            <li><a className="underline underline-offset-4" href="https://www.revolut.com/business/" target="_blank" rel="noreferrer">Revolut Business Plans</a> — Free, Grow, Scale, and Enterprise plan allowances and card features.</li>
          </ul>
        </div>
      </section>
    </ComparisonArticle>
  );
}

