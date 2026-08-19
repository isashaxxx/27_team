# PricingSection Specification

## Overview
- **Target file:** `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/PricingSection.tsx`
- **Screenshots:** `10-pricing.jpg`, `11-pricing-lower-looking-for-more.jpg`
- **Interaction model:** click toggle (confirmed via live interaction test)

## DOM Structure
Dark rounded section (`#0a0a0a`, `border-radius: 25px`). Eyebrow "Simple pricing" (+ `+` badge) + giant "Pricing." (85px). Below: a 2-option segmented pill toggle "Per project" / "Monthly" (dark track, white pill slides between). Below that: a wide 3-column price card: left = "Want more traffic and leads?" + "Get marketing and SEO that starts with your goals." (muted); middle = big price `$2,490 /project` (or `$1,990 /month`) + feature checklist (`+` icon per row): "Homepage + up to 4 inner pages", "Design and Development", "Mobile-Optimized Design", and — **only when Monthly is selected** — a 4th row "Monthly updates & improvements"; right = "Delivery time: Ongoing" info row + white "Get in touch" pill button. Further down: "+$590" add-on line item, then "Looking for more?" eyebrow + paragraph "Add marketing, SEO, or content creation—flexible tools to strengthen your project. We'll shape a solution that fits your business, not ours." with a small person credit "George Stern, Client Success Manager".

## Computed Styles
- Toggle track: dark pill (`rgba(255,255,255,0.1)` bg), `border-radius: 50px`, padding ~4px; white sliding pill `border-radius: 50px`, `transition: transform 250ms ease` (or animate `left`); selected label: black text on white pill; unselected: `rgba(255,255,255,0.5)` text
- Price: ~48-56px weight 600 white
- Feature rows: 16px white, `+` icon (small, muted) leading each
- "Get in touch" button: white bg black text, `border-radius: 50px`, padding `~16px 32px`
- "Looking for more?" paragraph: ~24px, mixed weight (muted base, brighter emphasis on "flexible")

## States & Behaviors
### Billing toggle (CONFIRMED interactive)
- **Trigger:** click "Per project" or "Monthly"
- **State A (Per project):** price `$2,490 /project`, 3 feature rows, left pill white/selected
- **State B (Monthly):** price `$1,990 /month`, 4 feature rows (adds "Monthly updates & improvements"), right pill white/selected
- **Transition:** sliding pill background ~250ms ease; price/feature-list content swaps instantly (or with a quick fade) on click
- **Implementation:** `useState<'project'|'monthly'>('project')`; both price and feature array derive from this state.

## Assets
- No photos in this section. Icon: `PlusBadgeIcon` from `../../shared/icons` for eyebrow + feature-row checks.

## Text Content (verbatim)
- `Simple pricing`, `Pricing.`
- `Per project`, `Monthly`
- `Want more traffic and leads?`, `Get marketing and SEO that starts with your goals.`
- `$2,490` `/project` ↔ `$1,990` `/month`
- `Homepage + up to 4 inner pages`, `Design and Development`, `Mobile-Optimized Design`, `Monthly updates & improvements` (Monthly only)
- `Delivery time` `Ongoing`, `Get in touch`
- `+$590`
- `Looking for more?`
- `Add marketing, SEO, or content creation—flexible tools to strengthen your project. We'll shape a solution that fits your business, not ours.`
- `George Stern`, `Client Success Manager`

## Responsive Behavior
- **Desktop (1440px):** 3-column price card row.
- **Tablet/Mobile:** stack to single column: description → price+features → delivery/CTA.
- **Breakpoint:** 810px
