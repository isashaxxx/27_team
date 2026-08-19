# WhyChooseCta Specification (Why Choose Us + Get Started CTA)

## Overview
- **Target file:** `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/WhyChooseCta.tsx`
- **Screenshots:** `04-why-choose-us-getstarted-stats.jpg` (also see the "Proven results..." heading frame and the black "Get started" frame from the scroll sequence)
- **Interaction model:** static, scroll fade-in text (standard)

## DOM Structure
One continuous dark (`near-black`, e.g. `#0a0a0a`) rounded section (`border-radius: 25px`, `mx-3` page-bg margin visible around it) containing, top to bottom:
1. Two side-by-side photos (bird in flight B&W, dark puffer-jacket-hood B&W portrait), both `border-radius: 16px`, `object-fit: cover`, roughly square-ish aspect.
2. "Why choose us" eyebrow label (small, with a `+` badge icon to its left) then giant heading: "Proven results for every project," (white, bold) + "with a focus on design and functionality." (muted gray, same size) — ~60px, weight 600, letter-spacing -3.6px.
3. Large black "Get started" pill button (white bg, black text, ~500 weight, generous padding, fully rounded) roughly centered lower in the section.
4. To the right of/behind the button: an overlapping large photo card (dark, blurred figure) with two small floating white stat cards ("...completed" / "We've delivered 50+ projects that help companies generate real results." and "...satisfaction rate" with 3 client logo chips: `logoipsum`×2 + `Logoipsum`).

## Computed Styles
- Section bg: `#0a0a0a`, border-radius 25px, padding ~64-90px 36px
- Images: border-radius 16px, grayscale filter (B&W)
- Eyebrow "Why choose us": 14-15px, muted white (`rgba(255,255,255,0.6)`), `+` badge ~24px circle outline
- Heading: 60px/600/-3.6px, two-tone (white then `rgba(255,255,255,0.6)`)
- "Get started" button: white bg, black text, `border-radius: 50px` (pill), padding `~20px 40px`, font-size ~16px weight 500
- Stat cards: white bg, `border-radius: 16px`, padding ~24px, text: heading number/word ~18px weight 600 black, description 14px muted gray

## States & Behaviors
- Standard scroll fade-up on the heading and images (opacity 0→1, translateY 20px→0, ~500ms), consistent with the rest of the page. Button: standard hover (scale 1.03 or bg darken slightly).

## Assets
- Bird photo: `HlvuJF9yIQ3Q8fP86EjFIq5ExE.jpg` (verify against screenshot; if it doesn't match a bird in flight, use the closest B&W landscape photo among unused images and note the swap)
- Jacket portrait: `KL17tuoYHz5TzXCqskqaMY5Iw0.jpg` (confirmed via visual check — man in gray hooded puffer jacket, B&W)
- Right-side blurred figure photo behind stat cards: use an unused dark portrait-style image from the downloaded set (e.g. `vrhxHFTuxnCduP4nljUulqZcuQ.jpg`, a dark vignette gradient — treat as a background gradient/overlay rather than a literal photo if it renders as pure gradient)
- Client logo chips: reuse the logo-strip SVGs (`m9cv2Bx2sImOjy4Q3x1Fk5d5WGM.svg`, `CtaV2dn3ujpK8zv0Py3i9IJArPQ.svg`, `wk98ext8C9l414fS0PK6BvjTA.svg`) as small "logoipsum" style chips
- Icon: `PlusBadgeIcon` from `../../shared/icons`

## Text Content (verbatim)
- `Why choose us`
- `Proven results for every project,` `with a focus on design and functionality.`
- `Get started`
- `We've delivered 50+ projects that help companies generate real results.`
- stat labels ending in `completed` and `satisfaction rate` (exact leading numbers were cropped in capture — use representative values like `50+` and `98%` consistent with the "50+ projects" copy; do not fabricate precise unverified stats beyond what's visible)

## Responsive Behavior
- **Desktop (1440px):** 2 photos side by side; button + stat-card cluster side by side lower in section.
- **Tablet/Mobile:** photos stack to 1 column full width; button centered full-width-ish; stat cards stack below button, full width.
- **Breakpoint:** 810px
