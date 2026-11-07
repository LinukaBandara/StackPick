import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appointment Scheduling Software Pricing (2026): Calendly, Acuity & Cal.com",
  description: "Compare appointment scheduling software prices, free plans, staff calendars, booking payments and team scheduling for Calendly, Acuity and Cal.com.",
  alternates: { canonical: "/best/appointment-scheduling-software-pricing" },
};

const plans = [
  { name: "Calendly Free", price: "$0", billing: "Free plan", fit: "One person with a simple one-to-one booking link", limits: "One event type and one calendar connection; no team round-robin scheduling.", url: "https://calendly.com/pricing" },
  { name: "Calendly Standard", price: "$10/seat/mo annual · $12 monthly", billing: "Per host seat; annual billing saves 17%", fit: "Solo professionals needing multiple event types, calendar connections, reminders and payments", limits: "Each user who connects calendars and hosts meetings needs a seat; team routing is on Teams.", url: "https://calendly.com/pricing" },
  { name: "Calendly Teams", price: "$16/seat/mo annual · $20 monthly", billing: "Per host seat; annual billing saves 20%", fit: "Sales and service teams that need round-robin scheduling and lead routing", limits: "Seat costs grow with every scheduling host; enterprise controls may require Enterprise.", url: "https://calendly.com/pricing" },
  { name: "Cal.com Individual", price: "$0", billing: "Free forever", fit: "Individuals needing multiple event types, calendar connections and payment options", limits: "The free tier is for one user; team scheduling and managed collaboration require a paid team plan.", url: "https://cal.com/pricing" },
  { name: "Cal.com Teams", price: "$12/user/mo annual · $16 monthly", billing: "Per user; 14-day trial for paid plans", fit: "Teams needing round-robin, managed events, routing forms and booking analytics", limits: "Organization-level controls and SSO are on the higher Organizations plan.", url: "https://cal.com/pricing" },
  { name: "Acuity Starter", price: "$16/mo", billing: "Billed yearly; $20 monthly", fit: "Appointment businesses with one staff/location calendar and online payments", limits: "One calendar; no free plan after trial.", url: "https://www.acuityscheduling.com/pricing/" },
  { name: "Acuity Standard", price: "$27/mo", billing: "Billed yearly; $34 monthly", fit: "Small service businesses with multiple staff calendars, SMS reminders and packages", limits: "Up to six calendars; confirm text reminder availability in your region.", url: "https://www.acuityscheduling.com/pricing/" },
  { name: "Acuity Premium", price: "$55/mo", billing: "Billed yearly; $69 monthly", fit: "Businesses managing many calendars, memberships and advanced booking needs", limits: "Up to 36 calendars; includes AI Booking Assistant, multiple staff/location time zones and custom API/CSS.", url: "https://acuityscheduling.com/pricing" },
];

export default function Page() {
  return (
    <main className="bg-white">
      <article className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Software pricing · Updated November 8, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">Appointment scheduling software pricing: compare the cost of bookings</h1>
        <p className="sp-eyebrow mt-6">Quick answer</p>
        <p className="sp-body-large mt-6 max-w-3xl">For a solo booking link, start with Calendly Free if one event type and one calendar are enough, or compare Cal.com Individual if you need more event types and calendar connections. Teams needing round-robin routing should compare Calendly Teams with Cal.com Teams. Service businesses that sell appointments, packages or payments should compare Acuity by calendar count. The figures below are US pricing references; local currency, taxes, feature availability and checkout terms vary by country.</p>

        <section className="mt-10 overflow-x-auto rounded-2xl border border-[#d2d2d7]">
          <table className="w-full min-w-[850px] border-collapse text-left text-sm">
            <thead className="bg-[#f5f5f7]"><tr><th className="p-4">Plan</th><th className="p-4">Published price</th><th className="p-4">Best fit</th><th className="p-4">Limit to check</th></tr></thead>
            <tbody>{plans.map((p) => <tr key={p.name} className="border-t border-[#d2d2d7] align-top"><td className="p-4"><a className="font-semibold text-[#001D39] underline" href={p.url} target="_blank" rel="noreferrer">{p.name}</a><p className="mt-2 text-[#6e6e73]">{p.billing}</p></td><td className="p-4 whitespace-nowrap">{p.price}</td><td className="p-4">{p.fit}</td><td className="p-4">{p.limits}</td></tr>)}</tbody>
          </table>
        </section>
        <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">Published US prices checked against official vendor pages on November 8, 2026. Calendly Standard is $10 per seat/month annually or $12 monthly; Teams is $16 annually or $20 monthly. Cal.com Teams is $12 per user/month annually or $16 monthly. Acuity Starter is $16 annually or $20 monthly, Standard $27 or $34, and Premium $55 or $69. Prices exclude applicable taxes; paid monthly equivalents are not the same as annual-billing commitments. Confirm checkout and region-specific feature availability.</p>
        <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">Research method: public-source desk research; no hands-on product testing.</p>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Which pricing model fits your business?</h2>
          <div className="mt-5 space-y-5 text-[#424245]">
            <div><h3 className="font-semibold text-[#1d1d1f]">Solo consultant or freelancer</h3><p className="mt-2 leading-relaxed">Start with a free plan if one booking type or a personal booking page is enough. Calendly Standard is designed for more event types, multiple calendar connections and automated reminders. Cal.com’s individual free plan includes multiple event types and calendars, so compare the exact integrations and booking experience you need before upgrading.</p></div>
            <div><h3 className="font-semibold text-[#1d1d1f]">Sales or customer-success team</h3><p className="mt-2 leading-relaxed">Compare the number of paid hosts, round-robin distribution, routing forms and CRM integrations. A per-seat plan can become more expensive as more employees host meetings, but team routing may justify the cost if it reduces manual lead assignment.</p></div>
            <div><h3 className="font-semibold text-[#1d1d1f]">Salon, clinic or appointment-based service</h3><p className="mt-2 leading-relaxed">Acuity is structured around calendars, services, intake forms, payments and packages. Check how many staff members or locations need separate calendars, whether SMS reminders are available where you operate, and whether your business needs a paid plan after the trial.</p></div>
          </div>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Costs beyond the subscription</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li><strong>Payment processing:</strong> collecting deposits or full payment may introduce Stripe, PayPal, Square or other processor fees separate from the scheduler subscription.</li>
            <li><strong>SMS reminders:</strong> availability, included quantities and regional restrictions vary; verify the supported countries and any usage charges.</li>
            <li><strong>Team seats and calendars:</strong> a seat-based meeting scheduler and a calendar-based service scheduler are not directly comparable. Count hosts, staff calendars and locations separately.</li>
            <li><strong>CRM and routing:</strong> round-robin assignment, qualification forms, integrations and advanced analytics may require a team or higher-tier plan.</li>
            <li><strong>Branding and domain:</strong> removing vendor branding, using a custom booking domain or applying advanced design controls can be a higher-plan feature.</li>
            <li><strong>Annual commitments:</strong> calculate the full upfront or annual amount and record renewal pricing; a monthly equivalent is not necessarily a monthly-billed price.</li>
          </ul>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Who should not pay for scheduling software?</h2>
          <p className="mt-4 leading-relaxed text-[#424245]">Do not pay for team routing if you are the only person taking meetings. Avoid an appointment-business platform with dozens of calendars if you only need one booking link. Conversely, a free personal scheduler may be the wrong choice if you need multiple staff calendars, deposits, package sales, intake forms or centralized control. Pick the least expensive plan that demonstrably covers the workflow.</p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Switching checklist</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li>Export upcoming appointments, customer records and booking history where the provider supports it.</li>
            <li>Recreate availability rules, buffers, cancellation windows, intake questions and confirmation messages.</li>
            <li>Reconnect calendars and video meeting tools, then test time-zone conversion and double-booking protection.</li>
            <li>Run a test booking with payment or deposit enabled, if used, and verify the cancellation/refund flow.</li>
            <li>Update booking links on your website, email signatures, social profiles and automated reminders before cancelling the old service.</li>
          </ol>
        </section>

        <section className="mt-12 rounded-2xl bg-[#f5f5f7] p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Related StackPick guides</h2>
          <ul className="mt-4 space-y-2 text-[#001D39]">
            <li><Link className="underline" href="/best/appointment-scheduling-software">Best appointment scheduling software</Link></li>
            <li><Link className="underline" href="/best/project-management-software">Project management software for small teams</Link></li>
            <li><Link className="underline" href="/best/crm-software-pricing">CRM software pricing</Link></li>
            <li><Link className="underline" href="/best/invoicing-for-small-businesses">Invoicing software for small businesses</Link></li>
          </ul>
        </section>
        <p className="mt-8 text-xs leading-relaxed text-[#6e6e73]">Editorial comparison of published US-dollar pricing checked November 8, 2026. This is desk research, not a live booking-system benchmark. Product packaging, taxes, prices and regional feature availability can change; verify the exact plan, billing term and final price on each official pricing page before purchasing.</p>
      </article>
    </main>
  );
}
