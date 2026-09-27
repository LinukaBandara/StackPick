import Link from "next/link";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <p className="font-bold">StackPick</p>
        <p className="text-sm text-slate-300 mt-1 max-w-md">
          Independent software comparisons for freelancers and small businesses. Some links on
          this site are affiliate links — see our{" "}
          <Link href="/affiliate-disclosure" className="underline hover:text-indigo">
            affiliate disclosure
          </Link>
          .
        </p>
        <nav className="flex flex-wrap gap-4 mt-6 text-sm text-slate-300">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-slate-400 mt-6">© {new Date().getFullYear()} StackPick.</p>
      </div>
    </footer>
  );
}
