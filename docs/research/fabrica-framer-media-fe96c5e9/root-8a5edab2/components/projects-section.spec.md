# ProjectsSection Specification

## Overview
- **Target files:**
  - `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/ProjectsSection.tsx` (wrapper: heading + grid)
  - `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/ProjectCard.tsx` (single card, reused 6×)
- **Screenshots:** `02-projects-heading.jpg`, `03-projects-cards-hover.jpg`
- **Interaction model:** scroll-reveal (fade/slide-up on enter viewport) + hover state on card top bar

## DOM Structure
Light `#f5f5f5` background section. Header row: small "(27)" label top-left, giant "Projects." heading (85px) centered-ish with "©2025" below it, short paragraph top-right ("We've helped businesses across industries achieve their goals. Here are some of our recent projects."). Below: a 2-column grid of project cards, 3 rows (6 cards total for the homepage teaser).

Each **ProjectCard**:
1. Top label bar (white rounded-top or full rounded pill, sits slightly above/overlapping the image): project name in bold + "/" + year in muted gray, left-aligned; 3 dots top-right (gray by default).
2. Image block below (rounded ~16px), full-bleed photo, with a centered logo-mark + project name overlay in white, semi-bold, ~24px, with a small icon/logomark to its left inside a white/dark rounded badge.

## Computed Styles
### Section
- padding: `~64px 36px` top, giant heading ~85px/600/-5.95px letter-spacing (Inter)
- "(27)" label: ~16px muted gray
- "©2025": ~30px weight 500

### Grid
- `display: grid; grid-template-columns: 1fr 1fr; gap: 24px` desktop
- Card image aspect: roughly 1:1 to 4:5 (varies), ~674×485 to ~680×700 depending on card — use `aspect-[4/3]` or match screenshot per card, `object-fit: cover`, `border-radius: 16px`

### Top label bar
- background: white, border-radius: matches card top corners (or fully independent pill), padding `~20px 24px`
- name: 16px weight 600 black; "/2025" 14px muted gray
- 3 dots: `TrafficLightDots` component (gray by default)

### Overlay logo + name (centered on image)
- white text ~24px weight 600, small square icon badge (~40px, white bg or dark bg depending on card, rounded) to the left

## States & Behaviors
### Scroll reveal
- **Trigger:** IntersectionObserver, ~20% visible
- **State A:** opacity 0, translateY(20px)
- **State B:** opacity 1, translateY(0)
- **Transition:** 500ms ease-out, no stagger beyond natural DOM order

### Card hover
- **Trigger:** mouse hover over card
- **Effect:** the 3 dots in the top bar become colored macOS traffic-lights (`TrafficLightDots active` — red `#ff5f57`, yellow `#febc2e`, green `#28c840`), transition ~200ms. Optionally scale the image slightly (1.0→1.03) — safe default, `overflow-hidden` on the image container.

## Assets — 6 project cards (in DOM order, matches source)
1. **Boltshift** — image `TQUaM9GTresksymLH16ncQaPo.jpg`, logo `uesNBJIRG5fZ2tDJzkhxXbuauQw.svg`, year `2025` (tan hoodie close-up photo, white circular badge with bolt icon)
2. **Ephemeral** — image `r3DvXiPExOamPrqqTNfWM1K9o4.jpg`, logo `PyQzA1IF3BF1gkVO1xuZHClY0c.svg`, year `2025` (blue eye close-up photo, white paperclip-style icon)
3. **Powersurge** — image `UPqJOHQLdYtNuK2jee5437Lno.jpg`, logo (bolt-in-square icon rendered inline, dark badge) — reuse `uesNBJIRG5fZ2tDJzkhxXbuauQw.svg`-style badge but this one is a dark square with white lightning icon per screenshot; if a distinct file isn't available, build the small dark rounded-square badge with a simple bolt glyph — year `2024` (red sports car detail photo)
4. **Mastermail** — image `HlvuJF9yIQ3Q8fP86EjFIq5ExE.jpg`, logo: white diamond/mail icon badge, year `2024` (person in red/orange jacket, blurred motion photo)
5. **Warpspeed** — image `0KGHRsvK3go8kOWricmADe0VWs.jpg`, logo `JLzkuHlsyLa7VHaiV3ZJ16kiHhg.svg`, year `2023`
6. **CloudWatch** — image `qiCYd5j7XEmvyt9BpMldI3mNm8.jpg`, logo `zCY9SAfJ5gqVMOvrM5dzywwbU.svg`, year `2020`

All images at `public/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images/`. Build a `PROJECTS: FabricaProject[]` array (type from `@/types/fabrica-framer-media`) at the top of `ProjectsSection.tsx` and `.map()` it into `ProjectCard`. Verify each image visually against the screenshot and swap if a logo file doesn't render as an SVG (some may need a simple inline icon fallback — that's fine, keep it minimal).

## Text Content (verbatim)
- `(27)`, `Projects.`, `©2025`
- `We've helped businesses across industries achieve their goals. Here are some of our recent projects.`
- Card names: `Boltshift`, `Ephemeral`, `Powersurge`, `Mastermail`, `Warpspeed`, `CloudWatch`

## Responsive Behavior
- **Desktop (1440px):** 2-column grid, heading ~85px.
- **Tablet (810px):** 2-column grid retained, heading scales to ~56px.
- **Mobile (390px):** 1-column grid, heading ~40-48px, cards full width, top label bar stacks name above date if needed.
- **Breakpoint:** 810px
