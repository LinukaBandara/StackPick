"use client";

import { usePathname, useRouter } from "next/navigation";

export default function BackNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  if (!pathname || pathname === "/") return null;

  const isComparison = pathname.startsWith("/best/") && pathname !== "/best/";
  const isDirectory = pathname === "/best";
  const label = isComparison
    ? "Back to comparisons"
    : isDirectory
      ? "Back to home"
      : "Back to StackPick";
  const fallback = isComparison ? "/best" : "/";

  function handleBack() {
    const state = window.history.state as { idx?: number } | null;
    if (typeof state?.idx === "number" && state.idx > 0) {
      router.back();
      return;
    }
    router.push(fallback);
  }

  return (
    <div className="border-b border-black/[0.04] bg-white">
      <div className="sp-container py-3">
        <button
          type="button"
          onClick={handleBack}
          className="group inline-flex min-h-9 items-center gap-2 rounded-full pr-3 text-sm font-medium text-[#6e6e73] transition-colors hover:text-[#001D39] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001D39]/30"
          aria-label={label}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d2d2d7] transition-colors group-hover:border-[#001D39]/30 group-hover:bg-[#f5f5f7]">
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
              <path d="M15.5 10H4.5m0 0 4.25-4.25M4.5 10l4.25 4.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>{label}</span>
        </button>
      </div>
    </div>
  );
}
