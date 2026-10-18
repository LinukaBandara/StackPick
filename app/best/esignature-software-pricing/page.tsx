import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Signature Software Pricing: DocuSign, PandaDoc & More (2026)",
  description:
    "Compare US e-signature software prices, sending limits and free plans for DocuSign, PandaDoc, Dropbox Sign and Adobe Acrobat Sign.",
  alternates: { canonical: "/best/esignature-software-pricing" },
};

const plans = [
  { name: "DocuSign Personal", price: "$10/user/month", annual: "$120 billed annually", limit: "5 envelopes per month", fit: "One person sending a small number of agreements", caveat: "The low entry price has a strict monthly sending limit.", url: "https://www.docusign.com/products/electronic-signature" },
  { name: "DocuSign Standard", price: "$25/user/month", annual: "$300 billed annually", limit: "100 envelopes per user/year", fit: "Small teams that need shared templates and collaboration", caveat: "Check both annual and monthly envelope limits before estimating volume.", url: "https://www.docusign.com/products/electronic-signature" },
  { name: "PandaDoc Free eSign", price: "$0", annual: "Free plan", limit: "5 documents per month", fit: "Low-volume signing without paying for a full document workflow", caveat: "Document creation and workflow features are limited compared with paid plans.", url: "https://www.pandadoc.com/pricing/" },
  { name: "PandaDoc Starter", price: "$19/user/month", annual: "Billed annually", limit: "Unlimited documents, subject to plan terms", fit: "Teams creating proposals and sending agreements", caveat: "Monthly billing costs more; check which templates and integrations are included.", url: "https://www.pandadoc.com/pricing/" },
  { name: "Adobe Acrobat Standard", price: "$14.99/month", annual: "$179.88/year; annual commitment", limit: "Signature requests included; verify current usage terms", fit: "People who also need everyday PDF editing and conversion", caveat: "You are buying a PDF toolset as well as signing, so compare the whole bundle.", url: "https://www.adobe.com/acrobat/business/pricing/plans.html" },
  { name: "Dropbox Sign", price: "Free option available", annual: "Paid plans vary by billing and seat count", limit: "Free version: 3 document transactions per month", fit: "Occasional signing or teams already using Dropbox", caveat: "Confirm the current paid plan, minimum seats and transaction rules on the official page.", url: "https://www.dropbox.com/features/productivity/electronic-signature" },
];

export default function Page() {
  return (
    <main className="bg-white">
      <section className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Pricing guide · United States · Checked October 18, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">E-signature software pricing: what small businesses really pay</h1>
        <p className="sp-body-large mt-6 max-w-3xl">A low monthly subscription is not always the lowest-cost way to get agreements signed. Compare the sender seats, envelope or document limits, and whether you also need to create and edit PDFs or proposals.</p>
        <p className="mt-5 max-w-3xl text-sm text-slate-600">Prices and plan limits can change and may vary by country, billing cycle, promotion or account type. Vendor pages are the source of truth; open them before purchasing.</p>
      </section>

      <section className="sp-container pb-12">
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead className="bg-slate-50"><tr>
              <th className="p-4 font-semibold">Plan</th><th className="p-4 font-semibold">Published price</th><th className="p-4 font-semibold">Volume note</th><th className="p-4 font-semibold">Best fit</th><th className="p-4 font-semibold">Important caveat</th>
            </tr></thead>
            <tbody>{plans.map((p) => <tr key={p.name} className="border-t border-slate-200 align-top">
              <td className="p-4 font-semibold"><a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-800" href={p.url} target="_blank" rel="noreferrer">{p.name}</a></td>
              <td className="p-4"><strong>{p.price}</strong><div className="mt-1 text-xs text-slate-500">{p.annual}</div></td>
              <td className="p-4">{p.limit}</td><td className="p-4">{p.fit}</td><td className="p-4">{p.caveat}</td>
            </tr>)}</tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">Prices checked against linked vendor pages on October 18, 2026. Some plans use annual commitments billed monthly; do not treat those as month-to-month subscriptions.</p>
      </section>

      <section className="sp-container grid gap-10 py-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Estimate the real monthly cost</h2>
          <p className="mt-3 text-slate-600">Use the number of people who send documents—not everyone who receives or signs them—as the starting point. Then check envelope limits, additional sender requirements and whether API access is a separate product.</p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700">
            <li><strong>Solo, under five sends monthly:</strong> start with free tiers or DocuSign Personal, then confirm document limits.</li>
            <li><strong>Several senders:</strong> multiply the per-user price by sender seats and check whether the plan has a seat minimum.</li>
            <li><strong>High-volume agreements:</strong> estimate yearly sends and verify overage or envelope-purchase costs before choosing a plan.</li>
            <li><strong>PDF-heavy work:</strong> compare Adobe Acrobat’s combined PDF and signature bundle against a dedicated signing product.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Questions to answer before paying</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700">
            <li>Do you need legally appropriate electronic signatures for the jurisdictions and agreement types involved?</li>
            <li>Are templates, bulk sending, reminders, signer authentication and audit trails included in the exact plan?</li>
            <li>Can you export signed PDFs and audit certificates if you leave?</li>
            <li>Does the vendor support your country, payment method, data-residency and retention requirements?</li>
            <li>Are API, embedded signing, advanced identity checks or integrations priced separately?</li>
          </ul>
        </div>
      </section>

      <section className="sp-container py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Who should not pay for a dedicated e-signature plan?</h2>
        <p className="mt-3 max-w-3xl text-slate-600">If you only sign a document occasionally, a vendor’s free allowance or a PDF subscription you already use may be enough. Avoid paying for contract lifecycle management, automated workflows or API access unless you have a real process that needs them. Conversely, do not assume a free tier is suitable for high-volume or regulated workflows without checking the terms and compliance requirements.</p>
        <div className="mt-8 rounded-2xl bg-slate-50 p-6">
          <h2 className="text-xl font-semibold">Migration checklist</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Download completed agreements, audit trails/certificates and any templates you own.</li>
            <li>Record current envelope usage, sender seats, renewal date and cancellation deadline.</li>
            <li>Rebuild templates in the new tool and test with a non-sensitive sample agreement.</li>
            <li>Confirm who can access archived agreements after cancellation and how long the vendor retains them.</li>
          </ul>
        </div>
      </section>

      <section className="sp-container py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Related StackPick guides</h2>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link className="underline underline-offset-4" href="/best/esignature-software">Best e-signature software</Link>
          <Link className="underline underline-offset-4" href="/best/contract-management-software">Contract management software</Link>
          <Link className="underline underline-offset-4" href="/best/business-email-hosting">Business email hosting</Link>
        </div>
      </section>
    </main>
  );
}
