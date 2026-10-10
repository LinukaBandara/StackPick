import type { Metadata } from "next";
import Link from "next/link";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Practical n8n Workflow Examples for Small Teams (2026) | StackPick",
  description: "Explore practical n8n workflow blueprints for lead intake, support triage and weekly reporting, with deduplication, error handling and credential-safety checks.",
  alternates: { canonical: "/best/n8n-workflow-examples" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Practical n8n Workflow Examples for Small Teams"
      slug="n8n-workflow-examples"
      intro="A useful workflow does more than connect two apps. It validates incoming data, avoids duplicate actions, handles service failures and gives a person a way to recover when automation stops. These blueprints are starting designs to adapt and test—not imported workflows claimed to have been run by StackPick."
      pricingNote="Node names, integrations and authentication options can change between n8n versions and provider APIs. Verify the current node documentation, use a test workspace first and check your hosting and execution limits before enabling a workflow for live records."
      tools={[
        { name: "Lead intake and deduplication", bestFor: "Collecting website form submissions and routing valid leads into a CRM", freeOption: "Can be built with n8n plus the form, email and CRM services you already use; each connected service has its own limits.", tradeoff: "Requires a stable unique identifier, validation rules and a defined owner for records that fail.", url: "https://docs.n8n.io/" },
        { name: "Support request triage", bestFor: "Classifying incoming requests and assigning a suggested queue for human review", freeOption: "A deterministic keyword or rules-based first version may avoid paid AI usage; LLM calls can add separate costs.", tradeoff: "AI classifications can be wrong; never let an unreviewed model make high-impact account or refund decisions.", url: "https://docs.n8n.io/" },
        { name: "Weekly operations report", bestFor: "Collecting approved metrics from several sources and sending a scheduled summary", freeOption: "Use existing API access and scheduled execution where available; check rate limits and plan restrictions.", tradeoff: "Source schema changes, time zones and partial data can make reports misleading unless the workflow validates freshness.", url: "https://docs.n8n.io/" }
      ]}
      bottomLine="Start with one low-risk process and a manual review step. Keep credentials out of workflow text, add deduplication before side effects, define retries and alerting, and record how an operator can safely replay a failed execution."
    >
      <section className="rounded-3xl bg-[#f5f5f7] p-6 sm:p-9">
        <p className="sp-eyebrow">Blueprint 1 · Lead intake</p>
        <h2 className="sp-title mt-3">Validate before creating a CRM record.</h2>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#424245]">
          <li>Trigger on a form submission or authenticated webhook.</li>
          <li>Normalize email and phone fields; reject malformed or empty required fields.</li>
          <li>Look up a stable deduplication key before creating a new lead.</li>
          <li>Route duplicates to an update or review path instead of creating a second record.</li>
          <li>Create the CRM record, notify the assigned owner and store a correlation ID for tracing.</li>
          <li>On failure, log a redacted error and alert an operator; do not silently discard the lead.</li>
        </ol>
      </section>
      <section className="rounded-3xl border border-[#e4e7ec] p-6 sm:p-9">
        <p className="sp-eyebrow">Blueprint 2 · Support triage</p>
        <h2 className="sp-title mt-3">Use AI as a suggestion, with a safe fallback.</h2>
        <p className="mt-4 text-sm leading-7 text-[#424245]">Trigger on a new ticket, remove unnecessary personal data, apply deterministic rules for known categories, and optionally ask a model for a constrained label and short rationale. Validate the response against an allowed schema. Send low-confidence or malformed results to a human queue; never expose secrets or let arbitrary model output become an executable command.</p>
      </section>
      <section className="rounded-3xl border border-[#e4e7ec] p-6 sm:p-9">
        <p className="sp-eyebrow">Blueprint 3 · Weekly report</p>
        <h2 className="sp-title mt-3">Make freshness and partial failure visible.</h2>
        <p className="mt-4 text-sm leading-7 text-[#424245]">Schedule the run, fetch only approved metrics, check response status and expected date ranges, and calculate totals only when required sources are present. Mark missing data as unavailable rather than zero. Send the report with a run timestamp and a link to a restricted execution log.</p>
      </section>
      <section className="rounded-3xl bg-white">
        <p className="sp-eyebrow">Before going live</p>
        <h2 className="sp-title mt-3">Test the failure paths.</h2>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-[#424245]">
          <li>Send the same input twice and verify it does not trigger duplicate side effects.</li>
          <li>Simulate a timeout, invalid response, rate limit and expired credential.</li>
          <li>Confirm retries are bounded and do not resend emails or repeat payments unexpectedly.</li>
          <li>Use least-privilege credentials and a separate test account.</li>
          <li>Set execution alerts, retention limits and an owner for failed runs.</li>
        </ul>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link href="/best/n8n-vs-make-vs-zapier" className="rounded-2xl border border-[#e4e7ec] p-5"><strong>n8n vs Make vs Zapier</strong><span className="mt-2 block text-sm text-[#6e6e73]">Compare platforms before you commit to a workflow.</span></Link>
          <Link href="/best/llm-tools-for-developers" className="rounded-2xl border border-[#e4e7ec] p-5"><strong>LLM tools for developers</strong><span className="mt-2 block text-sm text-[#6e6e73]">Understand model cost and evaluation basics.</span></Link>
        </div>
      </section>
    </ComparisonArticle>
  );
}
