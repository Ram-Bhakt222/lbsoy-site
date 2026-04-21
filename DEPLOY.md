# LBSOY Deployment — do this now

Build is verified: `npm install` + `next build` both pass, 21 routes prerender cleanly (homepage, 12 interior pages, /blog, 3 blog posts, sitemap.xml, robots.txt).

Follow the five steps below in order. Total time: ~20 minutes of active work plus DNS propagation.

---

## Step 1 — Clean up stale `.git` folder (one-time)

The sandbox created a broken `.git/` directory that the mounted filesystem won't let me delete. From **Windows PowerShell** (run as Administrator if needed):

```powershell
cd "C:\Users\ram\Desktop\LBSOY_Backup\lbsoy-site"
Remove-Item -Recurse -Force .git
```

## Step 2 — Init git + first commit

Still in Windows PowerShell in the `lbsoy-site` folder:

```powershell
cd "C:\Users\ram\Desktop\LBSOY_Backup\lbsoy-site"

# Optional: clean the node_modules from the sandbox build (Vercel rebuilds from scratch)
Remove-Item -Recurse -Force node_modules, .next -ErrorAction SilentlyContinue

git init -b main
git config user.email "jeanelle@wombhealthfm.com"
git config user.name "Jeanelle"
git add .
git commit -m "Initial migration from HostGator/WordPress to Next.js + Vercel"
```

## Step 3 — Create GitHub repo + push

**Option A — GitHub CLI (fastest):**

```powershell
# Install once from https://cli.github.com/ if you don't have it
gh auth login                             # first time only
gh repo create lbsoy-site --private --source=. --remote=origin --push
```

**Option B — GitHub website:**

1. Go to https://github.com/new
2. Repository name: `lbsoy-site`
3. **Private** (you can flip to public later)
4. Do NOT initialize with README/license/.gitignore — the repo must be empty
5. Click **Create repository**, then copy the URL it shows you
6. Back in PowerShell:

```powershell
git remote add origin https://github.com/<your-username>/lbsoy-site.git
git push -u origin main
```

## Step 4 — Deploy to Vercel

1. Go to https://vercel.com/new
2. Sign in with your GitHub account (grant access to the `lbsoy-site` repo if prompted)
3. Click **Import** next to `lbsoy-site`
4. Framework Preset: **Next.js** (auto-detected — don't change)
5. Root Directory: **./** (default)
6. Build & Output Settings: leave defaults
7. **Environment Variables** — click Add and paste:

   ```
   NEXT_PUBLIC_SITE_URL=https://longbeachschoolofyoga.com
   NEXT_PUBLIC_MYN_URL=https://myyoganetwork.com
   ```

8. Click **Deploy**. First build takes 1–2 minutes.
9. When it's done, Vercel gives you a preview URL like `lbsoy-site-xyz.vercel.app`. Open it — you should see the site. If you do, **stop here** and tell me; don't touch DNS yet.

## Step 5 — Point the domain (AFTER you've verified the Vercel preview works)

This is the one step that affects live traffic — only do it once Step 4's preview looks right.

1. In Vercel: project → **Settings** → **Domains** → **Add**
2. Enter `longbeachschoolofyoga.com`. Vercel will say "Invalid configuration" and show you the DNS records to set.
3. Log into HostGator cPanel → **Zone Editor** for `longbeachschoolofyoga.com`
4. **BEFORE editing anything, screenshot the entire DNS zone** (copy to a text file in `LBSOY_Backup/` for rollback).
5. Edit these two records — **do not touch MX, SPF, DKIM, or TXT records**:
   - `@` (apex) A record → change IP to **76.76.21.21**
   - `www` → change to CNAME pointing to **cname.vercel-dns.com** (delete any existing www A record first)
6. Save in HostGator.
7. Wait 10–60 minutes. Vercel will show green checkmarks on both domains once DNS propagates.
8. Open `https://longbeachschoolofyoga.com` in an incognito window — you should see the new site with a valid SSL certificate.

**Rollback**: if anything breaks, put the original A record back in HostGator. Vercel won't be affected.

## Step 6 — Post-launch SEO (same day)

- [ ] Google Search Console — add the property, submit `https://longbeachschoolofyoga.com/sitemap.xml`
- [ ] Google Business Profile — confirm the LBSOY listing URL matches (not an old WordPress path)
- [ ] Test rich results: https://search.google.com/test/rich-results?url=https%3A%2F%2Flongbeachschoolofyoga.com
- [ ] Spot-check 10 random pages for layout, links, images
- [ ] Grab the Vercel deployment URL and share it with me — I'll queue the AI-SEO pass for next session

---

## What's in the box

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage — native JSX, Long Beach hero + services + B2B section + blog preview |
| `app/[slug]/page.tsx` (×12) | Interior pages ported verbatim — about, yoga-therapy, corporate-wellness, hotel-wellness, workplace-yoga, school-yoga, senior-wellness, services, online-courses, community, contact, free-consultation |
| `app/blog/page.tsx` | Blog index — reads from `content/blog/*.md` |
| `app/blog/[slug]/page.tsx` | Blog post page — Article + Breadcrumb JSON-LD, CTA to myyoganetwork.com |
| `content/blog/*.md` | 3 existing posts (what-is-yoga-therapy, yoga-therapy-chronic-back-pain, company-needs-wellness-program) + `_TEMPLATE.md.txt` for the weekly agent |
| `app/sitemap.ts` / `app/robots.ts` | Dynamic SEO infrastructure |
| `lib/seo.ts` | `buildMetadata()` helper + LocalBusiness / Article / Breadcrumb schema |
| `lib/site.ts` | Central config — nav, footer, contact, locality, neighborhoods |
| `components/NavBar.tsx` / `Footer.tsx` / `JsonLd.tsx` | Shared chrome |
| `next.config.mjs` | Redirects for legacy WordPress paths + security headers |

**36 files, 21 routes, 0 build errors.**

## What's queued for next session

- **Traditional SEO pivot** — JSX-ify each interior page, rewrite for Long Beach commercial intent, route every institutional CTA to myyoganetwork.com
- **AI-SEO pass** — use Strategy AGI's `ai-seo` skill to add FAQPage/HowTo schema, TL;DR blocks, `llms.txt`, author bio page for Ram, third-party citation target list
- **Weekly blog agent** — Marketing Agent scheduled task that researches Long Beach events, drafts a post following `_TEMPLATE.md.txt`, opens a PR against this repo

Ping me once the Vercel preview is live and I'll kick those off.
