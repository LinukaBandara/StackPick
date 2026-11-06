import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Categories",
  description: "Explore software by business function, from finance and sales to productivity, security, and development.",
  alternates: { canonical: "/categories" },
};

const CATEGORIES = [
  { name: "Finance", number: "01", description: "Keep the numbers clear, from first invoice to month-end reporting.", examples: "Accounting · Invoicing · Expenses", href: "/best?category=Finance" },
  { name: "Sales", number: "02", description: "Build stronger customer relationships and more predictable pipelines.", examples: "CRM · Live chat · Sales pipelines", href: "/best?category=Sales" },
  { name: "Productivity", number: "03", description: "Bring projects, people, and everyday work into focus.", examples: "Project management · Time tracking · Meetings", href: "/best?category=Productivity" },
  { name: "Operations", number: "04", description: "Make the moving parts of a small business work together.", examples: "Scheduling · Inventory · Support", href: "/best?category=Operations" },
  { name: "Security", number: "05", description: "Protect company accounts, devices, and important information.", examples: "VPN · Password managers · Backup", href: "/best?category=Security" },
  { name: "Marketing", number: "06", description: "Reach the right audience and build a more useful online presence.", examples: "Email · Websites · Social scheduling", href: "/best?category=Marketing" },
  { name: "People", number: "07", description: "Support the people behind the work, from hiring to payroll.", examples: "Payroll · HR · Employee scheduling", href: "/best?category=People" },
  { name: "Infrastructure", number: "08", description: "Choose dependable foundations for your business systems.", examples: "Hosting · Business email", href: "/best?category=Infrastructure" },
  { name: "Development", number: "09", description: "Build, ship, and maintain software with a workflow that fits.", examples: "AI coding · GitHub · DevOps", href: "/best?category=Development" },
  { name: "Automation", number: "10", description: "Connect the tools you already use and reduce repetitive work.", examples: "Workflow automation · AI agents", href: "/best?category=Automation" },
];

const POPULAR = [
  { label: "CRM software", href: "/best?q=CRM#directory-search" },
  { label: "Invoicing", href: "/best?q=invoicing#directory-search" },
  { label: "Project management", href: "/best?q=project%20management#directory-search" },
  { label: "AI tools", href: "/best?q=AI#directory-search" },
];

export default function CategoriesPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-[#d2d2d7] bg-[#f5f5f7]">
        <div className="sp-container py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <p className="sp-eyebrow">The StackPick directory</p>
              <h1 className="sp-display mt-5 max-w-4xl">Start with the work.<br />Find the right software.</h1>
              <p className="sp-body-large mt-6 max-w-2xl">Explore software by the job you need to get done. Each category brings together focused comparisons, practical guides, and the details worth checking before you commit.</p>
            </div>
            <div className="rounded-[24px] border border-[#d2d2d7] bg-white p-6 shadow-[0_16px_48px_rgba(0,29,57,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6e6e73]">Browse the directory</p>
              <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[#001D39]">10</p>
              <p className="mt-1 text-sm text-[#6e6e73]">business software categories</p>
              <div className="mt-5 h-px bg-[#e5e5e7]" />
              <Link href="/best" className="mt-4 inline-flex text-sm font-semibold text-[#001D39] hover:underline">Explore all software guides <span aria-hidden="true" className="ml-2">→</span></Link>
            </div>
          </div>
          <form action="/best#directory-search" method="get" className="mt-10 flex w-full max-w-2xl flex-col gap-3 rounded-[20px] border border-[#d2d2d7] bg-white p-2 shadow-sm sm:flex-row sm:items-center">
            <label htmlFor="category-software-search" className="sr-only">Search software comparisons</label>
            <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
              <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-[#6e6e73]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input id="category-software-search" name="q" type="search" placeholder="Search a tool, task, or category..." className="h-12 min-w-0 w-full bg-transparent text-sm text-[#1d1d1f] outline-none placeholder:text-[#86868b]" />
            </div>
            <button type="submit" className="sp-button-primary shrink-0">Search software <span aria-hidden="true">→</span></button>
          </form>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[#6e6e73]">
            <span className="mr-1">Popular:</span>
            {POPULAR.map((item) => <Link key={item.label} href={item.href} className="rounded-full border border-[#d2d2d7] bg-white px-3 py-1.5 transition hover:border-[#001D39] hover:text-[#001D39]">{item.label}</Link>)}
          </div>
        </div>
      </section>

      <section className="sp-container py-16 sm:py-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="sp-eyebrow">Browse by function</p>
            <h2 className="sp-title mt-3">What are you trying to get done?</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#6e6e73]">Choose a starting point. You can narrow your search further inside each collection.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link key={category.name} href={category.href} className="group flex min-h-[230px] flex-col rounded-[24px] border border-[#d2d2d7] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#9aabba] hover:shadow-[0_18px_44px_rgba(0,29,57,0.08)] sm:p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.14em] text-[#929299]">{category.number} / 10</span>
              </div>
              <h3 className="mt-7 text-[21px] font-semibold tracking-[-0.035em] text-[#1d1d1f]">{category.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{category.description}</p>
              <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                <span className="text-xs leading-5 text-[#929299]">{category.examples}</span>
                <span aria-hidden="true" className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d2d2d7] text-[#001D39] transition-all duration-200 group-hover:border-[#001D39] group-hover:bg-[#001D39] group-hover:text-white">
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5">
                    <path d="M3.75 10h12.5M10 3.75 16.25 10 10 16.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d2d2d7] bg-[#f5f5f7]">
        <div className="sp-container flex flex-col gap-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:py-16">
          <div>
            <p className="sp-eyebrow">Already know what you need?</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f]">Go straight to the comparison.</h2>
            <p className="mt-2 text-sm text-[#6e6e73]">Search the full directory or browse individual product profiles.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/best" className="sp-button-primary">All comparisons →</Link>
            <Link href="/software" className="sp-button-secondary">Software profiles</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
