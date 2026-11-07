"use client";

import { usePathname } from "next/navigation";

type Source = { label: string; url: string };
type Evidence = { heading: string; facts: string[]; sources: Source[] };

const EVIDENCE: Record<string, Evidence> = {
  "invoice-clients-as-freelancer": {
    heading: "Plan limits that can change the invoicing choice",
    facts: [
      "FreshBooks currently lists 5 billable clients on Lite, 50 on Plus, and unlimited clients on Premium. Compare standard list pricing rather than temporary promotional prices.",
      "Wave publishes payment fees and payout timing for the United States and Canada. Do not assume the same payment-processing availability in other countries.",
      "The linked Zoho Invoice free offer is specifically for Indian businesses; its page lists up to 2 users, 3 projects and 500 invoices per year. Do not generalize those terms to every country.",
    ],
    sources: [
      { label: "FreshBooks plan comparison", url: "https://www.freshbooks.com/pricing" },
      { label: "Wave pricing", url: "https://www.waveapps.com/pricing" },
      { label: "Wave payment fees and payout timing", url: "https://support.waveapps.com/hc/en-us/articles/218323823-Online-payments-processing-fees-and-timelines" },
      { label: "Zoho Invoice India pricing and limits", url: "https://www.zoho.com/in/invoice/pricing/" },
    ],
  },
  "manage-customer-leads-as-freelancer": {
    heading: "Free CRM limits worth checking before migrating leads",
    facts: [
      "HubSpot Free currently allows up to 2 users and 1,000 contacts, with no time limit on free access. Other standard object types have separate record limits.",
      "Pipedrive describes four subscription plans—Lite, Growth, Premium and Ultimate—and optional add-ons/top-ups. Compare the billing cycle and add-ons, not just the entry plan name.",
      "Trello Free currently allows up to 10 collaborators per Workspace, 10 boards per Workspace and 250 Workspace command runs per month. It remains a board workflow, not a full CRM record.",
    ],
    sources: [
      { label: "HubSpot Free CRM limits", url: "https://www.hubspot.com/pricing/crm" },
      { label: "Pipedrive plan and billing explanation", url: "https://support.pipedrive.com/en/article/how-does-pricing-work-in-pipedrive" },
      { label: "Trello plan comparison", url: "https://trello.com/pricing" },
    ],
  },
  "free-vs-paid-business-software": {
    heading: "Examples of the limits hidden behind a free label",
    facts: [
      "HubSpot Free: up to 2 users and 1,000 contacts. This may be enough for a solo operator, but not for a larger sales team or contact database.",
      "Trello Free: up to 10 collaborators and 10 boards per Workspace, plus 250 Workspace command runs monthly.",
      "Notion Free: file uploads are limited to 5 MB each, page history is 7 days, and collaborative blocks are limited for workspaces with 2 or more members.",
      "ClickUp Free Forever: 60 MB workspace storage, unlimited tasks and unlimited free members; some views and forms still have usage limits.",
    ],
    sources: [
      { label: "HubSpot Free CRM limits", url: "https://www.hubspot.com/pricing/crm" },
      { label: "Trello plan comparison", url: "https://trello.com/pricing" },
      { label: "Notion plan comparison", url: "https://www.notion.com/pricing" },
      { label: "ClickUp plan comparison", url: "https://clickup.com/pricing" },
    ],
  },
  "manage-client-projects-without-full-time-team": {
    heading: "Capacity limits for a small client-delivery workflow",
    facts: [
      "ClickUp Free Forever lists 60 MB of workspace storage, unlimited tasks and unlimited free members. Its plan comparison also shows limits on certain views and forms.",
      "Trello Free allows up to 10 boards and 10 collaborators per Workspace, with 250 Workspace command runs per month.",
      "Notion Free limits uploads to 5 MB per file and page history to 7 days; its collaborative block allowance is limited for workspaces with 2 or more members.",
    ],
    sources: [
      { label: "ClickUp plan comparison", url: "https://clickup.com/pricing" },
      { label: "ClickUp view limits", url: "https://help.clickup.com/hc/en-us/articles/32274881672599-Views-feature-availability-and-limits" },
      { label: "Trello plan comparison", url: "https://trello.com/pricing" },
      { label: "Notion plan comparison", url: "https://www.notion.com/pricing" },
    ],
  },
  "ai-tools-marketing-small-businesses": {
    heading: "AI allowances are plan limits, not unlimited output",
    facts: [
      "Canva Free currently includes up to 20 uses of Standard AI tools or Premium AI tools per month. Canva Pro has a larger allowance, but the exact allowance depends on the AI tool category.",
      "Adobe Express lists daily free generations and 250 generative credits per month on Premium. Check the current plan table before comparing AI output volume.",
      "A useful comparison should also cover brand controls, collaboration, export formats, commercial-use terms and the amount of manual editing needed after generation.",
    ],
    sources: [
      { label: "Canva AI usage by plan", url: "https://www.canva.com/help/ai-access-variantb/" },
      { label: "Canva plan comparison", url: "https://www.canva.com/pricing/" },
      { label: "Adobe Express plan comparison", url: "https://www.adobe.com/express/pricing" },
    ],
  },
  "calendly-vs-google-calendar": {
    heading: "The free booking limits are not equivalent",
    facts: [
      "Calendly Free currently includes one event type and one calendar connection. Multiple event types and multiple calendar connections are paid-plan features.",
      "A personal Google Account or Workspace Business Starter can create one Google Calendar booking page. Some additional appointment-schedule features require an eligible Google Workspace or Google One subscription.",
      "Compare the booking workflow, calendar conflict checks, reminders, payments, multiple schedules and team routing—not just whether a booking link exists.",
    ],
    sources: [
      { label: "Calendly plan comparison", url: "https://calendly.com/pricing" },
      { label: "Google Calendar appointment-schedule feature comparison", url: "https://support.google.com/calendar/answer/16287038" },
      { label: "Create a Google Calendar appointment schedule", url: "https://support.google.com/calendar/answer/10729749" },
    ],
  },
  "notion-vs-clickup": {
    heading: "Compare the constraints that matter to a small team",
    facts: [
      "Notion Free allows file uploads up to 5 MB each and 7 days of page history. The Free plan has a collaborative block limit for workspaces with 2 or more members.",
      "ClickUp Free Forever lists 60 MB of workspace storage, unlimited tasks and unlimited free members. Its plan table also shows limits such as one Form and limited Gantt-view uses.",
      "Notion is stronger when flexible documents and connected knowledge are central; ClickUp's free plan is more task-management-oriented. Compare the workarounds and integrations each team would need.",
    ],
    sources: [
      { label: "Notion plan comparison", url: "https://www.notion.com/pricing" },
      { label: "ClickUp plan comparison", url: "https://clickup.com/pricing" },
      { label: "ClickUp view limits", url: "https://help.clickup.com/hc/en-us/articles/32274881672599-Views-feature-availability-and-limits" },
    ],
  },
  "canva-vs-adobe-express": {
    heading: "Check AI quotas and storage, not just template counts",
    facts: [
      "Canva Free currently lists 5 GB of cloud storage and up to 20 uses of Standard AI tools or Premium AI tools per month. Canva Pro lists 100 GB of storage and a larger AI allowance.",
      "Adobe Express Free lists daily free generations; Adobe Express Premium lists 250 generative credits per month. Credit rules depend on the generation feature.",
      "For commercial work, also verify asset licensing, brand-kit controls, collaboration, export formats and whether generated assets can be used in the intended campaign.",
    ],
    sources: [
      { label: "Canva plan comparison", url: "https://www.canva.com/pricing/" },
      { label: "Canva AI usage by plan", url: "https://www.canva.com/help/ai-access-variantb/" },
      { label: "Adobe Express plan comparison", url: "https://www.adobe.com/express/pricing" },
    ],
  },
};

export default function ArticleEvidence() {
  const pathname = usePathname();
  const slug = pathname?.replace(/\/+$/, "").split("/").pop() || "";
  const evidence = EVIDENCE[slug];
  if (!evidence) return null;

  return (
    <section aria-labelledby="primary-source-evidence" className="border-t border-black/[0.07] bg-white py-12 sm:py-16">
      <div className="sp-container">
        <p className="sp-eyebrow">Primary-source check · 7 November 2026</p>
        <h2 id="primary-source-evidence" className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight text-[#1d1d1f]">{evidence.heading}</h2>
        <ul className="mt-5 grid gap-3">
          {evidence.facts.map((fact) => <li key={fact} className="rounded-2xl bg-[#f5f5f7] p-4 text-sm leading-6 text-[#48484a]">{fact}</li>)}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-black/[0.07] pt-5">
          <span className="text-xs font-semibold text-[#6e6e73]">Official references</span>
          {evidence.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#004bb5] underline underline-offset-2">{source.label} ↗</a>)}
        </div>
        <p className="mt-4 text-xs leading-5 text-[#86868b]">Plan features, allowances, currencies and prices can change by country and billing cycle. Checked against the linked provider documentation on 7 November 2026; confirm the provider's live terms before purchasing. This is desk research, not a claim of hands-on testing.</p>
      </div>
    </section>
  );
}
