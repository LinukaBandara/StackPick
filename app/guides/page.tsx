import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Practical Software Guides",
  description: "Find practical software shortlists for freelancers, small businesses, and developers, with key limits and trade-offs explained.",
  alternates: { canonical: "/guides" },
};

const GUIDES = [
  { title: "AI Meeting Assistant Pricing", desc: "Compare Fathom, Fireflies, Otter and Granola pricing, free-plan limits and data controls.", href: "/best/ai-meeting-assistant-pricing", category: "Productivity", type: "Pricing guide" },
  { title: "Best Invoicing Software for Freelancers", desc: "Compare invoice creation, reminders, payment collection, and client workflows.", href: "/best/invoicing-software", category: "Finance", type: "Best tools" },
  { title: "Best Multi-Currency Invoicing Software", desc: "Compare foreign-currency invoices, exchange rates, payment collection and accounting trade-offs.", href: "/best/multi-currency-invoicing", category: "Finance", type: "Best tools" },
  { title: "Best Free CRM Software", desc: "Check contact, user, and automation limits before committing to a free plan.", href: "/best/free-crm-software", category: "Sales", type: "Free software" },
  { title: "CRM Software Pricing for Small Teams", desc: "Compare published per-seat rates, five- and fifteen-user costs, and upgrade traps.", href: "/best/crm-software-pricing", category: "Sales", type: "Pricing guide" },
  { title: "Best Project Management for Small Teams", desc: "Find a practical way to coordinate tasks, owners, and deadlines.", href: "/best/project-management-software", category: "Productivity", type: "Best tools" },
  { title: "Time Tracking Software Pricing", desc: "Compare published seat prices, free-plan limits and usage-based billing for freelancers and teams.", href: "/best/time-tracking-software-pricing", category: "Productivity", type: "Pricing guide" },
  { title: "Best Free Website Builders", desc: "Understand branding, domain, storage, and publishing restrictions.", href: "/best/free-website-builders", category: "Marketing", type: "Free software" },
  { title: "Online Form Builder Pricing", desc: "Compare Typeform, Jotform and Fillout pricing, response allowances and branding limits.", href: "/best/online-form-builder-pricing", category: "Productivity", type: "Pricing guide" },
  { title: "Best Scheduling Software for Small Businesses", desc: "Compare bookings, reminders, staff calendars, and client self-service.", href: "/best/appointment-scheduling-software", category: "Operations", type: "Best tools" },
  { title: "Appointment Scheduling Software Pricing", desc: "Compare Calendly, Acuity and Cal.com pricing, plan limits and team costs.", href: "/best/appointment-scheduling-software-pricing", category: "Operations", type: "Pricing guide" },
  { title: "Best Business VPN for Remote Teams", desc: "Compare secure access options for distributed teams and small businesses.", href: "/best/business-vpn", category: "Security", type: "Best tools" },
  { title: "Best AI Coding Assistants", desc: "Compare coding assistants by workflow, IDE fit, and practical limitations.", href: "/best/ai-coding-assistants", category: "Development", type: "Best tools" },
  { title: "AI Tools for React and Next.js", desc: "Explore developer tools that fit common React and Next.js workflows.", href: "/best/ai-tools-react-nextjs", category: "Development", type: "Developer guide" },
  { title: "n8n Workflow Examples", desc: "Practical automation patterns to help decide what is worth connecting.", href: "/best/n8n-workflow-examples", category: "Automation", type: "Workflow guide" },
  { title: "Developer Tools for GitHub Workflows", desc: "Compare tools that support everyday repository and collaboration work.", href: "/best/github-tools-for-developers", category: "Development", type: "Developer guide" },
  { title: "Best Accounting Software for Small Business", desc: "Compare bookkeeping, bank reconciliation, reports, and accountant access.", href: "/best/accounting-software", category: "Finance", type: "Best tools" },
  { title: "Expense Management Software Pricing", desc: "Compare team-size costs, receipt-scanning limits and eligibility requirements.", href: "/best/expense-management-software-pricing", category: "Finance", type: "Pricing guide" },
  { title: "Best Help Desk Software for Small Business", desc: "Compare ticketing, automation, team limits, and support workflows.", href: "/best/help-desk-software", category: "Operations", type: "Best tools" },
];

const FEATURED = GUIDES.slice(0, 3);

export default function GuidesPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-[#d2d2d7] bg-[#f5f5f7]">
        <div className="sp-container py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">
            <div>
              <p className="sp-eyebrow">The StackPick field notes</p>
              <h1 className="sp-display mt-5 max-w-4xl">Practical guidance.<br />Clearer choices.</h1>
              <p className="sp-body-large mt-6 max-w-2xl">Shortlists and explainers for real business decisions. Compare what tools cost, where free plans stop, and which trade-offs matter for the way you work.</p>
            </div>
            <div className="rounded-[24px] border border-[#d2d2d7] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6e6e73]">In the library</p>
              <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[#001D39]">19</p>
              <p className="mt-1 text-sm text-[#6e6e73]">practical guides to explore</p>
              <div className="mt-5 h-px bg-[#e5e5e7]" />
              <Link href="/best" className="mt-4 inline-flex text-sm font-semibold text-[#001D39] hover:underline">Browse the full directory →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-container py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <div><p className="sp-eyebrow">Start here</p><h2 className="sp-title mt-3">Useful reads for your next decision.</h2></div>
          <span className="hidden text-xs text-[#929299] sm:block">Selected guides</span>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {FEATURED.map((item, index) => (
            <Link key={item.href} href={item.href} className="group flex min-h-[260px] flex-col rounded-[24px] border border-[#d2d2d7] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#9aabba] hover:shadow-[0_18px_44px_rgba(0,29,57,0.08)]">
              <div className="flex items-center justify-between"><span className="rounded-full bg-[#e6edf3] px-3 py-1.5 text-[11px] font-semibold text-[#001D39]">{item.category}</span><span className="text-xs text-[#929299]">0{index + 1}</span></div>
              <h3 className="mt-8 text-xl font-semibold leading-snug tracking-[-0.035em] text-[#1d1d1f]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{item.desc}</p>
              <span className="mt-auto pt-7 text-xs font-semibold text-[#001D39] group-hover:underline">Read the guide →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d2d2d7] bg-[#f5f5f7]">
        <div className="sp-container py-16 sm:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="sp-eyebrow">Explore the library</p><h2 className="sp-title mt-3">Find a guide for the job.</h2></div>
            <p className="max-w-md text-sm leading-6 text-[#6e6e73]">From free-plan limits to full software shortlists, start with the question you need answered.</p>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {GUIDES.slice(3).map((item, index) => (
              <Link key={item.href} href={item.href} className="group flex items-start gap-4 rounded-[20px] border border-[#d2d2d7] bg-white p-5 transition-all hover:border-[#9aabba] hover:shadow-[0_12px_32px_rgba(0,29,57,0.06)] sm:p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5f5f7] text-xs font-semibold text-[#001D39]">{String(index + 4).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2"><span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#929299]">{item.category}</span><span className="text-[#d2d2d7]">·</span><span className="text-[11px] text-[#929299]">{item.type}</span></span>
                  <span className="mt-2 block text-base font-semibold tracking-tight text-[#1d1d1f]">{item.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-[#6e6e73]">{item.desc}</span>
                  <span className="mt-3 block text-xs font-semibold text-[#001D39] group-hover:underline">Read guide →</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-container py-12 sm:py-16">
        <div className="rounded-[24px] bg-[#001D39] p-8 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
          <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">Make the next move</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">Know what matters before you choose.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-white/70">Use the full StackPick directory to compare software by function, pricing, and practical fit.</p></div>
          <Link href="/best" className="mt-6 inline-flex shrink-0 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#001D39] transition hover:bg-[#e6edf3] sm:mt-0">Explore all guides →</Link>
        </div>
      </section>
    </main>
  );
}
