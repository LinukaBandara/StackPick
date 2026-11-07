import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  // A fresh nonce is required for every HTML response.
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const csp = [
    "default-src 'self'",
    // Google AdSense requires a strict nonce-based policy. Its script hosts
    // can change, so do not maintain a brittle AdSense domain allowlist.
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-inline' 'unsafe-eval' https: http:`,
    "style-src 'self' 'unsafe-inline' https:",
    "img-src 'self' https: data: blob:",
    "font-src 'self' data: https:",
    "connect-src 'self' https: http: wss:",
    "frame-src 'self' https: http:",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'self' https:",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  // Next.js reads this request-side policy and applies the nonce to its
  // framework scripts during dynamic rendering.
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  // Roll out in report-only mode first: capture violations without blocking
  // existing inline JSON-LD or third-party scripts. Enforce after auditing.
  response.headers.set("Content-Security-Policy-Report-Only", csp);
  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
