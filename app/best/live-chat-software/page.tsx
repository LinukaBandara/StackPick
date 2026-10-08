import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Live Chat Software for Small Business Websites (2026)",
  description:
    "An honest comparison of Tidio, Crisp, Intercom, and Tawk.to - and why an AI-first tool like Intercom is overkill (and overpriced) for most small sites.",
  alternates: { canonical: "/best/live-chat-software" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Live Chat Software for Small Business Websites"
      slug="live-chat-software"
      intro="This category has split into two tiers: AI-first platforms that charge per resolved conversation on top of a seat price (Intercom), and simpler tools with predictable flat pricing (Tidio, Crisp, Tawk.to). For a small site, predictable pricing usually wins - an unpredictable per-resolution bill is a real risk if chat volume spikes."
      pricingNote="Intercom specifically prices its AI agent per resolution on top of seat costs, which makes the total bill hard to predict in advance. Free-tier limits on the others shift periodically - confirm current terms directly."
      tools={[
        {
          name: "Tidio",
          bestFor: "Most small e-commerce and SaaS businesses starting out",
          freeOption: "Genuinely usable free tier, not a crippled trial.",
          tradeoff:
            "The most commonly recommended starting point in this category for good reason - real free-tier functionality, an AI agent (Lyro) with a resolution guarantee, and pricing that stays affordable at small-business volume. Advanced automation depth doesn't match Intercom's, which is the right trade for most small sites.",
          url: "https://www.tidio.com/",
        },
        {
          name: "Crisp",
          bestFor: "Teams that want a real free tier and hate per-seat pricing as they grow",
          freeOption: "Free tier includes one website and two agent seats - genuine usability, not a 14-day trial.",
          tradeoff:
            "Flat workspace pricing (not per-seat) is a real structural advantage as a support team grows - adding agents doesn't multiply the bill the way seat-based tools do. AI features are lighter than Intercom's or Tidio's Lyro as of this writing.",
          url: "https://crisp.chat/",
        },
        {
          name: "Intercom",
          bestFor: "Mid-market teams with real support volume who want the strongest AI deflection",
          freeOption: "No free tier.",
          tradeoff:
            "The most capable AI agent in this category, genuinely resolving a meaningful share of conversations without a human - worth it if support volume is already eating real staff time. The per-resolution AI charge on top of seat pricing makes the total bill unpredictable, and it's genuinely more than most small sites need to spend.",
          url: "https://www.intercom.com/",
        },
        {
          name: "Tawk.to",
          bestFor: "Bootstrapped businesses on a zero budget",
          freeOption: "Core chat features are genuinely unlimited and free - a rarity in this category.",
          tradeoff:
            "Hard to beat for a business that simply can't spend anything on this yet - full live chat with no seat or conversation caps on the free core. Design polish and AI features trail the paid-first competitors here; you get functional, not flashy.",
          url: "https://www.tawk.to/",
        },
      ]}
      bottomLine="Starting out, want the safest default? Tidio. Growing a support team and don't want per-seat pricing to punish you for it? Crisp. Real support volume already costing staff time, and the budget allows it? Intercom, but watch the per-resolution AI charge closely. Genuinely can't spend anything yet? Tawk.to gets you live chat for free, full stop."
    />
  );
}
