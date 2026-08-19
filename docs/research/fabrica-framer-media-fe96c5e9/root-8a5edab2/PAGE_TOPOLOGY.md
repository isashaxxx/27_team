# Page Topology — fabrica.framer.media (/)

Single long-scroll one-pager. Scroll container is the native document (Lenis-style smooth scroll is present in Framer's runtime but is native inertial scroll, not a custom wrapper — no `.lenis` class detected). No scroll-snap.

Overall layout: full-bleed sections stacked vertically, most with `border-radius` on section containers (16–25px) creating a "card stack" look with small gaps of page background (#f5f5f5) between dark and light sections. Max content width ~1440px is effectively the full viewport (no centered max-width container — sections span edge to edge with internal padding of ~36px desktop).

## Z-index / overlay layers
1. **Nav** — `position: fixed`, top:0, full width, z-index high, always solid `#f5f5f5` background (no transparent/scroll state — confirmed via computed style diff at scroll 0 vs 1500px: identical).
2. **Mobile/full menu overlay** — off-canvas panel (`framer-1rfamfy`), fixed, starts at `top:-750px, opacity:0`, toggled by hamburger button, fades/slides in over everything (z-index above nav).
3. **"Made in Framer" + "Fabrica® Template from $129" badges** — bottom-right fixed widgets injected by Framer's hosting/marketplace, NOT part of the site design. **Excluded from the clone.**

## Sections, top to bottom (desktop 1440px)

| # | Name | BG | Interaction model | Notes |
|---|------|-----|-------------------|-------|
| 0 | Nav | light `#f5f5f5` | static | logo, 4 links, hamburger →full menu overlay |
| 1 | Hero | dark photo (grain/smoke texture) | static + decorative "+" marks | Giant "fabrica® Studio" wordmark, services list, tagline, floating Team Lead card |
| 2 | Logo strip | light | static | 6 client logo placeholder cards (logoipsum-style) |
| 3 | Showreel | image w/ play button | click (opens video, unconfirmed modal vs inline) | "Watch showreel" + (2016-25©) |
| 4 | Projects | light | scroll-reveal cards, hover state on card top-bar dots | "(27) Projects." heading, 2-col grid, ~10+ visible project cards (Boltshift, Ephemeral, Powersurge, Mastermail, Warpspeed, CloudWatch, +more), each has image, logo+name overlay, top label bar with date + status dots |
| 5 | Why choose us | dark | static, scroll fade-in text | "Proven results for every project, with a focus on design and functionality." + 2 images (bird, jacket) |
| 6 | Get started CTA | dark | static | Large "Get started" pill button, floating stat card overlapping projects imagery |
| 7 | Services list | dark | click-driven accordion (numbered 001–004) | Web design & development (expanded by default, shows tags: Typography/Guidelines/Visual identity/6+), Social media marketing, SEO and content marketing, Branding and identity |
| 8 | How we launch | light | scroll-reveal | "How we launch websites and marketing campaigns." + 4 feature cards w/ small photo icons (numbered 01–04) |
| 9 | Case study / performance | dark | static | Case study image card (UX/UI Redesign) + stat blocks (Page speed +48%, Bounce -23%, Conversion 4.2%→5.9%, Pagespeed 100 gauge) |
| 10 | Testimonials | light | static grid | "Experiences." heading, avatar stack "56+", star ratings, 3 quote cards + 1 "Leave a review" CTA card |
| 11 | Team / mission | light | static | "Be part of our mission" CTA + "Apply now" button + team member photo cards (Sarah Johnson, Christopher Miller, Lauren Thompson, Michael Wilson, + more revealed on scroll — "The faces behind the projects") |
| 12 | Pricing | dark | click toggle (Per project / Monthly) | "Pricing." heading, animated pill toggle, price card w/ feature list (+1 extra feature when Monthly selected) |
| 13 | FAQ | light | click accordion, multi-open, icon rotates 45° | "FAQ." heading, 6 questions, first open by default |
| 14 | Blog | light | static | "Newest trends and insights from our team." + 3 post cards (2 text-only, 1 image w/ "What's new in digital?") |
| 15 | Contact | dark photo bg | form (client-side only — no backend) | Name/Email/Message form, Send Message button, "Quick response"/"Clear next steps" info blocks, Team Lead contact card |
| 16 | Newsletter | light | form | Email input + Subscribe button, phone + email links |
| 17 | Footer | light → dark bottom bar | static | Nav column, Social column, giant "fabrica® Studio" wordmark, bottom bar (copyright, Privacy Policy, Terms of Service, Built in Framer, Created by credit) |

## Responsive behavior (observed at ~500px width; true 390px viewport could not be forced by the automation tool, so treat sub-810px behavior as Framer-standard-inferred except where explicitly screenshotted)

- **Nav**: link list (Studio/Projects/Blog/Contact) hidden below ~810px; only logo + hamburger remain.
- **Hero**: right-column services list and floating team card drop below the wordmark and stack full-width; wordmark font-size scales down proportionally; decorative "+" marks likely hidden (not visible in the 500px capture within the cropped view).
- General pattern for all multi-column sections (projects grid, testimonials, team, blog, feature cards): 2-col / 4-col grids collapse to a single column at the same ~810px breakpoint Framer uses by default; further collapse/font-size reduction below ~478px.
- Breakpoint values to implement: `lg: 1200px`, `md: 810px`, `sm: 478px` (Tailwind custom breakpoints) mapping to Framer's typical desktop/tablet/phone variants.

## Excluded from clone
- Framer hosting badges ("Made in Framer", "Fabrica® Template from $129").
- All other routes linked from nav/footer/project cards (`/studio`, `/projects`, `/projects/*`, `/blog`, `/contact`, `/legal/*`) — out of scope per the single URL requested (`/` only). Links render but point to `#` / are non-functional in the clone.
