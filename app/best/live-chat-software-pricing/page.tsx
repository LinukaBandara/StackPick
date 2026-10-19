import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Chat Software Pricing (2026): Tidio, Crisp, Zoho SalesIQ & Intercom",
  description: "Compare live chat software prices, operator seats, conversation caps, AI usage charges and shared inbox features for small businesses.",
  alternates: { canonical: "/best/live-chat-software-pricing" },
};

const plans = [
  { name: "Tidio Free", price: "$0", billing: "Free forever", fit: "A small site testing basic live chat and simple visitor engagement", limits: "Up to 50 billable conversations; 100 Flows visitors reached; AI usage and visitor quotas are separate.", url: "https://www.tidio.com/pricing/" },
  { name: "Tidio Starter", price: "$24.17/mo", billing: "Annual billing equivalent", fit: "Small businesses that need basic analytics, operating hours and more human conversations", limits: "100 billable conversations; Lyro AI and Flows have separate limits/add-ons.", url: "https://www.tidio.com/pricing/" },
  { name: "Tidio Growth", price: "From $49.17/mo", billing: "Annual billing equivalent; usage configuration affects cost", fit: "Support teams needing permissions, assignment, macros and advanced analytics", limits: "Starts with a selected conversation quota; confirm the selected usage and AI allowances.", url: "https://www.tidio.com/pricing/" },
  { name: "Crisp Free", price: "$0/workspace", billing: "Free forever", fit: "Solo operators or very small teams needing a shared chat inbox", limits: "2 seats included; no AI credits included.", url: "https://crisp.chat/en/pricing/" },
  { name: "Crisp Mini", price: "$45/workspace/mo", billing: "Monthly list price", fit: "Small teams wanting shared email inbox, chat triggers and private notes", limits: "4 seats included and around 90 automated conversations; $5 of AI credits included.", url: "https://crisp.chat/en/pricing/" },
  { name: "Crisp Essentials", price: "$95/workspace/mo", billing: "Monthly list price", fit: "Teams needing omnichannel inbox, routing, knowledge base, analytics and automation", limits: "10 seats included; around 450 automated conversations; $25 of AI credits included.", url: "https://crisp.chat/en/pricing/" },
  { name: "Zoho SalesIQ Free", price: "$0", billing: "Free plan", fit: "Small businesses trying visitor tracking and basic live chat", limits: "3 operator licenses; confirm current chat/session quotas and the feature set in your region.", url: "https://www.zoho.com/salesiq/pricing-comparison.html" },
  { name: "Zoho SalesIQ Basic", price: "Check regional price", billing: "Per operator; monthly or annual options", fit: "Businesses needing more visitor insights, chat sessions and a basic chatbot", limits: "Official plan comparison displays prices by billing period and region; verify the exact currency and current rate.", url: "https://www.zoho.com/salesiq/pricing-comparison.html" },
  { name: "Intercom Essential", price: "$29/seat/mo", billing: "Annual billing; verify monthly rate", fit: "Support teams needing a shared inbox, ticketing, reporting and AI-agent access", limits: "Fin AI Agent usage starts at $0.99 per outcome, separate from the seat price.", url: "https://www.intercom.com/pricing" },
  { name: "Intercom Advanced", price: "$85/seat/mo", billing: "Annual billing; verify monthly rate", fit: "Growing teams needing multiple inboxes, workflow automation and round-robin assignment", limits: "Fin outcomes and some messaging channels are usage-based; included Lite seats have limited permissions.", url: "https://www.intercom.com/pricing" },
];

export default function Page() {
  return (
    <main className="bg-white">
      <article className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Software pricing · Updated October 19, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">Live chat software pricing: compare seats, conversations and AI fees</h1>
        <p className="sp-body-large mt-6 max-w-3xl">A live chat tool may charge per agent, per workspace, by the number of conversations, or for AI-resolved outcomes. That makes headline prices misleading if you do not compare the billing unit. This guide covers Tidio, Crisp, Zoho SalesIQ and Intercom, with an emphasis on the cost of serving a small-business website without unexpected AI or usage charges.</p>

        <section className="mt-10 overflow-x-auto rounded-2xl border border-[#d2d2d7]">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead className="bg-[#f5f5f7]"><tr><th className="p-4">Plan</th><th className="p-4">Published price</th><th className="p-4">Best fit</th><th className="p-4">Cost limit to check</th></tr></thead>
            <tbody>{plans.map((p) => <tr key={p.name} className="border-t border-[#d2d2d7] align-top"><td className="p-4"><a className="font-semibold text-[#001D39] underline" href={p.url} target="_blank" rel="noreferrer">{p.name}</a><p className="mt-2 text-[#6e6e73]">{p.billing}</p></td><td className="p-4 whitespace-nowrap">{p.price}</td><td className="p-4">{p.fit}</td><td className="p-4">{p.limits}</td></tr>)}</tbody>
          </table>
        </section>
        <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">Official pricing pages checked October 19, 2026. Prices are shown in USD where clearly published; Zoho SalesIQ pricing can vary by region and billing term. Tidio prices shown are annual-billing equivalents. Confirm current quotas, taxes and checkout totals before subscribing.</p>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Understand the billing model first</h2>
          <div className="mt-5 space-y-5 text-[#424245]">
            <div><h3 className="font-semibold text-[#1d1d1f]">Per agent or per seat</h3><p className="mt-2 leading-relaxed">Intercom charges for full seats, so estimate the bill by multiplying the plan price by agents who need full access. Higher tiers may include limited Lite seats, but those do not give every teammate the same permissions.</p></div>
            <div><h3 className="font-semibold text-[#1d1d1f]">Per workspace</h3><p className="mt-2 leading-relaxed">Crisp's published plans are priced per workspace with included seat counts. This can be easier to budget when several agents share one inbox, but check the number of included seats, channels and AI credits before comparing it with per-agent tools.</p></div>
            <div><h3 className="font-semibold text-[#1d1d1f]">Conversation quotas and AI outcomes</h3><p className="mt-2 leading-relaxed">Tidio offers selectable human-conversation quotas and separate Lyro AI/Flows limits. Intercom charges $0.99 per Fin outcome in addition to seat costs. Estimate both human-handled and AI-handled conversations instead of assuming every chat is included in the base subscription.</p></div>
          </div>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Estimate the total monthly cost</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li><strong>Agents:</strong> count everyone who needs to reply, assign chats or access customer records.</li>
            <li><strong>Conversation volume:</strong> estimate human conversations, bot-handled conversations and repeat visitors; check how each vendor defines a billable conversation or outcome.</li>
            <li><strong>Channels:</strong> website chat may be included, while WhatsApp, SMS, email campaigns or other channels may have separate usage charges.</li>
            <li><strong>Automation:</strong> check bot sessions, AI credits, automation triggers, knowledge-base features and whether extra usage is pay-as-you-go.</li>
            <li><strong>Branding and routing:</strong> remove vendor branding, add departments, set round-robin rules or use advanced analytics only if the business needs them.</li>
            <li><strong>Annual billing:</strong> compare the annual amount due with a true month-to-month plan, and check the renewal price.</li>
          </ul>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Who should not upgrade yet?</h2>
          <p className="mt-4 leading-relaxed text-[#424245]">If you receive only a few website enquiries and can answer them manually, start with a free plan or a basic contact form. Do not pay for advanced routing, omnichannel support or AI automation until you know your conversation volume and have recurring questions to automate. A paid plan is easier to justify when faster responses, shared ownership and a reliable customer history prevent lost leads or repeated work.</p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Before installing live chat</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li>Decide who owns incoming chats, business hours, escalation and response-time expectations.</li>
            <li>Publish a privacy notice that explains chat data, cookies and any AI-assisted processing.</li>
            <li>Test the widget on mobile, check page performance and ensure it does not block important content.</li>
            <li>Connect only the channels and CRM integrations the team will actually use.</li>
            <li>Test export, retention and deletion options before making the inbox a permanent customer record.</li>
          </ol>
        </section>

        <section className="mt-12 rounded-2xl bg-[#f5f5f7] p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Related StackPick guides</h2>
          <ul className="mt-4 space-y-2 text-[#001D39]">
            <li><Link className="underline" href="/best/crm-software-pricing">CRM software pricing</Link></li>
            <li><Link className="underline" href="/best/ai-meeting-assistants">AI meeting assistants</Link></li>
            <li><Link className="underline" href="/best/project-management-software">Project management software</Link></li>
          </ul>
        </section>
        <p className="mt-8 text-xs leading-relaxed text-[#6e6e73]">Editorial comparison checked October 19, 2026. Usage-based prices and plan packaging change; verify your region, quotas and billing term on the official pricing pages before buying.</p>
      </article>
    </main>
  );
}
