import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Supabase vs Firebase (2026): Postgres BaaS vs NoSQL Cloud Backend",
  description: "Compare Supabase and Firebase: relational PostgreSQL vs NoSQL Firestore, complex SQL queries, Row Level Security, AI vector search, and vendor lock-in.",
  alternates: { canonical: "/best/supabase-vs-firebase" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Supabase vs Firebase"
      slug="supabase-vs-firebase"
      intro="For years, Google's Firebase was the default Backend-as-a-Service (BaaS) for mobile and web startups. Supabase entered the market as the open-source alternative, substituting Firebase's proprietary NoSQL Firestore database with full, unadulterated PostgreSQL. Today, the choice between them hinges on your data architecture: relational integrity and SQL power versus Google's mature mobile SDK ecosystem."
      pricingNote="Pricing verified for 2026. Supabase offers a free tier (2 projects, 500MB database, 50k monthly active users) and a Pro plan at $25/month plus usage-based compute and storage. Firebase operates on a free Spark tier and a pay-as-you-go Blaze plan where costs scale per document read, write, delete, and cloud function invocation."
      tools={[
        {
          name: "Supabase",
          bestFor: "Modern web applications, Next.js/React developers, AI applications needing pgvector, and teams requiring relational schemas and complex SQL joins",
          freeOption: "Free tier covers 2 organizations/projects, 500MB database storage, 1GB file storage, and 50,000 monthly active users (MAUs).",
          tradeoff: "Paused projects on free tier after inactivity; requires learning SQL and Postgres Row Level Security (RLS) policies rather than document rules.",
          url: "https://supabase.com/pricing",
        },
        {
          name: "Firebase",
          bestFor: "Mobile-first iOS/Android applications, gaming backends, real-time chat apps, and teams requiring Google Cloud integration (Crashlytics, FCM push notifications)",
          freeOption: "Spark plan offers 1GB stored data, 50k reads/day, 20k writes/day, and phone authentication quotas.",
          tradeoff: "Proprietary NoSQL Firestore structure makes relational queries, aggregations, and data exports painful; risk of runaway billing on unoptimized read loops.",
          url: "https://firebase.google.com/pricing",
        },
      ]}
      bottomLine="Choose Supabase if you are building a modern web or SaaS application where relational data integrity, foreign keys, SQL joins, and AI vector search (pgvector) are essential—you gain the power of standard Postgres without vendor lock-in. Choose Firebase if you are developing native mobile apps (iOS/Android) that heavily utilize mobile-specific features like Firebase Cloud Messaging (FCM), Crashlytics, and offline local cache synchronization."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">Database architecture</p>
          <h2 className="sp-title mt-4 max-w-4xl">Relational PostgreSQL vs. NoSQL Document Stores</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Firestore requires developers to denormalize data and duplicate records across multiple document collections to satisfy simple query combinations. In contrast, Supabase gives you a full Postgres instance. You can write table joins, aggregate reports, trigger stored procedures, create foreign keys, and install Postgres extensions like `pgvector` for AI embeddings.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Query power & joins</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Supabase supports arbitrary SQL joins, grouping, and aggregations. Firestore charges per document read and cannot join disparate collections.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Security model</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Supabase relies on standard Postgres Row Level Security (RLS). Firebase uses custom JSON-like security rules evaluated in the cloud layer.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">Vendor lock-in</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                You can self-host Supabase or export your entire Postgres schema via `pg_dump`. Migrating away from Firebase Firestore requires custom rewrite scripts.
              </p>
            </div>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Which one fits your tech stack?</h3>
          <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="border-b border-black/10 p-6 sm:border-b-0 sm:border-r">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#6e6e73]">Shortlist Supabase if…</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6e6e73]">
                  <li>You build with Next.js, Remix, SvelteKit, or Nuxt and want TypeScript type generation directly from your database schema.</li>
                  <li>Your application models complex relationships: organizations, team memberships, billing roles, and relational line items.</li>
                  <li>You are building AI-enabled features that store vector embeddings directly alongside relational data via `pgvector`.</li>
                  <li>You want to run your local database in Docker during offline development with standard migration scripts.</li>
                </ul>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#6e6e73]">Shortlist Firebase if…</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#6e6e73]">
                  <li>You are building native iOS, Android, or Flutter mobile applications and require offline data sync.</li>
                  <li>You need mobile-specific services: push notifications (FCM), mobile performance monitoring, and Crashlytics.</li>
                  <li>You want simple JSON document storage where schema migrations are avoided by design.</li>
                  <li>You are already deeply integrated into the Google Cloud Platform (GCP) ecosystem.</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Where the pricing models diverge</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Firebase charges based on operations: 6¢ per 100,000 document reads, 18¢ per 100,000 writes, plus storage. An unoptimized frontend loop or a search query that reads 1,000 documents per page view can create unexpected 4-figure monthly bills.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Supabase operates on predictable server resources: on the $25/month Pro plan, you get dedicated compute instances (Micro or Small), 8GB database disk, and 100GB storage. Complex queries that read 100,000 rows incur zero additional per-operation charges; you only scale compute instance sizes when CPU/RAM utilization demands it.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#e4e7ec]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-[#f7f8fc] text-[#101828]">
                <tr>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Decision point</th>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Supabase</th>
                  <th scope="col" className="border-b border-[#e4e7ec] p-4 font-semibold">Firebase</th>
                </tr>
              </thead>
              <tbody className="text-[#424245]">
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Underlying Database</th>
                  <td className="border-b border-[#e4e7ec] p-4">PostgreSQL 15+ (Relational, SQL, Extensions)</td>
                  <td className="border-b border-[#e4e7ec] p-4">Cloud Firestore / Realtime DB (NoSQL Document Store)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Billing Structure</th>
                  <td className="border-b border-[#e4e7ec] p-4">Compute-based ($25/mo Pro tier + storage add-ons)</td>
                  <td className="border-b border-[#e4e7ec] p-4">Operation-based (pay per document read/write/delete)</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">AI & Vector Search</th>
                  <td className="border-b border-[#e4e7ec] p-4">Native `pgvector` extension with vector similarity indexes</td>
                  <td className="border-b border-[#e4e7ec] p-4">Firebase Extensions for vector search using external services</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Self-Hosting Capability</th>
                  <td className="border-b border-[#e4e7ec] p-4">100% open-source; Docker compose self-hosting supported</td>
                  <td className="border-b border-[#e4e7ec] p-4">Closed-source Google proprietary infrastructure</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-[#e4e7ec] p-4 font-medium">Mobile Ecosystem</th>
                  <td className="p-4">Community SDKs for Flutter, React Native, Swift, Kotlin</td>
                  <td className="p-4">Industry-standard official Google SDKs with FCM & Crashlytics</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">A practical migration checklist</h3>
          <ol className="mt-5 max-w-3xl list-decimal space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><strong>Normalize your document collections:</strong> Map Firestore document collections into structured relational SQL tables with primary and foreign key constraints.</li>
            <li><strong>Port authentication credentials:</strong> Export Firebase Auth users via Firebase CLI and import password hashes into Supabase Auth using the migration script.</li>
            <li><strong>Define Row Level Security (RLS) rules:</strong> Replicate Firestore security rules using PostgreSQL RLS policies (e.g. `auth.uid() = user_id`).</li>
            <li><strong>Migrate file storage buckets:</strong> Transfer files from Firebase Cloud Storage to Supabase Storage using S3-compatible transfer tools.</li>
          </ol>

          <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[#101828]">Official plan sources checked</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Pricing and service tier limits checked with published provider specifications in 2026:
          </p>
          <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><a className="underline underline-offset-4" href="https://supabase.com/pricing" target="_blank" rel="noreferrer">Supabase Official Pricing</a> — Free, Pro ($25/mo), and Enterprise compute tiers.</li>
            <li><a className="underline underline-offset-4" href="https://firebase.google.com/pricing" target="_blank" rel="noreferrer">Firebase Official Pricing</a> — Spark and Blaze pay-as-you-go calculation tables.</li>
          </ul>
        </div>
      </section>
    </ComparisonArticle>
  );
}

