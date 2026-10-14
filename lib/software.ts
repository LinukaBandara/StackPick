export type SoftwareProfile = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  productImage: {
    src: string;
    alt: string;
    caption: string;
    sourceUrl: string;
  };
  bestFor: string[];
  keyFeatures: string[];
  strengths: string[];
  tradeoffs: string[];
  pricingSummary: string;
  freePlan: string;
  officialUrl: string;
  pricingUrl: string;
  comparisons: { title: string; href: string }[];
  alternatives: { name: string; href: string; reason: string }[];
  reviewedOn: string;
};

export const SOFTWARE_PROFILES: SoftwareProfile[] = [
  {
    slug: "hubspot-crm",
    name: "HubSpot CRM",
    category: "Sales",
    tagline: "A broad CRM starting point with a permanent free tier.",
    summary:
      "HubSpot CRM brings contact records, deal pipelines and sales activity into one workspace. It can suit freelancers and small teams that need a clear place to track enquiries before they invest in a larger sales or marketing stack.",
    productImage: {
      src: "https://www.hubspot.com/hs-fs/hubfs/CRM_Dashboards_SalesTeam_EN_06082026.png?width=1030&name=CRM_Dashboards_SalesTeam_EN_06082026.png",
      alt: "HubSpot CRM sales team reporting dashboard interface",
      caption: "An example of HubSpot's sales reporting dashboard.",
      sourceUrl: "https://www.hubspot.com/products/reporting-dashboards",
    },
    bestFor: [
      "Freelancers who need to organise leads and client conversations",
      "Small teams that want a shared view of contacts and deals",
      "Businesses that may later connect sales, marketing and service workflows",
    ],
    keyFeatures: [
      "Contact and company records",
      "Deal pipeline and task tracking",
      "Email tools and meeting scheduling, subject to plan limits",
      "Integrations through the HubSpot marketplace",
    ],
    strengths: [
      "A permanent free starting point for basic CRM work",
      "Connects CRM records with a wider set of sales, marketing and service tools",
      "Useful when more than one person needs visibility into customer activity",
    ],
    tradeoffs: [
      "Some automation, reporting and advanced controls require paid products",
      "The wider platform can become more complex than a solo operator needs",
      "Check user, contact and feature limits against your actual workflow before committing",
    ],
    pricingSummary:
      "HubSpot publishes free tools at $0 per month for up to 2 users and 1,000 contacts, with no time limit. Paid options and promotional pricing vary by product and billing terms; verify the current official pricing page before budgeting.",
    freePlan:
      "Yes. HubSpot's official CRM information describes a no-expiry free tier for up to 2 users and 1,000 contacts. Feature availability and other record limits apply.",
    officialUrl: "https://www.hubspot.com/products/crm",
    pricingUrl: "https://www.hubspot.com/pricing/crm",
    comparisons: [
      { title: "HubSpot vs Pipedrive", href: "/best/hubspot-vs-pipedrive" },
      { title: "HubSpot vs Zoho CRM", href: "/best/hubspot-vs-zoho-crm" },
    ],
    alternatives: [
      { name: "Pipedrive", href: "/software/pipedrive", reason: "For a sales-first pipeline and paid per-seat plans." },
      { name: "Zoho CRM", href: "/software/zoho-crm", reason: "For teams looking for a configurable CRM within a broader business suite." },
    ],
    reviewedOn: "October 14, 2026",
  },
  {
    slug: "pipedrive",
    name: "Pipedrive",
    category: "Sales",
    tagline: "A sales-focused CRM built around deals and pipeline stages.",
    summary:
      "Pipedrive is designed to help salespeople keep leads, deals and next actions visible as opportunities move through a pipeline. It is worth evaluating when the main job is managing a repeatable sales process rather than running an all-in-one marketing platform.",
    productImage: {
      src: "https://www-cms.pipedriveassets.com/SaaS-reporting-Pipedrive-sales-pipeline.png",
      alt: "Pipedrive CRM deal pipeline with opportunities arranged by sales stage",
      caption: "Pipedrive's visual deal pipeline, shown in vendor-published product imagery.",
      sourceUrl: "https://www.pipedrive.com/en/features/pipeline-management",
    },
    bestFor: [
      "Service businesses with a defined lead-to-close process",
      "Small sales teams that want to see deal stages at a glance",
      "Teams that value follow-up discipline and sales activity tracking",
    ],
    keyFeatures: [
      "Lead, contact and deal management",
      "Visual pipeline and calendar views",
      "Sales activity and reporting tools",
      "Third-party integrations for extending the sales workflow",
    ],
    strengths: [
      "Clear emphasis on sales pipeline management",
      "Useful workflow for tracking the next action on an opportunity",
      "Published plan structure makes per-seat budgeting straightforward",
    ],
    tradeoffs: [
      "It is a paid product after the trial rather than a permanent free CRM",
      "Total subscription cost increases with each paid seat",
      "Confirm which email, automation, reporting and AI features are included in the plan you choose",
    ],
    pricingSummary:
      "Pipedrive offers a 14-day free trial. Its official pricing page listed Lite at US$14 per seat per month when billed annually at the time of review. Pricing and plan names can change, so confirm the current terms directly.",
    freePlan:
      "No permanent free plan is advertised on the official pricing page; a 14-day trial is available. Confirm whether a payment method is required in your region and at sign-up.",
    officialUrl: "https://www.pipedrive.com/",
    pricingUrl: "https://www.pipedrive.com/en/pricing",
    comparisons: [
      { title: "HubSpot vs Pipedrive", href: "/best/hubspot-vs-pipedrive" },
      { title: "Pipedrive vs Zoho CRM", href: "/best/pipedrive-vs-zoho-crm" },
    ],
    alternatives: [
      { name: "HubSpot CRM", href: "/software/hubspot-crm", reason: "For a permanent free starting point and broader connected tools." },
      { name: "Zoho CRM", href: "/software/zoho-crm", reason: "For more configuration and links to other Zoho business apps." },
    ],
    reviewedOn: "October 14, 2026",
  },
  {
    slug: "zoho-crm",
    name: "Zoho CRM",
    category: "Sales",
    tagline: "A configurable CRM that connects with a wider business software suite.",
    summary:
      "Zoho CRM helps businesses organise customer records, sales activities and deal stages. It is particularly worth shortlisting if your business already uses Zoho products or wants to evaluate a CRM alongside accounting, invoicing, support and other operational tools.",
    productImage: {
      src: "https://www.zohowebstatic.com/sites/zweb/images/canvas/zc-canvas-sales.svg",
      alt: "Zoho CRM sales interface showing a customized sales workspace",
      caption: "A vendor-published example of Zoho CRM's customizable sales interface.",
      sourceUrl: "https://www.zoho.com/crm/customization/",
    },
    bestFor: [
      "Small businesses that already use Zoho apps",
      "Teams that want configurable sales processes and records",
      "Businesses comparing the cost of a connected software suite",
    ],
    keyFeatures: [
      "Lead, contact and account management",
      "Deal stages and sales activity tracking",
      "Customisation options that vary by edition",
      "Connections to other Zoho products and third-party apps",
    ],
    strengths: [
      "Can fit into a broader Zoho workflow rather than stand alone",
      "Multiple editions allow teams to compare feature depth against cost",
      "A useful candidate for teams whose process needs more configuration",
    ],
    tradeoffs: [
      "More options can mean more setup and learning time",
      "Available features and limits differ by edition",
      "Check the current free-edition eligibility, user limits and regional pricing on Zoho's official site",
    ],
    pricingSummary:
      "Zoho publishes multiple CRM editions, including a free edition in supported circumstances and paid per-user plans. Pricing varies by edition and billing term; use the official pricing page for the current price in your region.",
    freePlan:
      "A free edition is advertised, but eligibility, user limits and included features can vary. Verify the current terms on the official pricing page before planning around it.",
    officialUrl: "https://www.zoho.com/crm/",
    pricingUrl: "https://www.zoho.com/crm/zohocrm-pricing.html",
    comparisons: [
      { title: "HubSpot vs Zoho CRM", href: "/best/hubspot-vs-zoho-crm" },
      { title: "Pipedrive vs Zoho CRM", href: "/best/pipedrive-vs-zoho-crm" },
    ],
    alternatives: [
      { name: "HubSpot CRM", href: "/software/hubspot-crm", reason: "For a straightforward free starting point and connected customer tools." },
      { name: "Pipedrive", href: "/software/pipedrive", reason: "For teams that want a focused, pipeline-first sales workflow." },
    ],
    reviewedOn: "October 14, 2026",
  },
];

export function getSoftwareProfile(slug: string) {
  return SOFTWARE_PROFILES.find((profile) => profile.slug === slug);
}
