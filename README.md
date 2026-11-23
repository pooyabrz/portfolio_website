# Pooya Barazandeh — Studio / Clay Portfolio

A responsive bilingual static HTML portfolio, redesigned around three visual references.

- **Introduction:** Oversized typographic name lockup and high-contrast dark hero, informed by the editorial, name-first presentation of dotconor.com.
- **Portfolio sections:** Vibrant, artwork-first poster cards, vivid section backgrounds, and bold section headings informed by spencergabor.work.
- **Motion:** Progressive scroll reveals, floating accents, pointer-responsive card tilt, and soft transitions informed by nataliealmosa.ca.
- **Claymorphism:** Soft tactile shadows remain on posters and UI surfaces.

### Run

Extract the ZIP and open `index.html` (English) or `fa.html` (Persian) in a browser. Optionally serve the folder via `python -m http.server 8000` for testing.

No build tools, dependencies, network access, or backend required.

### Structure

`style.css` (original base) → `clay.css` (previous iteration) → `studio.css` (new visual layer).
`script.js` (existing menu/filter/theme/copy features) and `studio.js` (motion only).
The original `profile.jpg`, `CV.pdf`, content, links, and SEO data are preserved.

### Accessibility

Semantic headings and navigation, keyboard focus states, original interactions, native details disclosure, and `prefers-reduced-motion` support. Decorative illustrations are aria-hidden.

Art illustrations and animation code in this version are newly authored. Reference sites are used only as design inspiration.

## V3 — Mobile Natalie-inspired edition (November 2026)

Only mobile styles (viewport widths 760px and below) were redesigned. The desktop visual style, both language versions, and the V2.1 dark-mode contrast fixes remain in place.

- `mobile-natalie.css`: mobile-only editorial hero, tactile polaroid portrait, colorful skill tags, horizontal swipeable project gallery with CSS scroll-snap, expressive About/Contact layouts, and floating bottom navigation.
- `mobile-natalie.js`: updates the project gallery index, highlights active bottom navigation sections, and adds tap-responsive portrait motion. Respects `prefers-reduced-motion`.
- `index.html` / `fa.html`: matching mobile labels/navigation and the added style/script includes. Language switch, project filters, resume/download, and all existing project URLs remain intact.

For a local preview, open `index.html` or `fa.html` in a browser, and use a device emulator at 320–760 px. On desktop (above 760 px), the mobile edition is hidden.
