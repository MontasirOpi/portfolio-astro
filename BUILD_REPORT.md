# BUILD REPORT — Portfolio (Astro)

- **Project:** `~/workspace/portfolio-astro` (new; Angular project at `~/workspace/portfolio-angular` untouched)
- **Date:** 2026-10-14
- **Astro:** 7.3.8 (scaffolded via `npm create astro@latest --template minimal --install`)
- **TypeScript:** strict (Astro default `astro/tsconfigs/strict`)
- **Output:** static (`output: "static"`), `site: https://opi.codes/`

## What was built

Astro conversion of the Angular portfolio, same content + design:

- **Layout:** `src/layouts/BaseLayout.astro` — head, SEO, JSON-LD Person, theme pre-paint script (no flash)
- **Components (all `.astro`, zero framework JS):** Nav, Hero, About, Skills, AiSection, Projects, Experience, Workflow, Contact, Footer, SideNav, SectionHeading, Icon
- **Data:** `src/data/portfolio.ts` — same typed content as Angular `portfolio.data.ts` (image paths adapted to `/assets/images/...`)
- **Styles:** `src/styles/tokens.css` (warm off-white #FAF8F5, charcoal #1A1D21, accent #15803D, dark #0C0E12/#14161A, Inter / Space Grotesk / JetBrains Mono) + `src/styles/global.css` + scoped component styles
- **Sections:** Nav, Hero, About (incl. honest education/certs omission note), Skills (7 groups), AI (3 groups, honest framing), Projects (12, functional filter All/Mobile/Package/Web via small client script), Experience (2 jobs), Workflow (7 steps), Contact (mailto/tel, no fake form), Footer (dynamic year)
- **Side-nav:** fixed right rail, desktop-only ≥1100px, labels ABOUT/SKILLS/AI/PROJECTS/EXPERIENCE/CONTACT, ruler 0/25/50/75/100 + live % + accent dot, IntersectionObserver active detection, rAF-throttled progress, `prefers-reduced-motion` respected. Original implementation.
- **Client JS:** only 3 small inline scripts — theme toggle + mobile menu (Nav), project filter (Projects), side-nav (SideNav). No JS bundles emitted.
- **Assets:** 9 `.webp` images + `favicon.png` + icons copied from the Angular project into `public/assets/`; `robots.txt` + `sitemap.xml` copied (canonical https://opi.codes/)
- **SEO/a11y:** title/meta/canonical/OG/Twitter/JSON-LD, skip link, aria labels, focus-visible, reduced-motion support

## Validation

- `npm run build` — **PASS**, 1 page built in ~1.6s, no errors
- `dist/index.html` — 64,082 bytes (fully pre-rendered HTML; Angular served a client-rendered shell)
- `dist/_astro/index.*.css` — 19,498 bytes (single stylesheet)
- `dist/` total — 520K (mostly images)
- **Client JS bundles: none** (vs Angular ~72 kB transfer). Scripts are inline and tiny.
- Content checks on `dist/index.html`: all 12 project names, both employers, all side-nav labels, `sidenav-dot`, `data-filter`, JSON-LD, skip link — present
- No invented content: the only "certification" match is the honest omission note ("not listed in the source portfolio, so they are omitted here rather than invented"). No Antigravity/OpenCode claims.

## Update 2026-10-14 — Projects redesign + tasteful animations (local only, not yet pushed/deployed)

- **Projects redesigned (compact):** vertical cards, 3 cols ≥1100px / 2 cols tablet / 1 col mobile; image fixed 16/10 aspect; padding 0.95rem/1rem; title 1.08rem; description 2-line clamped; features 0.82rem tight; chips 0.7rem; links row with top border. Index number 01–12 + category badge overlaid on image. No content changed — all 12 projects, same names/descriptions/features/tech/links.
- **Filter bar:** compact pill group with counts (All 12 / Mobile 10 / Package 1 / Web 1), active = dark pill; filtering animates (fade/scale out → swap → fade/scale in, 140ms) with no layout jump.
- **Hover:** card lifts −4px + border + shadow; image zooms 1.05×; link icon nudges. No neon/glow/glassmorphism.
- **Animations (all <500ms, reduced-motion collapses):** scroll reveal via IntersectionObserver (fade+rise, once, staggered for project cards via `--d`); hero staggered entrance + name underline draw + slow accent gradient shift only; nav underline grow + active-section indicator via IntersectionObserver; buttons lift on hover; SideNav active-label transition smoothed to 300ms ease.
- **Validation (this update):** `npm run build` PASS (1 page, 2.78s); `dist/index.html` 67K, CSS 25K; all 12 project names + `data-filter` + reveal/hero classes present. Angular project untouched.

## Update 2026-10-14 — Rebalance: Flutter first, AI expert, Firebase backend, OTA as one specialty (local only, not pushed/deployed)

- **Identity:** Hero = "Flutter Developer · Associate Software Engineer". Focus chips: Flutter · AI-Assisted · Firebase · OTA. Hero card: "Production Flutter apps — AI-assisted · Firebase backends · OTA as one specialty". SEO title/description + JSON-LD jobTitle updated the same way.
- **About:** Reordered to 4 tight paragraphs — 1) Flutter developer (production apps, Play/App Store, clean architecture, Riverpod/GetX/BLoC), 2) Expert in AI-assisted development (agentic workflows, prompt engineering, function/tool calling, MCP, review/diagnostics, Cursor/Copilot/Claude/GPT-4o/Gemini — framed as workflows/tools used), 3) Backend: Firebase (Auth, Firestore, Cloud Functions, Messaging, Storage, Hosting) + Node.js/TS REST + Supabase/Postgres, 4) OTA as one domain, one paragraph max.
- **Skills:** Reordered to 6 groups — Mobile, AI-Assisted Engineering (merged the two old AI groups, deduplicated), Backend & APIs (Firebase expanded: Auth, Firestore, Functions, Messaging, Storage, Hosting + Node/TS/Express/REST/JWT/WebSockets), Databases, DevOps, Travel Technology (OTA) LAST.
- **AI section:** Retitled "Expert in AI-assisted engineering", 3 compact cards kept, honest note shortened to "tools/workflows I use daily".
- **Projects:** All 12 kept, same names/descriptions/links. Section intro now "Flutter-first" instead of OTA-first; per-project category badges unchanged.
- **Experience:** Both jobs kept. Innovate Solutions bullets tightened — OTA repetition reduced, one bullet now covers Firebase + AI-assisted delivery (both already in source: Firebase was in that job's tech list, AI-assisted is the profile's workflow).
- **Workflow:** Tightened 7 → 6 steps: Requirements, Reusable Flutter components, Backend — Firebase + APIs, AI-assisted delivery, Testing & debugging, Performance & maintainability (Git merged in).
- **Design efficiency:** Section padding reduced (--space-6 4rem→3.25rem, --space-7 5.5rem→4.5rem), H2 slightly smaller, section-head margin 2.5rem→2rem. Repeated OTA mentions removed from headings/intros; duplicate AI lists consolidated.
- **Validation (this update):** `npm run build` PASS (1 page, 2.73s); dist/index.html 67K, CSS 25K; all 12 project names + both employers present; "Flutter Developer" ×7, "Firebase" ×22, "AI-assisted" ×16, "Expert in AI-assisted" ×1. No invented jobs/projects/certs/metrics. Angular project untouched.

## Update 2026-10-15 — Projects reorganized from real GitHub repos (local only, not pushed/deployed)

- **5 new projects added** (from user's real public GitHub repos, paraphrased, no invented metrics):
  - **TypeFix AI** (AI) — privacy-first, fully offline AI writing assistant for Android; native Kotlin InputMethodService typing engine + Flutter management app; on-device ONNX Runtime Mobile inference, zero cloud calls; DiffEngine + SafetyValidator. GitHub: github.com/MontasirOpi/TypeFix-Ai. Placeholder initials card.
  - **GlassDrop** (Mobile) — AirDrop-style nearby file sharing for Android; Flutter + Google Nearby Connections (P2P_STAR) over Wi-Fi + Bluetooth; consent-based pairing, multi-file queue with live per-file progress, saves to Gallery/Downloads. GitHub: github.com/MontasirOpi/glassdrop-. Placeholder initials card.
  - **Disaster Alert App** (Mobile) — real-time disaster/flood alerts; GDACS + OpenWeatherMap data; hashtag monitoring (#floodBD, #CycloneMocha); interactive OpenStreetMap + user location; GPS-based alert filtering; SOS distress messaging with location sharing; Firebase email/password auth. GitHub: github.com/MontasirOpi/disaster_alert_app. Placeholder initials card.
  - **SkySearch** (Mobile) — Flutter flight search UI (home, airport search, date pick, passenger select). Card image: user's own README screenshot (github.com/user-attachments/assets/e794883e-3cd6-4ca7-b052-bbe974b18904). GitHub: github.com/MontasirOpi/sky_search.
  - **SnapText** (Tools) — lightweight offline Windows screenshot utility with automatic OCR; Ctrl+Shift+X, region select → local Tesseract OCR → clipboard; multi-monitor + high-DPI; 100% offline, no telemetry. GitHub: github.com/MontasirOpi/Windows_snapText. Placeholder initials card.
- **Not added (by design):** empty repo, template README starter projects, no-README repos.
- **Order:** production 3 (InnoTrip, NoSafer, Travojet) → TypeFix AI (AI spotlight) → Mehndi, GlassDrop, Disaster Alert, SkySearch, Jomi, Library, Grocery, Fast Food, Weather, Weather Pal → date_with_range_picker (Package) → SnapText (Tools) → Tea Stall (Web).
- **Filters:** All / AI / Mobile / Package / Web / Tools — counts All 17, AI 1, Mobile 13, Package 1, Web 1, Tools 1.
- **Section intro:** "17 projects — from production apps and on-device AI to open-source work."
- **AI section:** added shipped line — TypeFix AI, offline on-device writing assistant (Kotlin + Flutter, ONNX Runtime Mobile), link to repo. Honest-framing note kept.
- **Skills:** Mobile Development +Kotlin, +Nearby Connections (P2P); AI-Assisted Engineering +On-device AI (ONNX Runtime); Backend & APIs +Python (desktop tooling). Nothing else invented.
- **Validation (this update):** `npm run build` PASS; dist/index.html contains all 17 project names + TypeFix + SnapText + GlassDrop + Disaster Alert + SkySearch. Angular project untouched.

## Update 2026-10-15 — 2 new Web projects added (local only, not pushed/deployed)

- **2 new projects added** (Web category, placed after Tea Stall so the Web group stays together; from user's real public GitHub repos, paraphrased, no invented metrics):
  - **Wings of the World** (Web) — browser-based 3D flight simulator built with Three.js + HTML5/CSS3 + Web Audio API; real satellite imagery of any city; 5 selectable aircraft with distinct flight physics (F-22 Raptor, B737 airliner, Extra 330 acrobatic prop, SR-71 Blackbird, Cessna 172); departs from Hazrat Shahjalal International Airport (VGHS), Dhaka. GitHub: github.com/MontasirOpi/flight_game. Live demo: https://wings-vert.vercel.app (verified working today). Placeholder initials card.
  - **Cosmic Odyssey** (Web) — interactive 3D WebGL astronomy portal built with Three.js; 3-tier deep cosmic zoom (Galaxy → Solar System → Planets & Moons); Sagittarius A* black hole simulator with gravitational-lensing visualization; bilingual English + Bengali (বাংলা). GitHub: github.com/MontasirOpi/galaxy. GitHub link only — no live demo (not verified). Placeholder initials card.
- **Filters:** All / AI / Mobile / Package / Web / Tools — counts All 19, AI 1, Mobile 13, Package 1, Web 3, Tools 1 (counts computed dynamically from PROJECTS).
- **Section intro:** updated to "19 projects — from production apps and on-device AI to open-source work."

## Not done (by design)

- No GitHub repo created, no deploy. Local build only.
- Live https://opi.codes / DNS untouched.
- No visual browser check (subagent has no live browser); parent can open `dist/index.html` via preview (`npm run preview`) or deploy preview.
