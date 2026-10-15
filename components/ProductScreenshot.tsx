"use client";

import { useState } from "react";

type ProductScreenshotProps = {
  src: string;
  alt: string;
  caption?: string;
  fallbackHref: string;
  className?: string;
};

export default function ProductScreenshot({
  src,
  alt,
  caption,
  fallbackHref,
  className = "",
}: ProductScreenshotProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={className}>
      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#f5f5f7]">
        {!failed ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            width={1200}
            height={750}
            onError={() => setFailed(true)}
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center text-[#6e6e73]">
            <span className="text-xs font-semibold uppercase tracking-[0.16em]">Product preview</span>
            <span className="max-w-xs text-sm">This screenshot is temporarily unavailable. Visit the official website to see the current interface.</span>
            <a
              href={fallbackHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#001D39]/20 bg-white px-4 text-sm font-semibold text-[#001D39] hover:bg-[#eef3f8]"
            >
              Visit official website ↗
            </a>
          </div>
        )}
      </div>
      {!failed && caption ? (
        <figcaption className="px-4 py-3 text-xs leading-5 text-[#6e6e73]">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
