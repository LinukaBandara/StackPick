"use client";

import { useState, type FormEvent } from "react";

export default function ReportIssueForm() {
  const [pageUrl, setPageUrl] = useState("");
  const [issueType, setIssueType] = useState("Incorrect pricing or plan limit");
  const [details, setDetails] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `StackPick correction report: ${issueType}`;
    const body = [
      `Page affected: ${pageUrl || "Not provided"}`,
      `Issue type: ${issueType}`,
      "",
      "What should we review?",
      details,
      "",
      `Supporting source: ${sourceUrl || "Not provided"}`,
    ].join("\n");
    window.location.href = `mailto:stackpick.contact@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="pageUrl" className="mb-2 block text-sm font-medium text-[#1d1d1f]">Page URL</label>
        <input id="pageUrl" type="url" value={pageUrl} onChange={(event) => setPageUrl(event.target.value)} placeholder="https://stackpick.tech/software/..." className="min-h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-sm text-[#1d1d1f] outline-none transition focus:border-[#001D39]" />
      </div>
      <div>
        <label htmlFor="issueType" className="mb-2 block text-sm font-medium text-[#1d1d1f]">What needs attention?</label>
        <select id="issueType" value={issueType} onChange={(event) => setIssueType(event.target.value)} className="min-h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-sm text-[#1d1d1f] outline-none focus:border-[#001D39]">
          <option>Incorrect pricing or plan limit</option>
          <option>Outdated feature or product information</option>
          <option>Broken link or image</option>
          <option>Misleading or unclear statement</option>
          <option>Commercial relationship or conflict concern</option>
          <option>Other correction</option>
        </select>
      </div>
      <div>
        <label htmlFor="details" className="mb-2 block text-sm font-medium text-[#1d1d1f]">Details</label>
        <textarea id="details" required minLength={10} rows={6} value={details} onChange={(event) => setDetails(event.target.value)} placeholder="Tell us what appears incorrect and what you believe the accurate information is." className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm leading-6 text-[#1d1d1f] outline-none focus:border-[#001D39]" />
      </div>
      <div>
        <label htmlFor="sourceUrl" className="mb-2 block text-sm font-medium text-[#1d1d1f]">Supporting source URL (optional)</label>
        <input id="sourceUrl" type="url" value={sourceUrl} onChange={(event) => setSourceUrl(event.target.value)} placeholder="https://vendor.com/pricing" className="min-h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-sm text-[#1d1d1f] outline-none focus:border-[#001D39]" />
      </div>
      <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#001D39] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90">Prepare correction email</button>
      <p className="text-xs leading-5 text-[#6e6e73]">This opens your email app with the details filled in. StackPick does not store or submit this form on the website.</p>
    </form>
  );
}
