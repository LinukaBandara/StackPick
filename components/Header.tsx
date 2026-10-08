import Link from "next/link";

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function StackPickMark() {
  return <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-[11px] bg-[#5b5ce2] text-white shadow-[0_6px_18px_rgba(91,92,226,.25)]"><svg viewBox="0 0 20 20" className="h-5 w-5" fill="none"><path d="M4 5h12M4 10h8M4 15h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></span>;
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e4e7ec]/80 bg-white/85 backdrop-blur-xl">
      <div className="sp-container flex h-[68px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 text-[17px] font-bold tracking-[-.03em]" aria-label="StackPick home"><StackPickMark /><span>StackPick</span></Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <Link href="/best" className="text-sm font-medium text-[#475467] transition hover:text-[#5b5ce2]">Comparisons</Link>
          <Link href="/about" className="text-sm font-medium text-[#475467] transition hover:text-[#5b5ce2]">How it works</Link>
          <Link href="/contact" className="text-sm font-medium text-[#475467] transition hover:text-[#5b5ce2]">Contact</Link>
        </nav>
        <Link href="/best" className="inline-flex items-center gap-1.5 rounded-full bg-[#101828] px-4 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#344054]">Explore <ArrowIcon /></Link>
      </div>
    </header>
  );
}
