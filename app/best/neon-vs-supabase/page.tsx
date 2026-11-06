import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Neon vs Supabase (2026): Serverless Postgres vs All-in-One BaaS",
  description: "Compare Neon and Supabase for modern web apps: serverless Postgres architecture, copy-on-write branching, scale-to-zero, BaaS authentication, and pricing.",
  alternates: { canonical: "/best/neon-vs-supabase" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Neon vs Supabase"
      slug="neon-vs-supabase"
      intro="Both Neon and Supabase are built on PostgreSQL, but they solve different problems in the modern developer stack. Neon is a pure serverless Postgres database that decouples storage and compute, enabling instant database branching for CI/CD and scale-to-zero cost efficiency. Supabase is an all-in-one Backend-as-a-Service (BaaS) that packages Postgres with built-in authentication, file storage, edge functions, and real-time listeners."
      pricingNote="Pricing verified for 2026. Neon offers a free tier (0.5GB storage, shared compute) and paid plans starting at Launch ($19/month) and Scale ($69/month) with pay-as-you-go compute units (CU). Supabase offers a free plan (500MB database, 2 projects) and a Pro tier starting at $25/month including Auth, Storage, and dedicated compute instances."
      tools={[
        {
          name: "Neon",
          bestFor: "Developers wanting a dedicated, hyper-scalable serverless Postgres database with instant copy-on-write branching for GitHub PR preview environments and scale-to-zero economics",
          freeOption: "Free tier provides 1 project with 0.5GB storage and shared compute, with scale-to-zero when inactive.",
          tradeoff: "Provides only the database layer; you must bring your own authentication (e.g. Clerk/Auth0), file storage (S3/UploadThing), and WebSocket real-time layer.",
          url: "https://neon.tech/pricing",
        },
        {
          name: "Supabase",
          bestFor: "Full-stack web and mobile teams that want an integrated backend suite combining Postgres with user authentication, S3-compatible file storage, and real-time webhooks",
          freeOption: "Free tier covers 2 projects, 500MB database, 1GB storage, and 50,000 monthly active users (MAUs).",
          tradeoff: "Databases run on persistent compute instances rather than pure serverless scale-to-zero; database branching requires paid add-ons and is less instant than Neon's storage engine.",
          url: "https://supabase.com/pricing",
        },
      ]}
      bottomLine="Choose Neon if you already have dedicated tools for authentication and storage (e.g., Clerk + AWS S3) and need the best serverless Postgres experience available—featuring instantaneous copy-on-write branching for every pull request and automated scale-to-zero billing. Choose Supabase if you want an all-in-one Firebase replacement where the database, user auth, row-level security, and file uploads are managed inside a single dashboard."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">Database infrastructure</p>
          <h2 className="sp-title mt-4 max-w-4xl">Storage/Compute Separation vs. Full Backend Suite</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Neon re-engineered the PostgreSQL storage engine from scratch in Rust, separating the storage layer (Pageserver and Safekeepers) from the stateless Postgres compute nodes. This architectural breakthrough makes it possible to branch a 100GB database in milliseconds via copy-on-write pointers. Supabase provisions full virtual machines running vanilla Postgres alongside companion open-source containers (GoTrue Auth, Storage API, Realtime).
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Instant DB branching</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Neon branches full production databases in under 1 second without copying physical data. Every Vercel preview deployment gets its own isolated database branch.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Integrated Auth & Storage</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Supabase includes GoTrue authentication, social logins, RLS token decoding, and S3-compatible file storage natively linked to your tables.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Scale-to-zero cost</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Neon compute nodes suspend automatically when idle (0 CU consumed), waking up in ~500ms on the next query. Supabase instances run 24/7.
              </p>
            </div>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Which one fits your architecture?</h3>
          <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="border-b border-black/10 p-6 sm:border-b-0 sm:border-r">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#6e6e73]">Shortlist Neon if…</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6e6e73]">
                  <li>You use modern ORMs like Prisma, Drizzle, or Kysely with serverless frameworks (Next.js, Cloudflare Workers, AWS Lambda).</li>
                  <li>You want every GitHub Pull Request to automatically spin up an isolated database branch with real schema and test data.</li>
                  <li>You have hundreds of development, staging, or multi-tenant customer databases that sit idle most of the day and should scale to zero.</li>
                  <li>You prefer picking best-of-breed specialized tools for auth (Clerk, Auth0) and storage (Cloudflare R2, UploadThing).</li>
                </ul>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#6e6e73]">Shortlist Supabase if…</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6e6e73]">
                  <li>You want to build a complete MVP or SaaS product with a single account and unified monthly bill.</li>
                  <li>You want built-in user authentication that integrates natively with PostgreSQL Row Level Security (RLS) policies.</li>
                  <li>You need real-time data streaming over WebSockets for collaborative applications, dashboards, or live notifications.</li>
                  <li>You value a polished graphical database spreadsheet UI (Supabase Studio) for non-technical team members.</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Where the entry plans stop fitting</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Neon's free tier provides 0.5GB of storage, which is ideal for prototypes and test environments. When your dataset grows into production workloads or requires dedicated compute without cold-start wake-up latency, upgrading to Launch ($19/month) or Scale ($69/month) provides auto-scaling compute up to 8 CU with high SLA guarantees.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Supabase's free tier pauses inactive projects after 7 days, making it unsuitable for low-traffic production sites without upgrading to the $25/month Pro plan. On the Pro plan, compute resources are always hot, and you receive included monthly allowances for auth, edge function invocations, and storage bandwidth.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#e4e7ec]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-[#f7f8fc] text-[#101828]">
                <tr>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Decision point</th>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Neon</th>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Supabase</th>
                </tr>
              </thead>
              <tbody className="text-[#424245]">
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Architecture</th>
                  <td className="border-b border-[#e4e7ec] p-4">Decoupled serverless Postgres (storage & compute separated)</td>
                  <td className="border-b border-[#e4e7ec] p-4">Containerized PostgreSQL + integrated BaaS services</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Database Branching</th>
                  <td className="border-b border-[#e4e7ec] p-4">Sub-second copy-on-write branching natively built into storage layer</td>
                  <td className="border-b border-[#e4e7ec] p-4">Available via Supabase Branching (uses migrations / seed scripts)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Scale to Zero</th>
                  <td className="border-b border-[#e4e7ec] p-4">Automatic compute suspension on inactivity; zero cost when idle</td>
                  <td className="border-b border-[#e4e7ec] p-4">Persistent compute instances (runs 24/7 on Pro tier)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Built-in Services</th>
                  <td className="border-b border-[#e4e7ec] p-4">Database only (Postgres, pgvector, connection pooling)</td>
                  <td className="border-b border-[#e4e7ec] p-4">Database + Auth + File Storage + Realtime + Edge Functions</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Pricing</th>
                  <td className="p-4">Free tier; Launch ($19/mo); Scale ($69/mo) + compute usage</td>
                  <td className="p-4">Free tier; Pro ($25/mo) + compute instance upgrades</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">A serverless deployment checklist</h3>
          <ol className="mt-5 max-w-3xl list-decimal space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><strong>Configure connection pooling:</strong> In serverless edge runtimes (Vercel, Cloudflare), use Neon's pooled connection strings or Supabase's Supavisor pooler on port 6543 to avoid running out of TCP database connections.</li>
            <li><strong>Automate PR preview databases:</strong> If choosing Neon, install the Neon GitHub Action to spawn a fresh branch database for every pull request and tear it down on merge.</li>
            <li><strong>Index vector embeddings:</strong> Both platforms support `pgvector`; generate HNSW indexes for datasets over 10,000 vectors to guarantee sub-20ms similarity query latency.</li>
            <li><strong>Establish schema migration pipelines:</strong> Use Prisma Migrate or Drizzle Kit with automated version control rather than editing tables ad-hoc in web consoles.</li>
          </ol>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Official plan sources checked</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Plan specifications and resource limits verified for 2026:
          </p>
          <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><a className="underline underline-offset-4" href="https://neon.tech/pricing" target="_blank" rel="noreferrer">Neon Official Pricing</a> — serverless compute units and storage tier details.</li>
            <li><a className="underline underline-offset-4" href="https://supabase.com/pricing" target="_blank" rel="noreferrer">Supabase Official Pricing</a> — Pro tiers, compute add-ons, and included limits.</li>
          </ul>
        </div>
      </section>
    </ComparisonArticle>
  );
}

