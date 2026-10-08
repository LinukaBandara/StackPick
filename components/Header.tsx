import Link from "next/link";

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" fill="currentColor" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Zm7 13 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="sp-container h-[72px] flex items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="StackPick home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-white shadow-sm transition-transform group-hover:-rotate-3">
            <span className="text-sm font-black">S</span>
          </span>
          <span className="text-xl font-extrabold tracking-tight text-slate-950">
            Stack<span className="text-[#5B5CE2]">Pick</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          <Link href="/best" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950">
            <span className="mr-2 inline-flex align-middle"><GridIcon /></span>
            Comparisons
          </Link>
          <Link href="/about" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950">
            About
          </Link>
        </nav>

        <Link href="/best" className="sp-button-primary hidden sm:inline-flex">
          <SparkIcon />
          Explore picks
        </Link>
        <Link href="/best" className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-white sm:hidden" aria-label="Explore comparisons">
          <GridIcon />
        </Link>
      </div>
    </header>
  );
}
