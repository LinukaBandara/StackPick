"use client";

import { useEffect, useState } from "react";

export default function AuthCallbackPage() {
  const [message, setMessage] = useState("Confirming your email…");

  useEffect(() => {
    async function complete() {
      const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");
      const expiresIn = params.get("expires_in");
      if (!accessToken || !refreshToken) {
        setMessage("This confirmation link is invalid or has expired. Return to your account and request a new confirmation email.");
        return;
      }
      const response = await fetch("/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessToken, refreshToken, expiresIn }),
      });
      if (!response.ok) {
        setMessage("We could not complete email confirmation. Please sign in again or request a new link.");
        return;
      }
      window.location.replace("/software");
    }
    void complete();
  }, []);

  return (
    <main className="min-h-[60vh] bg-[#f5f5f7] px-4 py-24">
      <div className="mx-auto max-w-lg rounded-3xl border border-black/10 bg-white p-8 text-center">
        <p className="sp-eyebrow">Account verification</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-[#1d1d1f]">One moment.</h1>
        <p className="mt-4 text-sm leading-6 text-[#6e6e73]">{message}</p>
      </div>
    </main>
  );
}
