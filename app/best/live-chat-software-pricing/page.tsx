import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Chat Software Pricing (2026): Tidio, Intercom & tawk.to",
  description: "Compare live chat pricing, billable conversations, agent seats, AI resolution fees and branding costs for small-business websites.",
  alternates: { canonical: "/best/live-chat-software-pricing" },
};

const plans = [
  { name: "tawk.to Live Chat", price: "$0", billing: "Free forever", fit: "Businesses that want a website chat widget with unlimited team members", limits: "Vendor branding remains unless you pay to remove it; AI and outsourced agent services are separate add-ons.", url: "https://www.tawk.to/products/live-chat/" },
  { name: "tawk.to Remove Branding", price: "$29/mo", billing: "Monthly add-on", fit: "Teams that want the free live-chat product without its visible branding", limits: "This is a branding add-on, not a full customer-support staffing service.", url: "https://www.tawk.to/why-free/" },
  { name: "Tidio Starter", price: "From $24.17/mo", billing: "Annual-billing price shown for 100 billable conversations", fit: "Small businesses that need live chat, basic analytics and a defined conversation allowance", limits: "Human-handled chats and tickets can count toward a monthly billable-conversation quota; AI conversations and add-ons may be priced separately.", url: "https://www.tidio.com/pricing/" },
  { name: "Intercom Essential", price: "$29/seat/mo", billing: "Annual billing; AI usage billed separately", fit: "Teams that need a shared inbox, ticketing, help center and live chat in one support platform", limits: "Fin AI Agent starts at $0.99 per outcome; additional channels and add-ons can increase the bill.", url: "https://www.intercom.com/pricing" },
  { name: "Intercom Advanced", price: "$85/seat/mo", billing: "Annual billing; AI usage billed separately", fit: "Growing support teams needing workflows, multiple inboxes and round-robin assignment", limits: "Includes 20 Lite seats, but full seats and AI outcomes remain important cost drivers.", url: "https://www.intercom.com/pricing" },
  { name: "Intercom Expert", price: "$132/seat/mo", billing: "Annual billing; AI usage billed separately", fit: "Organizations needing advanced identity, SLA and multibrand controls", limits: "A high per-seat baseline plus usage-based AI and channel charges can be excessive for low-volume sites.", url: "https://www.intercom.com/pricing" },
];

export default function Page() {
  return (
    <main className="bg-white">
      <article className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Software pricing · Updated October 19, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">Live chat software pricing: compare the cost per conversation and support agent</h1>
        <p className="sp-body-large mt-6 max-w-3xl">A free chat widget can be enough when your team answers messages itself. Costs rise when you need conversation quotas, AI resolutions, multiple agent seats, automation, or a help center and ticketing system. This comparison separates a free live-chat tool from a broader customer-support platform, and highlights the usage charges that a simple monthly price can hide.</p>

        <section className="mt-10 overflow-x-auto rounded-2xl border border-[#d2d2d7]">
          <table className="w-full min-w-[850px] border-collapse text-left text-sm">
            <thead className="bg-[#f5f5f7]"><tr><th className="p-4">Plan</th><th className="p-4">Published price</th><th className="p-4">Best fit</th><th className="p-4">Cost or limit to check</th></tr></thead>
            <tbody>{plans.map((p) => <tr key={p.name} className="border-t border-[#d2d2d7] align-top"><td className="p-4"><a className="font-semibold text-[#001D39] underline" href={p.url} target="_blank" rel="noreferrer">{p.name}</a><p className="mt-2 text-[#6e6e73]">{p.billing}</p></td><td className="p-4 whitespace-nowrap">{p.price}</td><td className="p-4">{p.fit}</td><td className="p-4">{p.limits}</td></tr>)}</tbody>
          </table>
        </section>
        <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">Published US-dollar prices checked October 19, 2026. Tidio's displayed price depends on the selected conversation allowance and billing term. Intercom prices above are per full seat, with AI outcomes charged separately. Taxes, promotions and usage charges may change the final bill.</p>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Understand what each vendor bills for</h2>
          <div className="mt-5 space-y-5 text-[#424245]">
            <div><h3 className="font-semibold text-[#1d1d1f]">Conversation-based pricing</h3><p className="mt-2 leading-relaxed">Tidio's pricing calculator asks how many billable conversations human agents handle each month. Estimate your real monthly volume from chat and tickets, not just website sessions. Ask how AI-handled conversations are counted, what happens when the quota is reached and whether unused conversations roll over.</p></div>
            <div><h3 className="font-semibold text-[#1d1d1f]">Seat plus AI outcome pricing</h3><p className="mt-2 leading-relaxed">Intercom combines full agent seats with usage-based Fin AI Agent outcomes. At $0.99 per outcome, AI charges can become material when volumes rise. Model the monthly cost as paid seats plus expected AI outcomes and any paid messaging channels or add-ons. Review what the vendor counts as a billable outcome.</p></div>
            <div><h3 className="font-semibold text-[#1d1d1f]">Free widget with optional add-ons</h3><p className="mt-2 leading-relaxed">tawk.to offers a free live-chat product with unlimited team members. The optional $29/month branding-removal add-on is different from paying for AI automation or outsourced human agents. Confirm which product or add-on is actually required for your use case.</p></div>
          </div>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">A practical cost model for your website</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li>Estimate monthly inbound chats, support tickets and the share that need a human response.</li>
            <li>Count full agent seats that require replying, assigning or managing conversations; do not assume every teammate is a free seat.</li>
            <li>For AI, estimate resolved outcomes rather than total messages and verify the vendor's billing definition.</li>
            <li>Add optional costs for removing branding, automation, knowledge-base features, phone, SMS, WhatsApp and integrations.</li>
            <li>Calculate the annual cost at standard renewal rates and set usage alerts or caps if the vendor supports them.</li>
          </ol>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Questions to ask before upgrading</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li><strong>What counts as a billable conversation or AI outcome?</strong> Ask for examples of reopened chats, multiple messages and escalations.</li>
            <li><strong>Can the chat widget route by team or business hours?</strong> Basic live chat may not include round-robin routing, SLA rules or multiple inboxes.</li>
            <li><strong>Can you export transcripts and customer data?</strong> Check retention, data export and deletion options before relying on chat history.</li>
            <li><strong>What is included in the free tier?</strong> Verify branding, agent seats, conversation quotas, integrations and data history.</li>
            <li><strong>Can your team support customers in their language and time zone?</strong> Check translation features and regional channel charges rather than assuming they're included.</li>
          </ul>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Who should not pay for a full support platform?</h2>
          <p className="mt-4 leading-relaxed text-[#424245]">If you receive only a few chats each week and one person can respond, start with a free widget. Do not buy an AI agent before you have a clear knowledge base, escalation path and enough support volume to justify outcome charges. Conversely, if multiple agents need shared inboxes, ticket history, routing and reporting, a basic chat widget may create manual work that costs more than the subscription saves.</p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Before switching chat providers</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li>Export chat transcripts, customer details, tags and saved replies where the current provider supports them.</li>
            <li>Rebuild operating hours, routing, escalation rules, help-center links and automated answers.</li>
            <li>Install the new widget in a staging page and test mobile behavior, page speed, consent requirements and accessibility.</li>
            <li>Test an AI answer that should escalate to a human, and confirm handoff, transcript context and customer expectations.</li>
            <li>Update the production widget and monitor missed chats, response times, costs and customer feedback before cancelling the old service.</li>
          </ol>
        </section>

        <section className="mt-12 rounded-2xl bg-[#f5f5f7] p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Related StackPick guides</h2>
          <ul className="mt-4 space-y-2 text-[#001D39]">
            <li><Link className="underline" href="/best/live-chat-software">Best live chat software for small business websites</Link></li>
            <li><Link className="underline" href="/best/help-desk-software">Best help desk software for small business</Link></li>
            <li><Link className="underline" href="/best/ai-customer-support-tools">AI customer support tools</Link></li>
          </ul>
        </section>
        <p className="mt-8 text-xs leading-relaxed text-[#6e6e73]">Editorial comparison of official vendor pricing checked October 19, 2026. Pricing models, included quotas and AI billing definitions can change; confirm the exact plan and usage terms with each provider before purchase.</p>
      </article>
    </main>
  );
}
