import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Mercury vs Relay (2026): Modern Business Banking for Startups & Small Teams",
  description: "Compare Mercury and Relay for US business banking: FDIC insurance sweep networks, Profit First sub-accounts, Treasury yields, API access, and bill pay workflows.",
  alternates: { canonical: "/best/mercury-vs-relay" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Mercury vs Relay"
      slug="mercury-vs-relay"
      intro="Mercury and Relay have disrupted traditional brick-and-mortar business banking by offering zero monthly fee checking accounts, fee-free domestic wires, extensive FDIC sweep coverage, and virtual debit card controls. However, their primary target audiences reflect different business models: Mercury is designed for tech founders and startups with significant idle cash, while Relay is tailored for operating small businesses, e-commerce stores, and agencies utilizing the Profit First accounting method."
      pricingNote="Pricing verified for 2026. Both platforms offer free core business checking with no minimum deposit or balance requirements. Mercury provides free domestic and international USD wires; Mercury Plus ($35/mo) and Mercury Pro ($350/mo) add advanced financial workflows. Relay is free for standard checking and bill pay; Relay Pro ($30/month) unlocks same-day ACH, free outgoing wires, and multi-step AP approval rules."
      tools={[
        {
          name: "Mercury",
          bestFor: "Technology startups, venture-backed companies, and digital businesses holding higher cash balances who want integrated yield via Mercury Treasury and developer API access",
          freeOption: "Free core account with up to $5M FDIC insurance coverage via partner sweep networks, free domestic wires, and zero account maintenance fees.",
          tradeoff: "Underwriting favors technology, SaaS, and venture-scalable businesses; strictly online with cash deposit limitations.",
          url: "https://mercury.com/pricing",
        },
        {
          name: "Relay",
          bestFor: "Small business owners, agencies, and e-commerce founders who want multiple checking sub-accounts (up to 20), automated Profit First allocations, and collaborative bill pay",
          freeOption: "Free tier with up to 20 checking accounts, 50 virtual/physical debit cards, and up to $3M FDIC insurance via Thread Bank.",
          tradeoff: "Outgoing wire transfers cost $5-$10 on the free plan (included on Relay Pro at $30/mo); lacks developer API banking capabilities.",
          url: "https://relayfi.com/pricing",
        },
      ]}
      bottomLine="Choose Relay if you run a small business, agency, or retail operation and want to organize your finances with the Profit First framework—allocating revenue automatically into up to 20 dedicated sub-accounts for taxes, payroll, operating expenses, and owner draw. Choose Mercury if you are building a tech startup, hold over $250k in capital, want high yields via Treasury money market funds, or need programmatic API access to send payments."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">Fintech banking architecture</p>
          <h2 className="sp-title mt-4 max-w-4xl">Startup Treasury vs. Operational Cash Allocation</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Neither Mercury nor Relay is an independent bank; both are financial technology companies partnering with chartered FDIC-insured banks (Choice Financial Group, Evolve Bank & Trust, and Thread Bank). Both provide multi-million dollar FDIC insurance through sweep programs that spread your deposits across dozens of institutional banks. The difference is how they help you handle that money day-to-day.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">FDIC sweep limits</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Mercury provides up to $5M in FDIC sweep protection. Relay provides up to $3M in FDIC sweep insurance through Thread Bank.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Profit First cash management</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Relay is the official banking partner of Profit First, allowing you to create 20 checking accounts and schedule automated percentage transfer rules.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Yield on idle cash</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Mercury Treasury invests surplus balances directly into Vanguard money market funds and short-term US government treasuries with yields up to ~4.5%-5%.
              </p>
            </div>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Which one fits your business?</h3>
          <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="border-b border-black/10 p-6 sm:border-b-0 sm:border-r">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#6e6e73]">Shortlist Relay if…</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6e6e73]">
                  <li>You want to compartmentalize cash by creating separate checking accounts for Operating Expenses, Taxes, Payroll, and Profit.</li>
                  <li>You want automated percentage-based rules that split client payments across sub-accounts as soon as deposits land.</li>
                  <li>You employ managers or contractors who need individual debit cards with strict daily, weekly, or category spending caps.</li>
                  <li>You collaborate with an external bookkeeper who needs direct, dedicated login credentials without full admin owner privileges.</li>
                </ul>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#6e6e73]">Shortlist Mercury if…</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6e6e73]">
                  <li>You hold more than $250,000 in cash reserves from revenue, angel funding, or venture rounds and want automated Treasury yield.</li>
                  <li>You make frequent international wires in USD or foreign currencies and want free wire processing.</li>
                  <li>Your software developers need programmatic API keys to automate batch payouts or verify incoming payments.</li>
                  <li>You want a sleek, modern fintech dashboard tailored specifically for technology companies and SaaS operations.</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Where the entry plans stop fitting</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Relay's standard free account includes 20 checking accounts and 50 debit cards, but outgoing wires cost $5 (domestic) or $10 (international). If your business sends regular wires to international vendors, upgrading to Relay Pro ($30/month) eliminates wire fees and adds same-day ACH and automated multi-step bill approvals.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Mercury's free core tier includes free domestic wires and international wires without base fees. Mercury Treasury typically requires a balance of $500,000 to waive management fees, making it most suitable for venture-funded or high-revenue businesses.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#e4e7ec]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-[#f7f8fc] text-[#101828]">
                <tr>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Decision point</th>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Mercury</th>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Relay</th>
                </tr>
              </thead>
              <tbody className="text-[#424245]">
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Target Customer</th>
                  <td className="border-b border-[#e4e7ec] p-4">Tech startups, venture-backed companies, e-commerce brands</td>
                  <td className="border-b border-[#e4e7ec] p-4">SMBs, digital agencies, professional services, Profit First users</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Account Segmentation</th>
                  <td className="border-b border-[#e4e7ec] p-4">Up to 15 checking & savings accounts</td>
                  <td className="border-b border-[#e4e7ec] p-4">Up to 20 checking accounts with automated percentage transfers</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">FDIC Sweep Network</th>
                  <td className="border-b border-[#e4e7ec] p-4">Up to $5M FDIC insurance across partner banks</td>
                  <td className="border-b border-[#e4e7ec] p-4">Up to $3M FDIC insurance via Thread Bank sweep network</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Wire Transfer Fees</th>
                  <td className="border-b border-[#e4e7ec] p-4">Free domestic and international USD wires</td>
                  <td className="border-b border-[#e4e7ec] p-4">$5 domestic, $10 international (free with Relay Pro at $30/mo)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Treasury / Yield Options</th>
                  <td className="p-4">Mercury Treasury (Vanguard money market & US treasury bills)</td>
                  <td className="p-4">High-yield savings accounts earning up to 1.0%–3.0% APY depending on tier</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">A smooth banking setup checklist</h3>
          <ol className="mt-5 max-w-3xl list-decimal space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><strong>Prepare corporate documentation:</strong> Have your Articles of Incorporation/Organization, EIN confirmation letter (CP-575), and government photo IDs ready for all 25%+ beneficial owners.</li>
            <li><strong>Map operating vs reserve accounts:</strong> Decide your account hierarchy (e.g., Main Clearing Account, Payroll Reserve, Quarterly Tax Reserve).</li>
            <li><strong>Update payment processors and payroll:</strong> Switch your Stripe, Shopify, or Gusto deposit routing numbers after opening, keeping your old account open for 30 days to catch straggling debits.</li>
            <li><strong>Configure user permissions:</strong> Grant your bookkeeper read-only or bill-drafting access without granting permission to move corporate funds.</li>
          </ol>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Official plan sources checked</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Account specifications and sweep limits verified in 2026. Banking services provided by Choice Financial Group, Evolve Bank & Trust, and Thread Bank; Members FDIC:
          </p>
          <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><a className="underline underline-offset-4" href="https://mercury.com/pricing" target="_blank" rel="noreferrer">Mercury Official Pricing & Tiers</a> — free checking, Treasury terms, and Mercury Plus details.</li>
            <li><a className="underline underline-offset-4" href="https://relayfi.com/pricing" target="_blank" rel="noreferrer">Relay Official Pricing & Plans</a> — free checking features and Relay Pro AP upgrades.</li>
          </ul>
        </div>
      </section>
    </ComparisonArticle>
  );
}

