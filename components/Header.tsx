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

function MenuIcon({ type }: { type: "finder" | "software" | "categories" | "comparisons" | "guides" }) {
  const paths = {
    finder: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4M8 10.5h5M10.5 8v5" /></>,
    software: <><rect x="4" y="4" width="6" height="6" rx="1.5" /><rect x="14" y="4" width="6" height="6" rx="1.5" /><rect x="4" y="14" width="6" height="6" rx="1.5" /><rect x="14" y="14" width="6" height="6" rx="1.5" /></>,
    categories: <><path d="M4 6h16M4 12h10M4 18h13" /><circle cx="18" cy="12" r="2" /><circle cx="20" cy="18" r="2" /></>,
    comparisons: <><path d="M4 7h16M4 17h16M8 4 4 7l4 3M16 14l4 3-4 3" /></>,
    guides: <><path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v18H7.5A2.5 2.5 0 0 0 5 22.5z" /><path d="M5 5v17.5M9 7h7M9 11h7" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">{paths[type]}</svg>;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const items = [
    { href: "/software-finder", title: "Software Finder", description: "Get a tailored shortlist", type: "finder" as const },
    { href: "/software", title: "Software", description: "Explore individual tools", type: "software" as const },
    { href: "/categories", title: "Categories", description: "Find tools by your needs", type: "categories" as const },
    { href: "/comparisons", title: "Comparisons", description: "Compare tools side by side", type: "comparisons" as const },
    { href: "/guides", title: "Guides", description: "Make a confident decision", type: "guides" as const },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white/85 backdrop-blur-xl">
      <div className="sp-container flex h-16 items-center justify-between gap-5">
        <Link href="/#hero" onClick={closeMenu} className="flex items-center gap-2.5 text-lg font-semibold tracking-[-0.025em] text-[#1d1d1f]" aria-label="StackPick home">
          <StackPickMark />
          <span>StackPick</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <Link href="/software-finder" className="text-sm font-medium text-[#1d1d1f] transition-colors hover:text-[#001D39]">Find software</Link>
          <Link href="/software" className="text-sm font-medium text-[#1d1d1f] transition-colors hover:text-[#001D39]">Software</Link>
          <Link href="/categories" className="text-sm font-medium text-[#1d1d1f] transition-colors hover:text-[#001D39]">Categories</Link>
          <Link href="/comparisons" className="text-sm font-medium text-[#1d1d1f] transition-colors hover:text-[#001D39]">Comparisons</Link>
          <Link href="/guides" className="text-sm font-medium text-[#1d1d1f] transition-colors hover:text-[#001D39]">Guides</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/best#directory-search" onClick={closeMenu} className="flex h-11 w-11 items-center justify-center rounded-full text-[#6e6e73] transition-colors hover:bg-[#f5f5f7] hover:text-[#1d1d1f]" aria-label="Search comparisons" title="Search comparisons">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>

          <div className="relative md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className={`relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 ${menuOpen ? "border-[#001D39] bg-[#001D39] text-white shadow-md" : "border-black/10 text-[#1d1d1f] hover:bg-[#f5f5f7]"}`}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="stackpick-mobile-navigation"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" /></svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" /></svg>
              )}
            </button>

            {menuOpen && (
              <>
                <button type="button" aria-label="Close navigation menu" onClick={closeMenu} className="fixed inset-0 z-40 cursor-default bg-[#00101f]/20 backdrop-blur-[2px]" />
                <nav id="stackpick-mobile-navigation" aria-label="Mobile primary" className="absolute right-0 top-[3.65rem] z-50 w-[min(92vw,380px)] overflow-hidden rounded-[26px] border border-black/[0.08] bg-white shadow-[0_24px_70px_rgba(0,20,42,0.22)]">
                  <div className="bg-[#001D39] px-6 pb-5 pt-6 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">Explore StackPick</p>
                    <h2 className="mt-2 text-[25px] font-semibold leading-tight tracking-[-0.04em]">Find the right tools.<br />Make better decisions.</h2>
                    <p className="mt-2 text-xs leading-relaxed text-white/65">Independent software research, comparisons and practical advice.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-3">
                    {items.map((item) => (
                      <Link key={item.href} href={item.href} onClick={closeMenu} className="group flex min-h-[116px] flex-col justify-between rounded-2xl border border-[#e8e9eb] bg-white p-4 transition-all duration-200 hover:border-[#b9c8d6] hover:bg-[#f6f9fc] active:scale-[0.98]">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf2f7] text-[#001D39] transition-colors group-hover:bg-[#001D39] group-hover:text-white">
                          <MenuIcon type={item.type} />
                        </span>
                        <span className="mt-3 block">
                          <span className="block text-sm font-semibold tracking-[-0.02em] text-[#17212b]">{item.title}</span>
                          <span className="mt-1 block text-[10px] leading-snug text-[#737b84]">{item.description}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-t border-[#eef0f2] px-5 py-3">
                    <span className="text-[10px] font-medium tracking-wide text-[#858b92]">DESIGN · DEVELOP · DECIDE</span>
                    <span className="text-[10px] font-semibold text-[#001D39]">STACKPICK</span>
                  </div>
                </nav>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
