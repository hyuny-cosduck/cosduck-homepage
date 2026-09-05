# Cosduck Homepage

Landing page for **Cosduck** — a K-beauty brand growth partner specializing in TikTok Shop operations, creator affiliate seeding, and data-driven marketing.

**Live:** Deployed on Vercel (auto-deploy from `main`)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2 (App Router, Turbopack) |
| Language | TypeScript 5 (strict mode) |
| UI | React 19, Tailwind CSS 4 |
| Analytics | Google Analytics (GA4) via `@next/third-parties` |
| Notifications | Slack Webhooks (contact form → Slack channel) |
| Hosting | Vercel |

## Project Structure

```
app/
├── page.tsx              # Single-page homepage (~1,400 lines)
├── layout.tsx            # Root layout + Google Analytics
├── globals.css           # Tailwind imports + custom keyframes
├── api/
│   ├── contact/route.ts  # POST: consultation form → Slack
│   └── pdf-lead/route.ts # POST: PDF brochure lead → Slack
├── privacy/page.tsx      # Privacy policy
└── terms/page.tsx        # Terms of service
public/
├── brands/               # 40+ partner/seeding brand logos (PNG, transparent)
├── cosduck-logo.png
├── cosduck-service-intro.pdf
└── cosduck-service-intro-full.pdf
```

## Homepage Sections

1. **Hero** — Headline, animated stat counters, dual CTAs
2. **Brand Partners** — Infinite-scroll ticker with 8 partner + 33 seeding brand logos
3. **Services** — Full-Funnel vs Affiliate Partnership models
4. **Why Now** — Market opportunity (TikTok Shop GMV, K-beauty export data)
5. **Problem** — 3 barriers K-beauty brands face going global
6. **Solution** — Cosduck's 3 differentiators
7. **Core Advantages** — 4 proprietary tools (AX-Ops, dashboards, automation)
8. **Case Study** — 4 anonymized brand performance results
9. **Pricing** — Fixed ops + performance commission structure
10. **Roadmap** — 7-month onboarding timeline
11. **Partner Fit** — Honest risk assessment
12. **Contact** — CTA with consultation form modal

## Interactive Features

- **Contact Modal** — 7-field form → Slack notification → Google Calendar booking
- **PDF Gate Modal** — Lead capture before brochure download
- **Animated Counters** — Scroll-triggered number animations (IntersectionObserver)
- **Scroll Dots** — Desktop side navigation with section tracking
- **Floating CTA** — Context-aware bottom button
- **Brand Ticker** — CSS keyframe infinite scroll, no JS animation overhead

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `.env.local`:

```
SLACK_WEBHOOK_URL=<your-slack-webhook-url>
```

## Deployment

Push to `main` triggers automatic Vercel deployment.
