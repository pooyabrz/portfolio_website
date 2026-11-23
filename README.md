# POOYA — The Living Portfolio / Claymorphism Edition

A claymorphism restyling of the original fully functional, art-directed, data-driven portfolio built for **Pooya Barazandeh**, following the supplied *The Living Portfolio* PRD and the supplied existing portfolio + CV.

**Next.js App Router · React 19 · TypeScript · CSS design tokens · SVG artwork · static export · accessible interactions.** No backend, database, API keys, hosted image assets or paid services are required.

## What changed in this edition

**Only the visual design system changed.** All existing routes, personal details, projects, interactions, accessibility patterns, SEO metadata, GitHub Pages configuration, keyboard shortcuts, and the archived Persian portfolio remain as they were.

The new styling lives in `src/app/claymorphism.css`, imported **after** `globals.css` from `src/app/layout.tsx`. Remove that import to return to the previous visual design. The `themeColor` meta colors in the layout were updated to match the new background palette.

The updated look uses inflated pastel surfaces, beveled rounded cards, light/dark clay shadows, inset filter/search controls, molded project-art frames, and touch-friendly navigation. The pre-existing five accent presets still work. `prefers-reduced-motion` remains supported.

**Visual QA:** Static page-layout previews were checked at 320, 375, and 1440 pixels in light and dark mode, with no horizontal overflow. These are layout previews, not a complete live application or Lighthouse audit. The original production build check still requires an npm install on a machine with registry access.

## Local setup

Requires Node.js 20 or newer and an internet connection to install packages the first time.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To generate a deployable static site:

```bash
npm run lint:types
npm run build
```

The complete site is exported to `out/`.

**Note:** The supplied ZIP was authored in an offline environment where the npm registry was not reachable. Dependency installation and a full Next.js production build must therefore be run on your machine or in GitHub Actions; neither is represented as having passed here.

## Contents

| Path | Purpose |
|---|---|
| `src/app/page.tsx` | Editorial hero, selected work, expertise, experience, Lab intro, contact |
| `src/app/work/page.tsx` | Filterable, searchable project index |
| `src/app/work/[slug]/page.tsx` | Ten static, crawlable case studies with expandable technical notes |
| `src/app/about/page.tsx` | Experience, research, skills, education |
| `src/app/lab/page.tsx` | Working toy neural-network forward-pass visualizer |
| `src/app/contact/page.tsx` | Contact options and email copy |
| `src/components/*` | Project artwork, interactive hero, theme controls, command palette, nav |
| `src/content/projects.ts` | **Edit project descriptions, availability, order and featured status here** |
| `src/content/profile.ts` | **Edit profile details, timeline, toolkit, research here** |
| `src/app/globals.css` | Original responsive structure, theme tokens, accent presets, motion rules |
| `src/app/claymorphism.css` | **New visual-only claymorphism layer**: light/dark surfaces, shadows, buttons, panels, responsive refinements |
| `public/CV.pdf` | Original submitted CV, unmodified |
| `public/profile.jpg` | Original submitted portrait, unmodified |
| `public/classic/` | Original bilingual HTML portfolio (Persian version available from header) |
| `tests/portfolio.spec.ts` | E2E tests for navigation, search, case studies, lab, theme, overflow |

## Product features

- Accessible multi-route navigation with a purpose-designed mobile overlay and thumb-friendly bottom tabs.
- Pointer- and tap-responsive typographic hero, with meaningful content visible even without interaction.
- Full light/dark theme, persistent system-aware preference, five selectable accent presets and reset.
- `Ctrl+K` / `Cmd+K` command palette: pages, project titles, GitHub, CV, email and theme action.
- 10 real projects; six featured; search, category and year filters; detailed limitations and status.
- Custom-designed SVG illustrations for each project type, avoiding stock imagery and fake screenshots.
- Functional neural-network toy (2–4–3–1), input sliders, weight randomization, reset, and explanations.
- SEO metadata, clean deep links, crawlable HTML, `sitemap.xml`, robots configuration and Person structured data.
- Reduced-motion fallback, keyboard focus, accessible interaction labels and responsive breakpoints from 320px.
- Original Persian version preserved under `/classic/fa.html` rather than silently dropping translated content.

## Design and content notes

The supplied PRD recommends Tailwind and Motion. This implementation deliberately uses **hand-authored CSS custom properties and native CSS transitions** instead of bringing runtime animation and utility CSS dependencies, reducing total JavaScript and improving auditability. It still follows the requested visual / UX intent.

Work was grounded in the **user-provided HTML and PDF CV**. Research prototypes are identified as prototypes, manuscript work is identified as submitted, and unvalidated physical or field-performance claims are not presented as results. For example, LeakScope's sparse-sensor target is still unmet. The PDF's GPA of **19.55/20** and **1st/72** are reproduced as in the provided CV. Check and update these before publishing if your authoritative record has changed.

Availability is written as **“Open to interesting conversations”**, not a claim of job availability. No testimonials, invented demos, fake metrics or fabricated client results are used.

## Testing

Once dependencies are installed:

```bash
npm run lint:types
npx playwright install chromium
npm test
```

Performance, WCAG 2.2 AA, Lighthouse and Core Web Vitals targets from the PRD are **targets**, not pre-verified scores. Test production deployment across real devices and modern browsers before claiming target compliance.

## Content editing

- Reorder entries in `src/content/projects.ts` to change display order.
- Set `featured: false` to hide a project from the homepage while preserving it in the directory; for full unpublishing, remove the item from the array.
- Add another project object to automatically generate a static `/work/[slug]` URL and sitemap entry.
- Update profile email, links and availability in `src/content/profile.ts`.
- Add live URLs only after they have actually been deployed and verified.

## Privacy

This edition uses no tracking cookies, analytics, contact-form API or third-party embedded scripts. Theme/accent choice is stored locally in the visitor's browser. The only publicly provided direct contact channel is the email from the supplied portfolio.
