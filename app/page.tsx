import Link from "next/link";

const FEATURED = [
  { href: "/best/invoicing-software", category: "Finance", number: "01", title: "Invoicing software", desc: "Get paid faster, spend less time chasing invoices, and keep cash flow clear.", tools: "Wave · FreshBooks · Zoho Invoice" },
  { href: "/best/crm-software", category: "Sales", number: "02", title: "CRM software", desc: "Keep every customer, conversation, and next step in one place.", tools: "HubSpot · Pipedrive · Zoho CRM" },
  { href: "/best/project-management-software", category: "Productivity", number: "03", title: "Project management", desc: "Find a calmer way to plan work and keep your team moving.", tools: "Trello · Asana · ClickUp" },
  { href: "/best/payroll-software", category: "People", number: "04", title: "Payroll software", desc: "Pay your team accurately without making payday complicated.", tools: "Gusto · OnPay · QuickBooks" },
  { href: "/best/business-vpn", category: "Security", number: "05", title: "Business VPNs", desc: "Protect your remote team without enterprise-level complexity.", tools: "NordLayer · Twingate · Cloudflare" },
  { href: "/best/time-tracking-software", category: "Operations", number: "06", title: "Time tracking", desc: "Understand where the hours go and make billing simpler.", tools: "Toggl · Clockify · Harvest" },
];

const PRINCIPLES = [
  { number: "01", title: "Clarity over hype", text: "Plain-language comparisons that get to the point." },
  { number: "02", title: "Trade-offs included", text: "What each tool does well — and where it falls short." },
  { number: "03", title: "Built for real budgets", text: "Practical choices for freelancers and growing teams." },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-shell">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-dot" /> INDEPENDENT SOFTWARE GUIDES</div>
          <h1>Good software.<br /><span>Clear decisions.</span></h1>
          <p className="hero-copy">
            Find the tools that fit your work, your team, and your budget.
            Thoughtful comparisons, without the noise.
          </p>
          <div className="hero-actions">
            <Link href="/best" className="button-primary">Explore comparisons <span aria-hidden="true">↗</span></Link>
            <Link href="/about" className="button-secondary">How we choose</Link>
          </div>
          <div className="hero-footnote"><span className="tiny-check">✓</span> Independent research <span className="footnote-divider">·</span> Honest trade-offs <span className="footnote-divider">·</span> No enterprise bias</div>
        </div>
        <div className="hero-bottom" aria-hidden="true">
          <span>LESS GUESSWORK.</span>
          <span>BETTER WORKFLOWS.</span>
          <span>MORE ROOM TO GROW.</span>
        </div>
      </section>

      <section className="featured-section section-wrap" id="comparisons">
        <div className="section-heading">
          <div>
            <p className="section-kicker">THE SHORTLIST</p>
            <h2>Make your next choice<br className="desktop-break" /> a confident one.</h2>
          </div>
          <Link href="/best" className="text-link">Browse all guides <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="comparison-grid">
          {FEATURED.map((item) => (
            <Link href={item.href} key={item.href} className="comparison-card">
              <div className="card-topline"><span className="card-category">{item.category}</span><span className="card-number">{item.number}</span></div>
              <h3>{item.title}<span className="card-arrow" aria-hidden="true">↗</span></h3>
              <p>{item.desc}</p>
              <div className="card-tools">{item.tools}</div>
            </Link>
          ))}
        </div>
        <div className="all-guides-bar">
          <div className="all-guides-mark" aria-hidden="true"><span /><span /><span /></div>
          <div><strong>Looking for something specific?</strong><p>Explore the full library of software guides and comparisons.</p></div>
          <Link href="/best" className="button-dark">View all guides <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="principles-section">
        <div className="section-wrap principles-wrap">
          <div className="principles-intro">
            <p className="section-kicker">THE STACKPICK STANDARD</p>
            <h2>Less marketing.<br /><span>More meaning.</span></h2>
            <p>Choosing software shouldn’t feel like decoding a sales pitch. We focus on the details that actually change your day-to-day.</p>
            <Link href="/about" className="text-link">Our approach <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="principles-list">
            {PRINCIPLES.map((item) => (
              <div className="principle-row" key={item.number}>
                <span className="principle-number">{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <span className="principle-arrow" aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section section-wrap">
        <p className="section-kicker">YOUR NEXT BETTER DECISION</p>
        <h2>The right tool should<br />make work feel <span>lighter.</span></h2>
        <p>Start with what you need. We’ll help you narrow down what fits.</p>
        <Link href="/best" className="button-primary">Find your software <span aria-hidden="true">↗</span></Link>
      </section>
    </div>
  );
}
