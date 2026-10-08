import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Honest Software Comparisons for Freelancers & Small Businesses",
  description: "Practical software comparisons for freelancers and small businesses, focused on pricing, limits, fit and trade-offs.",
  alternates: { canonical: "/" },
};

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SparkIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none"><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>;
}

function NeedIcon({ type }: { type: string }) {
  const paths: Record<string,string> = {
    Customers: "M5 13.5a3 3 0 1 1 6 0v2H5v-2Zm1-7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm6 8.5v-1.5a3 3 0 0 1 3-3",
    Invoices: "M6 3h6l3 3v11H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm6 0v4h3M7 11h5M7 14h5",
    Projects: "M3.5 5.5h5l1.5 2h4.5v7a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2ZM3 5.5V4a2 2 0 0 1 2-2h3l1.5 2",
    Time: "M8 3a6 6 0 1 0 6 6M8 5v4l3 2",
    Security: "M8 2.5 13 4v4c0 3.2-2.1 5.5-5 6.5-2.9-1-5-3.3-5-6.5V4l5-1.5ZM6 8l1.4 1.5L10.5 6",
    Payroll: "M3 5h10v8H3zM6 15h6M5 8h6M6 10.5h4",
  };
  return <svg aria-hidden="true" viewBox="0 0 16 16" className="h-6 w-6" fill="none"><path d={paths[type]} stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

const NEEDS = [
  ["Customers", "/best/crm-software", "Keep leads, clients and conversations organized."],
  ["Invoices", "/best/invoicing-software", "Send invoices, get paid and stop chasing paperwork."],
  ["Projects", "/best/project-management-software", "Keep small teams moving without enterprise overhead."],
  ["Time", "/best/time-tracking-software", "Know where billable hours and working time go."],
  ["Security", "/best/business-vpn", "Protect accounts, devices and remote work."],
  ["Payroll", "/best/payroll-software", "Pay people accurately without building a finance department."],
];

const FEATURED = [
  { href: "/best/invoicing-software", eyebrow: "Money", title: "The best invoicing software for small businesses.", desc: "Compare pricing, free-plan limits and the tools you actually need to get paid." },
  { href: "/best/crm-software", eyebrow: "Customers", title: "A CRM that stays simple.", desc: "Find the point where a spreadsheet stops working - and which CRM fits next." },
  { href: "/best/project-management-software", eyebrow: "Work", title: "Projects, without the overhead.", desc: "A practical look at project tools for small teams that need to get work moving." },
  { href: "/best/ai-tools-small-businesses", eyebrow: "AI", title: "AI tools worth putting to work.", desc: "Separate useful assistants from the growing pile of tools competing for attention." },
];

export default function HomePage() {
  return <>
    <section className="sp-hero">
      <div className="sp-container relative py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div>
            <div className="sp-kicker"><span className="sp-kicker-dot" /> Independent software research</div>
            <h1 className="sp-display mt-7 max-w-4xl">Find the right tool.<br /><em>Not the loudest one.</em></h1>
            <p className="sp-body-large mt-7 max-w-2xl">StackPick helps freelancers and small businesses make better software decisions - with pricing reality, useful limits, workflow fit and clear trade-offs.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/best" className="sp-button-primary">Explore comparisons <ArrowIcon /></Link>
              <Link href="/about" className="sp-button-secondary">How StackPick works</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#667085]">
              <span>100+ decision guides</span><span>Pricing-aware</span><span>Built for small teams</span>
            </div>
          </div>
          <div className="sp-hero-art" aria-hidden="true">
            <div className="sp-orbit sp-orbit-one" />
            <div className="sp-orbit sp-orbit-two" />
            <div className="sp-art-card sp-art-card-main">
              <div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[.14em] text-[#667085]">StackPick verdict</span><span className="sp-live-dot" /></div>
              <div className="mt-7 flex items-end justify-between"><div><p className="text-4xl font-semibold tracking-[-.05em]">Fit</p><p className="mt-1 text-sm text-[#667085]">for a 5-person team</p></div><span className="rounded-full bg-[#e9f9f1] px-3 py-1.5 text-xs font-semibold text-[#087443]">Strong</span></div>
              <div className="mt-8 grid gap-2"><span className="sp-score-line w-[92%]" /><span className="sp-score-line w-[76%]" /><span className="sp-score-line w-[84%]" /><span className="sp-score-line w-[61%]" /></div>
            </div>
            <div className="sp-art-card sp-art-card-float"><SparkIcon /><div><p className="text-sm font-semibold">Compare the trade-offs</p><p className="mt-1 text-xs text-[#667085]">Price is only part of the decision.</p></div></div>
            <div className="sp-art-pill">01 · Start with the job</div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#101828] text-white">
      <div className="sp-container py-20 sm:py-28">
        <div className="max-w-3xl"><p className="sp-eyebrow text-[#98a2b3]">Choose by the work</p><h2 className="sp-title mt-4">What are you trying to get done?</h2><p className="mt-5 max-w-2xl text-base leading-7 text-[#98a2b3]">Start with the problem, not a vendor's feature list. StackPick points you toward the software category that actually matches the job.</p></div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {NEEDS.map(([label, href, desc], i) => <Link key={label} href={href} className="sp-need-card group"><div className="flex items-center justify-between"><span className="sp-need-icon"><NeedIcon type={label} /></span><span className="text-xs font-medium text-[#667085]">0{i + 1}</span></div><h3 className="mt-8 text-2xl font-semibold tracking-[-.03em]">{label}</h3><p className="mt-2 max-w-xs text-sm leading-6 text-[#98a2b3]">{desc}</p><span className="mt-8 flex items-center gap-1.5 text-sm font-medium text-white">Explore {label.toLowerCase()} <ArrowIcon /></span></Link>)}
        </div>
      </div>
    </section>

    <section className="bg-[#f7f8fc]">
      <div className="sp-container py-20 sm:py-28">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="sp-eyebrow">Featured decisions</p><h2 className="sp-title mt-3 max-w-3xl">Start with a shortlist.</h2></div><Link href="/best" className="sp-link text-sm font-semibold">See all comparisons <ArrowIcon /></Link></div>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {FEATURED.map((item, i) => <Link key={item.href} href={item.href} className="sp-editorial-card group">
            <div className="flex items-center justify-between"><span className="sp-category">{item.eyebrow}</span><span className="text-xs font-medium text-[#98a2b3]">0{i + 1}</span></div>
            <h3 className="mt-16 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-.045em] sm:text-4xl">{item.title}</h3>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#667085]">{item.desc}</p>
            <span className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-[#344054] group-hover:text-[#5b5ce2]">Read the comparison <ArrowIcon /></span>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="sp-container py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div><p className="sp-eyebrow">The StackPick method</p><h2 className="sp-title mt-4">Useful beats impressive.</h2></div>
          <div className="grid gap-0 border-t border-[#e4e7ec]">
            {[["01","Pricing reality","We separate the advertised starting price from the plan you will actually need."],["02","Fit over features","A smaller tool can be a better choice when it matches the way you work."],["03","Clear verdicts","Every comparison should help you decide - including when the answer is to use nothing."]].map(([n,title,desc]) => <div key={n} className="grid gap-5 border-b border-[#e4e7ec] py-7 sm:grid-cols-[60px_1fr_1.4fr] sm:items-start"><span className="text-xs font-semibold text-[#98a2b3]">{n}</span><h3 className="text-xl font-semibold tracking-[-.025em]">{title}</h3><p className="text-sm leading-6 text-[#667085]">{desc}</p></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#5b5ce2] text-white">
      <div className="sp-container py-20 text-center sm:py-24"><p className="text-sm font-semibold uppercase tracking-[.16em] text-white/65">No hype required</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-6xl">Make your next software decision a simpler one.</h2><Link href="/best" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#344054] transition hover:-translate-y-0.5 hover:shadow-xl">Browse the decision library <ArrowIcon /></Link></div>
    </section>
  </>;
}
