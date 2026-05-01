# Product Requirements Document

## Project

**Name:** Azdia Sufi Practices  
**Type:** Content-driven Islamic educational website  
**Platform:** Web application built with Next.js

## 1. Product Summary

Azdia Sufi Practices is a public-facing Islamic educational website focused on presenting structured long-form content about Qur'an, Sunnah/Hadith, Seerah, beliefs and creeds, fiqh, Sufi practices, spiritual influence, and saint biographies. The product is primarily an informational resource hub with a simple contact flow for visitors to reach the site administrators.

The current implementation emphasizes direct access to religious content, downloadable reference materials, and topic-based navigation from a landing page.

## 2. Problem Statement

Users looking for structured Islamic reference material, especially around Shari'ah-compliant Sufism and related topics, often find content scattered, inconsistent, or difficult to navigate. The product aims to provide a single, organized website where visitors can:

- Discover topic areas from a central homepage
- Read curated long-form material by category
- Access saint biography PDFs
- Contact the organization directly

## 3. Goals

- Present a clear, topic-driven Islamic knowledge portal
- Make long-form religious content easy to browse and read on web and mobile
- Provide downloadable source documents where available
- Support saint biography reading and document access
- Enable visitors to submit inquiries through a contact form

## 4. Non-Goals

- User-generated content or community posting
- Full CMS authoring interface in the current version
- Online payments, subscriptions, or donations
- Multi-language site management workflow
- Advanced search, bookmarking, or personalization
- Full admin analytics dashboard

## 5. Target Users

### Primary Users

- General readers seeking Islamic educational material
- Visitors interested in Sufi practices within a Sunni/Shari'ah-compliant framework
- Users looking for saint biographies and downloadable religious documents

### Secondary Users

- Site administrators receiving contact form submissions
- Content maintainers managing static pages and PDFs in the codebase

## 6. User Needs

- Understand what the site offers from the homepage
- Navigate quickly to major religious topics
- Read long-form content in a clean layout
- Download supporting PDFs when available
- Reach the organization through a working contact form
- Access saint biographies from a dedicated section

## 7. Core User Flows

### 7.1 Explore Topic Content

1. User lands on homepage
2. User sees hero section and topic cards
3. User selects a category such as Qur'an, Sunnah, Fiqh, or Beliefs
4. User reads structured content on the category page
5. User optionally downloads the supporting document

### 7.2 View Saint Biography

1. User opens Saints' Biographies
2. User selects a listed saint
3. User is taken to a dedicated biography route
4. User views the embedded document area and can download the PDF

### 7.3 Contact the Organization

1. User visits the contact page
2. User fills out name, email, subject, and message
3. User submits the form
4. System sends message to site inbox and confirmation email to user
5. User sees success or error status

## 8. Functional Requirements

### 8.1 Homepage

- The homepage must include a prominent hero section
- The homepage must present topic/service cards for major content areas
- Topic cards must route users to corresponding content pages
- The homepage should include mission/vision or organizational positioning content

### 8.2 Navigation

- The site must provide a persistent header
- The header must support mobile navigation
- Navigation must include at least Home, Services, and Contact
- Footer should expose quick links and contact details

### 8.3 Topic Content Pages

- The site must provide dedicated pages for:
  - Qur'an
  - Sunnah / Hadith
  - Seerah
  - Beliefs and Creeds
  - Fiqh / Jurisprudence
  - Sufi Practices
  - Spiritual Influence
  - Miscellaneous
  - Saints' Biographies
- Each content page should support long-form structured text
- Each content page should support headings and section grouping
- Pages with reference documents should provide a download action
- Pages must be readable on desktop and mobile screens

### 8.4 Saints' Biographies

- The site must provide a listing page for saint biographies
- Each biography must be addressable by route slug
- Biography detail pages should support PDF access and download

### 8.5 Contact Flow

- The contact page must expose fields for name, email, subject, and message
- Form submission must call the contact API
- The API must send the inquiry to the configured admin email
- The API should send an acknowledgment email back to the submitter
- The UI must display loading, success, and error states

### 8.6 Blog/Data API

- The application should support fetching blog content by slug from MongoDB
- The application currently contains a blog model and blog-by-slug API route
- If blog content is surfaced in the UI later, the API contract should support title, slug, author, featured image, views, and nested content sections

## 9. Content Requirements

- Content should be organized by Islamic subject area
- Long-form material should preserve references, quotations, and section hierarchy
- PDFs should be accessible from public assets or stable remote URLs
- The tone should remain educational, reverent, and consistent with the site's religious framing

## 10. Non-Functional Requirements

### Performance

- Pages should load quickly on standard mobile networks
- Static content pages should prefer server-rendered or statically served content where possible

### Responsiveness

- Core pages must support mobile, tablet, and desktop layouts
- Navigation and long-form reading views must remain usable on small screens

### Reliability

- Contact form failures must return a clear error state
- API routes should handle invalid or missing input gracefully

### SEO

- Each major page should have accurate metadata
- Sitemap and robots files should be present
- URLs should be human-readable and topic-based

### Accessibility

- Content pages should use semantic headings
- Forms must have labels
- Interactive elements must remain keyboard accessible

## 11. Success Metrics

### Product Metrics

- Visits to topic pages from the homepage
- Contact form submission completion rate
- PDF download engagement
- Bounce rate reduction on major content pages

### Quality Metrics

- Low contact form error rate
- Fast page load times on content pages
- Low incidence of broken internal links and missing PDFs

## 12. Current State Assessment

### Implemented

- Homepage with hero and service/topic cards
- Header and footer layout
- Dedicated pages for major religious topics
- Download buttons on several topic pages
- Saints' biography listing and slug-based detail route
- Contact page and Resend-powered email API
- MongoDB blog model and blog detail API route

### Partially Implemented or Incomplete

- Some content categories still show "Coming Soon"
- Metadata and SEO copy are still placeholder in multiple files
- The saint biography viewer page has PDF viewer scaffolding but the embedded viewer is effectively disabled
- Footer links and some labels contain inconsistencies or typos
- Complex dashboard routes exist as development scaffolding rather than product-ready features
- README is unresolved and not usable as project documentation

## 13. Risks and Gaps

- Contact API lacks visible server-side validation and anti-spam protection
- Product copy, metadata, and naming are inconsistent across pages
- Static and dynamic content approaches are mixed, increasing maintenance overhead
- Some download links point to hardcoded remote GitHub URLs instead of a unified asset strategy
- Saints' biography reading experience is incomplete if in-browser viewing is expected
- Several route names and labels contain spelling inconsistencies, which may affect trust and SEO

## 14. Recommended Next Release Priorities

1. Standardize branding, metadata, route naming, and page titles
2. Complete unfinished content sections or clearly mark them as unavailable
3. Fix saint biography reading experience so PDFs are properly viewable in-browser
4. Add contact form validation, spam mitigation, and better error reporting
5. Decide whether blogs are admin-managed dynamic content or remove dormant blog infrastructure
6. Replace placeholder dashboard scaffolding with either real admin requirements or remove it from scope

## 15. Open Questions

- Is the intended primary source of truth static content in code, PDF files, or MongoDB-managed content?
- Should saint biographies be read directly in-browser, downloaded only, or both?
- Is Urdu support intended to expand beyond isolated links and PDFs?
- Will the site eventually require an admin panel for content management?
- Should the project include search across religious topics and documents?

## 16. Suggested Scope for V1 Definition

To keep the product focused, V1 should be defined as:

- A polished homepage
- Fully working topic pages for key categories
- Downloadable source documents
- Working saint biography detail access
- Reliable contact flow
- Consistent branding, metadata, and navigation

Anything beyond that, including dashboards, CMS tooling, analytics modules, or advanced dynamic blog features, should be treated as post-V1 scope unless explicitly prioritized.
