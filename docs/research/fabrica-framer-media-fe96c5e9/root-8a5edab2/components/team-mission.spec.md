# TeamMission Specification

## Overview
- **Target file:** `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/TeamMission.tsx`
- **Screenshot:** `12-team-grid-mission.jpg`
- **Interaction model:** static

## DOM Structure
White rounded card section (`border-radius: 25px`) on the light page bg. Heading "fabrica®" eyebrow + giant "The faces behind" + "the projects." (two-tone, 60-85px). Below-left: "Be part of our mission" (18px weight 600) + description "If you're ready to create and collaborate, we'd love to hear from you." (muted) + black "Apply now" pill button (with small white dot icon). Middle: pull-quote paragraph "We believe great work comes **from collaboration.** That's why we work closely with each other to ensure every project meets your goals and exceeds expectations." (mixed weight — bold on "from collaboration."). Right: 2×2 grid of team member photo cards, each full-bleed portrait photo with a small role badge top-left (dark pill, `+` icon + role + "at fabrica®") and name bottom-left in bold white.

## Computed Styles
- Section bg: white, `border-radius: 25px`, padding ~64px 36px
- Heading: two-tone black/muted-gray, ~60-85px/600
- "Be part of our mission": 20px weight 600 black; description 15px muted gray
- "Apply now" button: black bg, white text, `border-radius: 50px`, padding `~14px 28px`, small white circular dot icon at trailing edge
- Pull-quote: ~24px, mixed weight (500 base / 600 for emphasized phrase), muted gray with black emphasis, max-width ~420px
- Team cards: `border-radius: 16px`, full-bleed photo `object-fit: cover`, aspect ~1:1.1, role badge: dark semi-transparent pill top-left (`rgba(0,0,0,0.6)` bg, `+` icon, ~12px text), name: white, ~20px weight 600, bottom-left with padding ~16px

## States & Behaviors
- Static; standard scroll fade-in for the grid and text blocks.

## Assets — 4 team members (2×2 grid, in order)
1. **Sarah Johnson** — Creative Director — photo `2tiQFkd5S2BAWIEShaSCdLTiY.jpg`
2. **Christopher Miller** — UX/UI Designer — photo `33ZiQHiNM5s1AOYU8Ejc9IMhc84.jpg`
3. **Lauren Thompson** — Team Lead — photo `9EtXT1aFvual1dmNauTJSO1YmE.jpg` (or reuse the hero card photo `XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg` if this one doesn't visually match a blonde woman)
4. **Michael Wilson** — Full Stack Developer — photo `stTKqZkueiEGiXkUexOWo9RjNnY.jpg`

Verify each against `12-team-grid-mission.jpg` and swap if a file doesn't match; all at `public/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/images/`. Build a `TEAM: FabricaTeamMember[]` array (type from `@/types/fabrica-framer-media`).

## Text Content (verbatim)
- `fabrica®`, `The faces behind` `the projects.`
- `Be part of our mission`, `If you're ready to create and collaborate, we'd love to hear from you.`, `Apply now`
- `We believe great work comes` `from collaboration.` `That's why we work closely with each other to ensure every project meets your goals and exceeds expectations.`
- Names/roles as listed above, each with `at fabrica®`

## Responsive Behavior
- **Desktop (1440px):** left column (mission text) + middle (quote) + right (2×2 team grid) roughly 3-across.
- **Tablet/Mobile:** stack to single column: heading → mission block → quote → team grid (team grid becomes 1 or 2 columns).
- **Breakpoint:** 810px
