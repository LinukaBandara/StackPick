import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Scheduling Software for Small Businesses (2026)",
  description: "Compare scheduling tools for small businesses that need customers to book appointments without creating extra admin for staff.",
  alternates: { canonical: "/best/scheduling-for-small-businesses" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Scheduling Software for Small Businesses"
      slug="scheduling-for-small-businesses"
      intro="Compare scheduling tools for small businesses that need customers to book appointments without creating extra admin for staff."
      pricingNote="Plans, limits and included features can change. Verify the provider's current pricing and terms before publishing a site or moving a live business workflow."
      tools={[
        { name: "Calendly", bestFor: "Simple appointment booking", freeOption: "Check the provider's current free or trial terms and limits.", tradeoff: "Compare booking, publishing, collaboration and upgrade limits against your actual workflow.", url: "https://calendly.com/" },
        { name: "Google Calendar", bestFor: "Businesses already using Google Workspace", freeOption: "Check the provider's current free or trial terms and limits.", tradeoff: "Compare booking, publishing, collaboration and upgrade limits against your actual workflow.", url: "https://calendar.google.com/" },
        { name: "Microsoft Bookings", bestFor: "Microsoft 365-based businesses", freeOption: "Check the provider's current free or trial terms and limits.", tradeoff: "Compare booking, publishing, collaboration and upgrade limits against your actual workflow.", url: "https://www.microsoft.com/microsoft-365/business/scheduling-and-booking-app" },
        { name: "SimplyBook.me", bestFor: "Businesses needing richer booking workflows", freeOption: "Check the provider's current free or trial terms and limits.", tradeoff: "Compare booking, publishing, collaboration and upgrade limits against your actual workflow.", url: "https://simplybook.me/" },
      ]}
      bottomLine="Choose the smallest tool that handles the work you actually do. Before committing, test the normal workflow from setup through the first real customer or client task, then check what happens when you hit the free-plan or entry-tier limit."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">StackPick reality check</p>
          <h2 className="sp-title mt-4 max-w-4xl">The free plan is only useful if it survives your normal workflow.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Test the job you would repeat every week: create the project, add the people or
            content you need, complete the normal task, and try the export or handoff step.
            Then identify the first restriction that would force an upgrade. That is more useful
            than comparing feature counts in isolation.
          </p>
        </div>
      </section>
    </ComparisonArticle>
  );
}
