# HeaderNav Specification

## Overview
- **Target file:** `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/HeaderNav.tsx`
- **Screenshot:** `docs/design-references/fabrica-framer-media-fe96c5e9/root-8a5edab2/01-nav-hero.jpg` (top strip)
- **Interaction model:** static bar + click-driven full-screen overlay menu

## DOM Structure
`<header>` fixed to top, full width, z-50. Inner row: logo left, center nav links (desktop only), hamburger button right. Below/over everything (when open): full-screen overlay panel.

## Computed Styles (exact values from getComputedStyle)
### Bar
- position: fixed; top: 0; left: 0; right: 0; z-index: 50
- background: `rgb(245,245,245)` (`#f5f5f5`) — ALWAYS this color, confirmed identical at scroll 0 and scroll 1500px (no scroll-linked change)
- padding: `19px 36px`
- height: 60px content height
- box-shadow: none
- display: flex; justify-content: space-between; align-items: center

### Logo "fabrica®"
- font: Inter, weight 600, ~18px, tight tracking, color `#000`

### Nav links (Studio, Projects, Blog, Contact)
- font: Inter, weight 500, 15px, color `#000`, hover: opacity 0.6 (standard link hover)
- "Projects" has a superscript "27" badge next to it (small, ~10px, muted gray, positioned top-aligned)
- gap between links: ~40px
- **Hidden below 810px** — only logo + hamburger remain

### Hamburger button
- Two horizontal black bars stacked (≈24px wide, 1.5px thick, ~6px gap), inside a roughly square hit area
- On click: bars morph into an "X", full-screen overlay panel fades/slides in from `opacity:0` to `opacity:1` (~300-400ms ease)

## States & Behaviors
### Full-screen menu overlay
- **Trigger:** click hamburger
- **State A (closed):** overlay `opacity:0`, translated off-screen (e.g. `translateY(-100%)` or `top:-750px`), `pointer-events:none`
- **State B (open):** `opacity:1`, `translateY(0)`, covers full viewport, dark-on-light or light-on-dark full bleed (use bg `#f5f5f5` to match bar, large black text)
- **Content when open:** large stacked links "Home / Studio / Projects / Blog" (≈45-60px, weight 600), plus at the bottom: phone `(312) 555-2468` and `hello@fabrica.com`, plus Privacy Policy / Terms of Service small links
- **Transition:** opacity + transform, ~300ms ease
- **Implementation approach:** React `useState` boolean `menuOpen`; hamburger `onClick` toggles it; render overlay as a fixed full-screen `<div>` with conditional classes/transition; hamburger icon swaps to close (X) icon when open; clicking any link or the close icon closes it.

## Assets
- No downloaded image needed; render "fabrica®" as text (Inter, weight 600).
- Icons: `HamburgerIcon`, `CloseIcon` from `../shared/icons`.

## Text Content (verbatim)
- Logo: `fabrica®`
- Links: `Studio`, `Projects` (badge `27`), `Blog`, `Contact`
- Overlay links: `Home`, `Studio`, `Projects`, `Blog`
- Overlay contact: `(312) 555-2468`, `hello@fabrica.com`

## Responsive Behavior
- **Desktop (≥1200px):** full link row visible, hamburger still present (opens overlay on both desktop and mobile — this site always uses hamburger for the overlay, links are just a shortcut row).
- **Tablet (810-1199px):** link row hides, only logo + hamburger visible, bar padding reduces slightly (~24px sides).
- **Mobile (<810px):** same as tablet; overlay content stacks full width, font sizes scale down (~32-40px for links).
- **Breakpoint:** 810px
