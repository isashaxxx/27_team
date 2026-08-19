# Behaviors — fabrica.framer.media (/)

## Global
- **Preloader**: on first paint, a full-viewport black overlay (z-index 9999) shows the wordmark "fabrica®" centered, then fades out once assets are ready. In our clone this can be a simple CSS-only fade (~800ms) on mount; not critical to pixel-match since it's a one-time loading flourish.
- **Nav**: `position: fixed`, top 0. Confirmed via computed-style diff at scrollY=0 vs scrollY=1500: background `rgb(245,245,245)`, `box-shadow: none`, height 60px, padding `19px 36px` — IDENTICAL at both scroll positions. **No scroll-linked change.** Interaction model: static.
- **Hamburger menu**: click toggles a full-screen overlay panel (class similar to `framer-1rfamfy`) from `top:-750px;opacity:0` to `top:0;opacity:1`. Shows duplicated nav links (Home/Studio/Projects/Blog) large, centered, plus phone/email at the bottom. Icon morphs from ☰ (two lines) to ✕. Implementation: CSS transform/opacity transition ~300-400ms ease, toggled by React state on the hamburger button's onClick.
- Decorative "+" cross marks appear throughout (hero, "why choose us" eyebrow, footer nav column tops) — purely static decoration, no interaction.

## Section-specific

### Projects grid (section 4)
- Cards reveal on scroll (fade/slide-up) — standard IntersectionObserver-triggered fade, threshold ~20% visible, translateY 20px→0, opacity 0→1, ~500ms ease-out, no stagger observed beyond natural card position.
- Each card's top label bar shows three dots on the right; on at least one card (Ephemeral) the dots rendered as colored (red/yellow/orange/green traffic-light style) while others stayed gray outline — this reads as a **hover state** (cursor proximity) rather than a scroll state, since it appeared inconsistently between screenshots taken during scroll, not click. Implement as: dots are gray `rgba(0,0,0,0.15)` by default, become colored (red `#ff5f57`, yellow `#febc2e`, green `#28c840` — macOS traffic-light convention) on card hover, transition ~200ms.
- Card image likely has a subtle scale-up (1.0 → 1.03) on hover with `overflow:hidden` on the rounded container — standard Framer image-hover pattern; not conclusively observed but safe default.

### Services list (section 7)
- Numbered accordion (001–004). Item 001 "Web design and development" is expanded by default showing description text + tag pills (Typography, Guidelines, Visual identity, "6+"). Items 002–004 are collapsed to just the title row with a circular "+" icon.
- Interaction model: click-driven, single-open accordion (only one item's detail visible at a time, based on only item 001 showing content while 002-004 show none) — build as a single-expand accordion, click a row to expand it and collapse the previously-open one, `+` rotates 45° to `×`. Height animates via `max-height`/`grid-template-rows` transition, ~300ms ease.

### FAQ (section 13)
- 6 questions. Item 1 open by default. Clicking item 2 opened it **while item 1 stayed open** (confirmed via screenshot: both showed the "×" icon and item 1's answer text remained visible) → **multi-open accordion**, independent per-item state, NOT single-expand like the services list.
- Icon: circular button, "+" rotates 45° to "×" on open. Content height animates in (~300ms ease), text fades in.

### Pricing toggle (section 12)
- Two-option segmented control "Per project" / "Monthly". Click-driven (confirmed). White pill background slides between the two labels (`transition: transform ~250ms ease` or animated `left`/`translateX`). Selected label text becomes dark/black, unselected becomes light gray on the dark card background.
- Content bound to selection: price digits change ($2,490 /project ↔ $1,990 /month), and the feature checklist gains one extra row ("Monthly updates & improvements") only in Monthly mode. Implement as React state `billing: 'project' | 'monthly'` driving both price text and a conditionally-rendered 4th feature row.

### Showreel (section 3)
- Circular white "Play" button over a full-bleed image. Click behavior not confirmed (likely opens a lightbox/video modal in the original, since no video element visible until triggered). For the clone: implement as a static play-button overlay on the image (click can be a no-op or open the image full-size); do not fabricate a real video source.

### Contact form / Newsletter (sections 15–16)
- Standard client-side form fields (Name, Email, Your message / Email + Subscribe). No backend per scope defaults — style-match only, submit can be a no-op or console log per project convention (mock data / no real backend is explicitly out of scope).

## Responsive
- Breakpoint ~810px: multi-column grids (projects 2-col, feature cards 4-col, testimonials 4-col, team 2-col, blog 3-col) collapse to 1 column; nav link row hides, hamburger becomes the only nav control.
- Hero right column (services list + floating team card) drops below the wordmark, stacks full width, at the same breakpoint.
- Typography scales down at breakpoints (giant section headers like "Projects." 85px → likely ~48-56px on mobile; hero wordmark 144px → likely ~64-80px) — exact mobile px values were not directly measurable (viewport forcing was limited to ~500px CSS px by the automation tool's window-resize floor), so builders should scale proportionally using `clamp()` or Tailwind responsive text classes rather than a hard px value.
