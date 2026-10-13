"use client";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("stackpick:cookie-settings"))}
      className="font-medium underline-offset-4 hover:text-[#001D39] hover:underline"
    >
      Cookie settings
    </button>
  );
}
