import Link from "next/link";

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function StackPickMark() {
  return <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 shrink-0">
    <rect x="3" y="4" width="26" height="6" rx="3" fill="currentColor" />
    <rect x="3" y="13" width="20" height="6" rx="3" fill="currentColor" opacity=".72" />
    <rect x="3" y="22" width="14" height="6" rx="3" fill="currentColor" opacity=".46" />
  </svg>;
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur-xl">
      <div className="sp-container h-14 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 text-[17px] font-semibold tracking-[-.025em] text-[#1d1d1f]" aria-label="StackPick home">
          <StackPickMark />
          <span>StackPick</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          <Link href="/best" className="text-xs text-[#1d1d1f] hover:text-[#06c]">Comparisons</Link>
          <Link href="/about" className="text-xs text-[#1d1d1f] hover:text-[#06c]">How it works</Link>
          <Link href="/contact" className="text-xs text-[#1d1d1f] hover:text-[#06c]">Contact</Link>
        </nav>
        <Link href="/best" className="inline-flex items-center gap-1.5 text-xs font-medium text-[#06c] hover:underline">
          Explore <ArrowIcon />
        </Link>
      </div>
    </header>
  );
}
