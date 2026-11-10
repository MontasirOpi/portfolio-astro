# Portfolio — Astro version

Modern developer portfolio for **Fahim Montasir Opi** (https://opi.codes), rebuilt in Astro from the Angular portfolio at `~/workspace/portfolio-angular`. Same content, same design tokens, far less JavaScript.

## Stack

- Astro 7 (static output, TypeScript strict)
- No UI framework — `.astro` components with client scripts for navigation, theme, search, filtering, and Murphy
- CSS: design tokens in `src/styles/tokens.css`, shared styles in `src/styles/global.css`, scoped `<style>` per component

## Run

```sh
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the build locally
```

## Structure

```
src/
  data/portfolio.ts        Typed content (single source of truth)
  layouts/BaseLayout.astro Head, SEO, JSON-LD, theme pre-paint script
  components/              Nav, Hero, About, Skills, AiSection, Projects,
                           Experience, Workflow, Contact, Footer, SideNav,
                           SectionHeading, Icon, Guide, MurphyAvatar
  pages/index.astro        Single-page portfolio
  styles/                  tokens.css + global.css
public/
  assets/images/           Real project/profile images
  robots.txt, sitemap.xml  SEO files (canonical https://opi.codes/)
```

## Notes

- Content is copied from the Angular version's `portfolio.data.ts` — nothing invented. Education / certifications / awards are explicitly omitted (not in source).
- Contact is mailto/tel links only — no fake form.
- Side-nav (desktop ≥1100px): fixed right rail with section labels + scroll-progress ruler (0/25/50/75/100, live %, accent dot), IntersectionObserver active detection. Original implementation, portfolio's own labels.
- Skill logos and project artwork are served locally so these sections do not depend on third-party image hosts. The skill logos originate from Simple Icons.
- Murphy uses SVG artwork, local portfolio answers, optional browser speech synthesis, and pet-care state saved on the visitor’s device.

## Browser checks

```sh
npm ci
npx playwright install chromium  # if Chromium is not already available
npm run test:e2e
npm run typecheck
```

The suite checks desktop and mobile navigation, theme persistence, skill search, rapid project filtering, Murphy care and tours, and viewport bounds. It uses system Chromium when available and Playwright Chromium otherwise.
