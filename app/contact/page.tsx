import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with StackPick.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-white w-full">
      <div className="sp-container max-w-3xl py-16 sm:py-24">
        <p className="sp-eyebrow uppercase tracking-wider text-xs">Get in touch</p>
        <h1 className="sp-title mt-3 text-[#1d1d1f]">Contact</h1>
        <p className="mt-8 text-base sm:text-lg leading-relaxed text-[#6e6e73]">
          Spotted outdated pricing, a broken link, or want to suggest a tool we should cover?
          Email{" "}
          <a
            href="mailto:hello@stackpick.example"
            className="text-[#004bb5] font-semibold hover:underline"
          >
            hello@stackpick.example
          </a>
          .
        </p>
      </div>
    </div>
  );
}
