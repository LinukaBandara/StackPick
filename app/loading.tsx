export default function Loading() {
  return (
    <div className="bg-white" role="status" aria-live="polite" aria-label="Loading page">
      <div className="sp-container min-h-[40vh] py-16 sm:py-24">
        <div className="h-3 w-24 animate-pulse rounded bg-[#e5e7eb]" />
        <div className="mt-5 h-10 max-w-xl animate-pulse rounded bg-[#e5e7eb]" />
        <div className="mt-4 h-4 max-w-2xl animate-pulse rounded bg-[#f0f1f3]" />
        <div className="mt-3 h-4 max-w-xl animate-pulse rounded bg-[#f0f1f3]" />
        <span className="sr-only">Loading content…</span>
      </div>
    </div>
  );
}
