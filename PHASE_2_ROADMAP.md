# ScaleHauz Phase 2 Roadmap

## Current State (Phase 1 Complete)

- 25 pages built (Homepage, 7 Services, 10 Industries, Work, Pricing, Enterprise, Professional, Careers, Jobs)
- 27 components (19 core + 8 professional variants)
- Dark brutalist design system with Tailwind v4
- Framer Motion animations, Lenis smooth scroll
- Fully static frontend -- no API routes, no backend, no database
- Contact forms are HTML-only (no submission logic)

---

## Phase 2: Features, Improvements & New Additions

### 1. BACKEND & FUNCTIONALITY

#### 1.1 Contact Form Submission
- **What:** Wire up the 3 contact forms (main, enterprise, professional) to actually send emails or store leads
- **Options:** Resend API, SendGrid, or Supabase for lead storage
- **Files:** `components/Contact.tsx`, `app/enterprise/page.tsx`, `components/professional/Contact.tsx`
- **New:** `app/api/contact/route.ts` API route
- **Priority:** HIGH

#### 1.2 Blog / Resources Section
- **What:** Create a blog with MDX or CMS-backed content for SEO and content marketing credibility
- **Pages:** `/blog`, `/blog/[slug]`
- **Components:** BlogCard, BlogList, BlogPost, TableOfContents
- **Content types:** Articles, case study deep-dives, industry reports, how-to guides
- **Priority:** HIGH

#### 1.3 Newsletter Signup
- **What:** Email capture component for footer and blog sidebar
- **Integration:** Resend, Mailchimp, ConvertKit, or Supabase
- **Priority:** MEDIUM

#### 1.4 Analytics & Tracking
- **What:** Add Google Analytics 4, Meta Pixel, LinkedIn Insight Tag
- **Files:** `app/layout.tsx` (script injection), or use `@next/third-parties`
- **Priority:** HIGH

---

### 2. SEO & META

#### 2.1 Open Graph & Social Meta Tags
- **What:** Add OG title, description, image for every page so links look good on LinkedIn, Twitter, Slack
- **Files:** Every `page.tsx` needs `export const metadata` or `generateMetadata()`
- **Priority:** HIGH

#### 2.2 Structured Data (JSON-LD)
- **What:** Add Organization, Service, FAQ, and BreadcrumbList schema for Google rich results
- **Component:** `JsonLd.tsx` utility component
- **Priority:** MEDIUM

#### 2.3 Sitemap & Robots.txt
- **What:** Auto-generate sitemap.xml and robots.txt for search engine crawling
- **Files:** `app/sitemap.ts`, `app/robots.ts`
- **Priority:** HIGH

#### 2.4 Canonical URLs
- **What:** Add canonical link tags to prevent duplicate content issues
- **Priority:** LOW

---

### 3. NEW PAGES

#### 3.1 Individual Case Study Pages
- **What:** Dedicated pages for each case study with full project details, results, images, testimonials
- **Route:** `/work/[slug]`
- **Component:** `CaseStudyTemplate.tsx`
- **Content:** Problem, approach, results, metrics, client quote, before/after
- **Priority:** HIGH

#### 3.2 About / Team Page
- **What:** Company story, mission, team members with photos and bios
- **Route:** `/about`
- **Components:** TeamGrid, Timeline, MissionStatement
- **Priority:** MEDIUM

#### 3.3 Blog Pages (see 1.2)
- **Route:** `/blog`, `/blog/[slug]`
- **Priority:** HIGH

#### 3.4 Industries Hub Page
- **What:** A dedicated `/industries` page listing all 10 industries (like `/services` exists)
- **Route:** `/industries`
- **Priority:** MEDIUM

#### 3.5 Privacy Policy / Terms / Cookies Pages
- **What:** Legal pages (footer links currently point to `#`)
- **Routes:** `/privacy`, `/terms`, `/cookies`
- **Priority:** MEDIUM

#### 3.6 Thank You / Confirmation Page
- **What:** Post-form-submission confirmation page
- **Route:** `/thank-you`
- **Priority:** LOW (depends on 1.1)

#### 3.7 Custom 404 Page
- **What:** Branded 404 page matching the dark design system instead of Next.js default
- **File:** `app/not-found.tsx`
- **Priority:** MEDIUM

---

### 4. UI/UX ENHANCEMENTS

#### 4.1 Page Transition Animations
- **What:** Smooth page-to-page transitions using Framer Motion + Next.js App Router
- **Component:** `PageTransition.tsx` wrapper
- **Priority:** LOW

#### 4.2 Loading States
- **What:** Custom loading skeleton/spinner matching the design system
- **Files:** `app/loading.tsx` (global), per-route `loading.tsx`
- **Priority:** LOW

#### 4.3 Back to Top Button
- **What:** Floating button that appears on scroll for long pages
- **Component:** `ScrollToTop.tsx`
- **Priority:** LOW

#### 4.4 Dark/Light Mode Toggle
- **What:** Optional -- the brand is dark-first, but a light mode could help accessibility
- **Priority:** LOW (brand decision)

#### 4.5 Improved Mobile Navigation
- **What:** Add swipe gestures, better touch targets, sub-menu animations
- **Priority:** LOW

#### 4.6 Image Optimization
- **What:** Replace `<img>` tags with Next.js `<Image>` for automatic optimization, lazy loading, and WebP conversion
- **Files:** All templates and page components using Unsplash images
- **Config:** Add `images.remotePatterns` to `next.config.ts` for Unsplash
- **Priority:** HIGH (performance)

---

### 5. PERFORMANCE & TECHNICAL

#### 5.1 Next.js Image Component Migration
- **What:** Replace all `<img src="unsplash...">` with `<Image>` for lazy loading, format optimization, responsive sizes
- **Impact:** Every service page, industry page, services overview, enterprise
- **Priority:** HIGH

#### 5.2 Font Optimization
- **What:** Use `next/font` for Inter instead of Google CDN link; self-host Material Symbols
- **Priority:** MEDIUM

#### 5.3 Bundle Analysis
- **What:** Run `@next/bundle-analyzer` to identify large dependencies
- **Priority:** LOW

#### 5.4 Lighthouse Audit Fixes
- **What:** Run Lighthouse and fix any accessibility, performance, or best practice issues
- **Priority:** MEDIUM

#### 5.5 Environment Variables
- **What:** Set up `.env.local` for API keys (analytics, email service, CMS)
- **Priority:** MEDIUM (when backend is added)

---

### 6. INTEGRATIONS

#### 6.1 CMS Integration
- **What:** Connect a headless CMS for blog posts and case studies so non-developers can update content
- **Options:** Sanity, Contentful, Strapi, or Notion API
- **Priority:** MEDIUM

#### 6.2 Calendar Booking
- **What:** Replace "Book Strategy Call" CTA with actual calendar booking (Calendly, Cal.com embed)
- **Priority:** HIGH

#### 6.3 Live Chat / Support Widget
- **What:** Add Intercom, Crisp, or Tawk.to for real-time visitor engagement
- **Priority:** LOW

#### 6.4 CRM Integration
- **What:** Connect form submissions to HubSpot, Salesforce, or Pipedrive
- **Priority:** MEDIUM (after 1.1)

---

### 7. DEPLOYMENT & INFRASTRUCTURE

#### 7.1 Vercel Production Deployment
- **What:** Deploy to production with custom domain
- **Config:** `.vercel/` already exists, needs domain setup
- **Priority:** HIGH

#### 7.2 CI/CD Pipeline
- **What:** GitHub Actions for lint, type-check, build on every PR
- **Priority:** MEDIUM

#### 7.3 Preview Deployments
- **What:** Automatic preview URLs for branches (Vercel does this by default)
- **Priority:** LOW

#### 7.4 Error Monitoring
- **What:** Add Sentry for runtime error tracking
- **Priority:** MEDIUM

---

### 8. CONTENT & COPY

#### 8.1 Real Case Studies
- **What:** Replace placeholder case study data with real client work
- **Priority:** HIGH (when available)

#### 8.2 Real Testimonials
- **What:** Replace placeholder testimonials with real client quotes
- **Priority:** HIGH (when available)

#### 8.3 Real Team Photos
- **What:** Add actual team member photos to About/Careers pages
- **Priority:** MEDIUM (when available)

#### 8.4 Blog Content Pipeline
- **What:** Create 5-10 initial blog posts covering each service area
- **Priority:** MEDIUM (after blog is built)

---

## Priority Summary

### Must-Do (HIGH Priority)
| # | Feature | Category |
|---|---------|----------|
| 1 | Contact form submission (API route) | Backend |
| 2 | Open Graph & social meta tags | SEO |
| 3 | Sitemap & robots.txt | SEO |
| 4 | Analytics & tracking (GA4, Meta Pixel) | Backend |
| 5 | Next.js Image optimization | Performance |
| 6 | Individual case study pages | New Pages |
| 7 | Blog / resources section | New Pages |
| 8 | Calendar booking integration | Integrations |
| 9 | Vercel production deployment | Infrastructure |
| 10 | Real content (case studies, testimonials) | Content |

### Should-Do (MEDIUM Priority)
| # | Feature | Category |
|---|---------|----------|
| 11 | Industries hub page (`/industries`) | New Pages |
| 12 | About / Team page | New Pages |
| 13 | Legal pages (privacy, terms, cookies) | New Pages |
| 14 | Custom 404 page | New Pages |
| 15 | Structured data (JSON-LD) | SEO |
| 16 | Newsletter signup | Backend |
| 17 | Font optimization (next/font) | Performance |
| 18 | CMS integration | Integrations |
| 19 | CRM integration | Integrations |
| 20 | Lighthouse audit fixes | Performance |
| 21 | CI/CD pipeline | Infrastructure |
| 22 | Error monitoring (Sentry) | Infrastructure |

### Nice-to-Have (LOW Priority)
| # | Feature | Category |
|---|---------|----------|
| 23 | Page transition animations | UI/UX |
| 24 | Loading states/skeletons | UI/UX |
| 25 | Back to top button | UI/UX |
| 26 | Dark/light mode toggle | UI/UX |
| 27 | Live chat widget | Integrations |
| 28 | Bundle analysis | Performance |
| 29 | Canonical URLs | SEO |
| 30 | Thank you page | New Pages |

---

## Recommended Implementation Order

**Sprint 1 -- Foundation**
- Contact form API route
- Sitemap & robots.txt
- Open Graph meta tags on all pages
- Next.js Image migration
- Custom 404 page

**Sprint 2 -- Content Engine**
- Blog section (pages + components)
- Individual case study pages
- Industries hub page
- Legal pages (privacy, terms, cookies)

**Sprint 3 -- Integrations**
- Analytics (GA4 + Meta Pixel)
- Calendar booking (Cal.com / Calendly)
- Newsletter signup
- CMS integration

**Sprint 4 -- Polish & Launch**
- Lighthouse audit + fixes
- Font optimization
- About / Team page
- Vercel production deployment
- CI/CD pipeline

---

*Generated: January 29, 2026*
*Project: ScaleHauz - AI-Powered Growth Marketing*
*Stack: Next.js 16.1 | React 19 | Tailwind v4 | TypeScript 5*
