import type { Metadata } from "next";
import Link from "next/link";
import SoftwareLogo from "@/components/SoftwareLogo";

export const metadata: Metadata = {
  title: "Software Face-Offs",
  description: "Compare popular software side by side and understand the practical trade-offs before choosing.",
  alternates: { canonical: "/comparisons" },
};

type Comparison = {
  title: string;
  desc: string;
  href: string;
  category: string;
  tag: string;
  left: { name: string; url: string };
  right: { name: string; url: string };
};

const COMPARISONS: Comparison[] = [
  { title: "HubSpot vs Pipedrive", desc: "A broader customer platform versus a sales-focused pipeline.", href: "/best/hubspot-vs-pipedrive", category: "Sales", tag: "CRM", left: { name: "HubSpot", url: "https://www.hubspot.com/" }, right: { name: "Pipedrive", url: "https://www.pipedrive.com/" } },
  { title: "HubSpot vs Zoho CRM", desc: "Compare ease of adoption, customization, and sales workflows.", href: "/best/hubspot-vs-zoho-crm", category: "Sales", tag: "CRM", left: { name: "HubSpot", url: "https://www.hubspot.com/" }, right: { name: "Zoho CRM", url: "https://www.zoho.com/crm/" } },
  { title: "Pipedrive vs Zoho CRM", desc: "Pipeline-first selling versus a more configurable CRM.", href: "/best/pipedrive-vs-zoho-crm", category: "Sales", tag: "CRM", left: { name: "Pipedrive", url: "https://www.pipedrive.com/" }, right: { name: "Zoho CRM", url: "https://www.zoho.com/crm/" } },
  { title: "QuickBooks vs Xero", desc: "Compare bookkeeping, reporting, and accountant collaboration.", href: "/best/quickbooks-vs-xero", category: "Finance", tag: "Accounting", left: { name: "QuickBooks", url: "https://quickbooks.intuit.com/" }, right: { name: "Xero", url: "https://www.xero.com/" } },
  { title: "QuickBooks vs FreshBooks", desc: "Broader accounting needs versus freelancer-friendly workflows.", href: "/best/quickbooks-vs-freshbooks", category: "Finance", tag: "Accounting", left: { name: "QuickBooks", url: "https://quickbooks.intuit.com/" }, right: { name: "FreshBooks", url: "https://www.freshbooks.com/" } },
  { title: "FreshBooks vs Wave", desc: "Compare invoice-first workflows and the cost of paid features.", href: "/best/freshbooks-vs-wave", category: "Finance", tag: "Invoicing", left: { name: "FreshBooks", url: "https://www.freshbooks.com/" }, right: { name: "Wave", url: "https://www.waveapps.com/" } },
  { title: "Trello vs Asana", desc: "Visual boards versus more structured project coordination.", href: "/best/trello-vs-asana", category: "Productivity", tag: "Projects", left: { name: "Trello", url: "https://trello.com/" }, right: { name: "Asana", url: "https://asana.com/" } },
  { title: "Asana vs ClickUp", desc: "Structured project management versus a highly configurable workspace.", href: "/best/asana-vs-clickup", category: "Productivity", tag: "Projects", left: { name: "Asana", url: "https://asana.com/" }, right: { name: "ClickUp", url: "https://clickup.com/" } },
  { title: "ClickUp vs monday.com", desc: "Compare flexible workspaces, boards, reporting, and admin effort.", href: "/best/clickup-vs-monday", category: "Productivity", tag: "Projects", left: { name: "ClickUp", url: "https://clickup.com/" }, right: { name: "monday.com", url: "https://monday.com/" } },
  { title: "Notion vs ClickUp", desc: "Flexible docs and knowledge work versus task-focused project management.", href: "/best/notion-vs-clickup", category: "Productivity", tag: "Workspaces", left: { name: "Notion", url: "https://www.notion.com/" }, right: { name: "ClickUp", url: "https://clickup.com/" } },
  { title: "Calendly vs Google Calendar", desc: "Dedicated booking links versus calendar-native scheduling.", href: "/best/calendly-vs-google-calendar", category: "Operations", tag: "Scheduling", left: { name: "Calendly", url: "https://calendly.com/" }, right: { name: "Google Calendar", url: "https://calendar.google.com/" } },
  { title: "Mailchimp vs Brevo", desc: "Compare email marketing workflows, pricing models, and audience needs.", href: "/best/mailchimp-vs-brevo", category: "Marketing", tag: "Email", left: { name: "Mailchimp", url: "https://mailchimp.com/" }, right: { name: "Brevo", url: "https://www.brevo.com/" } },
];

const GROUPS = [
  { label: "All", href: "/best" },
  { label: "Sales", href: "/best?category=Sales" },
  { label: "Finance", href: "/best?category=Finance" },
  { label: "Productivity", href: "/best?category=Productivity" },
  { label: "Operations", href: "/best?category=Operations" },
  { label: "Marketing", href: "/best?category=Marketing" },
];

function ArrowIcon() {
  return (
    <span aria-hidden="true" className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d2d2d7] text-[#001D39] transition-all duration-200 group-hover:border-[#001D39] group-hover:bg-[#001D39] group-hover:text-white">
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5">
        <path d="M3.75 10h12.5M10 3.75 16.25 10 10 16.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function ComparisonsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-[#d2d2d7] bg-[#f5f5f7]">
        <div className="sp-container py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="sp-eyebrow">The head-to-head library</p>
            <h1 className="sp-display mt-5">Two tools.<br />One clearer decision.</h1>
            <p className="sp-body-large mt-6 max-w-2xl">A good comparison goes beyond feature checklists. Understand pricing, practical limits, workflow fit, and where each product makes the most sense.</p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[20px] border border-[#d2d2d7] bg-white p-5"><p className="text-3xl font-semibold tracking-[-0.06em] text-[#001D39]">12</p><p className="mt-1 text-xs text-[#6e6e73]">head-to-head comparisons</p></div>
            <div className="rounded-[20px] border border-[#d2d2d7] bg-white p-5"><p className="text-3xl font-semibold tracking-[-0.06em] text-[#001D39]">05</p><p className="mt-1 text-xs text-[#6e6e73]">business functions covered</p></div>
            <div className="rounded-[20px] border border-[#d2d2d7] bg-white p-5"><p className="text-3xl font-semibold tracking-[-0.06em] text-[#001D39]">01</p><p className="mt-1 text-xs text-[#6e6e73]">goal: a confident choice</p></div>
          </div>
        </div>
      </section>

      <section className="sp-container py-16 sm:py-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="sp-eyebrow">Browse the matchups</p><h2 className="sp-title mt-3">Find your two contenders.</h2></div>
          <Link href="/best" className="text-sm font-semibold text-[#001D39] transition-colors hover:text-[#45647e]">Browse every software guide <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {GROUPS.map((group) => <Link key={group.label} href={group.href} className={group.label === "All" ? "rounded-full bg-[#001D39] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#163b5b]" : "rounded-full border border-[#d2d2d7] bg-white px-4 py-2 text-xs font-medium text-[#6e6e73] transition-colors hover:border-[#001D39] hover:text-[#001D39]"}>{group.label}</Link>)}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {COMPARISONS.map((item, index) => (
            <Link key={item.href} href={item.href} className="group flex min-h-[250px] flex-col rounded-[24px] border border-[#d2d2d7] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#9aabba] hover:shadow-[0_18px_44px_rgba(0,29,57,0.08)] sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#f5f5f7] px-3 py-1.5 text-[11px] font-semibold text-[#001D39]">{item.category}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a1a1a8]">Matchup {String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="mt-7 flex items-center gap-3 sm:gap-4">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <SoftwareLogo name={item.left.name} url={item.left.url} />
                  <span className="min-w-0 truncate text-sm font-semibold tracking-tight text-[#1d1d1f] sm:text-base">{item.left.name}</span>
                </div>
                <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a1a1a8]">vs</span>
                <div className="flex min-w-0 flex-1 items-center justify-end gap-3">
                  <span className="min-w-0 truncate text-right text-sm font-semibold tracking-tight text-[#1d1d1f] sm:text-base">{item.right.name}</span>
                  <SoftwareLogo name={item.right.name} url={item.right.url} />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-[-0.035em] text-[#1d1d1f]">{item.title}</h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-[#6e6e73]">{item.desc}</p>
              <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#e5e5e7] pt-5 mt-7">
                <span className="text-xs text-[#929299]">{item.tag} comparison</span>
                <span className="flex items-center gap-3 text-xs font-semibold text-[#001D39]">Read comparison <ArrowIcon /></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 rounded-[24px] bg-[#001D39] p-8 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
          <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">Still exploring?</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">Start with the job you need done.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-white/70">Browse practical shortlists across finance, sales, productivity, and more.</p></div>
          <Link href="/best" className="mt-6 inline-flex shrink-0 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#001D39] transition-colors hover:bg-[#e6edf3] sm:mt-0">Open software directory <span aria-hidden="true" className="ml-2">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
