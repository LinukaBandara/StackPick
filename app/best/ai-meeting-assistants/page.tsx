import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best AI Meeting Assistants (2026): Free Plan Limits Compared",
  description:
    "Compare Otter, Fireflies.ai, Fathom and Granola for meeting notes, transcription limits, AI summaries, integrations and privacy controls.",
  alternates: { canonical: "/best/ai-meeting-assistants" },
};

const SOURCE_LINK_CLASS =
  "font-medium text-[#004bb5] underline-offset-4 hover:underline";

export default function Page() {
  return (
    <ComparisonArticle
      title="Best AI Meeting Assistants"
      slug="ai-meeting-assistants"
      intro="For freelancers and small teams, the useful meeting assistant is the one that turns a call into accurate notes, decisions and next actions without adding a second admin job. We compare four different approaches: Otter's minute-based transcription, Fireflies' searchable meeting archive, Fathom's generous individual recording allowance and Granola's bot-free note capture."
      pricingNote="Free-plan limits and features can change, and some providers show different offers by region or billing cycle. The limits below are based on the providers' published plan information checked October 11, 2026. Confirm the current plan on the linked official page before relying on a limit or uploading client information."
      tools={[
        {
          name: "Otter",
          bestFor: "Live transcription when you want a clear monthly minutes allowance",
          freeOption:
            "The Basic plan lists 300 transcription minutes per month, a 30-minute limit per conversation, three lifetime audio/video imports and access to the 25 most recent conversations.",
          tradeoff:
            "The per-conversation cap and small import allowance can be restrictive for long calls or teams that regularly upload recordings. Check whether your meetings fit the limit before adopting it.",
          url: "https://otter.ai/pricing",
        },
        {
          name: "Fireflies.ai",
          bestFor: "Searchable transcripts and a meeting archive across a team's workflow",
          freeOption:
            "The Free plan lists unlimited transcription, limited AI summaries, 400 minutes of meeting storage and 20 AI credits. Storage is a total archive allowance, not a monthly transcription allowance.",
          tradeoff:
            "You may need to delete older meetings or upgrade as the archive grows. Some advanced automation, downloads and integrations are plan-dependent, so test the exact workflow you need.",
          url: "https://fireflies.ai/pricing",
        },
        {
          name: "Fathom",
          bestFor: "Individuals who want to record and transcribe meetings without a small monthly recording cap",
          freeOption:
            "Fathom's individual Free plan lists unlimited recordings, storage and transcription. Its help centre says advanced AI summaries are available for the first five calls each month; after that, the general summary remains available.",
          tradeoff:
            "Unlimited recording does not mean every AI feature is unlimited. If you depend on custom summaries, action items or follow-up emails, check which paid features are required.",
          url: "https://fathom.video/pricing",
        },
        {
          name: "Granola",
          bestFor: "People who prefer notes captured from their device audio instead of a meeting bot",
          freeOption:
            "The Basic plan includes AI meeting notes, limited meeting history, AI chat, shared folders and note templates. Its pricing page lists bot-free device-audio capture across supported apps.",
          tradeoff:
            "Limited history can matter if you need to search old client calls. Advanced integrations, unlimited history and centralized team administration are paid-plan features.",
          url: "https://www.granola.ai/pricing",
        },
      ]}
      bottomLine="For long meetings and frequent individual calls, start by testing Fathom's free recording allowance. If you need a searchable archive, compare Fireflies' storage cap with how long you retain calls. Choose Otter when its explicit transcription allowance fits your volume, and Granola if bot-free device-audio capture better matches your meeting habits. These are starting points, not universal winners: run one representative meeting, check the transcript against the actual decisions and verify the provider's current privacy and retention terms before using it for client work."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">How we compared them</p>
          <h2 className="sp-title mt-4 max-w-4xl">
            Compare the limit that will actually interrupt your work.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            We reviewed the providers' published plan pages and help documentation for
            transcription allowances, retained meeting history, summary limits and capture
            method. This is desk research, not a claim that StackPick independently benchmarked
            each product's transcription accuracy. Pricing and plan details were checked on
            October 11, 2026; providers can change them after publication.
          </p>

          <div className="mt-8 overflow-x-auto rounded-[24px] border border-black/10">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-[#f5f5f7]">
                <tr>
                  <th className="p-4 font-semibold text-[#1d1d1f]">Provider</th>
                  <th className="p-4 font-semibold text-[#1d1d1f]">Free-plan constraint to check</th>
                  <th className="p-4 font-semibold text-[#1d1d1f]">Official source</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-black/10">
                  <td className="p-4 font-medium">Otter</td>
                  <td className="p-4 text-[#6e6e73]">300 transcription minutes/month; 30 minutes per conversation; three lifetime imports.</td>
                  <td className="p-4"><a className={SOURCE_LINK_CLASS} href="https://otter.ai/pricing" target="_blank" rel="noopener noreferrer">Plan details</a></td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="p-4 font-medium">Fireflies.ai</td>
                  <td className="p-4 text-[#6e6e73]">400 minutes of stored meeting content and limited AI summaries on Free.</td>
                  <td className="p-4"><a className={SOURCE_LINK_CLASS} href="https://fireflies.ai/pricing" target="_blank" rel="noopener noreferrer">Plan details</a></td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="p-4 font-medium">Fathom</td>
                  <td className="p-4 text-[#6e6e73]">Unlimited recordings/transcription, but advanced summaries are limited to five calls/month on Free.</td>
                  <td className="p-4"><a className={SOURCE_LINK_CLASS} href="https://help.fathom.video/en/articles/5290881" target="_blank" rel="noopener noreferrer">Free vs. Premium</a></td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="p-4 font-medium">Granola</td>
                  <td className="p-4 text-[#6e6e73]">Limited meeting history; advanced integrations and unlimited history require a paid plan.</td>
                  <td className="p-4"><a className={SOURCE_LINK_CLASS} href="https://www.granola.ai/pricing" target="_blank" rel="noopener noreferrer">Plan details</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight">
            A practical accuracy test
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Use a meeting where you already know the decisions, owners and deadlines. Compare
            the output against your own notes, especially speaker names, numbers, disagreements
            and action items. Record only with appropriate participant notice and consent, and
            review access, retention and deletion controls before processing confidential calls.
          </p>
        </div>
      </section>
    </ComparisonArticle>
  );
}
