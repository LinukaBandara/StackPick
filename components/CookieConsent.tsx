"use client";

import Script from "next/script";
import { useCallback, useEffect, useState } from "react";

type Consent = { analytics: boolean; savedAt: string };
const STORAGE_KEY = "stackpick-consent-v1";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-6X9SEJMZDV";

function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Consent>;
    if (typeof parsed.analytics !== "boolean") return null;
    return { analytics: parsed.analytics, savedAt: typeof parsed.savedAt === "string" ? parsed.savedAt : "" };
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const saved = readConsent();
    setConsent(saved);
    setAnalyticsEnabled(saved?.analytics ?? false);
    setReady(true);
    const openSettings = () => {
      const current = readConsent();
      setAnalyticsEnabled(current?.analytics ?? false);
      setSettingsOpen(true);
    };
    window.addEventListener("stackpick:cookie-settings", openSettings);
    return () => window.removeEventListener("stackpick:cookie-settings", openSettings);
  }, []);

  useEffect(() => {
    if (!ready || !GA_ID) return;
    const browser = window as unknown as Record<string, unknown>;
    browser[`ga-disable-${GA_ID}`] = !consent?.analytics;
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (!consent?.analytics && typeof gtag === "function") {
      gtag("consent", "update", { analytics_storage: "denied" });
    }
  }, [consent?.analytics, ready]);

  const save = useCallback((analytics: boolean) => {
    const next = { analytics, savedAt: new Date().toISOString() };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // The current choice still applies for this visit if storage is blocked.
    }
    setConsent(next);
    setAnalyticsEnabled(analytics);
    setSettingsOpen(false);
  }, []);

  if (!ready) return null;

  return (
    <>
      {consent?.analytics && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="stackpick-google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {!consent && !settingsOpen && (
        <aside
          aria-label="Cookie preferences"
          className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-4xl rounded-2xl border border-black/10 bg-white p-3 shadow-[0_16px_60px_rgba(0,0,0,0.18)] sm:inset-x-6 sm:bottom-6 sm:p-3"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-tight text-[#1d1d1f]">Your privacy, your choice.</p>
              <p className="mt-1 text-xs leading-5 text-[#6e6e73]">
                Essential storage remembers your choice. Optional Google Analytics helps us improve StackPick and stays off until you accept. Read our{" "}
                <a href="/privacy" className="font-medium text-[#004bb5] underline-offset-4 hover:underline">Privacy Policy</a>.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-1.5">
              <button type="button" onClick={() => save(false)} className="min-h-9 rounded-full border border-[#d2d2d7] px-3 py-1.5 text-xs font-medium text-[#1d1d1f] hover:bg-[#f5f5f7]">Reject optional</button>
              <button type="button" onClick={() => { setAnalyticsEnabled(false); setSettingsOpen(true); }} className="min-h-9 rounded-full border border-[#d2d2d7] px-3 py-1.5 text-xs font-medium text-[#1d1d1f] hover:bg-[#f5f5f7]">Settings</button>
              <button type="button" onClick={() => save(true)} className="min-h-9 rounded-full bg-[#001D39] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#123b5d]">Accept all</button>
            </div>
          </div>
        </aside>
      )}

      {settingsOpen && (
        <div className="fixed inset-0 z-[110] flex items-end justify-center bg-black/40 p-3 sm:items-center sm:p-6" role="presentation">
          <section role="dialog" aria-modal="true" aria-labelledby="stackpick-cookie-title" className="w-full max-w-lg rounded-2xl border border-black/10 bg-white p-6 shadow-2xl sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#667085]">Privacy settings</p>
            <h2 id="stackpick-cookie-title" className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f]">Choose what to allow</h2>
            <p className="mt-3 text-sm leading-6 text-[#6e6e73]">Essential storage remembers your choice and cannot be switched off here. Analytics is optional and remains disabled until you turn it on.</p>
            <div className="mt-6 divide-y divide-black/[0.08] rounded-xl border border-black/[0.08] px-4">
              <div className="flex items-center justify-between gap-4 py-4">
                <div><p className="text-sm font-semibold text-[#1d1d1f]">Essential</p><p className="mt-1 text-xs leading-5 text-[#6e6e73]">Stores your privacy preference.</p></div>
                <span className="text-xs font-semibold text-[#667085]">Always on</span>
              </div>
              <label className="flex cursor-pointer items-center justify-between gap-4 py-4">
                <span><span className="block text-sm font-semibold text-[#1d1d1f]">Analytics</span><span className="mt-1 block text-xs leading-5 text-[#6e6e73]">Helps us understand site usage through Google Analytics.</span></span>
                <input type="checkbox" checked={analyticsEnabled} onChange={(event) => setAnalyticsEnabled(event.target.checked)} className="h-5 w-5 accent-[#001D39]" />
              </label>
            </div>
            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <button type="button" onClick={() => save(false)} className="min-h-10 rounded-full border border-[#d2d2d7] px-4 py-2 text-sm font-medium text-[#1d1d1f] hover:bg-[#f5f5f7]">Reject optional</button>
              <button type="button" onClick={() => save(analyticsEnabled)} className="min-h-10 rounded-full bg-[#001D39] px-5 py-2 text-sm font-semibold text-white hover:bg-[#123b5d]">Save choices</button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
