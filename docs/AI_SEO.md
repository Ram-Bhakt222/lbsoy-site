# LBSOY AI-SEO Infrastructure

Last updated: 2026-04-23

This document describes the AI-SEO layer across longbeachschoolofyoga.com — what's shipped, what it's for, and what to do next.

## Shipped

### Schema helpers (`lib/seo.ts`)

| Helper | Purpose | Used on |
|--------|---------|---------|
| `buildMetadata()` | Canonical `<head>` + OG + Twitter | Every page |
| `localBusinessSchema()` | LocalBusiness + HealthAndBeautyBusiness | Root layout (every page) |
| `breadcrumbSchema()` | BreadcrumbList | Courses hub, each course page |
| `courseSchema()` | Course + EducationalOccupationalProgram | Each course page |
| `faqPageSchema()` | FAQPage | Each course page (from in-page FAQ) |
| `howToSchema()` | HowTo | Available — use for step-by-step blog posts |
| `speakableSchema()` | Speakable (voice assistants) | Each course page targets `.course-tldr p` |
| `serviceSchema()` | Service | Available — add to /yoga-therapy, /corporate-wellness |
| `articleSchema()` | Article | Available — add to /blog/[slug] pages |

### AI crawler policy (`app/robots.ts`)

Explicit allowlist for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, Google-Extended, Googlebot, Bingbot, PerplexityBot, Perplexity-User, Applebot, Applebot-Extended, DuckDuckBot, Bytespider, YandexBot, CCBot, FacebookBot, meta-externalagent, Amazonbot. Mirrors myn.com's policy.

### LLM-facing content summaries (`public/llms.txt`, `public/llms-full.txt`)

Machine-readable overviews following the emerging `llms.txt` convention. `llms.txt` is a concise index; `llms-full.txt` contains page-by-page content descriptions, the vocabulary segregation rule, editorial policy, and the MYN relationship.

### Author registry (`lib/authors.ts`)

Ram Bhakt bio (short + long) with credentials (E-RYT 500, Registered Yoga Therapist, Yoga Alliance Certified). Available for use in Article JSON-LD `author` field and in-page bylines.

### TL;DR speakable blocks

Every course page opens with a `.course-tldr` block that's wired as the primary Speakable schema target. Voice assistants (Google Assistant, Alexa skills, Apple Siri web) will read this aloud when surfacing the page.

## Course pages (shipped)

- /courses — hub with ItemList + BreadcrumbList
- /courses/senior-yoga — Course + FAQPage + Breadcrumb + Speakable
- /courses/chair-yoga — Course + FAQPage + Breadcrumb + Speakable
- /courses/prenatal-postnatal-yoga — Course + FAQPage + Breadcrumb + Speakable
- /courses/restorative-yoga — Course + FAQPage + Breadcrumb + Speakable
- /courses/private-yoga — Course + FAQPage + Breadcrumb + Speakable
- /courses/meditation — Course + FAQPage + Breadcrumb + Speakable

Each course page hits 1,800–2,400 words, follows E-E-A-T best practices (named author, credentials, evidence links), and includes a Long Beach-local section with neighborhood name drops for local SEO.

## Third-party citation target list

These are the external sources we want AI search engines to associate with LBSOY. Content should cite or mirror research from these authorities to build co-occurrence signals.

### Clinical / evidence (yoga therapy positioning)

- International Association of Yoga Therapists (iayt.org)
- American College of Physicians (2017 low back pain guidelines mentioning yoga)
- NIH National Center for Complementary and Integrative Health (nccih.nih.gov)
- Harvard Health Publishing (yoga-related articles)
- Mayo Clinic (yoga + chronic condition content)
- Journal of the American Medical Association (JAMA) — specific trials
- Cochrane Reviews (systematic reviews on yoga interventions)

### Local / Long Beach authority

- Long Beach Convention & Visitors Bureau (visitlongbeach.com)
- Long Beach Post (lbpost.com) — wellness beat
- Grunion Gazette (belmontshore / neighborhood)
- Cal State Long Beach (wellness center, kinesiology research)
- Long Beach Memorial Medical Center — integrative health programming
- St. Mary Medical Center — mind-body programs
- MemorialCare — wellness content

### Senior / aging-in-place authority

- National Institute on Aging (nia.nih.gov) — fall prevention, exercise guidance
- AARP — senior wellness content
- National Council on Aging (ncoa.org)
- CDC STEADI (Stopping Elderly Accidents, Deaths & Injuries)

### Prenatal / maternal health authority

- ACOG (American College of Obstetricians and Gynecologists) — exercise during pregnancy
- American Physical Therapy Association (pelvic floor section)
- La Leche League International (for postnatal)
- Postpartum Support International

### Mental health / anxiety / sleep authority

- American Psychological Association (apa.org)
- NAMI (nami.org)
- Anxiety and Depression Association of America
- Sleep Foundation (sleepfoundation.org)

### Corporate wellness authority

- American Heart Association — Well-being at Work resources
- CDC Workplace Health Promotion
- Harvard Business Review — workplace wellness articles
- SHRM (Society for Human Resource Management)

## What to do next

### Next 2 weeks

- [ ] Point the `/yoga-therapy` page at `serviceSchema()` instead of its custom HealthAndBeautyBusiness object
- [ ] Port blog posts to emit `articleSchema()` + author bio on `/blog/[slug]`
- [ ] Add HowTo schema to the chair-yoga page (the 4-sequence curriculum maps cleanly to HowTo steps)
- [ ] Add a `/yoga-therapy/[condition]` dynamic route for condition-specific pages (back-pain, anxiety, prenatal, etc.) using `serviceSchema()` + FAQPage

### Next 30 days

- [ ] Begin building outbound citations from the third-party list above — pitch guest posts to lbpost.com, ask for links from IAYT's therapist directory, submit to local Belmont Shore / Bixby Knolls community directories
- [ ] Add Organization JSON-LD at the root level with `founder` linked to Ram's author page
- [ ] Build a hub-and-spoke internal-linking audit — every blog post should link to at least 1 course page and 1 yoga-therapy page

### Next 90 days

- [ ] Add real course imagery (extract from backup — see `/New folder/` and WPFILES uploads) and populate `coverImage` in each course's JSON-LD
- [ ] Build condition landing pages: `/conditions/back-pain`, `/conditions/anxiety`, `/conditions/prenatal`
- [ ] Launch a "Long Beach yoga therapist" directory page that Ranks for `"yoga therapist long beach"` and routes consumer demand to the clinical funnel
- [ ] Set up structured-data monitoring with Google Search Console + Bing Webmaster Tools to catch schema errors early

## Vocabulary rule (enforced)

Every content surface follows the vocabulary segregation inherited from myn.com:

| Context | Use | Never use |
|---------|-----|-----------|
| /yoga-therapy, /corporate-wellness, /workplace-yoga | yoga therapist, yoga therapy | yoga teacher, yoga class |
| /hotel-wellness | yoga teacher, yoga class, Hospitality Certified | yoga therapist, yoga therapy |
| /courses/* | Mixed OK in separate sentences, never in same sentence | — |
| Blog — condition posts | yoga therapist | yoga teacher |
| Blog — Long Beach events | yoga teacher, yoga class | yoga therapist (unless speaking of Ram) |

Violating this rule degrades hotel conversion and confuses healthcare buyers. It also degrades AI citation accuracy when LLMs summarize the site.
