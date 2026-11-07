"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function AccountForm() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const response = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, displayName }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong.");
      if (mode === "signup" && !data.session) {
        setMessage(data.message);
      } else {
        setMessage(mode === "signup" ? "Your account is ready." : "You are signed in.");
        window.location.assign("/software");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(0,29,57,0.07)] sm:p-8">
      <div className="flex rounded-full bg-[#f5f5f7] p-1">
        <button type="button" onClick={() => { setMode("signin"); setError(""); setMessage(""); }} className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold ${mode === "signin" ? "bg-white text-[#001D39] shadow-sm" : "text-[#6e6e73]"}`}>Sign in</button>
        <button type="button" onClick={() => { setMode("signup"); setError(""); setMessage(""); }} className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold ${mode === "signup" ? "bg-white text-[#001D39] shadow-sm" : "text-[#6e6e73]"}`}>Create account</button>
      </div>
      <h2 className="mt-7 text-2xl font-semibold tracking-tight text-[#1d1d1f]">{mode === "signin" ? "Welcome back." : "Join the conversation."}</h2>
      <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{mode === "signin" ? "Sign in to submit and manage your software reviews." : "Create an account to submit one review per software product. Reviews are checked before publication."}</p>
      <form onSubmit={submit} className="mt-6 space-y-4">
        {mode === "signup" && (
          <div>
            <label htmlFor="displayName" className="mb-2 block text-sm font-medium text-[#1d1d1f]">Display name</label>
            <input id="displayName" required minLength={2} maxLength={40} value={displayName} onChange={(event) => setDisplayName(event.target.value)} autoComplete="nickname" className="min-h-12 w-full rounded-xl border border-black/15 px-4 text-sm outline-none focus:border-[#001D39]" />
          </div>
        )}
        <div>
          <label htmlFor="accountEmail" className="mb-2 block text-sm font-medium text-[#1d1d1f]">Email address</label>
          <input id="accountEmail" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" className="min-h-12 w-full rounded-xl border border-black/15 px-4 text-sm outline-none focus:border-[#001D39]" />
        </div>
        <div>
          <label htmlFor="accountPassword" className="mb-2 block text-sm font-medium text-[#1d1d1f]">Password</label>
          <input id="accountPassword" type="password" required minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} autoComplete={mode === "signin" ? "current-password" : "new-password"} className="min-h-12 w-full rounded-xl border border-black/15 px-4 text-sm outline-none focus:border-[#001D39]" />
        </div>
        {error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        {message && <p role="status" className="rounded-xl bg-[#f1f6fa] p-3 text-sm leading-6 text-[#001D39]">{message}</p>}
        <button disabled={busy} type="submit" className="flex min-h-12 w-full items-center justify-center rounded-full bg-[#001D39] px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">{busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}</button>
      </form>
      <p className="mt-5 text-xs leading-5 text-[#6e6e73]">By continuing, you agree to use genuine personal experience and follow our <Link href="/review-policy" className="font-semibold text-[#001D39] underline underline-offset-4">review policy</Link>.</p>
    </div>
  );
}
