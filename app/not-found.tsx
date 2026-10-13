import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="sp-container flex min-h-[60vh] max-w-3xl flex-col items-start justify-center py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">404 · Page not found</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">This page took a wrong turn.</h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#6e6e73]">The link may be outdated or the page may have moved. Head back to StackPick and find a clearer software choice.</p>
        <Link href="/" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-[#001D39] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#123b5d]">Back to StackPick</Link>
        <Link href="/best" className="mt-4 text-sm font-medium text-[#004bb5] hover:underline">Browse software comparisons</Link>
      </div>
    </section>
  );
}
