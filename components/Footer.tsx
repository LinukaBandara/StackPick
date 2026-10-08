import Link from "next/link";

const EXPLORE = [
  { href: "/best", label: "All comparisons" },
  { href: "/best/crm-software", label: "CRM software" },
  { href: "/best/invoicing-software", label: "Invoicing software" },
  { href: "/best/project-management-software", label: "Project management" },
];
const COMPANY = [
  { href: "/about", label: "About StackPick" },
  { href: "/contact", label: "Contact" },
  { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
  { href: "/privacy", label: "Privacy" },
];
function StackPickMark() {
  return <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 shrink-0">
    <rect x="3" y="4" width="26" height="6" rx="3" fill="currentColor" />
    <rect x="3" y="13" width="20" height="6" rx="3" fill="currentColor" opacity=".72" />
    <rect x="3" y="22" width="14" height="6" rx="3" fill="currentColor" opacity=".46" />
  </svg>;
}
export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f5f5f7]">
      <div className="sp-container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 text-lg font-semibold tracking-tight"><StackPickMark /><span>StackPick</span></div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#6e6e73]">Clear software comparisons for freelancers and small businesses. Less noise. Better decisions.</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f]">Explore</p>
            <nav className="mt-4 grid gap-2.5 text-xs text-[#6e6e73]">{EXPLORE.map((l) => <Link key={l.href} href={l.href} className="hover:text-[#06c]">{l.label}</Link>)}</nav>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f]">StackPick</p>
            <nav className="mt-4 grid gap-2.5 text-xs text-[#6e6e73]">{COMPANY.map((l) => <Link key={l.href} href={l.href} className="hover:text-[#06c]">{l.label}</Link>)}</nav>
          </div>
        </div>
        <div className="mt-12 border-t border-black/10 pt-5 text-xs text-[#6e6e73]"><p>© {new Date().getFullYear()} StackPick. All rights reserved.</p></div>
      </div>
    </footer>
  );
}
