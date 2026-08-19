# IntroStrip Specification (LogoStrip + Showreel)

## Overview
- **Target file:** `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/IntroStrip.tsx`
- **Screenshots:** section appears between hero and "Projects." heading — visible in the scroll-down frames right after `01-nav-hero.jpg` (logo grid of 6 cards, then a full-bleed B&W portrait image with a play button and "Watch showreel" text)
- **Interaction model:** static (showreel play button — click behavior unconfirmed in source; implement as a no-op / decorative button, do not fabricate a video modal)

## DOM Structure
Two stacked blocks on the light `#f5f5f5` page background:
1. **Logo strip**: 6 equal-width white rounded cards in a row (grid, `grid-cols-6` desktop), each centered, containing one placeholder client-logo SVG (logoipsum-style wordmark/icon).
2. **Showreel**: full-bleed rounded image block (`border-radius: 25px`), B&W portrait photo of a woman with a bob haircut (profile view), with a centered-left circular white "play" button (~90px diameter, black triangle/play icon) and to its right: "Watch showreel" (white, ~34px weight 600) above "(2016-25©)" (white, muted, ~15px).

## Computed Styles
### Logo strip cards
- background: white, border-radius: 12px (matches card radius family), each card ~equal flex/grid cell, height ~100-120px, logo centered, small internal padding ~24px
- gap between cards: ~16-24px

### Showreel block
- border-radius: 25px, overflow hidden, full width, height ~600-650px desktop
- image: `object-fit: cover`, filter: grayscale(1) (B&W)
- play button: white circle, ~90x90px, centered vertically, positioned left-of-center (~15% from left edge); black play triangle icon centered inside, ~30% of circle size
- "Watch showreel" + "(2016-25©)": white text, positioned to the right of the button, vertically centered with it

## States & Behaviors
- Play button: standard hover scale (1.0 → 1.05) is a safe default; click is a no-op (`<button>` with no real video source — do not fabricate one).

## Assets
- Logo strip SVGs (in DOM order, left to right): `2e9rGrOkACVfd78cX0SzqLLw.svg`, `uwiCTWkuPCOpiACYPmBnkQDV8KA.svg`, `qMtwqqlLyy1I0xtlJx1nQvCqsE.svg`, `IjvOxnf94qc0W01TH1Jt44VZRr4.svg`, `4HSt1fdOhF6F3PFBgxeUkOsTJiw.svg`, `AUrg765bxdJvG09Nkwtoo0n8A.svg` — all under `public/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images/`
- Showreel photo: `public/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images/cWKPopujkJqclchyOL1bYOiZDs.jpg` (apply `grayscale` filter/class even though the source file may already be B&W)
- Icon: `PlayIcon` from `../../shared/icons`

## Text Content (verbatim)
- `Watch showreel`
- `(2016-25©)`

## Responsive Behavior
- **Desktop (1440px):** logo strip 6 columns; showreel full-bleed ~650px tall.
- **Tablet (810px):** logo strip 3 columns × 2 rows.
- **Mobile (390px):** logo strip 2 columns × 3 rows; showreel height reduces (~350-400px), play button + text may stack (button above text) if width is tight.
- **Breakpoint:** ~810px (columns), ~478px (further stacking)
