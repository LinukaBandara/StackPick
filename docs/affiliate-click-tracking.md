# StackPick affiliate click tracking

Status: tracking infrastructure only. Do not treat this as evidence that an affiliate program is approved or that any commission is being earned.

## What it measures

The site emits a GA4 event named `affiliate_click` only when a visitor clicks an explicitly marked affiliate link and the existing consent-gated Google Analytics script is available. It records:

- `link_url`: destination URL
- `link_domain`: destination hostname
- `link_text`: visible link text or accessible label, limited to 100 characters
- `page_path`: path on StackPick where the click happened

It does not create affiliate links, change destination URLs, or record clicks before analytics is available. Because analytics loads only after consent in `CookieConsent`, a visitor who declines analytics is not measured by this event.

## Mark an approved affiliate link

After the partner approves the site and provides the official tracking URL, mark only that link:

```tsx
<a
  href="https://vendor.example/your-approved-tracking-url"
  data-affiliate="true"
  rel="sponsored nofollow noopener"
  target="_blank"
>
  Visit vendor
</a>
```

Replace the example with the real partner URL. Do not mark ordinary vendor links as affiliate links. Keep a clear disclosure close to the recommendation/link, such as: “We may earn a commission if you buy through this link.” Update the affiliate disclosure page and relevant page copy before activating affiliate links.

## Verification checklist

1. Confirm the deployed `NEXT_PUBLIC_GA_ID` points to the intended GA4 property.
2. In a fresh browser session, decline analytics consent and click a marked test link: no GA event should be sent.
3. Accept analytics consent, wait for the GA script to load, and click a marked test link.
4. In GA4 DebugView or Realtime, confirm one `affiliate_click` event with the expected page and destination.
5. Click an ordinary external link and confirm it does not create an `affiliate_click` event.
6. Test keyboard activation and mobile layouts; the click should still navigate normally.
7. Register `link_domain`, `link_text`, `link_url`, and `page_path` as event-scoped custom dimensions in GA4 if you need them in standard reports.

## Limits

- A click is not a sale. Confirm conversions, attribution windows, reversals, payout thresholds and earnings in the partner dashboard.
- GA4 may not record every click due to consent choices, browser restrictions, blockers, or script-loading timing.
- Do not send personal or sensitive data in event parameters.
- Do not use this event as a substitute for the affiliate network's own tracking.
