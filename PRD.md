# Product Requirements Document (PRD)

## Cosduck Homepage

**Product Owner:** 임 현 (hyuny@cosduck.com)  
**Last Updated:** 2026-09-05  
**Status:** Live in Production

---

## 1. Overview

### 1.1 Problem Statement

Cosduck is a K-beauty brand growth agency specializing in TikTok Shop operations. The company needs a high-converting landing page that:

- Clearly communicates its value proposition to K-beauty brand decision-makers
- Captures qualified leads through consultation forms and PDF brochure downloads
- Showcases credibility through partner logos, case studies, and market data
- Supports both Korean-speaking domestic and English-aware international audiences

### 1.2 Product Goal

A single-page marketing website that converts visitors into consultation requests, targeting K-beauty brand managers and marketing directors evaluating TikTok Shop expansion.

### 1.3 Success Metrics

| Metric | Target |
|--------|--------|
| Consultation form submissions | Track via Slack + GA |
| PDF brochure downloads (gated) | Track via Slack |
| Bounce rate | < 60% |
| Time on page | > 2 min |
| Mobile usability | Fully responsive |

---

## 2. Target Users

### Primary
- **K-beauty brand marketing managers** evaluating TikTok Shop as a sales channel
- **Brand CEOs/founders** considering global expansion via social commerce

### Secondary
- **Agency partners** exploring co-operation models
- **Investors/stakeholders** performing due diligence

---

## 3. Functional Requirements

### 3.1 Content Sections

| Section | Purpose | Priority |
|---------|---------|----------|
| Hero | First impression, value prop, primary CTA | P0 |
| Brand Partners | Social proof (41 brand logos) | P0 |
| Services | Service model explanation (Full-Funnel vs Affiliate) | P0 |
| Why Now | Market opportunity data | P1 |
| Problem/Solution | Pain point → solution narrative | P1 |
| Case Study | Performance proof (anonymized results) | P0 |
| Pricing | Transparent cost structure | P0 |
| Roadmap | Expectation setting (7-month timeline) | P1 |
| Partner Fit | Honest risk disclosure | P2 |
| Contact | Lead capture CTA | P0 |

### 3.2 Lead Capture

**Consultation Form (ContactModal)**
- Fields: brand name, contact person (with title), phone/email (required), TikTok Shop status (Y/N), desired direction (required)
- On submit: POST to `/api/contact` → Slack webhook notification
- Success state: Google Calendar booking link + direct email option
- Analytics: Fire `generate_lead` GA4 event

**PDF Gate (PdfGateModal)**
- Fields: brand name, contact name, phone/email (required), interest area (radio), direction (optional)
- On submit: POST to `/api/pdf-lead` → Slack notification, open PDF in new tab
- Fail-safe: PDF opens regardless of Slack delivery success

### 3.3 Interactive Elements

- Animated stat counters (scroll-triggered, IntersectionObserver)
- Infinite-scroll brand logo ticker (CSS keyframes, no JS overhead)
- Scroll-position navigation dots (desktop)
- Context-aware floating CTA button
- Mobile hamburger menu with smooth transitions

### 3.4 Performance Requirements

- First Contentful Paint: < 1.5s
- No external JS dependencies beyond Next.js + React
- Image optimization via Next.js Image component
- Eager loading for above-fold brand logos
- Lazy loading for below-fold images

---

## 4. Non-Functional Requirements

### 4.1 Design
- Mobile-first responsive (sm/md breakpoints)
- Brand colors: Orange (#F5A623) primary, Blue (#2196F3) secondary
- Font: Apple SD Gothic Neo (system font, no external font loading)
- Dark section for Partner Fit (contrast/emphasis)

### 4.2 SEO & Analytics
- Google Analytics 4 integration (GA ID: G-1WTXPCKVYY)
- Semantic HTML structure (section, nav, footer)
- Meta tags via Next.js Metadata API

### 4.3 Legal
- Privacy Policy page (`/privacy`)
- Terms of Service page (`/terms`)
- Business registration info in footer

### 4.4 Infrastructure
- Vercel hosting (auto-deploy from GitHub `main`)
- Single environment variable (SLACK_WEBHOOK_URL)
- No database required (Slack as notification sink)
- No authentication required (public marketing site)

---

## 5. Technical Architecture

```
Browser ──→ Vercel CDN ──→ Next.js App Router
                              │
                              ├── Static pages (SSG/ISR)
                              ├── API routes
                              │     ├── /api/contact → Slack
                              │     └── /api/pdf-lead → Slack
                              └── Client components (modals, counters, ticker)
```

### Stack Decisions

| Decision | Rationale |
|----------|-----------|
| Next.js 16 (App Router) | SSR/SSG, image optimization, API routes in one framework |
| Single page.tsx | Faster iteration, no routing complexity for a landing page |
| Tailwind CSS 4 | Rapid UI development, consistent responsive design |
| Slack webhooks (no DB) | Zero ops overhead, instant team notifications |
| Vercel | Zero-config Next.js deployment, global CDN |

---

## 6. Content Management

All content is hardcoded in `page.tsx`. No CMS is used.

**Rationale:** Content changes are infrequent (monthly at most) and managed by the development team. A CMS would add unnecessary complexity for ~1,400 lines of marketing copy.

**Update process:** Edit `page.tsx` → commit → auto-deploy via Vercel.

---

## 7. Future Considerations

- [ ] Multi-language support (English version for global outreach)
- [ ] Blog/content section for SEO
- [ ] CRM integration (replace Slack-only notifications)
- [ ] A/B testing on hero copy and CTAs
- [ ] Video testimonials from partner brands
