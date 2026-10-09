import Link from "next/link";

const LINKS = [
  { href: "/best", label: "All comparisons" },
  { href: "/about", label: "About StackPick" },
  { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <Link href="/" className="brand footer-brand" aria-label="StackPick home">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span className="brand-word">stack<span>pick</span></span>
          </Link>
          <p>Better software choices start with a little more clarity.</p>
        </div>
        <div className="footer-links-column">
          <span className="footer-label">EXPLORE</span>
          <nav aria-label="Footer navigation">
            {LINKS.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
            <a href="https://ark-ii.studio" target="_blank" rel="noopener noreferrer">ARK II Studio <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
        <div className="footer-note">
          <span className="footer-label">OUR PROMISE</span>
          <p>Independent-minded comparisons for people building something of their own.</p>
          <Link href="/about" className="footer-about-link">How we work <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} StackPick. All rights reserved.</span>
        <span>StackPick is created by <a href="https://ark-ii.studio" target="_blank" rel="noopener noreferrer">ARK II</a>.</span>
      </div>
    </footer>
  );
}
