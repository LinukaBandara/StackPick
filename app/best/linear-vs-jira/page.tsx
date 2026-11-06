import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Linear vs Jira (2026): Modern Issue Tracking vs Enterprise Workflow",
  description: "Compare Linear and Jira for engineering and product teams: keyboard-first speed, opinionated cycles, custom workflow configuration, and enterprise compliance.",
  alternates: { canonical: "/best/linear-vs-jira" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Linear vs Jira"
      slug="linear-vs-jira"
      intro="Issue tracking often becomes the tool engineers love to hate. Linear changed that narrative by building an ultra-fast, opinionated, keyboard-first issue tracker designed specifically for modern product teams. Jira Software, developed by Atlassian, is the battle-tested enterprise standard offering infinite workflow customization, cross-department governance, and complex multi-team portfolio roadmaps."
      pricingNote="Pricing verified for 2026. Linear offers a free tier for up to 250 active issues, with Standard at $8/user/month and Plus at $14/user/month (billed annually). Jira offers a free plan for up to 10 users, with Standard at approximately $7.90/user/month, Premium at $15.25/user/month, and Enterprise tiers with centralized Atlassian Access."
      tools={[
        {
          name: "Linear",
          bestFor: "Software startups, engineering-led companies, and high-velocity product teams wanting sub-50ms speed, keyboard shortcuts, automated cycles, and zero administrative clutter",
          freeOption: "Free plan supports unlimited users with up to 250 active issues, git integrations, and core cycle management.",
          tradeoff: "Intentionally lacks deep custom permission schemes, custom issue types, and complex approval matrices required by large legacy IT organizations.",
          url: "https://linear.app/pricing",
        },
        {
          name: "Jira",
          bestFor: "Mid-market to Fortune 500 enterprises, cross-functional organizations, and IT/security teams requiring customized audit trails, SLAs, and complex multi-project governance",
          freeOption: "Free tier for up to 10 users with basic Scrum and Kanban boards, 2GB storage, and standard automation.",
          tradeoff: "Noticeable interface latency, high administrative maintenance overhead, and complex configuration that frequently causes developer friction.",
          url: "https://www.atlassian.com/software/jira/pricing",
        },
      ]}
      bottomLine="Choose Linear if your team is driven by engineering velocity, clean design, and focus. Developers actually enjoy using Linear because it respects their time with instant keyboard navigation, automated git branch creation, and sensible defaults (Cycles, Triage, Projects). Choose Jira if you are an enterprise organization with non-engineering stakeholders, complex regulatory audit requirements, or deep dependencies on the Atlassian ecosystem (Confluence, Jira Service Management)."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">Productivity philosophy</p>
          <h2 className="sp-title mt-4 max-w-4xl">Velocity by Design vs. Infinite Configurability</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            The defining contrast between Linear and Jira is opinionation. Jira asks: "How do you want your workflow configured?" and lets you build custom fields, validators, transitions, and permission schemes until the system requires a full-time administrator. Linear asks: "What is the cleanest way for software to get built?" and provides structured Cycles, Triage inboxes, and roadmap milestones out of the box.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Interaction latency</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Linear synchronizes state locally; every page change and keyboard shortcut operates under 50ms. Jira requires network roundtrips for many board operations.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Git & PR automation</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Linear copies git branch names in one click (e.g. `lin-123-fix-auth`), auto-moving tickets to In Review and Done as PRs open and merge.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Enterprise compliance</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Jira supports strict HIPAA compliance, data residency in multiple continents, custom security schemes, and enterprise SAML SSO via Atlassian Access.
              </p>
            </div>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Which one fits your organization?</h3>
          <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="border-b border-black/10 p-6 sm:border-b-0 sm:border-r">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#6e6e73]">Shortlist Linear if…</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6e6e73]">
                  <li>You have a team of 5 to 500 engineers, designers, and PMs who value speed and keyboard shortcuts (`C` to create, `K` command menu).</li>
                  <li>You want to eliminate the overhead of a dedicated project manager managing Jira ticket fields.</li>
                  <li>You use automated sprints (Cycles) that automatically roll uncompleted tasks forward without manual sprint backlog grooming.</li>
                  <li>You want customer bugs filtered through a Triage inbox before polluting the active sprint backlog.</li>
                </ul>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#6e6e73]">Shortlist Jira if…</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6e6e73]">
                  <li>You work in a heavily regulated enterprise (healthcare, banking, defense) requiring strict field audit tracking and approval gates.</li>
                  <li>Your support team uses Jira Service Management (JSM) and requires native ticket escalation into engineering backlogs.</li>
                  <li>You manage complex multi-tiered dependency roadmaps with portfolio management tools (Jira Align / Advanced Roadmaps).</li>
                  <li>You need granular per-user permissions (e.g., Contractor A can view Project X but cannot edit estimation fields).</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Where the entry plans stop fitting</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Linear's free plan is remarkably functional because it includes unlimited users, but its 250 active issue cap means that once your team logs more than 250 non-archived tickets, you must upgrade to Standard ($8/user/month). For active teams, the $8/month tier is the true starting point.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Jira's free plan allows up to 10 users, but disables anonymous access, advanced permissions, and audit logs. The Standard plan ($7.90/user/month) unlocks user roles, but cross-project capacity planning, SLA tracking, and 24/7 support require Jira Premium ($15.25/user/month).
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#e4e7ec]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-[#f7f8fc] text-[#101828]">
                <tr>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Decision point</th>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Linear</th>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Jira Software</th>
                </tr>
              </thead>
              <tbody className="text-[#424245]">
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Core Philosophy</th>
                  <td className="border-b border-[#e4e7ec] p-4">Speed, opinionated product workflow, keyboard-first</td>
                  <td className="border-b border-[#e4e7ec] p-4">Infinite configurability, enterprise governance, multi-team scale</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Performance / Speed</th>
                  <td className="border-b border-[#e4e7ec] p-4">Sub-50ms local database sync; instant search and filters</td>
                  <td className="border-b border-[#e4e7ec] p-4">Noticeable cloud latency on complex boards and query filters</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Workflow Flexibility</th>
                  <td className="border-b border-[#e4e7ec] p-4">Streamlined statuses (Backlog, Todo, In Progress, Done, Canceled)</td>
                  <td className="border-b border-[#e4e7ec] p-4">Custom state machines, post-functions, validators, and custom screens</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Customer Support Escalation</th>
                  <td className="border-b border-[#e4e7ec] p-4">Native Slack / Zendesk / Intercom integrations via Triage</td>
                  <td className="border-b border-[#e4e7ec] p-4">Native bidirectional sync with Jira Service Management (JSM)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Pricing</th>
                  <td className="p-4">Free (250 active issues); $8/user/mo Standard; $14/user/mo Plus</td>
                  <td className="p-4">Free (10 users); ~$7.90/user/mo Standard; ~$15.25/user/mo Premium</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">A clean migration checklist from Jira to Linear</h3>
          <ol className="mt-5 max-w-3xl list-decimal space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><strong>Use Linear's native Jira importer:</strong> Linear includes a built-in migration tool that imports projects, issues, comments, attachments, and status mappings cleanly.</li>
            <li><strong>Archive stale tickets:</strong> Do not import 4,000 dead tickets from 2019. Archive unresolved backlog items older than 12 months before exporting.</li>
            <li><strong>Connect GitHub or GitLab:</strong> Set up the official Linear GitHub app to enable automatic PR closing keywords (e.g. `Fixes LIN-456`) and branch copy links.</li>
            <li><strong>Teach developers the core shortcuts:</strong> Hold a 10-minute team walkthrough showing `Cmd+K`, `C` to create, and cycling through views with keyboard arrows.</li>
          </ol>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Official plan sources checked</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Pricing and plan limits verified with published vendor data for 2026:
          </p>
          <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><a className="underline underline-offset-4" href="https://linear.app/pricing" target="_blank" rel="noreferrer">Linear Official Pricing</a> — Standard, Plus, and Enterprise tiers.</li>
            <li><a className="underline underline-offset-4" href="https://www.atlassian.com/software/jira/pricing" target="_blank" rel="noreferrer">Jira Software Pricing</a> — Standard, Premium, and Cloud Enterprise breakdowns.</li>
          </ul>
        </div>
      </section>
    </ComparisonArticle>
  );
}

