"use client";

import { useState } from "react";
import Link from "next/link";

function StackPickMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 shrink-0 text-[#1d1d1f]">
      <rect x="3" y="4" width="26" height="6" rx="3" fill="currentColor" />
      <rect x="3" y="13" width="20" height="6" rx="3" fill="currentColor" opacity=".72" />
      <rect x="3" y="22" width="14" height="6" rx="3" fill="currentColor" opacity=".46" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white/85 backdrop-blur-xl">
      <div className="sp-container flex h-16 items-center justify-between gap-5">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2.5 text-lg font-semibold tracking-[-0.025em] text-[#1d1d1f]" aria-label="StackPick home">
          <StackPickMark />
          <span>StackPick</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <Link href="/software" className="text-sm font-medium text-[#1d1d1f] transition-colors hover:text-[#001D39]">Software</Link>
          <Link href="/categories" className="text-sm font-medium text-[#1d1d1f] transition-colors hover:text-[#001D39]">Categories</Link>
          <Link href="/comparisons" className="text-sm font-medium text-[#1d1d1f] transition-colors hover:text-[#001D39]">Comparisons</Link>
          <Link href="/guides" className="text-sm font-medium text-[#1d1d1f] transition-colors hover:text-[#001D39]">Guides</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/best#directory-search"
            onClick={closeMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#6e6e73] transition-colors hover:bg-[#f5f5f7] hover:text-[#1d1d1f]"
            aria-label="Search comparisons"
            title="Search comparisons"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>

          <div className="relative md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-[#1d1d1f] transition-colors hover:bg-[#f5f5f7]"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="stackpick-mobile-navigation"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>

            {menuOpen && (
              <nav id="stackpick-mobile-navigation" aria-label="Mobile primary" className="absolute right-0 top-14 z-50 w-[min(88vw,340px)] rounded-2xl border border-black/10 bg-white p-2 shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
                <Link href="/software" onClick={closeMenu} className="sp-mobile-nav-link">Software profiles <span>Explore individual tools</span></Link>
                <Link href="/categories" onClick={closeMenu} className="sp-mobile-nav-link">Categories <span>Explore by need</span></Link>
                <Link href="/comparisons" onClick={closeMenu} className="sp-mobile-nav-link">Comparisons <span>Compare tools side by side</span></Link>
                <Link href="/guides" onClick={closeMenu} className="sp-mobile-nav-link">Guides <span>Practical buying advice</span></Link>
                <Link href="/best#directory-search" onClick={closeMenu} className="sp-mobile-nav-link">Search software <span>Find a tool</span></Link>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
