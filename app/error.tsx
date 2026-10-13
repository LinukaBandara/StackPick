"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="bg-white">
      <div className="sp-container flex min-h-[45vh] max-w-3xl flex-col items-start justify-center py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">Something went wrong</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#1d1d1f]">That page didn’t load correctly.</h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#6e6e73]">Please try again. If the problem continues, return to StackPick and choose another page.</p>
        <button type="button" onClick={() => reset()} className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-[#001D39] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#123b5d]">Try again</button>
      </div>
    </section>
  );
}
