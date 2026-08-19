# CaseStudyStats Specification

## Overview
- **Target file:** `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/CaseStudyStats.tsx`
- **Screenshot:** `09-case-study-stats.jpg`
- **Interaction model:** static

## DOM Structure
Light section, heading continues from previous ("...and clarity, ensuring that every project serves a clear purpose without unnecessary complexity.") + paragraph ("We don't overpromise or use flashy marketing language..."). Below: a 3-column row:
1. Dark case-study card: full-bleed B&W portrait photo (woman, dark blazer) with "Case study" + "UX/UI Redesign, Frontend Optimization." top-left, a `+` icon top-right, and a large ghosted "fabrica®" wordmark watermark at the bottom of the image.
2. Light stat card: "Performance Boost:" label, "Page speed +48%, Bounce rate -23%" (large, ~34px bold), then "Conversion Rate Improvement:" + "4.2% → 5.9%" (large bold). Faint concentric circle rings as a decorative background graphic.
3. Light stat card: circular gauge showing "100" centered (thin ring progress, near-full), "Pagespeed" label below, small muted description text.

## Computed Styles
- Cards: `border-radius: 16-25px`, dark card bg `#0a0a0a`, light cards bg white/`#f5f5f5`
- Case study label: 14px muted; "UX/UI Redesign..." 14px lighter muted, both white-on-dark
- Stat numbers ("Page speed +48%..."): ~34px weight 600, black, line-height tight
- Gauge: circular SVG or conic-gradient ring, ~130px diameter, thin stroke (~8px), light gray track + black/dark progress arc near 100%, "100" centered ~30px weight 600

## States & Behaviors
- Static; standard scroll fade-in for the row.

## Assets
- Case study photo: `9EtXT1aFvual1dmNauTJSO1YmE.jpg` or `2tiQFkd5S2BAWIEShaSCdLTiY.jpg` (dark B&W portrait, woman in blazer — verify against screenshot `09-case-study-stats.jpg` and pick the matching one; the other likely belongs elsewhere, e.g. testimonials).
- Icon: `PlusBadgeIcon` from `../../shared/icons`; "fabrica®" watermark rendered as large, low-opacity text (not an image).
- Gauge: build with inline SVG `<circle>` stroke-dasharray trick (no image needed).

## Text Content (verbatim)
- `Case study`, `UX/UI Redesign, Frontend Optimization.`
- `Performance Boost:` `Page speed +48%, Bounce rate -23%`
- `Conversion Rate Improvement:` `4.2% → 5.9%`
- `100`, `Pagespeed` + a short "We prioritize performance..." muted description line (partially cropped in capture — keep it brief and consistent with the performance theme, e.g. "We prioritize performance, verifying cloud speed and...")

## Responsive Behavior
- **Desktop (1440px):** 3 columns (case study card wider than the two stat cards, ~2:1:1 or similar).
- **Tablet/Mobile:** stack to 1 column, full width, case study card first.
- **Breakpoint:** 810px
