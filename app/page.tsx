import type { Metadata } from "next";
import Link from "next/link";
import SoftwareLogo from "@/components/SoftwareLogo";
import { SOFTWARE_PROFILES } from "@/lib/software";

export const metadata: Metadata = {
  title: "Small Business Software Comparisons & Practical Guides",
  description:
    "Choose software with confidence. StackPick compares business tools for freelancers and small teams by pricing, free-plan limits, workflow fit and trade-offs.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Small Business Software Comparisons & Practical Guides",
    description:
      "Compare business tools by pricing, free-plan limits, workflow fit and trade-offs before you commit.",
    url: "/",
    type: "website",
  },
};

const FEATURED = [
  {
    href: "/best/accounting-software",
    eyebrow: "Comparison",
    title: "The best accounting software for small businesses.",
    desc: "Compare real plan costs, bookkeeping features, invoicing, and the trade-offs for a growing business.",
  },
  {
    href: "/best/payroll-software",
    eyebrow: "Comparison",
    title: "Payroll software that fits a small business.",
    desc: "Compare payroll tools by team size, pricing, tax support, and the work they take off your plate.",
  },
  {
    href: "/best/crm-software",
    eyebrow: "Comparison",
    title: "CRM software for freelancers and small teams.",
    desc: "Compare pipelines, free-plan limits, and the tools that actually fit a small sales workflow.",
  },
  {
    href: "/best/help-desk-software",
    eyebrow: "Comparison",
    title: "Find the right help desk software.",
    desc: "Compare ticketing tools, automation, team limits, and support workflows without paying for features you do not need.",
  },
  {
    href: "/best/project-management-software",
    eyebrow: "Comparison",
    title: "Project management for small teams.",
    desc: "Compare boards, task views, free limits, and the trade-offs before you commit a whole team.",
  },
  {
    href: "/best/invoicing-software",
    eyebrow: "Comparison",
    title: "Invoicing software for freelancers.",
    desc: "Compare invoice tools by payment options, free limits, and the workflow that gets you paid on time.",
  },
];

const WORK_CATEGORIES = [
  {
    label: "Customers",
    href: "/best/crm-software",
    desc: "CRM and pipeline tools for leads and follow-ups.",
    iconPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    label: "Invoices",
    href: "/best/invoicing-software",
    desc: "Get paid with clear invoicing and payment flows.",
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    label: "Projects",
    href: "/best/project-management-software",
    desc: "Track client work without unnecessary complexity.",
    iconPath: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
  },
  {
    label: "Time",
    href: "/best/time-tracking-software",
    desc: "Track billable hours and team time honestly.",
    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    label: "Security",
    href: "/best/business-vpn",
    desc: "Protect remote access and everyday accounts.",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    label: "Payroll",
    href: "/best/payroll-software",
    desc: "Run payroll without drowning in admin.",
    iconPath: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="sp-hero-section bg-white">
        <div className="sp-container flex min-h-[520px] flex-col items-center justify-center py-14 text-center sm:min-h-[560px] sm:py-20">
          <p className="sp-eyebrow">Software, without the noise.</p>
          <h1 className="sp-display mt-6 max-w-5xl">
            Find the right tool.<br />
            Not the loudest one.
          </h1>
          <p className="sp-body-large mt-7 max-w-2xl">
            StackPick compares software for freelancers and small businesses, pricing,
            limits, strengths, trade-offs, and the details that actually change a decision.
          </p>
          <form action="/best#directory-search" method="get" className="mt-9 flex w-full max-w-2xl flex-col gap-3 rounded-[22px] border border-[#d2d2d7] bg-white p-2 shadow-[0_12px_40px_rgba(0,29,57,0.08)] sm:flex-row sm:items-center">
            <label htmlFor="software-search" className="sr-only">Search software comparisons</label>
            <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
              <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-[#6e6e73]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input id="software-search" name="q" type="search" placeholder="What software are you looking for?" className="h-12 min-w-0 w-full bg-transparent text-sm text-[#1d1d1f] outline-none placeholder:text-[#86868b]" />
            </div>
            <button type="submit" className="sp-button-primary shrink-0">Find software <span aria-hidden="true">→</span></button>
          </form>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs text-[#6e6e73]">
            <span className="mr-1">Popular:</span>
            <Link href="/best?q=CRM#directory-search" className="rounded-full border border-[#d2d2d7] px-3 py-1.5 transition hover:border-[#001D39] hover:text-[#001D39]">CRM</Link>
            <Link href="/best?q=invoicing#directory-search" className="rounded-full border border-[#d2d2d7] px-3 py-1.5 transition hover:border-[#001D39] hover:text-[#001D39]">Invoicing</Link>
            <Link href="/best?q=project%20management#directory-search" className="rounded-full border border-[#d2d2d7] px-3 py-1.5 transition hover:border-[#001D39] hover:text-[#001D39]">Project management</Link>
            <Link href="/best?q=AI#directory-search" className="rounded-full border border-[#d2d2d7] px-3 py-1.5 transition hover:border-[#001D39] hover:text-[#001D39]">AI tools</Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/best" className="sp-button-secondary">Browse all comparisons</Link>
            <Link href="/about" className="inline-flex items-center px-3 py-2 text-sm font-medium text-[#6e6e73] transition hover:text-[#001D39]">How StackPick works</Link>
          </div>

          <div className="mt-12 w-full max-w-4xl rounded-[32px] bg-[#f5f5f7] px-6 py-8 sm:px-12 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6e6e73]">A better way to choose</p>
            <div className="mt-6 grid gap-8 text-left sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-[#001D39]">01</p>
                <h2 className="mt-2 text-base font-semibold tracking-tight text-[#1d1d1f]">Start with the job</h2>
                <p className="mt-2 text-xs leading-5 text-[#6e6e73]">What are you actually trying to get done?</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#001D39]">02</p>
                <h2 className="mt-2 text-base font-semibold tracking-tight text-[#1d1d1f]">Compare the trade-offs</h2>
                <p className="mt-2 text-xs leading-5 text-[#6e6e73]">What does the free plan really include? What will become a problem later?</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#001D39]">03</p>
                <h2 className="mt-2 text-base font-semibold tracking-tight text-[#1d1d1f]">Choose with context</h2>
                <p className="mt-2 text-xs leading-5 text-[#6e6e73]">The best tool is the one that fits your workflow - not the one with the longest feature list.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7]">
        <div className="sp-container py-16 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="sp-eyebrow">Featured comparisons</p>
              <h2 className="sp-title mt-3 max-w-3xl">The shortlist starts here.</h2>
            </div>
            <Link href="/best" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#001D39] hover:underline">See all comparisons →</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((item) => (
              <Link key={item.href} href={item.href} className="group flex min-h-[220px] flex-col justify-between rounded-[22px] border border-[#d2d2d7] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6e6e73]">{item.eyebrow}</p>
                  <h3 className="mt-3 text-lg font-bold leading-snug tracking-[-0.02em] text-[#1d1d1f] sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{item.desc}</p>
                </div>
                <div className="mt-6">
                  <span className="text-xs font-semibold text-[#001D39] group-hover:underline">Read the comparison →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/[0.06] bg-white">
        <div className="sp-container py-10 sm:py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="sp-eyebrow">Start with a product</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#1d1d1f] sm:text-2xl">Explore software, not just categories.</h2>
            </div>
            <Link href="/software" className="text-sm font-semibold text-[#001D39] hover:underline">Browse the software catalogue →</Link>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {SOFTWARE_PROFILES.map((software) => (
              <Link key={software.slug} href={`/software/${software.slug}`} className="group flex min-w-0 items-start gap-4 rounded-2xl border border-[#d2d2d7] bg-white p-4 transition-colors hover:border-[#001D39]/40 hover:bg-[#f9fafb] sm:p-5">
                <SoftwareLogo name={software.name} url={software.officialUrl} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-[#1d1d1f]">{software.name}</span>
                  <span className="mt-1 block text-xs text-[#6e6e73]">{software.category} · {software.tagline}</span>
                  <span className="mt-1.5 block text-xs leading-5 text-[#86868b] line-clamp-2">{software.bestFor[0]}</span>
                </span>
                <span aria-hidden="true" className="pt-1 text-[#001D39] transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="sp-container py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="sp-eyebrow text-[#a1a1a6]">What are you looking for?</p>
            <h2 className="sp-title mt-3 max-w-none text-balance text-white text-[clamp(2.25rem,5.2vw,4.2rem)] leading-[1.05]">Software for the work you do.</h2>
          </div>
          <div className="mx-auto mt-10 grid w-full max-w-4xl grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {WORK_CATEGORIES.map((item) => (
              <Link key={item.label} href={item.href} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/25 hover:bg-white/[0.07]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:scale-105">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={item.iconPath} />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white sm:text-xl">{item.label}</h3>
                <p className="mt-2 text-xs leading-5 text-[#a1a1a6]">{item.desc}</p>
                <span className="mt-4 block text-xs text-[#a1a1a6] transition-colors group-hover:text-white">Explore {item.label.toLowerCase()} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="sp-container py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="sp-eyebrow">Our approach</p>
            <h2 className="sp-title mt-3">Useful beats impressive.</h2>
            <p className="sp-body-large mt-6">
              We care about the things that are easy to miss in a polished product demo:
              real pricing, meaningful free limits, setup friction, workflow fit, and
              the reason you might regret choosing a tool six months later.
            </p>
          </div>
          <div className="mt-16 grid gap-10 border-t border-black/10 pt-10 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-[#1d1d1f]">Pricing reality</h3>
              <p className="mt-2.5 text-xs leading-6 text-[#6e6e73]">We separate the advertised starting price from the plan you will actually need.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-[#1d1d1f]">Fit over features</h3>
              <p className="mt-2.5 text-xs leading-6 text-[#6e6e73]">A smaller tool can be a better choice when it matches the way you work.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-[#1d1d1f]">Clear verdicts</h3>
              <p className="mt-2.5 text-xs leading-6 text-[#6e6e73]">Every comparison should help you decide - including when the answer is to use nothing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7]">
        <div className="sp-container py-20 text-center sm:py-24">
          <p className="sp-eyebrow">Ready when you are.</p>
          <h2 className="sp-title mx-auto mt-3 max-w-3xl">Make your next software decision a simpler one.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <Link href="/best" className="inline-block text-sm font-semibold text-[#001D39] hover:underline">Browse all comparisons →</Link>
            <Link href="/software" className="inline-block text-sm font-semibold text-[#001D39] hover:underline">Explore software profiles →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
