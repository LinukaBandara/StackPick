"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SoftwareLogo from "@/components/SoftwareLogo";
import ProductScreenshot from "@/components/ProductScreenshot";
import type { SoftwareProfile } from "@/lib/software";

type Props = { software: SoftwareProfile[] };
type PricingFilter = "all" | "free" | "trial" | "paid";
type SortOption = "recommended" | "name-asc" | "name-desc" | "free-first" | "category";

const USE_CASES = [
  { id: "freelancers", label: "Freelancers & solo work", test: /freelanc|solo|independent|individual|consultant/i },
  { id: "small-business", label: "Small businesses", test: /small business|small team|business owner|growing business|smb/i },
  { id: "sales", label: "Sales & CRM", test: /sales|crm|lead|pipeline|customer relationship/i },
  { id: "developers", label: "Developers & IT", test: /developer|software team|engineer|api|code|deploy|database|hosting|devops/i },
  { id: "marketing", label: "Marketing & growth", test: /marketing|campaign|email|seo|search visibility|audience|growth/i },
  { id: "design", label: "Design & content", test: /design|creative|content|graphic|visual|brand|video|presentation/i },
  { id: "operations", label: "Operations & productivity", test: /project|task|workflow|operation|productivity|schedule|calendar|automation|knowledge/i },
  { id: "support", label: "Customer support", test: /support|help desk|helpdesk|service desk|customer service|inbox|ticket/i },
  { id: "commerce", label: "Ecommerce & payments", test: /ecommerce|e-commerce|online store|payment|checkout|billing|subscription/i },
] as const;

function hasFreePlan(item: SoftwareProfile) {
  const text = item.freePlan.toLowerCase();
  if (/no permanent free|does not offer a permanent free|does not advertise a permanent free|no standard free|no permanent free full/i.test(text)) return false;
  return /\byes\b|free edition|free tier|free plan|free account|free tools|free forever|starter is free|hobby is free|developer is a free/i.test(text);
}

function hasFreeTrial(item: SoftwareProfile) {
  return /free trial|trial is available|trial may be|trial offer|trial availability|14-day trial|30-day trial/i.test(item.freePlan + " " + item.pricingSummary);
}

function isUsageBased(item: SoftwareProfile) {
  return /usage-based|pay-as-you-go|metered usage|transaction fee|per successful|usage depends|credits\/month|per 1,000|usage beyond|additional usage/i.test(item.pricingSummary);
}

function matchesUseCase(item: SoftwareProfile, id: string) {
  const useCase = USE_CASES.find((entry) => entry.id === id);
  if (!useCase) return true;
  return useCase.test.test([item.name, item.category, item.tagline, item.summary, ...item.bestFor, ...item.keyFeatures].join(" "));
}

function getPricingLabel(item: SoftwareProfile) {
  if (hasFreePlan(item)) return isUsageBased(item) ? "Free plan · usage charges" : "Free plan available";
  if (hasFreeTrial(item)) return "Free trial";
  return isUsageBased(item) ? "Usage-based / paid" : "Paid plans";
}

export default function SoftwareCatalogue({ software }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [pricing, setPricing] = useState<PricingFilter>("all");
  const [useCase, setUseCase] = useState("all");
  const [sort, setSort] = useState<SortOption>("recommended");
  const [compare, setCompare] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedCategory = params.get("category");
    const requestedQuery = params.get("q");
    const requestedPricing = params.get("pricing") as PricingFilter | null;
    const requestedUseCase = params.get("use") || "all";
    const requestedSort = params.get("sort") as SortOption | null;
    const categoryMatch = software.find((item) => item.category.toLowerCase() === requestedCategory?.toLowerCase());
    if (categoryMatch) setCategory(categoryMatch.category);
    if (requestedQuery) setQuery(requestedQuery);
    if (requestedPricing && ["all", "free", "trial", "paid"].includes(requestedPricing)) setPricing(requestedPricing);
    if (USE_CASES.some((item) => item.id === requestedUseCase)) setUseCase(requestedUseCase);
    if (requestedSort && ["recommended", "name-asc", "name-desc", "free-first", "category"].includes(requestedSort)) setSort(requestedSort);
    try {
      const saved = JSON.parse(window.localStorage.getItem("stackpick-compare") || "[]");
      if (Array.isArray(saved)) setCompare(saved.filter((slug) => software.some((item) => item.slug === slug)).slice(0, 3));
    } catch {}
    setHydrated(true);
  }, [software]);

  useEffect(() => {
    if (!hydrated) return;
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (category !== "all") params.set("category", category);
    if (pricing !== "all") params.set("pricing", pricing);
    if (useCase !== "all") params.set("use", useCase);
    if (sort !== "recommended") params.set("sort", sort);
    const next = params.toString();
    window.history.replaceState(null, "", next ? `/software?${next}` : "/software");
  }, [hydrated, query, category, pricing, useCase, sort]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("stackpick-compare", JSON.stringify(compare));
  }, [compare, hydrated]);

  useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search);
      setQuery(params.get("q") || "");
      const requestedCategory = params.get("category");
      const match = software.find((item) => item.category.toLowerCase() === requestedCategory?.toLowerCase());
      setCategory(match?.category || "all");
      const requestedPricing = params.get("pricing") as PricingFilter | null;
      setPricing(requestedPricing && ["all", "free", "trial", "paid"].includes(requestedPricing) ? requestedPricing : "all");
      setUseCase(params.get("use") || "all");
      const requestedSort = params.get("sort") as SortOption | null;
      setSort(requestedSort && ["recommended", "name-asc", "name-desc", "free-first", "category"].includes(requestedSort) ? requestedSort : "recommended");
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [software]);

  const categories = useMemo(() => Array.from(new Set(software.map((item) => item.category))).sort(), [software]);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const result = software.filter((item) => {
      const searchable = [item.name, item.category, item.tagline, item.summary, item.pricingSummary, item.freePlan, ...item.bestFor, ...item.keyFeatures].join(" ").toLowerCase();
      const matchesQuery = !normalized || searchable.includes(normalized);
      const free = hasFreePlan(item);
      const trial = hasFreeTrial(item);
      const matchesPricing = pricing === "all" || (pricing === "free" && free) || (pricing === "trial" && !free && trial) || (pricing === "paid" && !free && !trial);
      return matchesQuery && matchesPricing && (category === "all" || item.category === category) && (useCase === "all" || matchesUseCase(item, useCase));
    });
    return result.sort((a, b) => {
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      if (sort === "category") return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
      if (sort === "free-first") return Number(hasFreePlan(b)) - Number(hasFreePlan(a)) || a.name.localeCompare(b.name);
      return 0;
    });
  }, [software, query, category, pricing, useCase, sort]);

  const selected = software.filter((item) => compare.includes(item.slug));
  const hasActiveFilters = Boolean(query || category !== "all" || pricing !== "all" || useCase !== "all" || sort !== "recommended");

  function toggleCompare(slug: string) {
    setCompare((current) => current.includes(slug) ? current.filter((item) => item !== slug) : current.length < 3 ? [...current, slug] : current);
  }

  function clearFilters() {
    setQuery("");
    setCategory("all");
    setPricing("all");
    setUseCase("all");
    setSort("recommended");
  }

  return (
    <div>
      <div className="mt-10 rounded-[24px] border border-black/[0.08] bg-[#f5f5f7] p-4 sm:p-5">
        <label htmlFor="software-catalogue-search" className="sr-only">Search software</label>
        <div className="relative">
          <svg aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6e6e73]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m21 21-4.4-4.4m1.4-5.1a6.5 6.5 0 1 1 13 0Z" />
          </svg>
          <input id="software-catalogue-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search tools, features, categories or use cases" className="w-full rounded-full border border-[#d2d2d7] bg-white py-3 pl-11 pr-4 text-sm text-[#1d1d1f] placeholder:text-[#6e6e73] outline-none transition focus:border-[#001D39] focus:ring-2 focus:ring-[#001D39]/10" />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label className="block">
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-[#6e6e73]">Category</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="w-full rounded-xl border border-[#d2d2d7] bg-white px-3 py-2.5 text-sm text-[#1d1d1f] outline-none focus:border-[#001D39]">
              <option value="all">All categories</option>
              {categories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-[#6e6e73]">Pricing</span>
            <select value={pricing} onChange={(event) => setPricing(event.target.value as PricingFilter)} className="w-full rounded-xl border border-[#d2d2d7] bg-white px-3 py-2.5 text-sm text-[#1d1d1f] outline-none focus:border-[#001D39]">
              <option value="all">Any pricing model</option>
              <option value="free">Permanent free plan</option>
              <option value="trial">Free trial, no permanent plan</option>
              <option value="paid">Paid plans</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-[#6e6e73]">Best for</span>
            <select value={useCase} onChange={(event) => setUseCase(event.target.value)} className="w-full rounded-xl border border-[#d2d2d7] bg-white px-3 py-2.5 text-sm text-[#1d1d1f] outline-none focus:border-[#001D39]">
              <option value="all">All use cases</option>
              {USE_CASES.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-[#6e6e73]">Sort by</span>
            <select value={sort} onChange={(event) => setSort(event.target.value as SortOption)} className="w-full rounded-xl border border-[#d2d2d7] bg-white px-3 py-2.5 text-sm text-[#1d1d1f] outline-none focus:border-[#001D39]">
              <option value="recommended">Default order</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
              <option value="free-first">Free plans first</option>
              <option value="category">Category</option>
            </select>
          </label>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.07] pt-4">
          <p className="text-xs text-[#6e6e73]" aria-live="polite"><span className="font-semibold text-[#1d1d1f]">{filtered.length}</span> of {software.length} software profiles</p>
          <div className="flex items-center gap-4">
            {hasActiveFilters && <button type="button" onClick={clearFilters} className="text-xs font-semibold text-[#001D39] hover:underline">Clear filters</button>}
            <span className="text-xs text-[#6e6e73]">Select up to 3 tools to compare</span>
          </div>
        </div>
      </div>

      {filtered.length ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => {
            const checked = compare.includes(item.slug);
            const disabled = !checked && compare.length >= 3;
            return (
              <article key={item.slug} className="flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#d2d2d7] bg-white transition-all hover:-translate-y-0.5 hover:border-[#001D39]/35 hover:shadow-[0_16px_40px_rgba(0,29,57,0.08)]">
                <ProductScreenshot src={item.productImage.src} alt={item.productImage.alt} fallbackHref={item.officialUrl} className="border-b border-black/[0.06]" />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <SoftwareLogo name={item.name} url={item.officialUrl} />
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73]">{item.category}</p>
                      <h2 className="mt-1 text-lg font-semibold tracking-tight text-[#1d1d1f]">{item.name}</h2>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#6e6e73]">{item.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#f5f5f7] px-3 py-1.5 text-[11px] font-medium text-[#4b5563]">{getPricingLabel(item)}</span>
                    <span className="rounded-full bg-[#f5f5f7] px-3 py-1.5 text-[11px] font-medium text-[#4b5563]">{item.reviewedOn}</span>
                  </div>
                  <div className="mt-4 rounded-2xl bg-[#f5f5f7] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6e6e73]">Free-plan check</p>
                    <p className="mt-2 text-sm leading-6 text-[#1d1d1f]">{item.freePlan}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
                    <Link href={`/software/${item.slug}`} className="text-sm font-semibold text-[#001D39] hover:underline">Read profile <span aria-hidden="true">→</span></Link>
                    <a href={item.pricingUrl} target="_blank" rel="noreferrer" data-vendor-outbound="true" data-software-slug={item.slug} data-vendor-action="pricing" className="text-xs font-medium text-[#6e6e73] underline-offset-4 hover:text-[#001D39] hover:underline">Official pricing ↗</a>
                  </div>
                  <label className={`mt-5 flex cursor-pointer items-center gap-2 border-t border-black/[0.07] pt-4 text-xs font-semibold ${disabled ? "cursor-not-allowed text-[#9ca3af]" : "text-[#4b5563]"}`}>
                    <input type="checkbox" checked={checked} disabled={disabled} onChange={() => toggleCompare(item.slug)} className="h-4 w-4 rounded border-[#9ca3af] accent-[#001D39]" />
                    Add to comparison
                    {disabled && <span className="font-normal">· 3 selected</span>}
                  </label>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="mt-6 rounded-[24px] border border-black/10 bg-white px-6 py-12 text-center">
          <p className="text-base font-semibold text-[#1d1d1f]">No matching software profiles</p>
          <p className="mt-2 text-sm text-[#6e6e73]">Try a broader search or remove one of the filters.</p>
          <button type="button" onClick={clearFilters} className="mt-5 rounded-full bg-[#001D39] px-4 py-2 text-sm font-semibold text-white hover:bg-[#123b5d]">Clear all filters</button>
        </div>
      )}

      {selected.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 shadow-[0_-12px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          <div className="sp-container flex flex-wrap items-center justify-between gap-3 py-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#1d1d1f]">{selected.length} of 3 selected</p>
              <p className="mt-1 max-w-[60vw] truncate text-xs text-[#6e6e73]">{selected.map((item) => item.name).join(" · ")}</p>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setCompare([])} className="rounded-full px-3 py-2 text-xs font-semibold text-[#6e6e73] hover:bg-[#f5f5f7]">Clear</button>
              <Link href={`/compare?tools=${selected.map((item) => item.slug).join(",")}`} className="rounded-full bg-[#001D39] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#123b5d]">Compare tools <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      )}
      {selected.length > 0 && <div className="h-24" aria-hidden="true" />}
    </div>
  );
}
