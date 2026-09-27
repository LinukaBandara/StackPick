import Link from "next/link";

const FEATURED = [
  { href: "/best/invoicing-software", title: "Best Invoicing Software for Freelancers", desc: "Wave, FreshBooks, Zoho Invoice, Invoice Ninja, and QuickBooks compared on real trade-offs." },
  { href: "/best/crm-software", title: "Best CRM Software for Freelancers & Small Teams", desc: "HubSpot, Pipedrive, Zoho CRM, and Notion — which one actually fits your workflow." },
  { href: "/best/project-management-software", title: "Best Project Management Software for Small Teams", desc: "Trello, Asana, ClickUp, and monday.com — and when you don't need one at all." },
  { href: "/best/payroll-software", title: "Best Payroll Software for Small Business", desc: "Gusto, QuickBooks Payroll, OnPay, and Patriot Software." },
  { href: "/best/business-vpn", title: "Best Business VPN for Remote Teams", desc: "NordLayer, Perimeter 81, Twingate, and Cloudflare Zero Trust." },
  { href: "/best/time-tracking-software", title: "Best Time Tracking Software for Freelancers & Small Teams", desc: "Toggl Track, Clockify, Harvest, and Hubstaff." },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight">
          Honest software picks for small businesses.
        </h1>
        <p className="mt-4 text-lg text-slate max-w-xl mx-auto">
          Budget-focused comparisons of the tools freelancers and small teams actually need —
          without the enterprise price tag.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-bold text-ink">Popular comparisons</h2>
          <Link href="/best" className="text-sm text-indigo font-medium hover:underline">
            View all 21 →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {FEATURED.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="block rounded-card border border-borderc bg-white p-5 hover:border-indigo hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-ink">{f.title}</h3>
              <p className="text-sm text-slate mt-1">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
