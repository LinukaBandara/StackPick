import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Survey & Customer Feedback (NPS) Software for Small Business (2026)",
  description:
    "An honest comparison of SurveyMonkey, Delighted, and Zoho Survey for customer feedback and NPS tracking - and why a general form builder isn't the same tool for this job.",
  alternates: { canonical: "/best/survey-nps-software" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Survey & Customer Feedback (NPS) Software for Small Business"
      slug="survey-nps-software"
      reviewedOn="2026-11-07"
      intro="This is a different job than a general-purpose form builder (see our form builder comparison for one-off forms and internal surveys). Ongoing customer feedback and NPS tracking specifically benefit from built-in scoring, trend tracking over time, and CRM sync - features a generic form tool doesn't prioritize."
      quickAnswer="For a small NPS program, Delighted Free collects up to 25 responses/month for one user; SurveyMonkey Free allows unlimited surveys with up to 10 questions and 25 viewable responses per survey; Zoho Survey Free allows 100 responses per survey and 10 questions. Compare response caps, trend reports, CRM integrations and exports—not just the survey builder."
      pricingNote="Plan details checked November 7, 2026. SurveyMonkey Free: 1 user, unlimited surveys, 10 questions and 25 viewable responses per survey; over-limit responses may not be accessible. Delighted Free: 1 user and 25 responses/month across Surveys and CX; response collection closes at the limit until the monthly reset. Zoho Survey Free: 1 user, 10 questions and 100 responses per survey; Basic is US$7.42/month billed annually. Response caps, paid plan prices, taxes and CRM integrations vary by country and billing cadence."
      tools={[
        {
          name: "SurveyMonkey",
          bestFor: "Businesses wanting the most complete feature set and the largest template library",
          freeOption: "Free Basic: 1 user, unlimited surveys, up to 10 questions and 25 viewable responses per survey; no credit card required. Paid tiers add logic, exports, CRM integrations and more response capacity.",
          tradeoff:
            "Offers a broad survey feature set and a large template library, with paid tiers adding logic, exports, reporting and integrations. Confirm which NPS trend and CRM-sync features are included in the plan you would actually buy.",
          url: "https://www.surveymonkey.com/product/free-vs-paid-plans/",
        },
        {
          name: "Delighted",
          bestFor: "Teams that specifically want a simple, dedicated NPS tool and nothing more",
          freeOption: "Free plan supports one user and up to 25 responses/month across Delighted Surveys and CX. When the limit is reached, active surveys close to new responses until the monthly billing period resets.",
          tradeoff:
            "Deliberately narrow and simple - a clean NPS/CSAT survey that's fast to set up and easy for customers to answer in one tap, with none of the general survey-builder complexity. That narrowness is the whole point; it's the wrong tool if you also need general-purpose research surveys.",
          url: "https://delighted.com/pricing",
        },
        {
          name: "Zoho Survey",
          bestFor: "Budget-conscious teams, especially already using other Zoho products",
          freeOption: "Free plan: 1 user, 10 questions and 100 responses per survey. US Basic is US$7.42/month billed annually; higher tiers add branding, logic, integrations and analysis.",
          tradeoff:
            "The lowest listed paid entry price in this comparison, with NPS and CSAT question types and integrations for teams already using Zoho products. Check the response cap, user limit and which reporting/logic features are gated by higher plans.",
          url: "https://www.zoho.com/survey/pricing.html",
        },
      ]}
      bottomLine="Choose SurveyMonkey when broad survey creation and its paid analysis/export ecosystem matter; Delighted when a simple ongoing CX/NPS program is the priority; and Zoho Survey when its response caps and existing Zoho integrations fit. For a valid NPS program, use the same 0–10 likelihood-to-recommend question over time, calculate promoters (9–10) minus detractors (0–6), track response rate and segment results carefully. Do not treat one small response sample as a representative customer verdict."
    >
      <section className="rounded-2xl bg-[#f5f5f7] p-6">
        <h2 className="text-xl font-semibold text-[#101828]">Run a repeatable NPS program</h2>
        <p className="mt-3 text-sm leading-6 text-[#667085]">Use a consistent 0–10 likelihood-to-recommend question, keep timing and audience rules stable, and report the response rate alongside the score. Promoters score 9–10; passives 7–8; detractors 0–6. NPS is the percentage of promoters minus the percentage of detractors, not an average rating. Segment results carefully and avoid treating a small or biased sample as a representative customer verdict.</p>
        <p className="mt-4 text-xs leading-5 text-[#667085]">Research method: desk review of official pricing and help pages checked November 7, 2026. This is not a hands-on survey delivery or statistical benchmark; confirm response caps and overage rules in the account before launching a recurring program.</p>
      </section>
    </ComparisonArticle>
  );
}
