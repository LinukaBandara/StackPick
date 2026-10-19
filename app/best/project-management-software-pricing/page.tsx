import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project Management Software Pricing (2026): Trello, ClickUp & Asana",
  description: "Compare project management software prices, five-person team costs, free-plan limits and upgrade triggers for Trello, ClickUp and Asana.",
  alternates: { canonical: "/best/project-management-software-pricing" },
};

const plans = [
  { name: "Trello Standard", price: "$5/user/mo annual", monthly: "$6/user/mo", five: "$25/mo annual equivalent", detail: "Unlimited boards, custom fields, advanced checklists and 1,000 Workspace command runs/month.", url: "https://trello.com/pricing" },
  { name: "ClickUp Unlimited", price: "$7/user/mo annual", monthly: "$10/user/mo", five: "$35/mo annual equivalent", detail: "Unlimited storage, Gantt charts, integrations, custom fields and native time tracking.", url: "https://clickup.com/pricing" },
  { name: "Asana Starter", price: "$10.99/user/mo annual", monthly: "$13.49/user/mo", five: "$54.95/mo annual equivalent", detail: "Timeline/Gantt views, reporting dashboards, forms, custom fields and automations.", url: "https://asana.com/pricing" },
];

export default function Page() {
  return (
    <main className="bg-white">
      <article className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Software pricing · Updated October 19, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">Project management software pricing: what a small team pays</h1>
        <p className="sp-body-large mt-6 max-w-3xl">Compare the published US prices for Trello’s visual boards, ClickUp’s configurable workspace and Asana’s structured project coordination. Subscription cost depends on seat count, annual commitments, automation limits and the views your team needs.</p>
        <section className="mt-10 overflow-x-auto rounded-2xl border border-[#d2d2d7]">
          <table className="w-full min-w-[740px] border-collapse text-left text-sm">
            <thead className="bg-[#f5f5f7]"><tr><th className="p-4">Plan</th><th className="p-4">Annual rate</th><th className="p-4">Monthly billing</th><th className="p-4">5 users, annual rate</th><th className="p-4">Paid features</th></tr></thead>
            <tbody>{plans.map((p) => <tr key={p.name} className="border-t border-[#d2d2d7] align-top"><td className="p-4 font-semibold"><a className="text-[#001D39] underline" href={p.url} target="_blank" rel="noreferrer">{p.name}</a></td><td className="p-4">{p.price}</td><td className="p-4">{p.monthly}</td><td className="p-4">{p.five}</td><td className="p-4">{p.detail}</td></tr>)}</tbody>
          </table>
        </section>
        <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">Official US pricing checked October 19, 2026. Annual rates are monthly equivalents paid on an annual commitment; taxes and optional add-ons are excluded. Verify the current checkout total before subscribing.</p>
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Free-plan limits that matter</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li><strong>Trello Free:</strong> $0, up to 10 collaborators per Workspace, up to 10 boards and 250 Workspace command runs/month. Upgrade when you need unlimited boards, custom fields or higher automation limits.</li>
            <li><strong>ClickUp Free Forever:</strong> $0, unlimited tasks and free-plan members, but 60 MB storage and one form. Upgrade for unlimited storage, more advanced reporting or native time tracking.</li>
            <li><strong>Asana Personal:</strong> $0 for up to two users with unlimited tasks and projects. Upgrade when you need a larger team, timelines, dashboards, forms or custom fields.</li>
          </ul>
        </section>
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Which plan fits?</h2>
          <p className="mt-4 leading-relaxed text-[#424245]"><strong>Trello Standard</strong> is a low-cost choice when boards, cards and checklists cover your workflow. Workspace members and some multi-board guests may be billable.</p>
          <p className="mt-4 leading-relaxed text-[#424245]"><strong>ClickUp Unlimited</strong> bundles features such as time tracking, Gantt charts and custom fields, but needs thoughtful setup to avoid unnecessary complexity.</p>
          <p className="mt-4 leading-relaxed text-[#424245]"><strong>Asana Starter</strong> costs more per seat but includes timeline planning, forms, reporting dashboards and automations that may help teams coordinate ownership and handoffs.</p>
        </section>
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Hidden costs to include</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li>Billable users, contractors and guest seats.</li>
            <li>Monthly automation and integration action limits.</li>
            <li>AI usage limits, credits and paid add-ons.</li>
            <li>Export support for tasks, attachments, comments and activity history.</li>
            <li>Staff time for setup, training and maintaining a configurable workspace.</li>
          </ul>
        </section>
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Who should not pay?</h2>
          <p className="mt-4 leading-relaxed text-[#424245]">A solo freelancer or a pair of collaborators should test the free tiers against a real project first. Do not pay for Gantt charts, advanced automation or portfolio reporting unless those features solve an existing bottleneck. Upgrade when seat, board, storage or visibility restrictions create workarounds.</p>
        </section>
        <section className="mt-12 rounded-2xl bg-[#f5f5f7] p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Related StackPick guides</h2>
          <ul className="mt-4 space-y-2 text-[#001D39]">
            <li><Link className="underline" href="/best/project-management-software">Best project management software for small teams</Link></li>
            <li><Link className="underline" href="/best/free-project-management-software">Best free project management software</Link></li>
            <li><Link className="underline" href="/best/project-management-for-freelancers">Project management for freelancers</Link></li>
            <li><Link className="underline" href="/best/trello-vs-asana">Trello vs Asana</Link></li>
            <li><Link className="underline" href="/best/asana-vs-clickup">Asana vs ClickUp</Link></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
