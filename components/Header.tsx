import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur-xl">
      <div className="sp-container h-12 flex items-center justify-between gap-6">
        <Link href="/" className="text-[17px] font-semibold tracking-[-.02em] text-[#1d1d1f]" aria-label="StackPick home">
          StackPick
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          <Link href="/best" className="text-xs text-[#1d1d1f] hover:text-[#06c]">Comparisons</Link>
          <Link href="/about" className="text-xs text-[#1d1d1f] hover:text-[#06c]">How it works</Link>
          <Link href="/contact" className="text-xs text-[#1d1d1f] hover:text-[#06c]">Contact</Link>
        </nav>

        <Link href="/best" className="text-xs font-medium text-[#06c] hover:underline">
          Explore →
        </Link>
      </div>
    </header>
  );
}
