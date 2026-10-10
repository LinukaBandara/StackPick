"use client";

import { useState } from "react";

interface SoftwareLogoProps {
  name: string;
  url: string;
  size?: "small" | "medium";
}

export default function SoftwareLogo({ name, url, size = "medium" }: SoftwareLogoProps) {
  const [failed, setFailed] = useState(false);
  let domain = "";

  try {
    domain = new URL(url).hostname.replace(/^www\./, "");
  } catch {
    domain = "";
  }

  const dimension = size === "small" ? "h-9 w-9 rounded-xl" : "h-11 w-11 rounded-[14px]";
  const initial = name.trim().charAt(0).toUpperCase() || "?";

  return (
    <span
      className={`inline-flex ${dimension} shrink-0 items-center justify-center overflow-hidden border border-[#e5e5ea] bg-white text-sm font-semibold text-[#001D39]`}
      aria-label={`${name} logo`}
      title={name}
    >
      {!failed && domain ? (
        <img
          src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`}
          alt=""
          loading="lazy"
          width={size === "small" ? 36 : 44}
          height={size === "small" ? 36 : 44}
          className="h-full w-full object-contain p-1.5"
          onError={() => setFailed(true)}
        />
      ) : (
        <span aria-hidden="true">{initial}</span>
      )}
    </span>
  );
}
