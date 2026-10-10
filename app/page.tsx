import Link from "next/link";

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
      {/* 1. Hero Section */}
      <section className="bg-white">
        <div className="sp-container flex min-h-[700px] flex-col items-center justify-center py-20 text-center sm:min-h-[760px] sm:py-28">
          <p className="sp-eyebrow">Software, without the noise.</p>
          <h1 className="sp-display mt-6 max-w-5xl">
            Find the right tool.<br />
            Not the loudest one.
          </h1>
          <p className="sp-body-large mt-7 max-w-2xl">
            StackPick compares software for freelancers and small businesses, pricing,
            limits, strengths, trade-offs, and the details that actually change a decision.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/best" className="sp-button-primary">
              Explore comparisons
            </Link>
            <Link href="/about" className="sp-button-secondary">
              How StackPick works
            </Link>
          </div>

          {/* 3 Steps Container */}
          <div className="mt-16 w-full max-w-4xl rounded-[32px] bg-[#f5f5f7] px-6 py-10 sm:px-12 sm:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6e6e73]">
              A better way to choose
            </p>
            <div className="mt-8 grid gap-8 text-left sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-[#001D39]">01</p>
                <h2 className="mt-2 text-base font-semibold tracking-tight text-[#1d1d1f]">
                  Start with the job
                </h2>
                <p className="mt-2 text-xs leading-5 text-[#6e6e73]">
                  What are you actually trying to get done?
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#001D39]">02</p>
                <h2 className="mt-2 text-base font-semibold tracking-tight text-[#1d1d1f]">
                  Compare the trade-offs
                </h2>
                <p className="mt-2 text-xs leading-5 text-[#6e6e73]">
                  What does the free plan really include? What will become a problem later?
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#001D39]">03</p>
                <h2 className="mt-2 text-base font-semibold tracking-tight text-[#1d1d1f]">
                  Choose with context
                </h2>
                <p className="mt-2 text-xs leading-5 text-[#6e6e73]">
                  The best tool is the one that fits your workflow - not the one with the longest feature list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dark Showcase Section (Software for the work you do) */}
      <section className="bg-black text-white">
        <div className="sp-container py-14 sm:py-24 lg:py-32">
          <p className="sp-eyebrow text-[#a1a1a6]">What are you looking for?</p>
          <h2 className="sp-title mt-3 max-w-3xl text-white text-[clamp(2rem,8vw,4.2rem)] leading-[1.05]">
            Software for the work you do.
          </h2>

          <div className="mt-10 sm:mt-16 lg:mt-20">
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
          <Link
            href="/best"
            className="mt-8 inline-block text-sm font-semibold text-[#001D39] hover:underline"
          >
            Browse all comparisons →
          </Link>
        </div>
      </section>
    </>
  );
}
