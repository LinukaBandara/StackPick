import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-borderc">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-ink">
          Stack<span className="text-indigo">Pick</span>
        </Link>
        <nav className="flex items-center gap-6" aria-label="Primary">
          <Link href="/best" className="text-sm text-ink hover:text-indigo font-medium">
            All Comparisons
          </Link>
          <Link href="/about" className="text-sm text-ink hover:text-indigo">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
