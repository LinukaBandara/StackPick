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

  {
    slug: "wave",
    name: "Wave",
    category: "Accounting & Invoicing",
    tagline: "Straightforward bookkeeping and invoicing for eligible small businesses.",
    summary:
      "Wave combines invoicing, estimates and basic bookkeeping in one workspace. It is worth considering for solo operators and small businesses that want to send invoices and keep financial records together without starting with a monthly software subscription.",
    productImage: {
      src: "https://images.ctfassets.net/lzny33ho1g45/30vs29k4wb6ODdXzUC6KWc/4bfaa3ee5b1909205e0b0b31fe30a682/image9.png",
      alt: "Wave accounting dashboard showing cash flow and profit-and-loss reports",
      caption: "Wave dashboard screenshot published in a third-party software guide; availability and interface may change.",
      sourceUrl: "https://zapier.com/blog/accounting-bookkeeping-software-freelance/",
    },
    bestFor: [
      "Freelancers and small businesses that need simple invoicing and bookkeeping",
      "Owners who want estimates, invoices and records in one workspace",
      "Businesses that can use Wave's supported regional features and payment options",
    ],
    keyFeatures: [
      "Create estimates and invoices",
      "Record bookkeeping transactions",
      "View cash-flow and profit-and-loss reports",
      "Optional paid features for bank imports, receipt capture and other workflows",
    ],
    strengths: [
      "A $0 Starter plan is advertised for core invoicing and bookkeeping",
      "Keeps basic customer billing and financial records together",
      "Can be a practical starting point for simple business finances",
    ],
    tradeoffs: [
      "Some automation and receipt features require paid plans or add-ons",
      "Payment processing and payroll availability vary by region",
      "Confirm local eligibility and tax/accounting requirements before relying on it",
    ],
    pricingSummary:
      "Wave advertises a Starter plan at $0 and a Pro plan with additional automation. Its official pricing page lists Pro at US$19 per month or US$190 per year for the displayed US pricing; promotions, taxes, eligibility and payment fees can vary. Confirm current terms directly.",
    freePlan:
      "Yes. The Starter plan is advertised at $0 and includes estimates, invoices and bookkeeping records. Bank transaction automation, receipt features and payment processing have separate plan, add-on or transaction-fee conditions.",
    officialUrl: "https://www.waveapps.com/accounting",
    pricingUrl: "https://www.waveapps.com/pricing",
    comparisons: [
      { title: "FreshBooks vs Wave", href: "/best/freshbooks-vs-wave" },
      { title: "Zoho Invoice vs Wave", href: "/best/zoho-invoice-vs-wave" },
      { title: "Best free accounting software", href: "/best/free-accounting-software" },
    ],
    alternatives: [
      { name: "FreshBooks", href: "/best/freshbooks-vs-wave", reason: "Compare the invoicing workflow and paid-plan trade-offs." },
      { name: "Zoho Invoice", href: "/best/zoho-invoice-vs-wave", reason: "Compare another invoicing option before choosing a workflow." },
    ],
    reviewedOn: "October 14, 2026",
  },
  {
    slug: "trello",
    name: "Trello",
    category: "Project Management",
    tagline: "A visual Kanban board for organising tasks and lightweight team workflows.",
    summary:
      "Trello organises work into boards, lists and cards, making task status easy to understand at a glance. It is a strong candidate for personal planning and small teams that prefer a simple visual workflow over a more structured project-management system.",
    productImage: {
      src: "https://assets.efficient.app/2d33ad5c265c6961bc5db8ef16027da8e777099c7a17d6dbdd2e2a4e0fadb928.png",
      alt: "Trello board interface with tasks organised into workflow columns",
      caption: "Trello interface screenshot published in a third-party product review.",
      sourceUrl: "https://efficient.app/apps/trello",
    },
    bestFor: [
      "Individuals and small teams who like Kanban-style task boards",
      "Simple editorial, marketing or project workflows",
      "Teams that want to start with a free plan before adding advanced controls",
    ],
    keyFeatures: [
      "Boards, lists and cards for visual task tracking",
      "Assignees and due dates",
      "Unlimited cards on the Free plan",
      "Power-Ups and automation, subject to plan limits",
    ],
    strengths: [
      "The free plan supports up to 10 collaborators per Workspace",
      "A simple board-and-card model has a low learning curve",
      "Useful for making task status visible without a complex setup",
    ],
    tradeoffs: [
      "The Free plan limits each Workspace to 10 boards and has automation caps",
      "Advanced views, controls and other features require paid plans",
      "Complex projects may need more structure than a basic board provides",
    ],
    pricingSummary:
      "Trello's official pricing page lists a Free plan at $0 for up to 10 collaborators per Workspace. Standard is listed at US$5 per user per month when billed annually (US$6 monthly); check the official page for current terms and regional pricing.",
    freePlan:
      "Yes. The Free plan includes unlimited cards, up to 10 boards per Workspace and up to 10 collaborators per Workspace. Attachment size and monthly automation runs are limited.",
    officialUrl: "https://trello.com/",
    pricingUrl: "https://trello.com/en/pricing",
    comparisons: [
      { title: "Trello vs Asana", href: "/best/trello-vs-asana" },
      { title: "Trello alternatives", href: "/best/trello-alternatives" },
      { title: "Best free project management software", href: "/best/free-project-management-software" },
    ],
    alternatives: [
      { name: "Asana", href: "/best/trello-vs-asana", reason: "Compare a more structured task and project workflow with Trello's visual boards." },
      { name: "ClickUp", href: "/best/free-project-management-software", reason: "Explore a broader feature set in a project-management shortlist." },
    ],
    reviewedOn: "October 14, 2026",
  },

  {
    slug: "quickbooks",
    name: "QuickBooks Online",
    category: "Accounting & Invoicing",
    tagline: "Small-business accounting with invoicing, bank connections and financial reports.",
    summary:
      "QuickBooks Online brings income and expense tracking, invoices, bank transactions and financial reporting into one accounting workspace. It is worth comparing when a business needs more than standalone invoicing, but plan availability, tax support and bank connections depend on the country and edition.",
    productImage: {
      src: "https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/quickbooks-online/web/image/aag_iam_foryourclients.png",
      alt: "QuickBooks Online dashboard with invoice status, expense categories and profit-and-loss reporting",
      caption: "QuickBooks Online dashboard screenshot hosted on the official QuickBooks website; the interface and regional features may vary.",
      sourceUrl: "https://quickbooks.intuit.com/accountants/products-solutions/large-firms/",
    },
    bestFor: [
      "Small businesses that need accounting alongside invoicing",
      "Owners who want income, expense and financial reporting in one place",
      "Businesses whose country, tax rules and bank integrations are supported",
    ],
    keyFeatures: [
      "Income and expense tracking",
      "Invoices and payment workflows",
      "Bank transaction connections where supported",
      "Profit-and-loss and other financial reports",
    ],
    strengths: [
      "Combines accounting records with billing and reporting workflows",
      "Offers multiple editions for different business needs",
      "Has a US free option with restricted usage, according to the official pricing page",
    ],
    tradeoffs: [
      "Plan availability and pricing differ by country",
      "The free US plan has strict limits, including two invoices per month and one connected bank",
      "Advanced automation, users and reporting can require paid plans",
    ],
    pricingSummary:
      "QuickBooks' US pricing page currently advertises a $0 Free plan and paid subscriptions, but promotional rates and plan details change. Availability, tax support, bank connections and pricing differ by country; check the official regional page before choosing.",
    freePlan:
      "Yes, the US pricing page lists a $0 plan with one user, no accountant access, up to two invoices per month (subject to payment eligibility) and one connected bank. Do not assume this plan is available in every country.",
    officialUrl: "https://quickbooks.intuit.com/online/",
    pricingUrl: "https://quickbooks.intuit.com/pricing/",
    comparisons: [
      { title: "QuickBooks vs Xero", href: "/best/quickbooks-vs-xero" },
      { title: "QuickBooks vs FreshBooks", href: "/best/quickbooks-vs-freshbooks" },
      { title: "QuickBooks alternatives", href: "/best/quickbooks-alternatives" },
    ],
    alternatives: [
      { name: "FreshBooks", href: "/best/quickbooks-vs-freshbooks", reason: "Compare a freelancer-friendly invoicing workflow with broader accounting features." },
      { name: "Wave", href: "/software/wave", reason: "Compare a simpler free starting point for basic bookkeeping and invoicing." },
    ],
    reviewedOn: "October 14, 2026",
  },
  {
    slug: "freshbooks",
    name: "FreshBooks",
    category: "Accounting & Invoicing",
    tagline: "Client invoicing, expense tracking and accounting tools for service businesses.",
    summary:
      "FreshBooks focuses on invoicing and day-to-day finances for freelancers and service businesses. It can suit people who bill clients regularly and want estimates, expense tracking and reports, but client caps and add-on costs matter when comparing plans.",
    productImage: {
      src: "https://www.freshbooks.com/media/2024/12/default-image.png",
      alt: "FreshBooks invoice overview showing invoice statuses and outstanding amounts",
      caption: "FreshBooks dashboard screenshot hosted on FreshBooks' official website.",
      sourceUrl: "https://www.freshbooks.com/honeybook-vs-freshbooks",
    },
    bestFor: [
      "Freelancers and consultants who invoice clients",
      "Service businesses that track expenses and estimates",
      "Owners who want accounting reports alongside client billing",
    ],
    keyFeatures: [
      "Create and send invoices and estimates",
      "Track business expenses",
      "Client and project records",
      "Accounting reports and receipt scanning on eligible plans",
    ],
    strengths: [
      "Invoicing and client workflows are central to the product",
      "Paid plans add reporting and expense features as needs grow",
      "A 30-day trial is advertised on the official pricing page",
    ],
    tradeoffs: [
      "It is not a permanent free accounting plan; a trial is time-limited",
      "Billable-client limits vary by plan",
      "Team members, payroll and advanced payments can cost extra",
    ],
    pricingSummary:
      "FreshBooks' US pricing page lists Lite at a standard $23/month, Plus at $43/month and Premium at $70/month before applicable discounts; annual billing offers a 10% discount according to its pricing FAQ. Promotional offers change, so verify current terms directly.",
    freePlan:
      "No permanent free plan is advertised. FreshBooks offers a 30-day free trial; after the trial, a paid plan is required to continue using the service.",
    officialUrl: "https://www.freshbooks.com/",
    pricingUrl: "https://www.freshbooks.com/pricing",
    comparisons: [
      { title: "QuickBooks vs FreshBooks", href: "/best/quickbooks-vs-freshbooks" },
      { title: "FreshBooks vs Wave", href: "/best/freshbooks-vs-wave" },
      { title: "FreshBooks alternatives", href: "/best/freshbooks-alternatives" },
    ],
    alternatives: [
      { name: "QuickBooks Online", href: "/best/quickbooks-vs-freshbooks", reason: "Compare broader accounting workflows and region-specific plan availability." },
      { name: "Wave", href: "/best/freshbooks-vs-wave", reason: "Consider Wave if a permanent $0 starting plan is a priority and it supports your region." },
    ],
    reviewedOn: "October 14, 2026",
  },
  {
    slug: "asana",
    name: "Asana",
    category: "Project Management",
    tagline: "Structured project and task management for people and growing teams.",
    summary:
      "Asana helps teams organise tasks into projects, assign ownership and track progress through list, board and calendar views. Its free Personal plan can work for an individual or a two-person collaboration, while larger teams may need a paid tier for expanded administration and planning features.",
    productImage: {
      src: "https://cdn.sanity.io/images/9pstyp3p/production/2503ca89108ca37797075c49f4db147ceb57af3e-1360x762.webp/asana-overview.webp",
      alt: "Asana project board with work requests grouped by progress status",
      caption: "Third-party screenshot of an Asana project board; plan features and the interface can change.",
      sourceUrl: "https://mooncamp.com/de/blog/asana-ziele-okrs",
    },
    bestFor: [
      "Small teams that need task ownership and project visibility",
      "Teams managing work across lists, boards and calendars",
      "People who may need reporting and timeline planning as projects grow",
    ],
    keyFeatures: [
      "Tasks, projects and assignees",
      "List, board and calendar views on Personal",
      "Timeline, Gantt, reporting and automation on eligible paid plans",
      "Integrations with common work tools",
    ],
    strengths: [
      "The Personal plan is free forever for up to two users",
      "Supports multiple ways to view the same project work",
      "Paid plans add more structured planning and team features",
    ],
    tradeoffs: [
      "The current free Personal plan is limited to two users",
      "Timeline, Gantt and advanced team controls require paid plans",
      "Paid subscriptions start at a minimum of two seats, according to Asana's help documentation",
    ],
    pricingSummary:
      "Asana's official US pricing page lists Personal at $0, Starter at $10.99 per user/month billed annually ($13.49 monthly), and Advanced at $24.99 per user/month billed annually ($30.49 monthly). Pricing and plan packaging may vary by region.",
    freePlan:
      "Yes. Personal is free forever for up to two users and includes unlimited tasks and projects, list/board/calendar views, and 100+ integrations. Some advanced planning and administrative features are paid.",
    officialUrl: "https://asana.com/",
    pricingUrl: "https://asana.com/pricing",
    comparisons: [
      { title: "Trello vs Asana", href: "/best/trello-vs-asana" },
      { title: "Asana vs ClickUp", href: "/best/asana-vs-clickup" },
      { title: "Asana alternatives", href: "/best/asana-alternatives" },
    ],
    alternatives: [
      { name: "Trello", href: "/best/trello-vs-asana", reason: "Compare a simpler visual Kanban board with Asana's structured project workflow." },
      { name: "ClickUp", href: "/best/asana-vs-clickup", reason: "Compare a broader configurable work hub with Asana's project-management focus." },
    ],
    reviewedOn: "October 14, 2026",
  },
  {
    slug: "clickup",
    name: "ClickUp",
    category: "Project Management",
    tagline: "A configurable work hub for tasks, docs and team project views.",
    summary:
      "ClickUp brings tasks, documents and several project views into one workspace. Its Free Forever plan makes it worth testing, but the free plan has storage and feature-use limits, and the number of available options can mean more setup than a lightweight board tool.",
    productImage: {
      src: "https://images.ctfassets.net/w8fc6tgspyjz/h2x0AkyIKrGzXACBnPNRn/4b0d4f067400591b113627f2dd8f20fe/project-management.png?w=1600",
      alt: "ClickUp project board showing tasks arranged by priority in a release workflow",
      caption: "ClickUp product screenshot hosted on its content delivery network.",
      sourceUrl: "https://clickup.com/g2",
    },
    bestFor: [
      "Teams that want tasks, docs and multiple work views in one platform",
      "Small teams evaluating a free project-management workspace",
      "Teams willing to configure their workspace around different workflows",
    ],
    keyFeatures: [
      "Tasks, docs and collaborative workspaces",
      "List, board and calendar views",
      "Unlimited tasks and members on Free Forever, subject to plan limits",
      "Gantt, time tracking and other advanced tools on eligible paid plans",
    ],
    strengths: [
      "Free Forever is a permanent free plan rather than just a trial",
      "Includes unlimited tasks and free-plan members",
      "Can consolidate several common project-work tools",
    ],
    tradeoffs: [
      "Free Forever storage is limited to 60 MB",
      "Some features have usage limits or require paid plans",
      "The broad feature set can add complexity for teams needing only a simple board",
    ],
    pricingSummary:
      "ClickUp's official pricing page lists Free Forever at $0, Unlimited at $7 per user/month billed annually ($10 monthly), and Business at $12 per user/month billed annually ($19 monthly). Pricing and packaging can change; confirm current terms directly.",
    freePlan:
      "Yes. Free Forever includes unlimited tasks, unlimited free-plan members, collaborative docs and Kanban boards, with 60 MB storage and other feature-use limits.",
    officialUrl: "https://clickup.com/",
    pricingUrl: "https://clickup.com/pricing",
    comparisons: [
      { title: "Asana vs ClickUp", href: "/best/asana-vs-clickup" },
      { title: "ClickUp vs monday.com", href: "/best/clickup-vs-monday" },
      { title: "Notion vs ClickUp", href: "/best/notion-vs-clickup" },
    ],
    alternatives: [
      { name: "Asana", href: "/best/asana-vs-clickup", reason: "Compare a structured project-management approach with ClickUp's broad workspace." },
      { name: "Trello", href: "/best/trello-vs-asana", reason: "Consider a simpler board-first approach for lightweight workflows." },
    ],
    reviewedOn: "October 14, 2026",
  },
];

export function getSoftwareProfile(slug: string) {
  return SOFTWARE_PROFILES.find((profile) => profile.slug === slug);
}
