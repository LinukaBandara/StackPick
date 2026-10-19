import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Signature Software Pricing (2026): DocuSign, PandaDoc & Alternatives",
  description:
    "Compare 2026 e-signature software prices, free-plan limits and team costs for DocuSign, Dropbox Sign, PandaDoc and SignWell before choosing a contract workflow.",
  alternates: { canonical: "/best/esignature-software-pricing" },
};

const plans = [
  {
    name: "DocuSign",
    price: "$10/user/mo",
    billing: "Personal, billed annually ($120/year)",
    fit: "Individuals who need a familiar signing workflow",
    limit: "5 envelopes per month on Personal; Standard and Business Pro include 100 envelopes per user per year.",
    link: "https://www.docusign.com/products/electronic-signature",
  },
  {
    name: "Dropbox Sign",
    price: "$10.05/mo",
    billing: "Essentials, billed annually ($120.60/year); Standard is $17.50/user/mo annually",
    fit: "Solo senders or teams already using Dropbox and cloud storage",
    limit: "Paid plans advertise unlimited signature requests; Standard has a two-seat minimum in its annual billing total and supports up to five senders before sales contact.",
    link: "https://sign.dropbox.com/products/dropbox-sign/pricing",
  },
  {
    name: "PandaDoc",
    price: "$0 or $19/user/mo",
    billing: "Free eSign; Starter is $19/user/mo annually or $35 monthly",
    fit: "Businesses that create proposals and quotes as well as collect signatures",
    limit: "Free eSign is limited to 5 documents per month; document editing and advanced workflow features are paid-plan gates.",
    link: "https://www.pandadoc.com/pricing/",
  },
  {
    name: "SignWell",
    price: "$0 or $10/user/mo",
    billing: "Free plan; Light is $10/user/mo annually or $12 monthly",
    fit: "Small teams that want straightforward signing without a complex contract suite",
    limit: "Free plan allows 3 documents per month and one sender; Business is $30/mo annually or $36 monthly for three senders.",
    link: "https://www.signwell.com/pricing/",
  },
];

export default function Page() {
  return (
    <main className="bg-white">
      <article className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Software pricing · Updated October 18, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">E-signature software pricing: what small businesses actually pay</h1>
        <p className="sp-body-large mt-6 max-w-3xl">
          The headline subscription is only part of the decision. Compare how many documents you can send, how many people can send them, whether you need to build proposals, and which audit, identity-verification or administration features are included. Prices below are published US prices and can change; confirm the vendor checkout page before buying.
        </p>

        <section className="mt-10 overflow-x-auto rounded-2xl border border-[#d2d2d7]">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead className="bg-[#f5f5f7]">
              <tr>
                <th className="p-4 font-semibold">Product</th>
                <th className="p-4 font-semibold">Starting price</th>
                <th className="p-4 font-semibold">Best fit</th>
                <th className="p-4 font-semibold">Limit to check</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={plan.name} className="border-t border-[#d2d2d7] align-top">
                  <td className="p-4 font-semibold"><a className="text-[#001D39] underline" href={plan.link} target="_blank" rel="noreferrer">{plan.name}</a><p className="mt-2 font-normal text-[#6e6e73]">{plan.billing}</p></td>
                  <td className="p-4 whitespace-nowrap">{plan.price}</td>
                  <td className="p-4">{plan.fit}</td>
                  <td className="p-4">{plan.limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">
          Annual-billing equivalents are shown separately from monthly billing. Prices exclude taxes and any add-ons unless the vendor states otherwise. These products are not perfectly interchangeable: PandaDoc includes proposal/document workflows, while DocuSign, Dropbox Sign and SignWell focus more directly on sending documents for signature.
        </p>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Compare the cost for your team</h2>
          <div className="mt-5 space-y-5 text-[#424245]">
            <div>
              <h3 className="font-semibold text-[#1d1d1f]">One person, a few documents each month</h3>
              <p className="mt-2 leading-relaxed">Start with the free tiers from PandaDoc or SignWell if their monthly document caps fit. DocuSign Personal may suit a sender who prefers its ecosystem, but its five-envelope monthly limit can become restrictive quickly.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1d1d1f]">A small team sending documents regularly</h3>
              <p className="mt-2 leading-relaxed">Multiply the per-sender or per-user rate by the number of people who actually send documents—not everyone who receives and signs them. Dropbox Sign Standard has a two-seat minimum in its annual total, so a single-sender team should compare Essentials before budgeting.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1d1d1f]">Proposals, quotes and signatures in one workflow</h3>
              <p className="mt-2 leading-relaxed">PandaDoc may replace separate proposal and signature tools, but compare the paid document editor and collaboration features you need. A cheaper signing-only tool may be better if you already create contracts in Word or Google Docs.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Costs and restrictions to check before subscribing</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li><strong>Envelope or document caps:</strong> vendors use different definitions for an envelope, signature request and document. Confirm how multiple files and multiple recipients count.</li>
            <li><strong>Sender seats:</strong> recipients generally do not need paid seats just to sign, but each employee who prepares and sends documents may need a license.</li>
            <li><strong>Automation and API access:</strong> bulk sending, conditional fields, embedded signing, webhooks and integrations may require specific plans or separate API pricing.</li>
            <li><strong>Identity checks and compliance:</strong> stronger signer verification, regulated workflows, retention rules and advanced administration can change the plan you need.</li>
            <li><strong>Document creation:</strong> signing a finished PDF is different from editing a proposal, negotiating contract terms or collecting structured form data.</li>
          </ul>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Who should not pay for an e-signature subscription?</h2>
          <p className="mt-4 leading-relaxed text-[#424245]">Do not buy a team plan if you only sign occasional documents yourself and a free tier covers your monthly volume. Avoid paying for proposal builders when your documents are already finalized elsewhere. Conversely, do not choose solely on the lowest price if your workflow depends on reliable audit trails, sender permissions, reusable templates or regulated identity checks.</p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Migration checklist</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li>Export completed agreements, audit certificates and attachments before cancelling an existing plan.</li>
            <li>Download reusable templates and record their field placements, signing order and reminder settings.</li>
            <li>Check whether recipient history, timestamps and authentication records remain accessible after cancellation.</li>
            <li>Run a test agreement with internal users and confirm the signed PDF and audit trail meet your record-keeping needs.</li>
            <li>Check the new service's data retention, account deletion and export policies before moving sensitive contracts.</li>
          </ol>
        </section>

        <section className="mt-12 rounded-2xl bg-[#f5f5f7] p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Related StackPick guides</h2>
          <ul className="mt-4 space-y-2 text-[#001D39]">
            <li><Link className="underline" href="/best/esignature-software">Best e-signature software for small business</Link></li>
            <li><Link className="underline" href="/best/contract-management-software">Contract management software</Link></li>
            <li><Link className="underline" href="/best/invoicing-software">Invoicing software for freelancers</Link></li>
            <li><Link className="underline" href="/best/crm-software-pricing">CRM software pricing for small teams</Link></li>
          </ul>
        </section>

        <p className="mt-8 text-xs leading-relaxed text-[#6e6e73]">Pricing and plan limits checked against vendor pricing pages on October 18, 2026. This is an editorial comparison, not legal advice; signature validity and record-retention requirements vary by jurisdiction and document type. Verify current terms with the vendor and qualified counsel where necessary.</p>
      </article>
    </main>
  );
}
