# NewsletterFooter Specification

## Overview
- **Target file:** `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/NewsletterFooter.tsx`
- **Screenshots:** `16-newsletter.jpg`, `17-footer.jpg`
- **Interaction model:** form (newsletter — client-side no-op, no backend) + static footer

## DOM Structure
Light `#f5f5f5` section, two stacked parts:

### 1. Newsletter row
Top: black pill "Subscribe" button-as-input-trigger (or an email input + Subscribe button combo — render as an email `<input>` styled as a pill with a black "Subscribe" button docked to its right) + "Join our newsletter and stay updated on the latest trends in digital design." muted text to the right. Below: a 3-column row — phone `(312) 555-2468` + underlined `hello@fabrica.com` (left, with `+` badge icon before the email); "Navigation" column (`Home`, `Studio`, `Projects`, `Blog` links); "Social" column (`Twitter ↗`, `Instagram ↗`, `Dribbble ↗` — each with a small external-link arrow icon).

### 2. Wordmark + bottom bar
Giant centered-right "fabrica®" / "Studio" wordmark (same treatment as hero, ~85-100px). Below it, a full-width dark (`#0a0a0a` or `#000`) bottom bar: left "© 2025 fabrica® Studio. All rights reserved.", middle "Privacy Policy" · "Terms of Service" · "Built in Framer" (with a small Framer flag icon), right "Created by [avatar] [name]" credit.

## Computed Styles
- Subscribe input: `border-radius: 50px`, `background: rgba(0,0,0,0.05)` or white, black "Subscribe" pill button docked inside/right, white dot icon
- Nav/Social column headers ("Navigation", "Social"): 13px muted gray, uppercase-ish tracking; links: 18px weight 500 black, ~12px gap between
- Social links: `ArrowUpRightIcon` (small, top-right of text) from `../../shared/icons`
- Wordmark: same as hero (144px/600/-8.64px for "fabrica®", ~60-85px for "Studio")
- Bottom bar: `background: #0a0a0a` (or pure black), white/muted-white text, ~14px, padding `~24px 36px`, flex row space-between

## States & Behaviors
- Static; links get standard hover opacity (0.6). Subscribe form: no-op submit handler (preventDefault), no backend.

## Assets
- No photos. Icons: `CrossMarkIcon`, `ArrowUpRightIcon` from `../../shared/icons`; a small Framer-flag glyph for "Built in Framer" can be a plain `Flag` icon from `lucide-react` (do not fabricate the exact Framer logo).

## Text Content (verbatim)
- `Subscribe`, `Join our newsletter and stay updated on the latest trends in digital design.`
- `(312) 555-2468`, `hello@fabrica.com`
- Navigation: `Home`, `Studio`, `Projects`, `Blog`
- Social: `Twitter`, `Instagram`, `Dribbble`
- `fabrica®`, `Studio`
- `© 2025 fabrica® Studio. All rights reserved.`
- `Privacy Policy`, `Terms of Service`, `Built in Framer`, `Created by` (credit name — render as plain text, do not link to an external profile)

## Responsive Behavior
- **Desktop (1440px):** newsletter row: input+button left, description right; 3-column link row (contact / nav / social).
- **Tablet/Mobile:** stack all columns to 1 column, full width; wordmark scales down (~64-96px); bottom bar wraps to 2 rows (copyright top, links below) on narrow widths.
- **Breakpoint:** 810px
