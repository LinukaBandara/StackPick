import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Website Builder for Small Business (2026)",
  description:
    "An honest comparison of Squarespace, Wix, Shopify, and Webflow — which one to pick depending on whether you're selling products, running a service business, or need full design control.",
  alternates: { canonical: "/best/website-builders" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Website Builder for Small Business"
      slug="website-builders"
      intro="The real trade-off is launch speed versus long-term control — and watch renewal pricing specifically, since several of these builders quote a low intro rate that jumps significantly once the first term ends."
      pricingNote="Intro pricing and renewal rates are two different numbers for almost every builder below, and both change often. Check the vendor page for both before committing to annual billing."
      tools={[
        {
          name: "Squarespace",
          bestFor: "Service businesses and creators who want a polished site with minimal tweaking",
          freeOption: "No free tier — 14-day trial only, and you can't publish on the free trial.",
          tradeoff:
            "Templates look professional out of the box with less design effort than Wix requires, but customization headroom is lower — you're working within Squarespace's design language, not overriding it.",
          url: "https://www.squarespace.com/",
        },
        {
          name: "Wix",
          bestFor: "Beginners who want a genuine free tier and maximum flexibility",
          freeOption: "Free-forever tier available (with Wix branding on the site).",
          tradeoff:
            "The openness and app marketplace are real advantages, but that flexibility means default pages need more deliberate design effort to look as polished as a default Squarespace site.",
          url: "https://www.wix.com/",
        },
        {
          name: "Shopify",
          bestFor: "Businesses actually selling physical or digital products",
          freeOption: "No free tier — trial period only.",
          tradeoff:
            "Purpose-built for e-commerce and it shows — inventory, checkout, and shipping are all first-class. Overkill and unnecessarily expensive if you're not actually running a store.",
          url: "https://www.shopify.com/",
        },
        {
          name: "Webflow",
          bestFor: "Designers and agencies who want pixel-level control",
          freeOption: "Free tier available for a starter site.",
          tradeoff:
            "Generates genuinely clean code and gives real design control most builders don't — but it has the steepest learning curve here by far. Not the pick if you just want to get a business site live fast.",
          url: "https://webflow.com/",
        },
      ]}
      bottomLine="Selling products? Shopify, don't fight it with a general-purpose builder. Want a polished service-business site with the least effort? Squarespace. Want it free to start and don't mind spending more design time? Wix. A designer who wants real control over every pixel? Webflow — but budget real time to learn it."
    />
  );
}
