import Link from "next/link";

const FEATURED = [
  { href: "/best/invoicing-software", title: "Best Invoicing Software for Freelancers", desc: "Wave, FreshBooks, Zoho Invoice, Invoice Ninja, and QuickBooks compared on real trade-offs.", icon: "▣", tag: "Invoicing" },
  { href: "/best/crm-software", title: "Best CRM Software for Freelancers & Small Teams", desc: "HubSpot, Pipedrive, Zoho CRM, and Notion — which one actually fits your workflow.", icon: "◎", tag: "CRM" },
  { href: "/best/project-management-software", title: "Best Project Management Software for Small Teams", desc: "Trello, Asana, ClickUp, and monday.com — and when you don't need one at all.", icon: "✓", tag: "Projects" },
  { href: "/best/payroll-software", title: "Best Payroll Software for Small Business", desc: "Gusto, QuickBooks Payroll, OnPay, and Patriot Software.", icon: "$", tag: "Payroll" },
  { href: "/best/business-vpn", title: "Best Business VPN for Remote Teams", desc: "NordLayer, Perimeter 81, Twingate, and Cloudflare Zero Trust.", icon: "◈", tag: "Security" },
  { href: "/best/time-tracking-software", title: "Best Time Tracking Software for Freelancers & Small Teams", desc: "Toggl Track, Clockify, Harvest, and Hubstaff.", icon: "◷", tag: "Productivity" },
];

const NEEDS = [
  ["◎", "Manage customers", "/best/crm-software"],
  ["▣", "Send invoices", "/best/invoicing-software"],
  ["✦", "Manage projects", "/best/project-management-software"],
  ["◷", "Track time", "/best/time-tracking-software"],
  ["◈", "Secure remote work", "/best/business-vpn"],
  ["$", "Run payroll", "/best/payroll-software"],
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 sp-grid-pattern opacity-60" aria-hidden="true" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" aria-hidden="true" />
        <div className="sp-container relative grid min-h-[560px] items-center gap-14 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div>
            <span className="sp-pill border border-indigo-100 bg-indigo-50 text-indigo-700">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Software tested for real-world use
            </span>
            <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
              Find software that actually <span className="sp-gradient-text">fits.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Practical comparisons of AI and business software for freelancers and small teams —
              focused on price, limits, trade-offs, and what each tool is really good at.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/best" className="sp-button-primary px-6 py-3">Explore software →</Link>
              <Link href="/about" className="sp-button-secondary px-6 py-3">How StackPick works</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span>✓ Budget-focused</span>
              <span>✓ Clear trade-offs</span>
              <span>✓ No enterprise fluff</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[32px] bg-gradient-to-br from-indigo-100 via-white to-sky-100 blur-xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(16,24,40,.13)]">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">StackPick test</p>
                  <p className="mt-1 font-bold text-slate-950">Which CRM fits a 3-person team?</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">FREE PLAN</span>
              </div>
              <div className="mt-5 grid gap-3">
                {[
                  ["HubSpot", "Best starting point", "4.7"],
                  ["Zoho CRM", "Best customization", "4.5"],
                  ["Bitrix24", "Best all-in-one", "4.2"],
                ].map(([name, best, score], i) => (
                  <div key={name} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3.5">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-950 text-sm font-black text-white">
                      {i + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-slate-950">{name}</p>
                      <p className="text-xs text-slate-500">{best}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-slate-950">{score}</p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-amber-500">score</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-indigo-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">StackPick verdict</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">Start simple. Upgrade only when the free plan becomes the bottleneck.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-container py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[.15em] text-indigo-600">Browse by need</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">What are you trying to get done?</h2>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {NEEDS.map(([icon, label, href]) => (
            <Link key={label} href={href} className="sp-card group p-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-lg font-black text-indigo-600 group-hover:bg-indigo-50">{icon}</span>
              <span className="mt-4 block text-sm font-bold text-slate-900">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="sp-container pb-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.15em] text-indigo-600">Popular right now</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Software worth comparing</h2>
          </div>
          <Link href="/best" className="hidden text-sm font-bold text-indigo-600 hover:text-indigo-800 sm:block">View all comparisons →</Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((f) => (
            <Link key={f.href} href={f.href} className="sp-card group p-5">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-lg font-black text-white transition-transform group-hover:-rotate-3">{f.icon}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{f.tag}</span>
              </div>
              <h3 className="mt-5 text-lg font-extrabold leading-7 text-slate-950 group-hover:text-indigo-700">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{f.desc}</p>
              <span className="mt-5 inline-block text-sm font-bold text-indigo-600">Read comparison →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="sp-container grid gap-8 py-14 md:grid-cols-3">
          {[
            ["01", "We compare the real options", "Shortlists are built around the job you need software to do — not just popularity."],
            ["02", "We surface the trade-offs", "Free limits, pricing, complexity and missing features are part of the decision."],
            ["03", "You choose with context", "Every comparison ends with clear guidance on who should use each option."],
          ].map(([n, title, desc]) => (
            <div key={n}>
              <span className="text-sm font-black text-indigo-600">{n}</span>
              <h2 className="mt-2 text-lg font-extrabold text-slate-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
