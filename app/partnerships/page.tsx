import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Partnerships",
  description:
    "Explore potential editorially independent partnerships with StackPick. Learn how vendor enquiries, sponsorship disclosures and product research are handled.",
  alternates: { canonical: "/partnerships" },
  openGraph: {
    title: "Software Partnerships | StackPick",
    description:
      "Discuss a potential software partnership with StackPick without compromising independent research.",
    url: "/partnerships",
    type: "website",
  },
};

const principles = [
  {
    title: "Editorial decisions stay independent",
    body: "Payment or a commercial conversation cannot buy a review, a favourable verdict, a higher organic ranking or removal of legitimate criticism.",
  },
  {
    title: "Paid visibility is identified",
    body: "If a sponsored placement is offered in the future, it will be clearly labelled as sponsored and visually distinct from independent recommendations.",
  },
  {
    title: "Claims need evidence",
    body: "Product facts, pricing, availability and performance claims must be supported by sources. We do not publish invented customer counts, results, reviews or partner endorsements.",
  },
];

export default function PartnershipsPage() {
  const subject = encodeURIComponent("StackPick partnership enquiry");
  const body = encodeURIComponent(
    "Hello StackPick,\n\nI would like to discuss a potential partnership.\n\nCompany / product:\nWebsite:\nContact name and role:\nPartnership idea:\n\nThank you."
  );

  return (
    <main className="bg-white">
      <section className="border-b border-black/[0.08] bg-[#f5f5f7]">
        <div className="sp-container py-16 sm:py-24">
          <p className="sp-eyebrow">StackPick · Partnerships</p>
          <h1 className="sp-display mt-4 max-w-4xl">Reach software buyers. Keep the research honest.</h1>
          <p className="sp-body-large mt-6 max-w-2xl">
            StackPick helps freelancers and small businesses discover software, compare practical trade-offs and make more informed decisions. If you represent a software company, you can contact us about a potential collaboration.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:stackpick.contact@gmail.com?subject=${subject}&body=${body}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#001D39] px-6 text-sm font-semibold text-white hover:opacity-90"
            >
              Discuss a partnership <span className="ml-2" aria-hidden="true">↗</span>
            </a>
            <Link
              href="/for-vendors"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/15 bg-white px-6 text-sm font-semibold text-[#001D39]"
            >
              Vendor profile support
            </Link>
          </div>
          <p className="mt-5 max-w-2xl text-xs leading-5 text-[#6e6e73]">
            A partnership enquiry is not an approval or a promise of publication. Commercial opportunities, if any, are reviewed individually.
          </p>
        </div>
      </section>

      <section className="sp-container py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="sp-eyebrow">How we work</p>
          <h2 className="sp-title mt-3">Commercial conversations. Independent decisions.</h2>
          <p className="mt-5 text-base leading-7 text-[#6e6e73]">
            We are open to relevant conversations with software publishers and their authorised representatives. At this stage, StackPick does not advertise a rate card, guarantee audience reach, sell rankings or promise a sponsored inventory slot. Contact us with your proposal and we will confirm whether there is a suitable opportunity.
          </p>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="rounded-[24px] border border-black/10 p-6">
              <h3 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sp-container pb-16 sm:pb-24">
        <div className="rounded-[28px] border border-black/10 bg-[#f5f5f7] p-7 sm:p-10">
          <p className="sp-eyebrow">Choose the right route</p>
          <div className="mt-5 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">Correct or claim a product profile</h2>
              <p className="mt-3 text-sm leading-6 text-[#6e6e73]">
                Use the vendor workspace to request representation of an existing listing, submit corrections or suggest a product for editorial consideration. These requests are reviewed and do not create paid placement.
              </p>
              <Link href="/for-vendors/portal" className="mt-5 inline-flex text-sm font-semibold text-[#001D39] underline underline-offset-4">
                Open vendor workspace →
              </Link>
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">Discuss a commercial proposal</h2>
              <p className="mt-3 text-sm leading-6 text-[#6e6e73]">
                For sponsorship or another potential commercial collaboration, email the team with your company, product and proposal. Do not send confidential credentials or customer data.
              </p>
              <a href={`mailto:stackpick.contact@gmail.com?subject=${subject}&body=${body}`} className="mt-5 inline-flex text-sm font-semibold text-[#001D39] underline underline-offset-4">
                Email StackPick →
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-xs leading-5 text-[#6e6e73]">
          Read our <Link href="/review-policy" className="font-medium text-[#001D39] underline underline-offset-4">review policy</Link> and <Link href="/affiliate-disclosure" className="font-medium text-[#001D39] underline underline-offset-4">affiliate disclosure</Link> for how we separate editorial recommendations from commercial relationships.
        </p>
      </section>
    </main>
  );
}
