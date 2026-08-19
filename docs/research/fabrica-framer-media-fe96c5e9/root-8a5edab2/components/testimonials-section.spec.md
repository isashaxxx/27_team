# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/TestimonialsSection.tsx`
- **Screenshots:** `07-experiences-heading.jpg`, `08-testimonials-cards.jpg`
- **Interaction model:** static grid

## DOM Structure
Light section. Heading "Testimonials" eyebrow (with `+` badge) + giant "Experiences." (85px) + "©2025" below, plus a row of 4 large stat numbers further down (visible in the next scroll frame — "2m+ Ad impressions managed", "5+ ...", "98% ...", "12x ..." roughly; exact middle two digits were cropped, keep to the visible ones and use reasonable round numbers consistent with the style if a value is unreadable). Then a 4-card grid:
1. **Brand card**: "fabrica®" wordmark, 4 stacked circular avatar thumbnails + "56+" badge, 5-star rating row, "Trusted by clients worldwide", black "Leave a review" pill button.
2. **Quote card** (white, large centered italic-ish quote): "Incredible team! They delivered exactly what we needed, on time and beyond expectations."
3. **Person card**: 5-star row + `+` icon top-right, headshot photo, name "Emily Davis", role "StartUp Hub".
4. **Quote card**: "Our new branding is exactly what we envisioned—clean, modern, and unique. #1 in our industry."

## Computed Styles
- Grid: `grid-template-columns: repeat(4, 1fr)`, gap ~16-24px, cards `border-radius: 16-25px`, white bg, padding ~32px, min-height ~400px, flex column with content pinned bottom
- Quote text: ~22-26px weight 500, black, line-height ~1.3
- Stars: small filled orange/gold (`#f5a623`-ish) star icons, ~14px, row of 5
- Avatar stack: 4 circular thumbnails (~32px) overlapping (-8px margin), last one a black "56+" badge circle
- "Leave a review" button: black bg, white text, `border-radius: 50px`, padding `~14px 28px`

## States & Behaviors
- Static; standard scroll fade-in per card (can stagger slightly by index, ~80ms delay each — safe default).

## Assets
- Avatar stack thumbnails: `vGSJoy0fkCYvuK5CETUzS64NNo.jpg`, `6xxZ3D6rnu26P86nUVvj2eanCY.jpg`, `6girwIRKdg1doDEWAHr4oDIbroU.jpg` (140×140, crop to circle)
- Emily Davis headshot: `DsMKi7qE5JNWO5UQxmeqZGDSOI.jpg` or `PTZo29JDyFUqhP5lmoOwf726M.jpg` (verify against screenshot; B&W-ish portrait)
- Icons: `StarIcon`, `PlusBadgeIcon` from `../../shared/icons`

## Text Content (verbatim)
- `Testimonials`, `Experiences.`, `©2025`
- `fabrica®`, `56+`, `Trusted by` `clients worldwide`, `Leave a review`
- `Incredible team! They delivered exactly what we needed, on time and beyond expectations.`
- `Emily Davis`, `StartUp Hub`
- `Our new branding is exactly what we envisioned—clean, modern, and unique. #1 in our industry.`

## Responsive Behavior
- **Desktop (1440px):** 4-column grid.
- **Tablet (810px):** 2×2 grid.
- **Mobile (390px):** 1-column stack.
- **Breakpoint:** 810px, 478px
