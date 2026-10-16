import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Mailchimp vs Brevo (2026): Compare Cost and Campaign Fit",
  description: "Compare Mailchimp and Brevo for small-business marketing by audience billing, email campaigns, automation and multichannel needs.",
  alternates: { canonical: "/best/mailchimp-vs-brevo" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Mailchimp vs Brevo"
      slug="mailchimp-vs-brevo"
      intro="Mailchimp's current free marketing plan is capped at 250 contacts and 500 sends per month (250 per day); Brevo Free stores up to 100,000 contacts but limits sending to 300 emails per day. That makes the central trade-off clear: audience storage versus daily sending capacity. Official plan details checked against provider sources on October 17, 2026."
      pricingNote="Mailchimp counts subscribed, unsubscribed and non-subscribed contacts toward its contact total; its Free plan is limited to one audience and one seat. Brevo Free has one seat and 300 daily sends, with unused sends not rolling over. Model your real subscriber base and peak campaign size; regional prices, add-ons and paid tiers can change."
      tools={[
        { name: "Mailchimp", bestFor: "Teams that want a broad email campaign and marketing-tool ecosystem and have a modest early-stage list.", freeOption: "Free: up to 250 contacts, 500 monthly sends and 250 sends/day; one audience and one seat.", tradeoff: "Unsubscribed and non-subscribed contacts still count toward the contact cap, and the small send allowance can constrain regular newsletters.", url: "https://mailchimp.com/" },
        { name: "Brevo", bestFor: "Businesses with larger stored contact lists that send smaller batches or use several customer communication channels.", freeOption: "Free: up to 100,000 stored contacts and 300 sends/day; sends do not roll over, and free email includes Brevo branding.", tradeoff: "A campaign to more than 300 recipients is delivered in daily batches; SMS and other channel costs are separate and region-dependent.", url: "https://www.brevo.com/" },
      ]}
      bottomLine="Choose based on your campaign economics and workflow. If the main need is a regular newsletter and a simple welcome sequence, compare editor usability and the cost at your expected list size. If you also plan to coordinate other customer messages, test that end-to-end workflow and include every channel's cost before deciding."
    >
      <section className="bg-white">
        <div className="sp-container py-14 sm:py-18">
          <p className="sp-eyebrow">The practical difference</p>
          <h2 className="sp-title mt-4 max-w-4xl">Calculate the cost of the campaign you will send.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Use one scenario for both providers: a list of your current size, a realistic growth
            target, a weekly newsletter and a welcome series for new subscribers. Write down the
            plan required today, the next likely upgrade point and any separate charges for extra
            sends or channels. Confirm all numbers on the vendors' live pricing pages before buying.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d2d2d7] p-6">
              <h3 className="text-lg font-semibold text-[#1d1d1f]">Campaign checklist</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6e6e73]">
                <li>Can you segment subscribers by a relevant, consent-based attribute?</li>
                <li>Can a welcome sequence stop after a signup or purchase goal is reached?</li>
                <li>Can a teammate review a test email and preview it on mobile?</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#d2d2d7] p-6">
              <h3 className="text-lg font-semibold text-[#1d1d1f]">List safety checklist</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6e6e73]">
                <li>Preserve consent and unsubscribe records when moving providers.</li>
                <li>Authenticate your sending domain using the provider's current instructions.</li>
                <li>Start with engaged subscribers instead of mailing an old list all at once.</li>
              </ul>
            </div>
          </div>
          <h2 className="mt-12 text-2xl font-bold tracking-tight text-[#1d1d1f]">The free-plan limits change the choice</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#6e6e73]">For a 1,000-person newsletter, neither free tier delivers one full campaign in a single day: Mailchimp's contact cap is lower, while Brevo would require sending in daily batches of up to 300. Compare the paid plan needed to send on your intended schedule, and confirm the live bill before importing a list.</p>
          <p className="mt-5 text-sm leading-6 text-[#6e6e73]">Official plan details checked October 17, 2026: <a className="underline" href="https://mailchimp.com/help/about-mailchimp-pricing-plans/">Mailchimp pricing and contact rules</a>, <a className="underline" href="https://mailchimp.com/pricing/marketing/">Mailchimp pricing</a>, <a className="underline" href="https://help.brevo.com/hc/en-us/articles/208589409-About-Brevo-s-pricing-plans">Brevo plan details</a> and <a className="underline" href="https://help.brevo.com/hc/en-us/articles/208580669-FAQs-What-are-the-limits-of-the-Free-plan">Brevo Free limits</a>. This is desk research, not a deliverability test.</p>
        </div>
      </section>
    </ComparisonArticle>
  );
}
