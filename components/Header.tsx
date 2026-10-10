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

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white/80 backdrop-blur-xl">
      <div className="sp-container flex h-14 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 text-[17px] font-semibold tracking-[-0.025em] text-[#1d1d1f]" aria-label="StackPick home">
          <StackPickMark />
          <span>StackPick</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <Link href="/categories" className="text-xs font-medium text-[#1d1d1f] transition-colors hover:text-[#001D39]">
            Categories
          </Link>
          <Link href="/comparisons" className="text-xs font-medium text-[#1d1d1f] transition-colors hover:text-[#001D39]">
            Comparisons
          </Link>
          <Link href="/guides" className="text-xs font-medium text-[#1d1d1f] transition-colors hover:text-[#001D39]">
            Guides
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/best#directory-search"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#6e6e73] transition-colors hover:bg-[#f5f5f7] hover:text-[#1d1d1f]"
            aria-label="Search comparisons"
            title="Search comparisons"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
          <Link
            href="/best"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#001D39] transition-opacity hover:opacity-80 no-underline"
          >
            <span>Browse all</span>
            <ArrowIcon />
          </Link>
          <details className="sp-mobile-menu relative md:hidden">
            <summary aria-label="Open navigation menu" className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-black/10 text-[#1d1d1f] transition-colors hover:bg-[#f5f5f7] [&::-webkit-details-marker]:hidden">
              <svg className="sp-menu-open h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" /></svg>
              <svg className="sp-menu-close hidden h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" /></svg>
            </summary>
            <nav aria-label="Mobile primary" className="sp-mobile-menu-panel absolute right-0 top-12 z-50 w-[min(88vw,320px)] rounded-2xl border border-black/10 bg-white p-2 shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
              <Link href="/categories" className="sp-mobile-nav-link">Categories <span>Explore by need</span></Link>
              <Link href="/comparisons" className="sp-mobile-nav-link">Comparisons <span>Compare tools side by side</span></Link>
              <Link href="/guides" className="sp-mobile-nav-link">Guides <span>Practical buying advice</span></Link>
              <Link href="/best#directory-search" className="sp-mobile-nav-link">Search software <span>Find a tool</span></Link>
              <Link href="/best" className="mt-1 flex min-h-11 items-center justify-center rounded-xl bg-[#001D39] px-4 text-sm font-semibold text-white">Browse all software</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
