"use client";

import { useEffect, useState } from "react";
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

function MenuIcon({ type }: { type: "software" | "categories" | "comparisons" | "guides" }) {
  const paths = {
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

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const items = [
    { href: "/software", title: "Software", description: "Explore individual tools", type: "software" as const, number: "01" },
    { href: "/categories", title: "Categories", description: "Browse by what you need", type: "categories" as const, number: "02" },
    { href: "/comparisons", title: "Comparisons", description: "See how tools measure up", type: "comparisons" as const, number: "03" },
    { href: "/guides", title: "Guides", description: "Make a more confident choice", type: "guides" as const, number: "04" },
  ];

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
                <button type="button" aria-label="Close navigation menu" onClick={closeMenu} className="fixed inset-0 z-40 cursor-default bg-[#061525]/45 backdrop-blur-[3px]" />
                <nav id="stackpick-mobile-navigation" aria-label="Mobile primary" className="fixed bottom-0 right-0 top-0 z-[55] flex w-[min(88vw,410px)] flex-col overflow-y-auto border-l border-white/10 bg-[#fbfcfd] shadow-[-24px_0_80px_rgba(0,12,28,0.24)]">
                  <div className="flex items-center justify-between border-b border-[#e8edf2] px-6 py-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#001D39]"><span className="block h-4 w-4 rounded-[4px] border-2 border-white/90" /></span>
                      <span className="text-base font-semibold tracking-[-0.03em] text-[#102236]">StackPick</span>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8995a2]">Menu</span>
                  </div>

                  <div className="px-6 pb-5 pt-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7d8a98]">Explore</p>
                    <h2 className="mt-3 max-w-[290px] text-[30px] font-semibold leading-[1.08] tracking-[-0.055em] text-[#102236]">Make your next software choice a smarter one.</h2>
                    <p className="mt-3 max-w-[290px] text-sm leading-relaxed text-[#697786]">Research, compare and choose the tools that move your work forward.</p>
                  </div>

                  <div className="mx-5 border-t border-[#e7ebef]">
                    {items.map((item) => (
                      <Link key={item.href} href={item.href} onClick={closeMenu} className="group flex items-center gap-4 border-b border-[#e7ebef] py-5 transition-colors hover:bg-[#f2f6f9]">
                        <span className="w-6 shrink-0 text-[10px] font-semibold tabular-nums text-[#9aa5af]">{item.number}</span>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eaf0f5] text-[#001D39] transition-colors group-hover:bg-[#001D39] group-hover:text-white"><MenuIcon type={item.type} /></span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[15px] font-semibold tracking-[-0.02em] text-[#15283b]">{item.title}</span>
                          <span className="mt-1 block text-xs text-[#7b8793]">{item.description}</span>
                        </span>
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4 shrink-0 text-[#9aa5af] transition-transform group-hover:translate-x-1 group-hover:text-[#001D39]"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" /></svg>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto px-6 pb-7 pt-8">
                    <div className="rounded-2xl bg-[#001D39] px-5 py-4 text-white">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">StackPick</p>
                      <p className="mt-2 text-sm font-medium tracking-[-0.01em]">Design · Develop · Decide</p>
                      <p className="mt-1 text-xs text-white/60">Find tools that fit the way you work.</p>
                    </div>
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
