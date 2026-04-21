# Long Beach School of Yoga — Next.js Site

Public marketing website for **Long Beach School of Yoga (LBSOY)**. Positioned as a Long Beach–focused local wellness SEO engine that routes institutional buyers (hotels, healthcare, corporate, schools) to [My Yoga Network](https://myyoganetwork.com) for delivery.

- **Stack:** Next.js 16 (App Router) · React 18 · TypeScript · Vercel
- **Content:** Markdown blog posts in `content/blog/`
- **Design:** Sage / warm-cream / charcoal palette, Cormorant Garamond + Plus Jakarta Sans
- **Sister site:** [myn.com](../myn.com-main/) (shares brand voice; applies myn.com's SEO playbook)

## Local development

```bash
npm install
cp .env.example .env.local   # fill in NEXT_PUBLIC_SITE_URL etc.
npm run dev                  # http://localhost:3000
```

## Project structure

```
lbsoy-site/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout — NavBar, Footer, LocalBusiness JSON-LD
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design system (sage palette + shared components)
│   ├── sitemap.ts          # Dynamic sitemap (static routes + blog posts)
│   ├── robots.ts           # robots.txt
│   ├── blog/
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/page.tsx # Blog post detail (Markdown from content/blog/)
│   └── <slug>/page.tsx     # Interior pages ported from LBSOY_Site_Build
├── components/
│   ├── NavBar.tsx
│   ├── Footer.tsx
│   └── JsonLd.tsx          # <script type="application/ld+json"> wrapper
├── content/
│   └── blog/               # Weekly Long Beach posts as .md files
│       ├── _TEMPLATE.md.txt  # Template for the scheduled agent
│       └── *.md
├── lib/
│   ├── site.ts             # Central site config (nav, footer, contact, locality)
│   ├── seo.ts              # buildMetadata() helper + schema builders
│   └── posts.ts            # Markdown reader for /blog
├── public/                 # Static assets (add logo, favicon, blog covers here)
└── next.config.mjs         # Redirects (legacy WordPress paths) + security headers
```

## Environment variables

See `.env.example`. Key variables:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical domain. Used in sitemap, OG tags, JSON-LD. |
| `NEXT_PUBLIC_MYN_URL` | My Yoga Network destination. All institutional CTAs route here. |
| `NEXT_PUBLIC_GHL_CALENDAR_URL` | GoHighLevel consultation calendar (optional). |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID (optional). |
| `GOOGLE_SITE_VERIFICATION` | Search Console verification meta tag (optional). |

---

# Migration guide: HostGator → GitHub → Vercel

You're moving `longbeachschoolofyoga.com` off HostGator/WordPress onto GitHub + Vercel. Do these steps in order. Each is reversible until step 7 (DNS cutover).

## Step 1 — Push to a new GitHub repo

```bash
cd "/path/to/LBSOY_Backup/lbsoy-site"
git init
git add .
git commit -m "Initial migration from HostGator WordPress"
git branch -M main

# Create an empty repo named 'lbsoy-site' under your GitHub user/org.
# Do NOT initialize it with a README — keep it empty.
git remote add origin git@github.com:<your-username>/lbsoy-site.git
git push -u origin main
```

**Recommended:** make the repo private initially, flip to public once it's live and clean.

## Step 2 — Import into Vercel

1. Go to https://vercel.com/new
2. Select **Import Git Repository** → pick `lbsoy-site`
3. Framework preset: **Next.js** (Vercel auto-detects)
4. Root directory: leave as `/`
5. Click **Deploy** — first build takes 1–2 minutes
6. Once live, you'll get a preview URL like `lbsoy-site-xyz.vercel.app` — confirm the site renders

## Step 3 — Set environment variables in Vercel

In the Vercel dashboard → your project → **Settings** → **Environment Variables**, add at minimum:

```
NEXT_PUBLIC_SITE_URL=https://longbeachschoolofyoga.com
NEXT_PUBLIC_MYN_URL=https://myyoganetwork.com
NEXT_PUBLIC_GHL_CALENDAR_URL=<pull from GHL LBSOY sub-account -> Calendars -> "LBSOY Free Consultation">
```

Scope each variable to Production + Preview + Development. Redeploy after adding.

## Step 4 — Pull current DNS records from HostGator (backup)

Before touching anything, record the current DNS so you can roll back:

1. Log into HostGator cPanel
2. Navigate to **Zone Editor** for `longbeachschoolofyoga.com`
3. Screenshot or export the full DNS zone — pay attention to:
   - A records (@ and www)
   - MX records (email — DO NOT delete these)
   - TXT records (SPF, DKIM, site verification)
   - Any CNAMEs for subdomains

## Step 5 — Add the custom domain in Vercel

1. Vercel project → **Settings** → **Domains** → **Add**
2. Enter `longbeachschoolofyoga.com` (apex) and `www.longbeachschoolofyoga.com`
3. Vercel will show you the DNS records to set:
   - Apex (`@`): **A record → 76.76.21.21**
   - `www`: **CNAME → cname.vercel-dns.com**
4. Keep this page open for step 6

## Step 6 — Update DNS at HostGator

Option A — **Keep DNS at HostGator** (simpler, email stays where it is):

1. In HostGator Zone Editor:
   - Edit the `@` (apex) A record → point to **76.76.21.21**
   - Edit the `www` CNAME → point to **cname.vercel-dns.com** (delete any existing A record for www)
   - **LEAVE MX, SPF, DKIM, TXT records untouched** — email routing must stay.
2. Save. Propagation: usually 5–30 minutes, worst case 48h.

Option B — **Move DNS to Cloudflare** (recommended long-term): Transfer the domain's nameservers to Cloudflare first, re-create all records there (including MX/SPF/DKIM), then point the apex + www at Vercel as in Option A.

## Step 7 — Verify + SSL

1. Back in Vercel → Domains, you should see both domains go green with SSL certs (Let's Encrypt, auto-renewed)
2. Visit `https://longbeachschoolofyoga.com` in an incognito window — confirm Next.js site loads
3. Confirm `www.longbeachschoolofyoga.com` redirects to the apex (Vercel handles this automatically — pick your canonical in Domains settings)
4. If anything's broken, flip the A record back to HostGator's IP from step 4

## Step 8 — Post-migration SEO checklist

Do these the same day the domain is live on Vercel:

- [ ] **Google Search Console** — add the property, verify via the `GOOGLE_SITE_VERIFICATION` env var or DNS TXT record. Re-submit sitemap at `https://longbeachschoolofyoga.com/sitemap.xml`.
- [ ] **Bing Webmaster Tools** — same drill.
- [ ] **Google Business Profile** — confirm the LBSOY listing still points to `longbeachschoolofyoga.com`, not an old WordPress URL.
- [ ] **Google Analytics 4** — add `NEXT_PUBLIC_GA_MEASUREMENT_ID` to Vercel env vars (tracking wire-up is a follow-up task; scaffold is ready).
- [ ] **Redirect audit** — open the top 20 URLs from your GA4 "landing pages" report from the last 90 days. Anything returning 404 on the new site needs an entry in `next.config.mjs` → `redirects()`.
- [ ] **Broken-link sweep** — run `npx next-sitemap-check` or `npx broken-link-checker https://longbeachschoolofyoga.com -ro`.
- [ ] **Structured data** — test the homepage and a blog post with https://search.google.com/test/rich-results — the LocalBusiness + Article schema should validate.

## Step 9 — Decommission HostGator

Only after the new site has been live and stable for 7+ days and Search Console shows no crawl errors:

1. Export full HostGator file system (cPanel → Backups) and database as a final cold backup — store in `LBSOY_Backup/backup-<date>-final/`.
2. Turn off the HostGator hosting renewal auto-pay.
3. If the domain registrar was at HostGator, transfer it to a cleaner registrar (Namecheap, Cloudflare, or Porkbun). Keep WHOIS privacy on.

---

# Next session roadmap

This migration ships the site onto Next.js + Vercel. The next work session should:

1. **Rewrite each interior page as real JSX** (currently ported via `dangerouslySetInnerHTML` for speed). Use the SEO_90_DAY_PLAN.md from `../myn.com-main/` as the reference for commercial keyword architecture, applied with Long Beach geo-modifiers.
2. **Pivot CTAs** — every institutional CTA routes to `myyoganetwork.com`. Consumer CTAs still book via GHL.
3. **Wire the weekly blog agent** — extend Strategy AGI's Marketing Agent with a weekly scheduled task that (a) scrapes Long Beach event sources, (b) drafts a post using `content/blog/_TEMPLATE.md.txt`, (c) opens a PR against this repo for Ram to approve/merge.
4. **Schema depth** — add Service schema for corporate-wellness, hotel-wellness, yoga-therapy; FAQPage for FAQ sections; HowTo for any process-oriented blog post.
5. **Local SEO assets** — Long Beach neighborhood landing pages (Belmont Shore, Signal Hill, Bixby Knolls, Naples, Downtown), Google Business Profile posts keyed off each weekly blog.

## Source material / original files

Preserved in the parent folder:

- `LBSOY_Site_Build/` — the original static HTML site this project was ported from
- `backup-3.27.2026_21-42-13_sideoutbox/` — final WordPress/HostGator cPanel backup
- `LBSOY_Rebuild_Blueprint.docx`, `LBSOY_Movement_Plan_2026.docx` — strategy docs
- `GHL_Build_Handoff.md` — the GoHighLevel AI bot + booking calendar build

## Sister systems

| System | Purpose | Path |
|--------|---------|------|
| **myn.com** | Main MYN marketing site — provides SEO playbook | `../myn.com-main/` |
| **Strategy AGI** | Backend intelligence — weekly blog agent lives here | `../Strategy AGI/` |
| **GHL LBSOY sub-account** | Consultation calendar + AI bot | Location ID `hr3AZ2hCUZeyrkg7LoXr` |

---

*This README is the operating manual for the LBSOY site. Keep it updated as the project evolves.*
