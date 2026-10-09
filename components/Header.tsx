import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="StackPick home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span className="brand-word">stack<span>pick</span></span>
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          <Link href="/best">Explore guides</Link>
          <Link href="/about">Our approach</Link>
        </nav>
        <Link href="/best" className="header-cta">Find your tool <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
