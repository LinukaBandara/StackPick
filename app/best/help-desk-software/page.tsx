import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Help Desk Software for Small Business (2026)",
  description:
    "Compare help desk software for solo operators and small teams by free agent limits, shared inboxes, ticket workflows, automation, customer context and upgrade costs.",
  alternates: { canonical: "/best/help-desk-software" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Help Desk Software for Small Business"
      slug="help-desk-software"
      reviewedOn="2026-11-07"
      quickAnswer="A shared inbox may be enough for low-volume support. Compare Freshdesk and Zoho Desk when you need ticket assignment, status tracking and basic reporting. Help Scout is worth testing for a customer-friendly shared-inbox workflow; Gorgias is most relevant to ecommerce teams that need order context. Price the exact number of agents and channels you will use."
      intro="A solo operator or 2–5 person team usually needs a dependable place to receive customer questions, assign ownership, find previous conversations and avoid duplicate replies. A shared inbox may be enough for low volume. A help desk becomes more useful when requests need categories, assignment rules, saved replies, service-level targets or reporting. Choose based on the support workflow you actually run — not on enterprise features you will never configure."
      pricingNote="Official provider pricing/help pages checked 7 November 2026. Help Scout Free supports up to 5 users, one inbox and 100 contacts/month; paid Standard starts at US$25/user/month billed annually. Zoho Desk Free includes 3 user licences; Express starts at US$7/agent/month billed annually, with local taxes extra. Freshdesk’s Free Program is limited to 2 agents and is not the same as an unrestricted permanent free tier; Growth starts at US$19/agent/month billed annually. Gorgias uses ticket-volume pricing rather than a simple per-agent model, with additional charges possible for AI Agent, Voice and SMS. These are USD references; currency, taxes, billing options, free-program eligibility and product availability can vary by country. Sources: https://www.helpscout.com/pricing/; https://www.zoho.com/desk/pricing.html; https://www.freshworks.com/freshdesk/pricing/; https://helpcenter.gorgias.com/en-US/how-youre-billed-for-using-gorgias-199385."
      tools={[
        {
          name: "Help Scout",
          bestFor: "Small, mostly-email teams who want something that does not feel like traditional ticketing software",
          freeOption:
            "Free supports up to 5 users, one inbox and 100 contacts per month. Standard adds multiple inboxes, live chat/SMS and workflows; check per-user pricing and inbox add-ons.",
          tradeoff:
            "Deliberately built to feel like a normal shared inbox rather than a heavy ticketing system. Customers often receive replies that feel personal. The trade-off is fewer heavy-duty automation and reporting features than tools built for larger support teams.",
          url: "https://www.helpscout.com/pricing/",
        },
        {
          name: "Freshdesk",
          bestFor: "Growing teams that want room to scale without switching tools later",
          freeOption:
            "Freshdesk’s Free Program is limited to 2 agents and is offered under specific account/eligibility conditions; it is not the same as an unrestricted permanent free plan. Growth is the first listed paid tier.",
          tradeoff:
            "Clear upgrade path as automation and reporting needs grow. The interface leans more toward traditional ticketing than Help Scout’s shared-inbox feel.",
          url: "https://www.freshworks.com/freshdesk/pricing/",
        },
        {
          name: "Zoho Desk",
          bestFor: "Cost-conscious teams already using other Zoho products",
          freeOption:
            "Free Edition includes 3 user licences. Paid Express adds more channels and workflows; local taxes are added to the published price.",
          tradeoff:
            "Often one of the more affordable paid tiers with a real feature set, and it connects smoothly with Zoho CRM and Zoho Books if you are already in that ecosystem. The interface can have a steeper learning curve for first-time users than Help Scout.",
          url: "https://www.zoho.com/desk/pricing.html",
        },
        {
          name: "Gorgias",
          bestFor: "Shopify and e-commerce stores that need order context inside support conversations",
          freeOption:
            "Pricing is based on monthly billable ticket volume rather than the number of agents; AI Agent, Voice and SMS can add usage charges. Check the ticket allowance and overage price for your actual store volume.",
          tradeoff:
            "Pulls order data, refunds and subscription details directly into the support conversation — a real time-saver for e-commerce that general-purpose help desks cannot match. It is not built for non-e-commerce support.",
          url: "https://www.gorgias.com/pricing",
        },
      ]}
      bottomLine="For low-volume email support, prioritize a shared inbox your team will actually use consistently. If you need assignment, ticket states and basic reporting, compare the current Freshdesk and Zoho Desk plans against your real agent count. Help Scout is worth evaluating when a customer-friendly shared-inbox experience is central. Gorgias is most relevant when store-order context is essential to e-commerce support. Always run a sample ticket through intake → assignment → reply → close → search before moving live customer history."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">Practical test</p>
          <h2 className="sp-title mt-4 max-w-4xl">
            Run one support request end to end.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Create a test customer request and follow it through the same path your real customers will use. The useful comparison is how quickly a teammate can understand the issue, reply, assign it and close it without losing context.
          </p>

          <div className="mt-10 overflow-x-auto rounded-[28px] border border-black/10 bg-white">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="p-5 font-semibold">Step</th>
                  <th className="p-5 font-semibold">What to check</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/10">
                  <td className="p-5 font-medium">Intake</td>
                  <td className="p-5 text-[#6e6e73]">Send a message through your main support channel and check what information arrives with it.</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="p-5 font-medium">Ownership</td>
                  <td className="p-5 text-[#6e6e73]">Assign the request and confirm another teammate can see its full history.</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="p-5 font-medium">Resolution</td>
                  <td className="p-5 text-[#6e6e73]">Add an internal note, reply to the customer, and close the request.</td>
                </tr>
                <tr>
                  <td className="p-5 font-medium">Search & history</td>
                  <td className="p-5 text-[#6e6e73]">Find the closed request again using information a teammate would realistically remember.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight">
            Shared inbox vs help desk
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            If volume is low and everyone can see the same email thread without confusion, a well-managed shared inbox may be enough. Move to a help desk when you need clear ownership, status tracking, saved replies, reporting, or multiple channels in one place. The extra structure only helps if the team will actually use it.
          </p>
        </div>
      </section>
    </ComparisonArticle>
  );
}
