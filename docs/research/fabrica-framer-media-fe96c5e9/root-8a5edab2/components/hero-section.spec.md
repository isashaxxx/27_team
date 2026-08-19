# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/HeroSection.tsx`
- **Screenshot:** `docs/design-references/fabrica-framer-media-fe96c5e9/root-8a5edab2/01-nav-hero.jpg`
- **Interaction model:** static (decorative only)

## DOM Structure
Full-bleed section directly below the fixed header (add `pt-[60px]` or similar spacer so content starts below the fixed bar). Background: looped autoplay muted video, grayscale/black smoke-and-grain texture, `object-fit: cover`, dark overlay so white text is legible. Rounded corners top (~25px) matching the "card stack" look — actually this is the FIRST section so only bottom corners may show; match screenshot (looks like a rounded-bottom card floating just under the nav, with page bg `#f5f5f5` visible as a thin margin around it at top/sides — reproduce with `mx-3 mt-2 rounded-[25px] overflow-hidden` or similar, matching the screenshot's visible page-bg sliver at the very top edge).

Content layered on top (z-10):
1. Giant wordmark "fabrica®" + "Studio" (two lines, "Studio" indented right, smaller)
2. Right-aligned services list (4 items)
3. Decorative "+" cross marks (4, scattered, muted white ~40% opacity)
4. Floating white "Team Lead" card bottom-right (photo + name + "Let's talk" pill button)
5. Bottom-left tagline paragraph
6. Bottom-center "© 2025 fabrica® Studio"

## Computed Styles
### Section container
- padding: `90px 36px` (desktop)
- min-height: ~830px (fills most of first viewport)
- color: white (text on dark video bg)

### Wordmark "fabrica®"
- font-size: 144px, weight 600, line-height 132.48px, letter-spacing -8.64px (Inter)
- "®" rendered smaller/superscript inside an outlined circle (~90x90px circle, ~2px white stroke, "R" centered)
- "Studio" on next line: font-size ~60px, weight 600, letter-spacing -3.6px, indented to align under the "b" of fabrica roughly (translateX ~280px from left edge)

### Services list (right side, top-aligned with wordmark)
- 4 lines: "Branding and Identity", "Social Media Marketing", "Web Design and Development", "SEO Optimization"
- font-size 16px, weight 500, letter-spacing -0.64px, color white, line-height ~1.4, right-aligned or left-aligned block, stacked with ~8px gap

### Floating Team Lead card
- White rounded card (`border-radius: 16px`), two-part: left = square photo (rounded-left, ~130x180px) using `public/sites/.../images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg` (Lauren Thompson headshot), right = padded content: "Team Lead" (12px muted), "at fabrica®" (12px lighter), "Lauren Thompson" (20px weight 600 black), "Let's talk" pill button (black bg, white text, ~14px, rounded-full, small white dot icon at the right end)
- Positioned bottom-right of hero, overlapping the bottom edge slightly

### Tagline
- "No generic websites. No empty marketing promises." in white/near-white bold (weight 600, ~20px), followed by ". Just tools and strategies that help your business grow and your brand shine." in muted gray (`rgba(255,255,255,0.6)`, same size, weight 500)
- max-width ~520px, positioned bottom-left

## States & Behaviors
- N/A — purely static/decorative. The "+" marks and card do not animate on scroll per the interaction sweep (no observed change between scroll 0 and scroll 1500 for this section specifically; treat as static).

## Assets
- Background video: `public/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/videos/G0NwzP4bivPvK55b3ubxNslUs.mp4` — `<video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">`
- Team lead photo: `public/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg`
- Icon: `CrossMarkIcon` from `../../shared/icons` for the 4 decorative "+" marks (muted white, ~16px)

## Text Content (verbatim)
- `fabrica®` / `Studio`
- Services: `Branding and Identity`, `Social Media Marketing`, `Web Design and Development`, `SEO Optimization`
- Card: `Team Lead`, `at fabrica®`, `Lauren Thompson`, `Let's talk`
- Tagline: `No generic websites. No empty marketing promises.` `Just tools and strategies that help your business grow and your brand shine.`
- Footer line: `© 2025 fabrica® Studio`

## Responsive Behavior
- **Desktop (1440px):** wordmark + services list side-by-side (2-column-ish flex/grid), floating card bottom-right, tagline bottom-left.
- **Tablet (810px):** services list and floating card likely drop below the wordmark, stacking full-width; wordmark font-size scales down (~72-96px) — use `clamp()` or responsive Tailwind text classes (`text-6xl md:text-8xl lg:text-[144px]`) rather than a fixed px value.
- **Mobile (390px):** full stack: wordmark → "Studio" → services list (right-aligned) → floating card (full width) → tagline. Confirmed via a ~500px-wide capture: services list right-aligned below wordmark, card full-width below that, tagline below the dark section.
- **Breakpoint:** ~810px
