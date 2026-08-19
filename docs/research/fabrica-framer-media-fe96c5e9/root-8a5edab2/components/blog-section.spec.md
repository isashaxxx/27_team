# BlogSection Specification

## Overview
- **Target file:** `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/BlogSection.tsx`
- **Screenshot:** `14-blog-cards.jpg`
- **Interaction model:** static

## DOM Structure
Light section. Heading "Newest trends" (black bold) + "and insights from our team." (muted gray), ~60px, with a right-aligned paragraph "Stay informed about our latest projects, trends, and industry insights." Below: 3-column card row:
1. White card: date "February 2, 2025" (small muted) + title "How a well-designed website can transform your business" (18px weight 600) + excerpt "Discover the latest design trends shaping the digital world and how they impact business." (muted, smaller)
2. White card: date "January 26, 2025" + title "The Psychology of Color in Branding" + excerpt "Colors influence emotions and decisions. Here's how to use them strategically in branding."
3. Full-bleed dark photo card (laptop/hands photo) with large white overlay text "What's new in digital?" centered-right.

## Computed Styles
- Cards: white bg (or full photo for card 3), `border-radius: 16px`, padding ~24px (text cards)
- Date: 13px muted gray
- Title: 18-20px weight 600 black, line-height tight
- Excerpt: 14-15px muted gray
- Card 3 overlay text: white, ~32px weight 600, right-aligned, centered vertically

## States & Behaviors
- Static; standard scroll fade-in per card.

## Assets
- Card 3 photo: `7A0a2DwVW1CflEhx9hinSNdRmw.jpg` or `Lr6nDfwod2cfh3RCn5wxChQoOg.jpg` (verify against screenshot — hands on a laptop, warm-toned photo). No images needed for cards 1-2 (text-only).

## Text Content (verbatim)
- `Newest trends` `and insights from our team.`
- `Stay informed about our latest projects, trends, and industry insights.`
- `February 2, 2025` — `How a well-designed website can transform your business` — `Discover the latest design trends shaping the digital world and how they impact business.`
- `January 26, 2025` — `The Psychology of Color in Branding` — `Colors influence emotions and decisions. Here's how to use them strategically in branding.`
- `What's new in digital?`

## Responsive Behavior
- **Desktop (1440px):** 3-column row (card 3 may be wider, spanning ~2 units, per screenshot proportions — match visually).
- **Tablet/Mobile:** stack to 1 column, full width.
- **Breakpoint:** 810px
