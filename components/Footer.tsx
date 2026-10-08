import Link from "next/link";

const LINKS = [
  { href: "/best", label: "All Comparisons" },
  { href: "/about", label: "About" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-950 text-white">
      <div className="sp-container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_.8fr_.8fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-slate-950 font-black">S</span>
              <span className="text-xl font-extrabold">Stack<span className="text-indigo-300">Pick</span></span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Practical software comparisons for freelancers and small businesses. We focus on
              real trade-offs, useful free plans, and tools worth your time.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Explore</p>
            <nav className="mt-4 grid gap-3 text-sm text-slate-400">
              {LINKS.slice(0, 2).map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-white">{l.label}</Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Transparency</p>
            <nav className="mt-4 grid gap-3 text-sm text-slate-400">
              {LINKS.slice(2).map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-white">{l.label}</Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} StackPick. All rights reserved.</p>
          <p>Independent editorial site. Affiliate relationships are disclosed.</p>
        </div>
      </div>
    </footer>
  );
}
