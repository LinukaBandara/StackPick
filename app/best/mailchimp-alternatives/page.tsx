import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Mailchimp Alternatives (2026)",
  description: "Compare Mailchimp alternatives for small businesses and creators looking for simpler email marketing, different pricing or broader messaging options.",
  alternates: { canonical: "/best/mailchimp-alternatives" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Mailchimp Alternatives"
      slug="mailchimp-alternatives"
      intro="Compare Mailchimp alternatives for small businesses and creators looking for simpler email marketing, different pricing or broader messaging options."
      pricingNote="Plans, limits and availability change. Verify current provider terms before relying on a free tier."
      tools={[
        { name: "Brevo", bestFor: "Email plus messaging", freeOption: "Check current provider terms.", tradeoff: "Verify current limits and test your real workflow.", url: "https://www.brevo.com/" },
        { name: "MailerLite", bestFor: "Straightforward email marketing", freeOption: "Check current provider terms.", tradeoff: "Verify current limits and test your real workflow.", url: "https://www.mailerlite.com/" },
        { name: "Kit", bestFor: "Creator-focused audience workflows", freeOption: "Check current provider terms.", tradeoff: "Verify current limits and test your real workflow.", url: "https://kit.com/" },
        { name: "Constant Contact", bestFor: "Established small-business email marketing", freeOption: "Check current provider terms.", tradeoff: "Verify current limits and test your real workflow.", url: "https://www.constantcontact.com/" },
      ]}
      bottomLine="Switching only makes sense when the alternative solves the specific problem that made you look elsewhere."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">StackPick decision test</p>
          <h2 className="sp-title mt-4 max-w-4xl">Don't switch until you can name the problem you're solving.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Write down the friction in your current tool, reproduce it, then run the same workflow in each alternative. Compare setup effort, daily clicks, integrations, migration, limits and the first feature you would need to pay for.
          </p>
        </div>
      </section>
    </ComparisonArticle>
  );
}
