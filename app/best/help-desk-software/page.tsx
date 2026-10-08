import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Help Desk Software for Small Business (2026)",
  description:
    "An honest comparison of Help Scout, Freshdesk, Zoho Desk, and Gorgias - which one fits depending on whether you're email-first, e-commerce, or scaling fast.",
  alternates: { canonical: "/best/help-desk-software" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Help Desk Software for Small Business"
      slug="help-desk-software"
      intro="The biggest split in this category is between tools that feel like a shared email inbox and tools that feel like enterprise ticketing software. For a small team, that difference in day-to-day feel usually matters more than the feature checklist."
      pricingNote="Free-tier user caps and per-agent pricing shift often in this category. Live pricing is linked directly rather than published here."
      tools={[
        {
          name: "Help Scout",
          bestFor: "Small, mostly-email teams who want something that doesn't feel like ticketing software",
          freeOption: "Free plan available for a small number of users.",
          tradeoff:
            "Deliberately built to feel like a normal shared inbox rather than a ticketing system - customers get replies that read like a person wrote them, not a case number. The trade-off is fewer heavy-duty automation and reporting features than Zendesk or Freshdesk at scale.",
          url: "https://www.helpscout.com/",
        },
        {
          name: "Freshdesk",
          bestFor: "Growing teams that want room to scale without switching tools later",
          freeOption: "Free plan covers a real number of agents with functional ticketing, not just a crippled trial.",
          tradeoff:
            "One of the more genuinely usable free tiers in this category, with a clear upgrade path as automation needs grow - but the interface leans more toward traditional ticketing than Help Scout's inbox feel.",
          url: "https://freshdesk.com/",
        },
        {
          name: "Zoho Desk",
          bestFor: "Cost-conscious teams already using other Zoho products",
          freeOption: "Free plan available for very small teams.",
          tradeoff:
            "Cheapest paid tier here with a genuinely real feature set, and it connects smoothly with Zoho CRM and Zoho Books if you're already in that ecosystem - the interface has a steeper learning curve than Help Scout for a first-time user.",
          url: "https://www.zoho.com/desk/",
        },
        {
          name: "Gorgias",
          bestFor: "Shopify and e-commerce stores specifically",
          freeOption: "No meaningful free tier - paid plans start relatively low.",
          tradeoff:
            "Pulls order data, refunds, and subscription details directly into the support ticket - a real time-saver for e-commerce that general-purpose help desks can't match. Not built for non-e-commerce support at all, so it's a poor fit outside that use case.",
          url: "https://www.gorgias.com/",
        },
      ]}
      bottomLine="Small team, mostly email, want the least clutter? Help Scout. Expect to grow and want a strong free tier to start? Freshdesk. Already paying for other Zoho tools? Zoho Desk. Running a Shopify store? Gorgias isn't really optional - the order-data integration is worth the switch."
    >
      <section className="bg-white">
        <div className="sp-container py-10">
          <h2 className="text-2xl font-semibold">Run one support request end to end</h2>
          <p className="mt-3 text-slate-600">Create a test customer request and follow it through the same path your real customers will use. The useful comparison is how quickly a teammate can understand the issue, reply, assign it and close it without losing context.</p>
          <ul className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
            <li><strong>Intake:</strong> Send a message through your main support channel and check what information arrives with it.</li>
            <li><strong>Ownership:</strong> Assign the request and confirm another teammate can see its history.</li>
            <li><strong>Resolution:</strong> Add an internal note, reply, and close the request.</li>
            <li><strong>Search:</strong> Find the closed request again using the information a teammate would realistically remember.</li>
          </ul>
        </div>
      </section>
    </ComparisonArticle>
  );
}
