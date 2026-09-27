import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Appointment Scheduling Software for Small Business (2026)",
  description:
    "An honest comparison of Calendly, Acuity Scheduling, and Cal.com — meetings vs. service-business bookings are two different jobs, and the right tool depends on which one you actually have.",
  alternates: { canonical: "/best/appointment-scheduling-software" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Appointment Scheduling Software for Small Business"
      slug="appointment-scheduling-software"
      intro="Two different jobs get lumped into this category: scheduling 1:1 meetings (sales calls, consultations) and scheduling service-business appointments (with deposits, intake forms, and client payment). The best tool depends entirely on which one you're actually doing."
      pricingNote="Free-tier limits (event types, connected calendars) vary and change between these tools. Confirm current limits directly before assuming a free plan covers your use case."
      tools={[
        {
          name: "Calendly",
          bestFor: "Sales calls, demos, and 1:1 meeting booking",
          freeOption: "Free plan available, limited to one event type and one connected calendar.",
          tradeoff:
            "The fastest, most frictionless setup in this category and the longest integration list (Zoom, Salesforce, HubSpot, Stripe, and hundreds more) — but it's built around meetings, not service-business bookings with deposits and intake forms.",
          url: "https://calendly.com/",
        },
        {
          name: "Acuity Scheduling",
          bestFor: "Service businesses that need payments, deposits, and intake forms at booking",
          freeOption: "No free tier — 7-day trial only.",
          tradeoff:
            "Genuinely deeper for service-business needs — deposits, intake forms, and package/membership sales are built in, not bolted on. Flat pricing rather than per-seat is friendlier for a small team, but the learning curve is real if you just need a simple booking link.",
          url: "https://www.acuityscheduling.com/",
        },
        {
          name: "Cal.com",
          bestFor: "Technical teams who want open source or self-hosting",
          freeOption: "Generous free tier, genuinely usable — not just a crippled trial.",
          tradeoff:
            "Full code access and self-hosting are unique in this category, and the free tier is unusually generous. It assumes more technical comfort to get real value out of than Calendly's plug-and-play setup.",
          url: "https://cal.com/",
        },
      ]}
      bottomLine="Booking sales calls or 1:1 meetings? Calendly — it's the default for a reason. Running a service business that takes deposits and needs intake forms? Acuity Scheduling is built for exactly that, not adapted to it. Technical team that wants open source or to self-host? Cal.com."
    />
  );
}
