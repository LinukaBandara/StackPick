import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Email Hosting Pricing (2026): Google, Microsoft & Zoho",
  description: "Compare business email hosting costs for Google Workspace, Microsoft 365 and Zoho Mail, including per-user pricing, storage and bundled apps.",
  alternates: { canonical: "/best/business-email-hosting-pricing" },
};

const providers = [
  { name: "Zoho Mail Lite", price: "$1/user/mo", billing: "Annual subscription; 5 GB mail storage per user", fit: "Email-first teams looking to minimize mailbox costs", caveat: "Annual billing is required for Mail Lite; confirm storage, retention and admin features before choosing.", url: "https://www.zoho.com/mail/zohomail-pricing.html" },
  { name: "Microsoft 365 Business Basic", price: "$7/user/mo", billing: "Paid yearly, with Teams included; a no-Teams option is listed at $5.40/user/mo", fit: "Teams that need custom-domain email plus Microsoft web/mobile apps", caveat: "Desktop Office apps and advanced security require a higher plan; check the exact Teams bundle at checkout.", url: "https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-plans-and-pricing" },
  { name: "Google Workspace Business Starter", price: "$7/user/mo", billing: "Annual commitment; monthly-flexible billing may cost more", fit: "Teams that want Gmail with shared Drive, Docs, Meet and admin controls", caveat: "30 GB pooled storage per user; promotions are temporary and standard renewal pricing applies.", url: "https://workspace.google.com/pricing" },
];

export default function Page() {
  return (
    <main className="bg-white">
      <article className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Software pricing · Updated October 18, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">Business email hosting pricing: compare the real cost per mailbox</h1>
        <p className="sp-body-large mt-6 max-w-3xl">A professional email address on your own domain can cost about a dollar per mailbox each month or much more when it is bundled with collaboration apps and security. Compare the number of mailboxes, storage, renewal price and tools you would otherwise buy separately—not just the headline monthly figure.</p>
        <section className="mt-10 overflow-x-auto rounded-2xl border border-[#d2d2d7]">
          <table className="w-full min-w-[740px] border-collapse text-left text-sm">
            <thead className="bg-[#f5f5f7]"><tr><th className="p-4">Plan</th><th className="p-4">Published price</th><th className="p-4">Best fit</th><th className="p-4">Important caveat</th></tr></thead>
            <tbody>{providers.map((p) => <tr key={p.name} className="border-t border-[#d2d2d7] align-top"><td className="p-4"><a className="font-semibold text-[#001D39] underline" href={p.url} target="_blank" rel="noreferrer">{p.name}</a><p className="mt-2 text-[#6e6e73]">{p.billing}</p></td><td className="p-4 whitespace-nowrap">{p.price}</td><td className="p-4">{p.fit}</td><td className="p-4">{p.caveat}</td></tr>)}</tbody>
          </table>
        </section>
        <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">Prices are published US list prices checked October 18, 2026, before tax and excluding temporary offers. Providers change packaging and billing terms; verify the plan and renewal total in the official checkout flow.</p>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">What does business email cost for a team?</h2>
          <p className="mt-4 leading-relaxed text-[#424245]">At the published annual rates above, five Zoho Mail Lite mailboxes cost about $5/month or $60/year before tax. Five Microsoft 365 Business Basic mailboxes cost $35/month or $420/year, while five Google Workspace Business Starter mailboxes cost $35/month or $420/year on an annual commitment. These totals exclude domain registration and any optional migration or security services.</p>
          <p className="mt-4 leading-relaxed text-[#424245]">The comparison is not feature-for-feature: Microsoft 365 and Google Workspace bundle productivity tools that may replace other subscriptions. If your team only needs reliable custom-domain inboxes, paying for a full collaboration suite may be unnecessary; if you need shared documents, meetings and managed user accounts, the bundle can be better value.</p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Email-only hosting vs. a productivity suite</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li><strong>Choose email-first hosting</strong> when inboxes, calendars and basic admin are the main requirements and your team already has document and meeting tools.</li>
            <li><strong>Choose a suite</strong> when shared files, office apps, video meetings, identity management and collaboration would otherwise be separate expenses.</li>
            <li><strong>Budget for every mailbox</strong>, including role addresses such as accounts@ or support@. Aliases, shared mailboxes and separate users can be billed differently.</li>
            <li><strong>Plan for domain ownership</strong>: register the domain separately where possible, keep registrar access documented, and ensure more than one trusted administrator can recover the email tenant.</li>
          </ul>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Setup and migration costs people miss</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li>DNS setup for MX, SPF, DKIM and DMARC to route mail and reduce spoofing risk.</li>
            <li>Migration of old mail, calendars, contacts and shared folders; test with one mailbox first.</li>
            <li>Retention, legal hold, archiving, endpoint management or advanced threat protection that may sit behind higher tiers.</li>
            <li>Renewal rates after introductory offers and the annual commitment required to obtain advertised discounts.</li>
            <li>Account offboarding: preserve required business records and transfer ownership of shared addresses before deleting a departing employee.</li>
          </ul>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Who should not pay for a full email suite?</h2>
          <p className="mt-4 leading-relaxed text-[#424245]">A solo operator who only needs a branded inbox may not need a complete office suite. On the other hand, do not select the cheapest mailbox solely by price if your business needs desktop apps, shared drives, centralized identity controls, retention policies or stronger security. Compare the annual total for the exact features and mailbox count you will use.</p>
        </section>

        <section className="mt-12 rounded-2xl bg-[#f5f5f7] p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Related StackPick guides</h2>
          <ul className="mt-4 space-y-2 text-[#001D39]">
            <li><Link className="underline" href="/best/business-email-hosting">Best business email hosting</Link></li>
            <li><Link className="underline" href="/best/cloud-storage">Cloud storage for small business teams</Link></li>
            <li><Link className="underline" href="/best/password-managers">Password managers for business teams</Link></li>
            <li><Link className="underline" href="/best/business-vpn">Business VPNs for remote teams</Link></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
