# ContactSection Specification

## Overview
- **Target file:** `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/ContactSection.tsx`
- **Screenshot:** `15-contact-form.jpg`
- **Interaction model:** form (client-side only, no backend — out of scope per project defaults)

## DOM Structure
Dark full-bleed photo-background section (`border-radius: 25px`), reuse the same smoke/grain video or a still B&W crowd photo as background with a dark overlay. Left: white rounded form card — "Name" input, "Email" input, "Your message" textarea, black "Send Message" button (full width), small print "By submitting, you agree to our Terms and Privacy Policy." with underlined links. Bottom-left of the dark area (outside the card): "© 2025 fabrica® Studio". Right column: two info rows with small line-icons — "Quick response." + "If you're ready to create and collaborate, we'd love to hear from you." and "Clear next steps." + "After the consultation, we'll provide you with a detailed plan and timeline." Below those: a white "Team Lead" contact card (photo + "Team Lead / at fabrica®" + "Lauren Thompson" + "Ask directly" pill button) — same visual pattern as the hero floating card.

## Computed Styles
- Form card: white bg, `border-radius: 16-25px`, padding ~32px, inputs: `border-radius: 12px`, `background: #f5f5f5`, padding `~16px`, placeholder muted gray
- Send button: black bg, white text, `border-radius: 50px` (pill) or 12px (rounded-rect, match screenshot — appears as a wide rounded-rect pill), full width, padding ~18px
- Info rows: small icon (~20px, outline style) + heading (18px weight 600 white) + description (14px muted white `rgba(255,255,255,0.6)`)
- Team card: identical structure/sizing to the hero's floating Team Lead card

## States & Behaviors
- Form: standard input focus states (border/ring color change) — no submission handler needed beyond a no-op `onSubmit` (preventDefault), since backend is out of scope.

## Assets
- Background: reuse hero video `G0NwzP4bivPvK55b3ubxNslUs.mp4` (looped, muted, autoplay) or a static dark crowd photo if a video feels heavy for this section — video is fine and consistent with the hero.
- Team card photo: `XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg` (same as hero).
- Icons: simple outline icons for "Quick response" (chat bubble) and "Clear next steps" (steps/list) — use Lucide `MessageCircle` and `ListChecks` (or similar) rather than fabricating custom SVGs.

## Text Content (verbatim)
- Placeholders: `Name`, `Email`, `Your message`
- `Send Message`
- `By submitting, you agree to our` `Terms` `and` `Privacy Policy.`
- `© 2025 fabrica® Studio`
- `Quick response.` — `If you're ready to create and collaborate, we'd love to hear from you.`
- `Clear next steps.` — `After the consultation, we'll provide you with a detailed plan and timeline.`
- `Team Lead`, `at fabrica®`, `Lauren Thompson`, `Ask directly`

## Responsive Behavior
- **Desktop (1440px):** form card left (~45%), info rows + team card right (~45%).
- **Tablet/Mobile:** stack to 1 column: form card first, then info rows, then team card.
- **Breakpoint:** 810px
