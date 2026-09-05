# Portfolio: Cosduck Homepage

## Project Overview

**Role:** Full-Stack Developer & Project Lead  
**Timeline:** 2026 (ongoing)  
**Company:** Cosduck — K-beauty TikTok Shop growth agency  
**Live Site:** Deployed on Vercel  

Designed and built a high-converting single-page marketing website for Cosduck, a K-beauty brand growth agency specializing in TikTok Shop operations. The site serves as the company's primary lead generation tool, targeting brand decision-makers evaluating global expansion through social commerce.

---

## Problem

Cosduck needed a professional web presence to:
- Convert cold leads from outreach campaigns into consultation requests
- Showcase credibility through partner brand logos and anonymized case studies
- Communicate complex service models (Full-Funnel vs Affiliate) clearly
- Capture leads with minimal friction while maintaining data quality

Previously, the team relied on PDF brochures shared via email and messaging — no centralized landing page existed.

---

## Solution

Built a conversion-optimized single-page application with:

### Lead Capture System
- **Dual-funnel approach:** consultation form (high-intent) + PDF gate (lower-intent)
- **Instant team notification:** form submissions → Slack webhook → team channel in real-time
- **Post-conversion flow:** Google Calendar booking link for immediate meeting scheduling
- **Analytics:** GA4 event tracking on form submissions for funnel measurement

### Brand Credibility Section
- **41 brand logos** displayed in an infinite-scrolling ticker animation
- Logos extracted from source materials, processed with Python (Pillow) for background removal and auto-trimming
- Separated into partner brands (8) and seeding experience brands (33)
- Pure CSS animation (keyframes) — zero JavaScript overhead for smooth 60fps scrolling

### Content Strategy
- Data-driven market context (TikTok Shop $64B+ GMV, K-beauty $11.4B exports)
- 4 anonymized case studies with concrete metrics ($600K monthly revenue, T5 in 4 months)
- Honest risk disclosure section (Partner Fit) to filter unqualified leads
- 7-month roadmap visualization to set realistic expectations

---

## Technical Implementation

### Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.2 | Framework (App Router, API routes, SSR, image optimization) |
| React | 19.2 | UI components |
| TypeScript | 5.x | Type safety (strict mode) |
| Tailwind CSS | 4.x | Utility-first styling, responsive design |
| Google Analytics | GA4 | Conversion tracking |
| Slack Webhooks | — | Real-time lead notifications |
| Vercel | — | Hosting, CDN, CI/CD |
| Python (Pillow) | — | Batch image processing (logo extraction, bg removal) |

### Architecture Decisions

**Single-file component architecture (~1,400 lines)**
- All 12+ sections in one `page.tsx` for rapid iteration
- No premature abstraction — content changes deploy in minutes, not hours
- Trade-off: accepted larger file size for development velocity

**No database / No CMS**
- Slack webhooks as the notification sink — zero infrastructure to maintain
- Content hardcoded — appropriate for a marketing page updated monthly
- Result: $0/month infrastructure cost beyond Vercel free tier

**CSS-only animations**
- Brand ticker uses `@keyframes` with `translateX(-50%)` on duplicated content
- Eager image loading prevents layout shift during animation
- No animation library dependencies (no Framer Motion, no GSAP)

**Image pipeline**
- Batch-extracted 21 brand logos from a single PDF page using `sips` (macOS)
- Automated background removal + auto-trim via Python/Pillow script
- Converted JPEG-in-PNG format issues programmatically
- Result: consistent, transparent-background logos from a single source

### Key Features

- **Animated counters** — IntersectionObserver triggers count-up animation on scroll
- **Scroll navigation dots** — Desktop side nav tracks 5 sections via IntersectionObserver
- **Floating CTA** — Appears/disappears based on scroll position relative to hero and contact sections
- **Responsive modals** — Full consultation form with loading states, error handling, and success flow
- **Mobile-first design** — Hamburger nav, touch-friendly inputs, responsive grids

---

## AI-Assisted Development

This project was developed with significant AI assistance using **Claude Code (Claude Opus 4.6)**:

### What AI handled:
- **Code generation:** React components, Tailwind styling, API routes, TypeScript types
- **Image processing pipeline:** Python scripts for batch logo extraction, background removal, and auto-trimming from PDF source materials
- **Iterative UI refinement:** Rapid adjustments to logo sizes, spacing, animation parameters based on live feedback
- **Debugging:** Identified format mismatch issues (JPEG data in PNG containers), CSS scoping issues (`style jsx` vs global keyframes), lazy loading conflicts with animations
- **Codebase exploration:** Analyzed full project structure, dependencies, and component hierarchy

### What the human handled:
- **Product decisions:** Section content, brand selection, layout direction, animation style choices
- **Design judgment:** Logo sizing ("make Kurly bigger," "reduce NDP"), visual balance, spacing preferences
- **Business context:** Which brands are partners vs seeding, accurate copy and metrics
- **Quality assurance:** Testing in browser, identifying visual issues (blurry logos, animation glitches, cut-off text)

### Development velocity impact:
- **~34 commits** from concept to production-ready landing page
- Full brand partners section (41 logos with image processing pipeline) built and iterated in a single session
- Real-time iteration cycle: feedback → code change → browser refresh → next feedback (< 1 min per cycle)

---

## Results & Impact

### Resource Savings

| Without this site | With this site |
|-------------------|---------------|
| Manual PDF sharing via email/KakaoTalk | Self-serve brochure download with lead capture |
| No centralized brand showcase | 41 brand logos with infinite scroll |
| Verbal pitch for service explanation | Structured sections with market data |
| Manual lead tracking | Automatic Slack notifications + GA4 tracking |
| Meeting scheduling via back-and-forth messages | One-click Google Calendar booking |

### Technical Metrics

- **~2,000 lines** of total source code (lean codebase)
- **$0/month** additional infrastructure cost
- **< 1.5s** First Contentful Paint (Vercel CDN + Next.js optimization)
- **0 external JS dependencies** for animations (pure CSS)
- **41 brand logos** processed and optimized programmatically
- **2 API routes** handling all lead capture flows

---

## Lessons Learned

1. **CSS animations > JS animations for simple tickers** — `@keyframes` with duplicated content creates seamless loops without React re-renders or animation libraries
2. **Image format matters** — `sips` (macOS) preserves JPEG data when output is `.png`; always verify actual file format with `file` command
3. **Slack webhooks are underrated** — For early-stage products, Slack replaces the need for a database, admin panel, and email service
4. **AI pair programming works best with tight feedback loops** — The human provides visual judgment and business context; AI handles implementation speed and debugging
5. **Single-file architecture is fine for landing pages** — Premature splitting into dozens of component files adds navigation overhead without proportional benefit
