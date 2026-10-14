"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SoftwareLogo from "@/components/SoftwareLogo";
import ProductScreenshot from "@/components/ProductScreenshot";
import type { SoftwareProfile } from "@/lib/software";

type Props = { software: SoftwareProfile[] };

export default function SoftwareCatalogue({ software }: Props) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "free" | "sales">("all");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return software.filter((item) => {
      const matchesQuery =
        !normalized ||
        item.name.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized) ||
        item.tagline.toLowerCase().includes(normalized) ||
        item.summary.toLowerCase().includes(normalized);
      const freeText = item.freePlan.toLowerCase();
      const hasFreeOption =
        freeText.includes("yes") ||
        freeText.includes("free edition") ||
        freeText.includes("free tier");
      const matchesFilter =
        filter === "all" ||
        (filter === "free" && hasFreeOption) ||
        (filter === "sales" && /sales|crm/i.test(item.category));
      return matchesQuery && matchesFilter;
    });
  }, [software, query, filter]);

  const filters = [
    { id: "all" as const, label: "All software" },
    { id: "free" as const, label: "Free option" },
    { id: "sales" as const, label: "Sales & CRM" },
  ];

  return (
    <div>
      <div className="mt-10 rounded-[24px] border border-black/[0.08] bg-[#f5f5f7] p-4 sm:p-5">
        <label htmlFor="software-catalogue-search" className="sr-only">Search software</label>
        <div className="relative">
          <svg aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6e6e73]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m21 21-4.4-4.4m1.4-5.1a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
          </svg>
          <input
            id="software-catalogue-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search software, categories or use cases"
            className="w-full rounded-full border border-[#d2d2d7] bg-white py-3 pl-11 pr-4 text-sm text-[#1d1d1f] placeholder:text-[#6e6e73] outline-none transition focus:border-[#001D39] focus:ring-2 focus:ring-[#001D39]/10"
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2" aria-label="Filter software">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${filter === item.id ? "bg-[#001D39] text-white" : "border border-[#d2d2d7] bg-white text-[#4b5563] hover:border-[#001D39]/40 hover:text-[#001D39]"}`}
            >
              {item.label}
            </button>
          ))}
          <span className="ml-auto px-1 text-xs text-[#6e6e73]">{filtered.length} {filtered.length === 1 ? "profile" : "profiles"}</span>
        </div>
      </div>

      {filtered.length ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <article
              key={item.slug}
              className="flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#d2d2d7] bg-white transition-all hover:-translate-y-0.5 hover:border-[#001D39]/35 hover:shadow-[0_16px_40px_rgba(0,29,57,0.08)]"
            >
              <ProductScreenshot
                src={item.productImage.src}
                alt={item.productImage.alt}
                className="border-b border-black/[0.06]"
              />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <SoftwareLogo name={item.name} url={item.officialUrl} />
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]">{item.category}</p>
                    <h2 className="mt-1 text-lg font-semibold tracking-tight text-[#1d1d1f]">{item.name}</h2>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#6e6e73]">{item.tagline}</p>
                <div className="mt-4 rounded-2xl bg-[#f5f5f7] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6e6e73]">Free-plan check</p>
                  <p className="mt-2 text-sm leading-6 text-[#1d1d1f]">{item.freePlan}</p>
                </div>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
                  <Link href={`/software/${item.slug}`} className="text-sm font-semibold text-[#001D39] hover:underline">
                    Read profile <span aria-hidden="true">→</span>
                  </Link>
                  <a href={item.pricingUrl} target="_blank" rel="noreferrer" className="text-xs font-medium text-[#6e6e73] underline-offset-4 hover:text-[#001D39] hover:underline">
                    Official pricing ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-[24px] border border-black/10 bg-white px-6 py-12 text-center">
          <p className="text-base font-semibold text-[#1d1d1f]">No matching software profiles</p>
          <p className="mt-2 text-sm text-[#6e6e73]">Try another search or clear the current filter.</p>
          <button type="button" onClick={() => { setQuery(""); setFilter("all"); }} className="mt-5 rounded-full bg-[#001D39] px-4 py-2 text-sm font-semibold text-white hover:bg-[#123b5d]">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
