import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Practical Software Guides",
  description: "Find practical software shortlists for freelancers, small businesses, and developers, with key limits and trade-offs explained.",
  alternates: { canonical: "/guides" },
};

const GUIDES = [
  { title: "Best Invoicing Software for Freelancers", desc: "Compare invoice creation, reminders, payment collection, and client workflows.", href: "/best/invoicing-for-freelancers", category: "Finance" },
  { title: "Best Free CRM Software", desc: "Check contact, user, and automation limits before committing to a free plan.", href: "/best/free-crm-software", category: "Sales" },
  { title: "Best Project Management for Small Teams", desc: "Find a practical way to coordinate tasks, owners, and deadlines.", href: "/best/project-management-for-small-teams", category: "Productivity" },
  { title: "Best Free Website Builders", desc: "Understand branding, domain, storage, and publishing restrictions.", href: "/best/free-website-builders", category: "Marketing" },
  { title: "Best Scheduling Software for Small Businesses", desc: "Compare bookings, reminders, staff calendars, and client self-service.", href: "/best/scheduling-for-small-businesses", category: "Operations" },
  { title: "Best Business VPN for Remote Teams", desc: "Compare secure access options for distributed teams and small businesses.", href: "/best/business-vpn", category: "Security" },
  { title: "Best AI Coding Assistants", desc: "Compare coding assistants by workflow, IDE fit, and practical limitations.", href: "/best/ai-coding-assistants", category: "Development" },
  { title: "AI Tools for React and Next.js", desc: "Explore developer tools that fit common React and Next.js workflows.", href: "/best/ai-tools-react-nextjs", category: "Development" },
  { title: "n8n Workflow Examples", desc: "Practical automation patterns to help decide what is worth connecting.", href: "/best/n8n-workflow-examples", category: "Automation" },
  { title: "Developer Tools for GitHub Workflows", desc: "Compare tools that support everyday repository and collaboration work.", href: "/best/github-tools-for-developers", category: "Development" },
  { title: "Best Accounting Software for Small Business", desc: "Compare bookkeeping, bank reconciliation, reports, and accountant access.", href: "/best/accounting-software", category: "Finance" },
  { title: "Best Help Desk Software for Small Business", desc: "Compare ticketing, automation, team limits, and support workflows.", href: "/best/help-desk-software", category: "Operations" },
];

export default function GuidesPage() {
  return (
    <section className="bg-white">
      <div className="sp-container py-16 sm:py-24">
        <p className="sp-eyebrow">Practical shortlists</p>
        <h1 className="sp-display mt-4 max-w-4xl">Guidance for the work ahead.</h1>
        <p className="sp-body-large mt-6 max-w-2xl">Start with a real task, compare the options that fit, and understand the limits and trade-offs before you choose.</p>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {GUIDES.map((item) => (
            <Link key={item.href} href={item.href} className="group rounded-[24px] border border-[#d2d2d7] p-7 transition-all hover:-translate-y-1 hover:border-[#a8b5c2] hover:shadow-lg sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">{item.category}</span>
                <span className="text-xs text-[#001D39]">Guide</span>
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-[#1d1d1f]">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{item.desc}</p>
              <span className="mt-7 inline-block text-xs font-semibold text-[#001D39] group-hover:underline">Read guide →</span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-[#6e6e73]">Need every topic in one place? <Link href="/best" className="font-semibold text-[#001D39] hover:underline">Open the full directory →</Link></p>
      </div>
    </section>
  );
}
