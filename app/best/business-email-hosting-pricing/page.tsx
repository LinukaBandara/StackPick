import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Email Hosting Pricing: Google, Microsoft & Zoho (2026)",
  description: "Compare US business email hosting prices for Google Workspace, Microsoft 365, Zoho Mail and Proton Mail, including annual commitments and suite trade-offs.",
  alternates: { canonical: "/best/business-email-hosting-pricing" },
};

const plans = [
  { name: "Zoho Mail Lite", price: "$1/user/month", billing: "Annual billing; verify current regional terms", five: "$5/month for 5 users", ten: "$10/month for 10 users", best: "Low-cost custom-domain email", tradeoff: "Email-focused plans have fewer bundled office and collaboration tools.", url: "https://www.zoho.com/mail/zohomail-pricing.html" },
  { name: "Microsoft 365 Business Basic (no Teams)", price: "$5.40/user/month", billing: "Annual subscription; monthly commitment option costs more", five: "$27/month for 5 users", ten: "$54/month for 10 users", best: "Email plus web/mobile Office apps and OneDrive", tradeoff: "Compare the no-Teams and Teams editions, and check which apps your staff need.", url: "https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-plans-and-pricing" },
  { name: "Microsoft 365 Business Basic", price: "$7/user/month", billing: "Annual subscription; monthly commitment option costs more", five: "$35/month for 5 users", ten: "$70/month for 10 users", best: "Businesses that use Outlook, Teams and Microsoft 365", tradeoff: "The listed price is per licensed user and excludes applicable tax.", url: "https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-plans-and-pricing" },
  { name: "Google Workspace Business Starter", price: "$7/user/month", billing: "One-year commitment; flexible billing is $8.40/user/month", five: "$35/month on annual commitment", ten: "$70/month on annual commitment", best: "Gmail, Calendar, Drive, Meet and shared Google documents", tradeoff: "The lower price assumes a one-year commitment; flexible monthly billing costs more.", url: "https://workspace.google.com/" },
  { name: "Proton Mail Essentials", price: "Check current business pricing", billing: "Price depends on plan and billing cycle", five: "Multiply the current per-user price by 5", ten: "Multiply the current per-user price by 10", best: "Organizations prioritizing privacy-focused email", tradeoff: "Confirm custom-domain support, admin controls, migration options and the exact current price.", url: "https://proton.me/business/mail" },
];

export default function Page() {
  return (
    <main className="bg-white">
      <section className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Pricing guide · United States · Checked October 18, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">Business email hosting pricing: cost per mailbox and team</h1>
        <p className="sp-body-large mt-6 max-w-3xl">Professional email costs depend on more than the headline price. Decide whether you need email only or a full productivity suite, then multiply the per-user cost by every licensed mailbox and check the billing commitment.</p>
        <p className="mt-5 max-w-3xl text-sm text-slate-600">The prices below are standard US list-price references, not promotional offers. Regional taxes, billing options, product editions and vendor changes can affect the amount you pay. Verify each linked official page before checkout.</p>
      </section>
      <section className="sp-container pb-12">
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[780px] border-collapse text-left text-sm">
            <thead className="bg-slate-50"><tr><th className="p-4">Plan</th><th className="p-4">Published price</th><th className="p-4">5-user estimate</th><th className="p-4">10-user estimate</th><th className="p-4">Best fit / trade-off</th></tr></thead>
            <tbody>{plans.map((p) => <tr key={p.name} className="border-t border-slate-200 align-top">
              <td className="p-4 font-semibold"><a className="underline underline-offset-4" href={p.url} target="_blank" rel="noreferrer">{p.name}</a><p className="mt-2 text-xs font-normal text-slate-500">{p.billing}</p></td>
              <td className="p-4 font-semibold">{p.price}</td><td className="p-4">{p.five}</td><td className="p-4">{p.ten}</td>
              <td className="p-4"><p>{p.best}</p><p className="mt-2 text-xs text-slate-500">{p.tradeoff}</p></td>
            </tr>)}</tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">Team estimates multiply the listed per-user price by the number of paid users; they exclude tax, add-ons, domain registration and migration services. For Proton Mail, use the current vendor price rather than relying on a stale figure.</p>
      </section>
      <section className="sp-container grid gap-10 py-10 md:grid-cols-2">
        <div><h2 className="text-2xl font-semibold tracking-tight">Email-only hosting or a full suite?</h2>
          <p className="mt-3 text-slate-600">Email-only hosting can cost less if your team already has calendars, file storage and office apps. Google Workspace and Microsoft 365 can be better value when your business will use the bundled tools and administration features.</p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700"><li>Count actual mailboxes, shared addresses and aliases separately; aliases may not require a separate paid user, depending on the vendor.</li><li>Check storage per user versus pooled storage, attachment limits and retention rules.</li><li>Compare annual commitment against flexible billing and calculate the cost for a full year.</li><li>Confirm custom-domain support and whether your domain or DNS configuration is included.</li></ul>
        </div>
        <div><h2 className="text-2xl font-semibold tracking-tight">Deliverability and security checks</h2>
          <p className="mt-3 text-slate-600">A mailbox subscription does not guarantee that every message reaches the inbox. Before migrating, plan your domain authentication and account protections.</p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700"><li>Set up and validate SPF, DKIM and DMARC records for the sending services you use.</li><li>Enable multifactor authentication and recovery methods for administrators.</li><li>Test mail flow to Gmail, Outlook and important customer domains before changing MX records for everyone.</li><li>Check export tools, retention, admin access and what happens to mailboxes after cancellation.</li></ul>
        </div>
      </section>
      <section className="sp-container py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Who should not pay for a full business email suite?</h2>
        <p className="mt-3 max-w-3xl text-slate-600">If you only need a few custom-domain inboxes and already pay for documents, storage and meetings elsewhere, a full suite may duplicate subscriptions. On the other hand, choosing the cheapest mailbox without checking admin security, spam filtering, support, data export and uptime requirements can cost more in operational risk.</p>
        <div className="mt-8 rounded-2xl bg-slate-50 p-6"><h2 className="text-xl font-semibold">Migration checklist</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700"><li>Inventory users, aliases, shared mailboxes, groups, calendars and forwarding rules.</li><li>Export important email and contacts, and check calendar migration separately.</li><li>Lower DNS TTL in advance where appropriate, then plan MX, SPF, DKIM and DMARC changes.</li><li>Test a pilot mailbox, mobile devices, password recovery and outgoing authentication.</li><li>Keep the old service active until delivery and historical-mail checks pass.</li></ul></div>
      </section>
      <section className="sp-container py-12"><h2 className="text-2xl font-semibold tracking-tight">Related StackPick guides</h2><div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm"><Link className="underline underline-offset-4" href="/best/business-email-hosting">Best business email hosting</Link><Link className="underline underline-offset-4" href="/best/cloud-storage">Cloud storage for small teams</Link><Link className="underline underline-offset-4" href="/best/password-managers">Business password managers</Link></div></section>
    </main>
  );
}
