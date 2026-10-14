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

## Not done (by design)

- No GitHub repo created, no deploy. Local build only.
- Live https://opi.codes / DNS untouched.
- No visual browser check (subagent has no live browser); parent can open `dist/index.html` via preview (`npm run preview`) or deploy preview.
