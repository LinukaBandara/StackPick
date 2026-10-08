import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact StackPick about corrections, broken links, and software suggestions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold text-ink mb-6">Contact StackPick</h1>
      <p className="text-[15px] text-slate mb-5">
        Found outdated pricing, a broken link, an inaccurate statement, or a software category
        we should cover? We welcome corrections and suggestions.
      </p>
      <p className="text-[15px] text-slate">
        For now, the fastest public way to reach the project is through the{" "}
        <a
          href="https://github.com/LinukaBandara/StackPick"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo font-medium hover:underline"
        >
          StackPick GitHub repository
        </a>
        . Please include the page URL and the specific information that needs attention.
      </p>
    </div>
  );
}
