import Link from "next/link";

function StackPickMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-6 w-6 shrink-0 text-[#1d1d1f]">
      <rect x="3" y="4" width="26" height="6" rx="3" fill="currentColor" />
      <rect x="3" y="13" width="20" height="6" rx="3" fill="currentColor" opacity=".72" />
      <rect x="3" y="22" width="14" height="6" rx="3" fill="currentColor" opacity=".46" />
    </svg>
  );
}

const EXPLORE_LINKS = [
  { href: "/best/invoicing-software", label: "Invoicing software" },
  { href: "/best/crm-software", label: "CRM software" },
  { href: "/best/project-management-software", label: "Project management" },
  { href: "/best/time-tracking-software", label: "Time tracking" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About StackPick" },
  { href: "/contact", label: "Contact" },
  { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-[#f5f5f7]">
      <div className="sp-container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 text-lg font-semibold tracking-[-0.025em] text-[#1d1d1f]">
              <StackPickMark />
              <span>StackPick</span>
            </div>
            <p className="mt-3.5 max-w-sm text-xs leading-6 text-[#6e6e73]">
              Clear software comparisons for freelancers and small businesses. Less noise. Better decisions.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f]">Explore</p>
            <nav className="mt-4 grid gap-2.5 text-xs text-[#6e6e73]" aria-label="Explore navigation">
              {EXPLORE_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-[#004bb5]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f]">StackPick</p>
            <nav className="mt-4 grid gap-2.5 text-xs text-[#6e6e73]" aria-label="Company navigation">
              {COMPANY_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-[#004bb5]">
                  {link.label}
                </Link>
              ))}
              <a
                href="https://ark-ii.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#004bb5]"
              >
                ARK II Studio ↗
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-black/[0.08] pt-6 text-xs text-[#6e6e73]">
          <p>© {new Date().getFullYear()} StackPick. All rights reserved.</p>
          <p>
            Made by{" "}
            <a
              href="https://ark-ii.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1d1d1f] hover:text-[#004bb5] underline font-medium transition-colors"
            >
              ARK II Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
