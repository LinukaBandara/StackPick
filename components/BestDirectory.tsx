"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";

export interface ArticleItem {
  href: string;
  title: string;
  desc: string;
  category: string;
}

interface BestDirectoryProps {
  articles: ArticleItem[];
}

const CATEGORIES = [
  "All",
  "Finance",
  "Sales",
  "Productivity",
  "Operations",
  "Security",
  "Marketing",
  "People",
  "Infrastructure",
  "Development",
  "Automation",
];

export default function BestDirectory({ articles }: BestDirectoryProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const requestedCategory = new URLSearchParams(window.location.search).get("category");
    if (requestedCategory && CATEGORIES.some((category) => category.toLowerCase() === requestedCategory.toLowerCase())) {
      setActiveCategory(CATEGORIES.find((category) => category.toLowerCase() === requestedCategory.toLowerCase())!);
    }
  }, []);

  const filteredArticles = useMemo(() => {
    return articles.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category.toLowerCase() === activeCategory.toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [articles, activeCategory, searchQuery]);

  return (
    <div className="sp-container py-10 sm:py-16">
      {/* Search and Category Filter Bar */}
      <div className="mb-10 space-y-6">
        {/* Search input with Apple style */}
        <div id="directory-search" className="relative max-w-xl scroll-mt-24">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#86868b]">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides (e.g. invoicing, crm, vpn, time tracking)..."
            className="w-full rounded-full border border-[#d2d2d7] bg-white py-3 pl-11 pr-12 text-sm text-[#1d1d1f] placeholder-[#86868b] shadow-sm transition-all focus:border-[#001D39] focus:outline-none focus:ring-2 focus:ring-[#001D39]/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-xs font-semibold text-[#86868b] hover:text-[#1d1d1f]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#001D39] text-white shadow-sm"
                    : "bg-white text-[#6e6e73] border border-[#d2d2d7] hover:border-[#86868b] hover:text-[#1d1d1f]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Count Indicator */}
        <div className="text-xs text-[#86868b]">
          Showing {filteredArticles.length} of {articles.length} comparison guides
        </div>
      </div>

      {/* Grid of Results */}
      <div id="directory-results" className="scroll-mt-24">
      {filteredArticles.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {filteredArticles.map((a, index) => (
            <Link
              key={a.href}
              href={a.href}
              className="group flex flex-col justify-between rounded-[24px] border border-[#d2d2d7] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#001D39]">
                    {a.category} · {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-semibold text-[#001D39] opacity-0 transition-opacity group-hover:opacity-100">
                    Read →
                  </span>
                </div>
                <h2 className="mt-6 text-xl sm:text-2xl font-bold leading-tight tracking-tight text-[#1d1d1f]">
                  {a.title}
                </h2>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#6e6e73]">
                  {a.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#001D39] group-hover:underline">
                  View guide →
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-[28px] border border-[#d2d2d7] bg-white p-12 text-center">
          <p className="text-base font-semibold text-[#1d1d1f]">No guides found matching &quot;{searchQuery}&quot;</p>
          <p className="mt-2 text-sm text-[#6e6e73]">Try searching for CRM, invoicing, time tracking, or clear your filters.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="mt-6 inline-flex rounded-full bg-[#001D39] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#00142A]"
          >
            Reset filters
          </button>
        </div>
      )}
      </div>
    </div>
  );
}
