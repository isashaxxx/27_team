# ServicesAccordion Specification

## Overview
- **Target file:** `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/ServicesAccordion.tsx`
- **Screenshot:** `05-services-list.jpg`
- **Interaction model:** click-driven, single-open accordion (numbered 001-004)

## DOM Structure
Dark section (same near-black `#0a0a0a` family, continuing visually from the previous section — could be the same rounded card or a new one; treat as its own section with `border-radius: 25px`). Top: eyebrow "What we do" + heading "Services." with "(4)" count. Item 001 "Web design and development" is expanded showing a description line and pill tags (Typography, Guidelines, Visual identity, "6+"). Items 002-004 are collapsed rows with just index, title, and a circular `+` toggle. Below the list: a white "Get started" pill button (same style as the CTA section).

## Computed Styles
### List item row
- padding: `~32px 0`, border-top: `1px solid rgba(255,255,255,0.1)` (hairline divider between rows)
- index label (e.g. "(001)"): 14px, muted gray, monospace-ish tracking
- title: ~34px weight 600, white, letter-spacing -1.7px
- toggle button: circular outline (~40px), `+` icon, rotates 45° to `×` when open

### Expanded content (item 001 only, by default)
- description: 16-18px, muted gray (`rgba(255,255,255,0.6)`), max-width ~500px
- tag pills: dark-gray rounded-full chips (`background: rgba(255,255,255,0.1)`), white text ~13px, padding `~8px 16px`, inline-flex row with ~8px gap; last pill "6+" is a plain count badge

## States & Behaviors
### Accordion
- **Trigger:** click a row
- **Model:** single-open — only one item's description/tags shows at a time (item 001 is the default open state on load)
- **Transition:** height animates via `max-height` or CSS grid `grid-template-rows: 0fr → 1fr` trick, ~300ms ease; `+` rotates 45°
- **Implementation:** `useState<number>(0)` for the open index; clicking a row sets it; render each row's detail block conditionally/height-animated based on `openIndex === i`.

## Assets
- No photos. Icon: `PlusBadgeIcon` from `../../shared/icons` (rotates via a `rotate-45` class when open).

## Text Content (verbatim)
- Eyebrow: `What we do`, Heading: `Services.` `(4)`
- **(001) Web design and development** — desc: "Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions." — tags: `Typography`, `Guidelines`, `Visual identity`, `6+`
- **(002) Social media marketing**
- **(003) SEO and content marketing**
- **(004) Branding and identity**
- Button: `Get started`

## Responsive Behavior
- **Desktop (1440px):** index/title/tags roughly in a row for the open item; title ~34px.
- **Tablet/Mobile:** tags wrap to multiple lines below the description; title scales to ~24-28px; index label may move above the title instead of beside it.
- **Breakpoint:** 810px
