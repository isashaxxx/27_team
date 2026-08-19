# HowWeLaunch Specification

## Overview
- **Target file:** `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/HowWeLaunch.tsx`
- **Screenshot:** `06-how-we-launch-cards.jpg`
- **Interaction model:** static, scroll fade-in

## DOM Structure
Light `#f5f5f5` section. Heading: "How we launch websites and marketing campaigns." (two-tone: "How we launch" black bold, "websites and marketing campaigns." muted gray) + subtext paragraph. Below: a row of 4 white rounded cards, each with a small dot-progress indicator top-left (e.g. "●○○○" for card 1, filling in more dots per card), an index number top-right ("01".."04"), a small square photo icon, and a two-line title.

## Computed Styles
### Heading
- ~60px/600/-3.6px, two-tone black/muted-gray, max-width ~900px
- Subtext: 18px weight 500, muted gray, max-width ~450px, ~24px below heading

### Card row
- `grid-template-columns: repeat(4, 1fr)`, gap ~16-24px
- Card: white bg, `border-radius: 16px`, padding ~24px, min-height ~140px
- Dot progress: 4 small dots (~6px), filled = black, empty = light gray; card N has N dots filled
- Index number: 14px muted gray, top-right
- Photo icon: ~56x56px, `border-radius: 12px`, `object-fit: cover`
- Title: 16px weight 600 black, 2 lines, tight line-height

## States & Behaviors
- Scroll fade-up on the card row (opacity/translateY, ~500ms), consistent with rest of page.

## Assets (4 cards, in order)
1. `01` — dots ●○○○ — photo `8qCqC2OsD0HTVtpCDKLzJGcjwUo.jpg` — "The team that communicates every step"
2. `02` — dots ●●○○ — photo `je5LkQxtlpMk3QwDVyGCYFiOugM.jpg` — "Customized solutions for your unique needs"
3. `03` — dots ●●●○ — photo `lEZwltTi9mwoiWVW7KioGvSAOLk.jpg` — "Transparent pricing with no hidden fees"
4. `04` — dots ●●●● — photo `xcjrZRfVBa6b3ruwbNh8aIRdak.jpg` — "Proven track record with measurable results"

All at `public/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images/`.

## Text Content (verbatim)
- `How we launch` `websites and marketing campaigns.`
- `See how our team combines creativity, technology, and strategy to build powerful digital solutions.`
- Card titles as listed above.

## Responsive Behavior
- **Desktop (1440px):** 4-column row.
- **Tablet (810px):** 2×2 grid.
- **Mobile (390px):** 1-column stack, full width.
- **Breakpoint:** 810px (→2col), 478px (→1col)
