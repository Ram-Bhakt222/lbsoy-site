# LBSOY changelog — 2026-04-29

Adds the **teacher marketplace + local events** surface and the **LA28 / Long Beach Convention Center** landing page. Builds on the existing scaffold and SEO foundations rather than replacing them.

## What shipped today

### New routes (6 total)
- `/teachers` — directory of LBSOY graduates + partnered Long Beach teachers (CollectionPage + ItemList(Person) JSON-LD)
- `/teachers/[slug]` — individual teacher profile (Person JSON-LD with knowsAbout, alumniOf, areaServed, hasCredential)
- `/events` — upcoming + past events listing (CollectionPage + ItemList(Event) JSON-LD)
- `/events/[slug]` — individual event page (full Event JSON-LD with location, performer, organizer, offers)
- `/yoga-near-long-beach-convention-center` — LA28 / convention-attendee / hotel-guest landing page (Service + FAQPage JSON-LD)

### New library modules
- `lib/teachers.ts` — registry pattern (matches `lib/authors.ts`/`courses/_course-data.ts`). Two seed teachers: Ram + Kimberly. Add new teachers by appending to `teacherRegistry`. `lbsoyGraduate`, `hospitalityCertified`, and `track` flags drive directory filtering and per-surface routing.
- `lib/events.ts` — registry pattern. One seed event (Kimberly's community class launch). Helpers: `upcomingEvents()`, `pastEvents()`, `formatEventDate()`. Discrete dated instances; can swap to EventSeries later if recurring volume warrants.

### Schema helpers added to `lib/seo.ts`
- `personSchema()` — Person with knowsAbout / alumniOf / areaServed / hasCredential
- `eventSchema()` — Event with location, performer, organizer, offers, attendance mode
- `itemListSchema()` — generic CollectionPage + ItemList wrapper

### Updates to existing files
- `lib/site.ts` — replaced broken `/graduates` nav link with `/teachers` + added `/events`. Footer "school" group now lists Teachers + Events instead of "Where Our Graduates Teach"
- `app/sitemap.ts` — adds Teachers, Events, and the LA28 page; per-teacher and per-event entries
- `next.config.mjs` — added redirects: `/graduates → /teachers`, `/instructors → /teachers`, `/find-a-teacher → /teachers`, `/upcoming-event/* → /events/*`, `/calendar → /events`, `/la28 → /yoga-near-long-beach-convention-center`, `/olympics → /yoga-near-long-beach-convention-center`

### Deferred config tweaks
- `postcss.config.mjs` and `tailwind.config.ts` were neutered (empty plugins / empty content). The site uses pure CSS in `app/globals.css`, not Tailwind. The two files are now inert no-ops; safe to delete or repurpose if you migrate to Tailwind later.

## Why this matters for the local + AI SEO play

| Surface | Local SEO win | AI SEO win |
|---|---|---|
| `/teachers` directory | Each profile = a Person URL with `areaServed: City("Long Beach")` and explicit `knowsAbout` list — Google attributes authority to a teacher in a city | AI Overviews / Perplexity / Claude index ItemList(Person) when answering "who teaches yoga in long beach" |
| `/events` calendar | Event JSON-LD with date + location + price feeds Google's event-rich-results carousel | Same payload powers ChatGPT Search and Perplexity event answers |
| LA28 landing page | Owns the "yoga near long beach convention center" query before competitors notice | FAQPage JSON-LD for travel-yoga questions ranks well in AI assistants used by visitors |

## What's still pending (not blocking deploy)

1. **Add real teacher photos** to `/uploads/teachers/<slug>-hero.jpg` and reference via `image:` field in `lib/teachers.ts`.
2. **Confirm Kimberly's community class venue + start date** and update `lib/events.ts` (`startDate`, `endDate`, `location.name`, `location.street`, `registrationUrl`).
3. **Recruit 3–5 more LBSOY-grad teachers** for the directory before launch — a 2-teacher directory feels thin.
4. **Wire up a real registration flow** for events (Eventbrite link, GHL calendar URL, or a Supabase form) — currently falls back to `/contact`.
5. **Hero image for the LA28 page** — `/uploads/la28/convention-center-hero.jpg`.
6. **Consider** moving Teacher + Event data to Supabase later so non-engineers can add entries via myn.org admin instead of editing TypeScript.

## Build / deploy

The existing `DEPLOY.md` already covers the full git / GitHub / Vercel flow. The new routes are picked up automatically — no special build configuration needed. Run `npm install && npm run build` first to confirm the additions compile, then proceed with the existing deploy steps.

The route count after today's adds: **27 prerendered routes** (was 21).
