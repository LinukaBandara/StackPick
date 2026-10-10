import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Face-Offs",
  description: "Compare popular software side by side and understand the practical trade-offs before choosing.",
  alternates: { canonical: "/comparisons" },
};

const COMPARISONS = [
  { title: "HubSpot vs Pipedrive", desc: "A broader customer platform versus a sales-focused pipeline.", href: "/best/hubspot-vs-pipedrive", category: "Sales" },
  { title: "HubSpot vs Zoho CRM", desc: "Compare ease of adoption, customization, and sales workflows.", href: "/best/hubspot-vs-zoho-crm", category: "Sales" },
  { title: "Pipedrive vs Zoho CRM", desc: "Pipeline-first selling versus a more configurable CRM.", href: "/best/pipedrive-vs-zoho-crm", category: "Sales" },
  { title: "QuickBooks vs Xero", desc: "Compare bookkeeping, reporting, and accountant collaboration.", href: "/best/quickbooks-vs-xero", category: "Finance" },
  { title: "QuickBooks vs FreshBooks", desc: "Broader accounting needs versus freelancer-friendly workflows.", href: "/best/quickbooks-vs-freshbooks", category: "Finance" },
  { title: "FreshBooks vs Wave", desc: "Compare invoice-first workflows and the cost of paid features.", href: "/best/freshbooks-vs-wave", category: "Finance" },
  { title: "Trello vs Asana", desc: "Visual boards versus more structured project coordination.", href: "/best/trello-vs-asana", category: "Productivity" },
  { title: "Asana vs ClickUp", desc: "Structured project management versus a highly configurable workspace.", href: "/best/asana-vs-clickup", category: "Productivity" },
  { title: "ClickUp vs monday.com", desc: "Compare flexible workspaces, boards, reporting, and admin effort.", href: "/best/clickup-vs-monday", category: "Productivity" },
  { title: "Notion vs ClickUp", desc: "Flexible docs and knowledge work versus task-focused project management.", href: "/best/notion-vs-clickup", category: "Productivity" },
  { title: "Calendly vs Google Calendar", desc: "Dedicated booking links versus calendar-native scheduling.", href: "/best/calendly-vs-google-calendar", category: "Operations" },
  { title: "Mailchimp vs Brevo", desc: "Compare email marketing workflows, pricing models, and audience needs.", href: "/best/mailchimp-vs-brevo", category: "Marketing" },
];

export default function ComparisonsPage() {
  return (
    <section className="bg-[#f5f5f7]">
      <div className="sp-container py-16 sm:py-24">
        <p className="sp-eyebrow">Side by side</p>
        <h1 className="sp-display mt-4 max-w-4xl">Two tools. One clearer decision.</h1>
        <p className="sp-body-large mt-6 max-w-2xl">Focused head-to-head comparisons that explain the meaningful differences, not just repeat feature lists.</p>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {COMPARISONS.map((item) => (
            <Link key={item.href} href={item.href} className="group rounded-[24px] border border-[#d2d2d7] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">{item.category}</span>
                <span className="text-xs text-[#001D39]">Head-to-head</span>
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-[#1d1d1f]">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{item.desc}</p>
              <span className="mt-7 inline-block text-xs font-semibold text-[#001D39] group-hover:underline">Read comparison →</span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-[#6e6e73]">Want to explore a wider range? <Link href="/best" className="font-semibold text-[#001D39] hover:underline">Browse all software guides →</Link></p>
      </div>
    </section>
  );
}
