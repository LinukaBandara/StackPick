import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Meeting Assistant Pricing (2026): Fathom, Fireflies, Otter & Granola",
  description: "Compare AI meeting note-taker pricing, free-plan limits, transcription allowances, team features, bot-free capture and data controls.",
  alternates: { canonical: "/best/ai-meeting-assistant-pricing" },
};

const plans = [
  { name: "Fathom Free", price: "$0", billing: "Free forever", fit: "Individuals who want meeting recordings, transcripts and summaries without a subscription", limits: "Advanced summaries and team-wide controls are limited by plan; check current feature allowances.", url: "https://www.fathom.ai/pricing" },
  { name: "Fathom Premium", price: "$16/user/mo", billing: "Annual billing; $20 monthly", fit: "Individuals needing advanced summaries, action items and a custom meeting bot", limits: "Team collaboration and shared workflows are on team plans.", url: "https://www.fathom.ai/pricing" },
  { name: "Fathom Team", price: "$15/user/mo", billing: "Annual billing; $19 monthly; 2-user minimum", fit: "Small teams that need shared recordings, comments and collaboration", limits: "Business tier adds CRM field sync, deal views and coaching features.", url: "https://www.fathom.ai/pricing" },
  { name: "Fireflies Free", price: "$0", billing: "Free forever", fit: "Testing transcription and basic AI notes", limits: "400 minutes of storage per team and limited AI summaries/credits; storage is not the same as monthly transcription allowance.", url: "https://fireflies.ai/pricing" },
  { name: "Fireflies Pro", price: "$10/seat/mo", billing: "Billed annually; $18 monthly", fit: "Individuals or small teams needing unlimited transcription, summaries and integrations", limits: "8,000 minutes of storage per seat; Business adds unlimited storage and team analytics.", url: "https://fireflies.ai/pricing" },
  { name: "Fireflies Business", price: "$19/seat/mo", billing: "Billed annually; $29 monthly", fit: "Teams needing conversation intelligence, analytics and expanded storage", limits: "Enterprise security, SSO/SCIM and advanced governance require Enterprise.", url: "https://fireflies.ai/pricing" },
  { name: "Otter Basic", price: "$0", billing: "Free forever", fit: "Occasional meetings and live transcription", limits: "300 transcription minutes/month, 30 minutes per conversation and 3 lifetime audio/video imports.", url: "https://otter.ai/pricing-new" },
  { name: "Otter Pro", price: "$8.33/user/mo", billing: "Annual-billing equivalent; verify current checkout price", fit: "Individuals needing more transcription minutes, longer meetings and exports", limits: "1,200 in-app recording minutes/month, up to 90 minutes per meeting and 10 file imports/month.", url: "https://otter.ai/pricing-new" },
  { name: "Otter Business", price: "$20/user/mo", billing: "Annual-billing equivalent shown on vendor page; verify checkout", fit: "Teams needing longer meetings, more transcription capacity and admin controls", limits: "6,000 transcription minutes and up to 4 hours per meeting on published plan comparison.", url: "https://otter.ai/pricing-new" },
  { name: "Granola Basic", price: "$0/user/mo", billing: "Free", fit: "Individuals trying device-audio capture and AI notes without a meeting bot", limits: "Limited meeting history; advanced integrations and full history require Business.", url: "https://www.granola.ai/pricing" },
  { name: "Granola Business", price: "$14/user/mo", billing: "Monthly per-user price", fit: "Individuals and small teams needing full history, integrations, API and MCP access", limits: "Enterprise adds SSO, organization-wide admin controls and retention policies.", url: "https://www.granola.ai/pricing" },
];

export default function Page() {
  return (
    <main className="bg-white">
      <article className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Software pricing · Updated October 19, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">AI meeting assistant pricing: what do notes and transcripts really cost?</h1>
        <p className="sp-body-large mt-6 max-w-3xl">AI meeting assistants differ in how they capture calls, limit free usage, store recordings and share notes with a team. This guide compares published US pricing for Fathom, Fireflies.ai, Otter.ai and Granola. A free plan may be enough for one person, while searchable archives, CRM automation, team analytics and organization-wide controls can move the cost up quickly.</p>

        <section className="mt-10 overflow-x-auto rounded-2xl border border-[#d2d2d7]">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead className="bg-[#f5f5f7]"><tr><th className="p-4">Plan</th><th className="p-4">Published price</th><th className="p-4">Best fit</th><th className="p-4">Limit to verify</th></tr></thead>
            <tbody>{plans.map((p) => <tr key={p.name} className="border-t border-[#d2d2d7] align-top"><td className="p-4"><a className="font-semibold text-[#001D39] underline" href={p.url} target="_blank" rel="noreferrer">{p.name}</a><p className="mt-2 text-[#6e6e73]">{p.billing}</p></td><td className="p-4 whitespace-nowrap">{p.price}</td><td className="p-4">{p.fit}</td><td className="p-4">{p.limits}</td></tr>)}</tbody>
          </table>
        </section>
        <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">Official vendor pricing pages checked October 19, 2026. Some vendors show an annual-billing monthly equivalent beside a higher monthly rate; Otter's displayed annual figures can vary by offer and region. Check the final checkout total, tax, seat minimums and current feature limits before purchasing.</p>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Compare the capture method before the price</h2>
          <div className="mt-5 space-y-5 text-[#424245]">
            <div><h3 className="font-semibold text-[#1d1d1f]">Meeting bot versus bot-free capture</h3><p className="mt-2 leading-relaxed">Fathom, Fireflies and Otter commonly join supported video calls as a meeting assistant. Granola advertises device-audio capture without a bot. A bot-free workflow may feel less intrusive, but confirm how audio is captured on your device, what gets stored and whether the approach works with your meeting platform and company policies.</p></div>
            <div><h3 className="font-semibold text-[#1d1d1f]">Free-plan limits are not interchangeable</h3><p className="mt-2 leading-relaxed">Otter's Basic plan lists monthly transcription minutes and a per-meeting cap. Fireflies separates transcription from storage and AI credits. Granola limits meeting history on Basic. Fathom offers unlimited recordings on its free individual tier, while some advanced features are limited. Test with your own meeting length and language before relying on a free plan.</p></div>
            <div><h3 className="font-semibold text-[#1d1d1f]">Individual plans versus team plans</h3><p className="mt-2 leading-relaxed">A low individual price may not include shared folders, team-wide search, CRM field sync, coaching metrics, audit logs or single sign-on. For a team, calculate paid seats multiplied by the price and check any minimum seats before comparing totals.</p></div>
          </div>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Calculate your real monthly cost</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li><strong>Seat count:</strong> multiply the per-user rate by every person who needs a license, and include any minimum seat requirement.</li>
            <li><strong>Recording and storage:</strong> check meeting duration, transcription minutes, file-import caps, history retention and whether recordings can be downloaded.</li>
            <li><strong>Integrations:</strong> confirm whether your CRM, project tracker, Slack, Notion or automation workflow is included on the chosen tier.</li>
            <li><strong>AI allowances:</strong> distinguish unlimited transcription from limited AI summaries, credits, chat queries or advanced templates.</li>
            <li><strong>Annual billing:</strong> compare the full annual amount charged upfront with the monthly price; do not treat an annual equivalent as a monthly-cancellable rate.</li>
          </ul>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Privacy, consent and data portability</h2>
          <p className="mt-4 leading-relaxed text-[#424245]">Before recording a customer, candidate or confidential planning call, tell participants and follow the laws and workplace rules that apply to the meeting. Review each vendor's retention, deletion, model-training, access-control and data-export settings. Confirm who can access shared notes, whether recordings can be deleted automatically and how to export transcripts before cancelling.</p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Who should not pay for an AI meeting assistant?</h2>
          <p className="mt-4 leading-relaxed text-[#424245]">Do not upgrade just to automate occasional low-stakes meetings if the free tier already provides usable notes. Do not buy a team plan for advanced CRM sync if nobody will maintain that workflow. Conversely, do not rely on a free tier for mission-critical archives until you have checked retention, export, transcription caps and administrative controls.</p>
        </section>

        <section className="mt-12 rounded-2xl bg-[#f5f5f7] p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Related StackPick guides</h2>
          <ul className="mt-4 space-y-2 text-[#001D39]">
            <li><Link className="underline" href="/best/ai-meeting-assistants">AI meeting assistants</Link></li>
            <li><Link className="underline" href="/best/project-management-software">Project management software pricing and features</Link></li>
            <li><Link className="underline" href="/best/crm-software-pricing">CRM software pricing</Link></li>
          </ul>
        </section>
        <p className="mt-8 text-xs leading-relaxed text-[#6e6e73]">Editorial comparison of public US pricing checked October 19, 2026. Vendor plans and limits change; verify the current official pricing and data-handling terms before uploading or recording sensitive meetings.</p>
      </article>
    </main>
  );
}
