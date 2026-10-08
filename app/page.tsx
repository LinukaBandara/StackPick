import Link from "next/link";

const FEATURED = [
  { href: "/best/invoicing-software", eyebrow: "Invoicing", title: "The best invoicing software for small businesses.", desc: "Compare the tools that help you send, track, and get paid for invoices." },
  { href: "/best/crm-software", eyebrow: "CRM", title: "A CRM that stays simple.", desc: "See which customer-management tools make sense before your business outgrows them." },
  { href: "/best/project-management-software", eyebrow: "Projects", title: "Projects, without the overhead.", desc: "A practical look at project tools for small teams that need to get work moving." },
  { href: "/best/time-tracking-software", eyebrow: "Time tracking", title: "Know where the hours go.", desc: "Compare simple time trackers for freelancers and small teams." },
];

const NEEDS = [
  ["Customers", "/best/crm-software"],
  ["Invoices", "/best/invoicing-software"],
  ["Projects", "/best/project-management-software"],
  ["Time", "/best/time-tracking-software"],
  ["Security", "/best/business-vpn"],
  ["Payroll", "/best/payroll-software"],
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-white">
        <div className="sp-container flex min-h-[720px] flex-col items-center justify-center py-24 text-center sm:min-h-[780px]">
          <p className="sp-eyebrow">Software, without the noise.</p>
          <h1 className="sp-display mt-7 max-w-5xl">Find the right tool.<br />Not the loudest one.</h1>
          <p className="sp-body-large mt-8 max-w-2xl">
            StackPick compares software for freelancers and small businesses -
            pricing, limits, strengths, trade-offs, and the details that actually change a decision.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/best" className="sp-button-primary">Explore comparisons</Link>
            <Link href="/about" className="sp-button-secondary">How StackPick works</Link>
          </div>
          <div className="mt-16 w-full max-w-4xl rounded-[32px] bg-[#f5f5f7] px-5 py-10 sm:px-12 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#6e6e73]">A better way to choose</p>
            <div className="mt-8 grid gap-8 text-left sm:grid-cols-3">
              {[
                ["01", "Start with the job", "What are you actually trying to get done?"],
                ["02", "Compare the trade-offs", "What does the free plan really include? What will become a problem later?"],
                ["03", "Choose with context", "The best tool is the one that fits your workflow - not the one with the longest feature list."],
              ].map(([n, title, desc]) => (
                <div key={n}>
                  <p className="text-sm font-semibold text-[#06c]">{n}</p>
                  <h2 className="mt-2 text-lg font-semibold tracking-tight">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section-dark">
        <div className="sp-container py-24 sm:py-32">
          <p className="sp-eyebrow text-[#a1a1a6]">What are you looking for?</p>
          <h2 className="sp-title mt-4 max-w-3xl">Software for the work you do.</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {NEEDS.map(([label, href]) => (
              <Link key={label} href={href} className="group bg-black p-8 transition-colors hover:bg-[#161617] sm:p-10">
                <span className="text-2xl font-semibold tracking-tight">{label}</span>
                <span className="mt-14 block text-sm text-[#a1a1a6] transition-colors group-hover:text-white">Explore {label.toLowerCase()} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7]">
        <div className="sp-container py-24 sm:py-32">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="sp-eyebrow">Featured comparisons</p>
              <h2 className="sp-title mt-3 max-w-3xl">The shortlist starts here.</h2>
            </div>
            <Link href="/best" className="sp-link text-sm font-medium">See all comparisons →</Link>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {FEATURED.map((item) => (
              <Link key={item.href} href={item.href} className="sp-card group min-h-[330px] p-8 sm:p-10">
                <p className="text-sm font-semibold text-[#6e6e73]">{item.eyebrow}</p>
                <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl">{item.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-[#6e6e73]">{item.desc}</p>
                <span className="mt-10 inline-block text-sm font-medium text-[#06c] group-hover:underline">Read the comparison →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="sp-container py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="sp-eyebrow">Our approach</p>
            <h2 className="sp-title mt-4">Useful beats impressive.</h2>
            <p className="sp-body-large mt-7">
              We care about the things that are easy to miss in a polished product demo:
              real pricing, meaningful free limits, setup friction, workflow fit, and the reason
              you might regret choosing a tool six months later.
            </p>
          </div>
          <div className="mt-16 grid gap-10 border-t border-black/10 pt-10 md:grid-cols-3">
            {[
              ["Pricing reality", "We separate the advertised starting price from the plan you will actually need."],
              ["Fit over features", "A smaller tool can be a better choice when it matches the way you work."],
              ["Clear verdicts", "Every comparison should help you decide - including when the answer is to use nothing."],
            ].map(([title, desc]) => (
              <div key={title}>
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7]">
        <div className="sp-container py-24 text-center sm:py-32">
          <p className="sp-eyebrow">Ready when you are.</p>
          <h2 className="sp-title mx-auto mt-4 max-w-3xl">Make your next software decision a simpler one.</h2>
          <Link href="/best" className="sp-link mt-8 inline-block text-lg font-medium">Browse all comparisons →</Link>
        </div>
      </section>
    </main>
  );
}
