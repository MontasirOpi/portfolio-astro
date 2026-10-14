# Portfolio — Astro version

Modern developer portfolio for **Fahim Montasir Opi** (https://opi.codes), rebuilt in Astro from the Angular portfolio at `~/workspace/portfolio-angular`. Same content, same design tokens, far less JavaScript.

## Stack

- Astro 7 (static output, TypeScript strict)
- No UI framework — `.astro` components + 3 small inline client scripts (theme toggle + mobile menu, project filter, side-nav)
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
                           SectionHeading, Icon
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
- Not deployed. The live site is still the Angular build; switching domains/DNS needs explicit approval.
