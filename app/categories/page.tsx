import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Categories",
  description: "Explore software by business function, from finance and sales to productivity, security, and development.",
  alternates: { canonical: "/categories" },
};

const CATEGORIES = [
  { name: "Finance", description: "Accounting, invoicing, expenses, and payments.", examples: "Accounting · Invoicing · Expenses", href: "/best?category=Finance" },
  { name: "Sales", description: "Manage customer relationships, leads, and conversations.", examples: "CRM · Live chat · Sales pipelines", href: "/best?category=Sales" },
  { name: "Productivity", description: "Plan projects, track time, and collaborate.", examples: "Project management · Time tracking · Meetings", href: "/best?category=Productivity" },
  { name: "Operations", description: "Keep everyday business workflows running smoothly.", examples: "Scheduling · Inventory · Support", href: "/best?category=Operations" },
  { name: "Security", description: "Protect company accounts, devices, and files.", examples: "VPN · Password managers · Backup", href: "/best?category=Security" },
  { name: "Marketing", description: "Reach customers and grow your online presence.", examples: "Email · Websites · Social scheduling", href: "/best?category=Marketing" },
  { name: "People", description: "Support hiring, payroll, and team management.", examples: "Payroll · HR · Employee scheduling", href: "/best?category=People" },
  { name: "Infrastructure", description: "Choose the foundations behind your business systems.", examples: "Hosting · Business email", href: "/best?category=Infrastructure" },
  { name: "Development", description: "Tools for building, shipping, and maintaining software.", examples: "AI coding · GitHub · DevOps", href: "/best?category=Development" },
  { name: "Automation", description: "Connect apps and reduce repetitive work.", examples: "Workflow automation · AI agents", href: "/best?category=Automation" },
];

export default function CategoriesPage() {
  return (
    <section className="bg-white">
      <div className="sp-container py-16 sm:py-24">
        <p className="sp-eyebrow">Explore by need</p>
        <h1 className="sp-display mt-4 max-w-4xl">Find software by category.</h1>
        <p className="sp-body-large mt-6 max-w-2xl">Start with the work you need to get done. Explore focused comparisons and practical advice for each part of your workflow.</p>

        <form action="/best#directory-search" method="get" className="mt-8 flex w-full max-w-2xl flex-col gap-3 rounded-[22px] border border-[#d2d2d7] bg-white p-2 shadow-[0_12px_40px_rgba(0,29,57,0.06)] sm:flex-row sm:items-center">
          <label htmlFor="category-software-search" className="sr-only">Search software comparisons</label>
          <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
            <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-[#6e6e73]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input id="category-software-search" name="q" type="search" placeholder="Search CRM, invoicing, project management..." className="h-12 min-w-0 w-full bg-transparent text-sm text-[#1d1d1f] outline-none placeholder:text-[#86868b]" />
          </div>
          <button type="submit" className="sp-button-primary shrink-0">Find software <span aria-hidden="true">→</span></button>
        </form>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[#6e6e73]">
          <span className="mr-1">Popular searches</span>
          <Link href="/best?q=CRM#directory-search" className="rounded-full border border-[#d2d2d7] px-3 py-1.5 transition hover:border-[#001D39] hover:text-[#001D39]">CRM</Link>
          <Link href="/best?q=invoicing#directory-search" className="rounded-full border border-[#d2d2d7] px-3 py-1.5 transition hover:border-[#001D39] hover:text-[#001D39]">Invoicing</Link>
          <Link href="/best?q=project%20management#directory-search" className="rounded-full border border-[#d2d2d7] px-3 py-1.5 transition hover:border-[#001D39] hover:text-[#001D39]">Project management</Link>
          <Link href="/best?q=AI#directory-search" className="rounded-full border border-[#d2d2d7] px-3 py-1.5 transition hover:border-[#001D39] hover:text-[#001D39]">AI tools</Link>
        </div>

        <div className="mt-14 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="sp-eyebrow">Browse by function</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f]">What do you need help with?</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#6e6e73]">Choose a category to narrow the directory to relevant guides and comparisons.</p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category, index) => (
            <Link key={category.name} href={category.href} className="group flex min-h-52 flex-col rounded-[24px] border border-[#d2d2d7] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#a8b5c2] hover:shadow-lg">
              <span className="text-xs font-semibold tracking-wide text-[#6e6e73]">{String(index + 1).padStart(2, "0")} / CATEGORY</span>
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-[#1d1d1f]">{category.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">{category.description}</p>
              <p className="mt-auto pt-5 text-xs text-[#001D39]">{category.examples}</p>
              <span className="mt-4 text-xs font-semibold text-[#001D39] group-hover:underline">Explore category →</span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-[#6e6e73]">Looking for a specific tool? <Link className="font-semibold text-[#001D39] hover:underline" href="/best">Search all comparison guides →</Link></p>
      </div>
    </section>
  );
}
