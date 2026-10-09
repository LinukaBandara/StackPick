import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with StackPick.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold text-ink mb-6">Contact</h1>
      <p className="text-[15px] text-slate">
        Spotted outdated pricing, a broken link, or want to suggest a tool we should cover?
        Email{" "}
        <a href="mailto:hello@stackpick.example" className="text-indigo font-medium hover:underline">
          hello@stackpick.example
        </a>
        .
      </p>
    </div>
  );
}
