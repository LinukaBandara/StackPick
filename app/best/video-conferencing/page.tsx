import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Video Conferencing Software for Small Business (2026)",
  description:
    "Compare Zoom, Google Meet, Microsoft Teams and Whereby for small businesses. Free limits, bundled suite value and when a standalone tool is worth paying for.",
  alternates: { canonical: "/best/video-conferencing" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Video Conferencing Software for Small Business"
      slug="video-conferencing"
      intro="Before comparing features, check what you are already paying for. If you are on Google Workspace or Microsoft 365, video conferencing is already bundled at no extra cost. Adding Zoom on top means paying twice for the same basic job. Zoom’s case is strongest when you need something neither bundle covers well: large webinars or external client calls with high reliability."
      pricingNote="Per-user pricing and participant caps shift periodically, and bundled-suite pricing depends on which tier you are already on. Confirm current free limits, meeting duration caps and paid plan details directly."
      tools={[
        {
          name: "Zoom",
          bestFor: "Large meetings, webinars and external client calls where reliability matters most",
          freeOption:
            "Free tier typically allows meetings up to 100 participants with a time cap on group calls (confirm current limits). 1:1 calls are often unlimited in duration on the free plan.",
          tradeoff:
            "Still widely regarded as strong on video quality and reliability under poor network conditions, and it remains a widely recognized name for external meetings. Paying for it on top of a Google Workspace or Microsoft 365 subscription that already includes video is often an avoidable cost for everyday small-team meetings.",
          url: "https://zoom.us/",
        },
        {
          name: "Google Meet",
          bestFor: "Teams already on Google Workspace",
          freeOption:
            "Free tier is available for anyone with a Google account (group call duration is typically capped — confirm current limit). Fuller features come with Google Workspace.",
          tradeoff:
            "If you are already paying for Google Workspace, this is effectively included. Video quality and large-meeting capacity trail Zoom’s, which matters more for webinars and large hybrid events than everyday team meetings.",
          url: "https://workspace.google.com/products/meet/",
        },
        {
          name: "Microsoft Teams",
          bestFor: "Teams already on Microsoft 365",
          freeOption:
            "Limited free tier. Fuller functionality comes bundled with Microsoft 365 Business plans. Confirm current plan contents.",
          tradeoff:
            "Same logic as Google Meet — already bundled if you are paying for the right Microsoft 365 tier, and it integrates tightly with Outlook calendar and SharePoint. Less useful as a standalone product if you are not otherwise in the Microsoft ecosystem.",
          url: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software",
        },
        {
          name: "Whereby",
          bestFor: "External client calls where you want zero download friction",
          freeOption:
            "Free tier is available for small meetings. Confirm current limits on the official site.",
          tradeoff:
            "Permanent, no-download meeting rooms remove a real point of friction for external guests who do not want to install anything. It is not trying to compete on large-meeting or webinar capacity the way Zoom does.",
          url: "https://whereby.com/",
        },
      ]}
      bottomLine="Already on Google Workspace or Microsoft 365? Use the video tool that is already bundled — do not pay for Zoom on top of it for basic team meetings. Running large webinars, hybrid events, or needing the most reliable video for high-stakes external calls? Zoom is worth evaluating specifically. Frequent external client calls where you want zero friction for the other side? Whereby’s no-download rooms solve a real, specific problem."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">Selection rule</p>
          <h2 className="sp-title mt-4 max-w-4xl">
            Start with what you already pay for.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Most small teams do not need a separate video product. Check whether Google Meet or Microsoft Teams is already included in your current subscription before adding another monthly bill.
          </p>

          <div className="mt-10 overflow-x-auto rounded-[28px] border border-black/10 bg-white">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="p-5 font-semibold">If this is true…</th>
                  <th className="p-5 font-semibold">Start here</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/10">
                  <td className="p-5 font-medium">Already on Google Workspace</td>
                  <td className="p-5 text-[#6e6e73]">Google Meet</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="p-5 font-medium">Already on Microsoft 365</td>
                  <td className="p-5 text-[#6e6e73]">Microsoft Teams</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="p-5 font-medium">Need large webinars or maximum reliability</td>
                  <td className="p-5 text-[#6e6e73]">Zoom</td>
                </tr>
                <tr>
                  <td className="p-5 font-medium">External clients hate installing apps</td>
                  <td className="p-5 text-[#6e6e73]">Whereby</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </ComparisonArticle>
  );
}
