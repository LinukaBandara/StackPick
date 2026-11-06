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
    eyebrow: "Accounting",
    title: "The best accounting software for small businesses.",
    desc: "Compare real plan costs, bookkeeping features, invoicing, and the trade-offs for a growing business.",
  },
  {
    href: "/best/payroll-software",
    eyebrow: "Payroll",
    title: "Payroll software that fits a small business.",
    desc: "Compare payroll tools by team size, pricing, tax support, and the work they take off your plate.",
  },
  {
    href: "/best/help-desk-software",
    eyebrow: "Customer support",
    title: "Find the right help desk software.",
    desc: "Compare ticketing tools, automation, team limits, and support workflows without paying for features you do not need.",
  },
  {
    href: "/best/inventory-management-software",
    eyebrow: "Inventory",
    title: "Inventory software for growing businesses.",
    desc: "Compare stock tracking, integrations, order workflows, and pricing before you commit.",
  },
];

const ROW1_CATEGORIES = [
  {
    label: "Customers",
    href: "/best/crm-software",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    label: "Invoices",
    href: "/best/invoicing-software",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "/best/project-management-software",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
];

const ROW2_CATEGORIES = [
  {
    label: "Time",
    href: "/best/time-tracking-software",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Security",
    href: "/best/business-vpn",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Payroll",
    href: "/best/payroll-software",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Premium software discovery hero */}
      <section className="sp-hero-v2 relative overflow-hidden bg-[#f5f7fa]">
        <div className="sp-container relative z-10 grid min-h-[650px] items-center gap-12 py-16 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:py-24">
          <div className="mx-auto w-full max-w-[620px] text-center lg:mx-0 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#001D39]/10 bg-white/80 px-3.5 py-2 text-[11px] font-semibold tracking-[0.12em] text-[#34516b] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2d82bd]" />
              INDEPENDENT SOFTWARE RESEARCH
            </div>
            <h1 className="sp-hero-v2-title mt-7 text-balance text-[clamp(3.1rem,6.2vw,5.8rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[#071d33]">
              Better tools.<br />
              <span className="text-[#47718f]">Clearer choices.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-[540px] text-base leading-7 text-[#536577] sm:text-lg sm:leading-8 lg:mx-0">
              Find software that fits the way you work. Compare real costs, free-plan limits and the trade-offs that matter before you commit.
            </p>
            <form action="/best#directory-search" method="get" className="mx-auto mt-9 flex w-full max-w-[560px] flex-col gap-2 rounded-2xl border border-[#d6e0e8] bg-white p-2 shadow-[0_18px_50px_rgba(0,29,57,0.10)] sm:flex-row sm:items-center lg:mx-0">
              <label htmlFor="software-search" className="sr-only">Search software comparisons</label>
              <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-[#6d8294]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input id="software-search" name="q" type="search" placeholder="Search CRM, invoicing, project tools..." className="h-12 min-w-0 w-full bg-transparent text-sm text-[#102b43] outline-none placeholder:text-[#8b9aaa]" />
              </div>
              <button type="submit" className="sp-hero-v2-submit inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#001D39] px-6 text-sm font-semibold text-white transition hover:bg-[#0b3558]">
                Explore tools <span aria-hidden="true">↗</span>
              </button>
            </form>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-[#657789] lg:justify-start">
              <span className="mr-1 font-medium">Popular searches</span>
              <Link href="/best?q=CRM#directory-search" className="rounded-full border border-[#d3dee7] bg-white/70 px-3 py-1.5 transition hover:border-[#7896ad] hover:text-[#001D39]">CRM</Link>
              <Link href="/best?q=invoicing#directory-search" className="rounded-full border border-[#d3dee7] bg-white/70 px-3 py-1.5 transition hover:border-[#7896ad] hover:text-[#001D39]">Invoicing</Link>
              <Link href="/best?q=project%20management#directory-search" className="rounded-full border border-[#d3dee7] bg-white/70 px-3 py-1.5 transition hover:border-[#7896ad] hover:text-[#001D39]">Project management</Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-[#536577] lg:justify-start">
              <Link href="/how-we-verify" className="inline-flex items-center gap-2 transition hover:text-[#001D39]"><span className="text-[#2c789f]">✓</span> Clear comparison criteria</Link>
              <Link href="/best" className="inline-flex items-center gap-2 transition hover:text-[#001D39]"><span className="text-[#2c789f]">✓</span> Browse all categories</Link>
            </div>
          </div>

          <div className="sp-hero-visual relative mx-auto flex w-full max-w-[590px] items-center justify-center py-5 lg:py-0" aria-label="Illustration of software categories and comparison insights">
            <div className="sp-hero-orbit sp-hero-orbit-one" />
            <div className="sp-hero-orbit sp-hero-orbit-two" />
            <div className="sp-hero-glow" />
            <div className="sp-hero-dashboard relative z-10 w-full max-w-[440px] overflow-hidden rounded-[28px] border border-white/15 bg-[#061f38] p-5 text-white shadow-[0_35px_90px_rgba(0,29,57,0.30)] sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-white/10">
                    <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true"><g fill="currentColor"><rect x="3" y="5" width="26" height="6" rx="3"/><rect x="3" y="14" width="20" height="6" rx="3" opacity=".72"/><rect x="3" y="23" width="14" height="5" rx="2.5" opacity=".48"/></g></svg>
                  </span>
                  <span className="text-sm font-semibold tracking-tight">StackPick <span className="font-normal text-white/45">/ Discover</span></span>
                </div>
                <span className="rounded-full border border-[#8fc7d8]/25 bg-[#8fc7d8]/10 px-2.5 py-1 text-[9px] font-semibold tracking-[0.12em] text-[#a8d9e7]">RESEARCH VIEW</span>
              </div>
              <div className="pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8fb1c9]">Your workflow, mapped</p>
                <h2 className="mt-2 text-[25px] font-semibold leading-tight tracking-[-0.045em] sm:text-[29px]">Find your best-fit<br />software stack.</h2>
                <p className="mt-2 max-w-[300px] text-xs leading-5 text-[#b4c5d3]">A clearer view of features, pricing and what each plan leaves out.</p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="sp-hero-tool-card">
                  <span className="sp-hero-tool-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M16 20v-1.5a4.5 4.5 0 0 0-4.5-4.5h-3A4.5 4.5 0 0 0 4 18.5V20M10 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17 11h4m-2-2v4"/></svg></span>
                  <span><strong>CRM</strong><small>Know your customers</small></span>
                </div>
                <div className="sp-hero-tool-card">
                  <span className="sp-hero-tool-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v6h5M8 14h8M8 17h6"/></svg></span>
                  <span><strong>Invoicing</strong><small>Get paid on time</small></span>
                </div>
                <div className="sp-hero-tool-card">
                  <span className="sp-hero-tool-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4m8-4v4M3 9h18M8 13h3m-3 3h7"/></svg></span>
                  <span><strong>Projects</strong><small>Keep work moving</small></span>
                </div>
                <div className="sp-hero-tool-card">
                  <span className="sp-hero-tool-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 19V5m0 14h17M8 15l3-4 3 2 5-7"/></svg></span>
                  <span><strong>Analytics</strong><small>See what is working</small></span>
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-white/90">What matters in a comparison</span>
                  <span className="text-[9px] font-medium uppercase tracking-wider text-[#9dc9d9]">The details</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div><div className="h-1 rounded-full bg-[#80b6c9]"/><p className="mt-2 text-[10px] text-[#c3d0da]">Real pricing</p></div>
                  <div><div className="h-1 rounded-full bg-[#80b6c9]/75"/><p className="mt-2 text-[10px] text-[#c3d0da]">Plan limits</p></div>
                  <div><div className="h-1 rounded-full bg-[#80b6c9]/50"/><p className="mt-2 text-[10px] text-[#c3d0da]">Trade-offs</p></div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between text-[10px] text-[#91a9ba]">
                <span>Independent research. Practical decisions.</span><span className="text-[#a8d9e7]">01 / 03</span>
              </div>
            </div>
            <div className="sp-hero-float sp-hero-float-top"><span className="sp-hero-float-dot"/> Pricing, made clearer</div>
            <div className="sp-hero-float sp-hero-float-bottom"><span className="sp-hero-float-check">✓</span> Compare the real trade-offs</div>
          </div>
        </div>
        <div className="sp-hero-bottomline"><span>Less noise.</span><span className="h-px w-10 bg-[#9eb3c4]"/><span>More useful decisions.</span></div>
      </section>

      {/* Popular software profiles */}
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
              <Link
                key={software.slug}
                href={`/software/${software.slug}`}
                className="group flex min-w-0 items-center gap-4 rounded-2xl border border-[#d2d2d7] bg-white p-4 transition-colors hover:border-[#001D39]/40 hover:bg-[#f9fafb] sm:p-5"
              >
                <SoftwareLogo name={software.name} url={software.officialUrl} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-[#1d1d1f]">{software.name}</span>
                  <span className="mt-1 block text-xs text-[#6e6e73]">{software.category} · Product profile</span>
                </span>
                <span aria-hidden="true" className="text-[#001D39] transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Dark Showcase Section (Software for the work you do) */}
      <section className="bg-black text-white">
        <div className="sp-container py-14 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="sp-eyebrow text-[#a1a1a6]">What are you looking for?</p>
            <h2 className="sp-title mt-3 max-w-none text-balance text-white text-[clamp(2.25rem,5.2vw,4.2rem)] leading-[1.05]">
              Software for the work you do.
            </h2>
          </div>

          <div className="mx-auto mt-10 w-full max-w-4xl sm:mt-16 lg:mt-20">
            {/* Row 1: Customers, Invoices, Projects */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
              {ROW1_CATEGORIES.map((item) => (
                <Link key={item.label} href={item.href} className="group block">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:scale-105">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-white sm:mt-5 sm:text-2xl">
                    {item.label}
                  </h3>
                  <span className="mt-5 block text-xs text-[#a1a1a6] transition-colors group-hover:text-white sm:mt-8 lg:mt-10">
                    Explore {item.label.toLowerCase()} →
                  </span>
                </Link>
              ))}
            </div>

            {/* Subtle Divider Line spanning across columns */}
            <div className="my-8 border-b border-white/15 sm:my-12" />

            {/* Row 2: Time, Security, Payroll */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
              {ROW2_CATEGORIES.map((item) => (
                <Link key={item.label} href={item.href} className="group block">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:scale-105">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-white sm:mt-5 sm:text-2xl">
                    {item.label}
                  </h3>
                  <span className="mt-5 block text-xs text-[#a1a1a6] transition-colors group-hover:text-white sm:mt-8 lg:mt-10">
                    Explore {item.label.toLowerCase()} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Popular Comparisons Section */}
      <section className="bg-[#f5f5f7]">
        <div className="sp-container py-24 sm:py-32">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="sp-eyebrow">Featured comparisons</p>
              <h2 className="sp-title mt-3 max-w-3xl">The shortlist starts here.</h2>
            </div>
            <Link
              href="/best"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#001D39] hover:underline"
            >
              See all comparisons →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {FEATURED.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-[300px] flex-col justify-between rounded-[28px] border border-[#d2d2d7] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6e6e73]">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold leading-snug tracking-[-0.03em] text-[#1d1d1f] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#6e6e73]">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-8">
                  <span className="text-xs font-semibold text-[#001D39] group-hover:underline">
                    Read the comparison →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Approach Section */}
      <section className="bg-white">
        <div className="sp-container py-24 sm:py-32">
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
              <h3 className="text-lg font-bold tracking-tight text-[#1d1d1f]">
                Pricing reality
              </h3>
              <p className="mt-2.5 text-xs leading-6 text-[#6e6e73]">
                We separate the advertised starting price from the plan you will actually need.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-[#1d1d1f]">
                Fit over features
              </h3>
              <p className="mt-2.5 text-xs leading-6 text-[#6e6e73]">
                A smaller tool can be a better choice when it matches the way you work.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-[#1d1d1f]">
                Clear verdicts
              </h3>
              <p className="mt-2.5 text-xs leading-6 text-[#6e6e73]">
                Every comparison should help you decide - including when the answer is to use nothing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA Section */}
      <section className="bg-[#f5f5f7]">
        <div className="sp-container py-24 text-center sm:py-32">
          <p className="sp-eyebrow">Ready when you are.</p>
          <h2 className="sp-title mx-auto mt-3 max-w-3xl">
            Make your next software decision a simpler one.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <Link href="/best" className="inline-block text-sm font-semibold text-[#001D39] hover:underline">
              Browse all comparisons →
            </Link>
            <Link href="/software" className="inline-block text-sm font-semibold text-[#001D39] hover:underline">
              Explore software profiles →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
