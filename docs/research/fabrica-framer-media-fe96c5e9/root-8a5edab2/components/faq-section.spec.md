# FaqSection Specification

## Overview
- **Target file:** `src/components/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/FaqSection.tsx`
- **Screenshot:** `13-faq.jpg`
- **Interaction model:** click-driven, MULTI-open accordion (confirmed via live interaction test — independent per-item state, NOT single-expand)

## DOM Structure
Light section. Left column: giant "FAQ." heading (85px) + paragraph "Got questions? We've got answers. Here's everything you need to know about working with us." Right column: 6 white rounded-card accordion rows stacked with gaps, each with a question (left) and a circular `+`/`×` toggle (right); item 1 is open by default showing its answer paragraph below the question.

## Computed Styles
- Card row: white bg, `border-radius: 16px`, padding `~28px 32px`, margin-bottom ~12px between rows
- Question: 20px weight 600 black
- Answer (when open): 15-16px muted gray, max-width ~90%, margin-top ~16px
- Toggle icon: circular black outline button (~36px), `+` rotates 45° to `×` on open, `transition: transform 300ms ease`
- Answer reveal: height/opacity transition ~300ms ease

## States & Behaviors
### Accordion (MULTI-open — confirmed)
- **Trigger:** click any row
- **Model:** each item's open/closed state is independent — clicking item 2 opens it while item 1 (already open) stays open. Use `useState<Set<number>>` or an array of booleans, toggle the clicked index without closing others.
- Item 1 ("How long does it take to build a website?") is open by default on mount.

## Assets
- None. Icon: `PlusBadgeIcon` (rotating variant) from `../../shared/icons`.

## Text Content (verbatim) — 6 items
1. **How long does it take to build a website?** (open by default) — "The timeline for building a website depends on its complexity and specific requirements. On average, we'll provide a detailed timeline during the initial consultation to ensure clear expectations."
2. **Do you offer custom websites or use templates?**
3. **What's included in your SEO services?**
4. **How does the monthly subscription model work?**
5. **Can you redesign my existing website?**
6. **How do I get started?**

(Items 2-6 answers were not expanded during inspection — write plausible, on-brand one-to-two-sentence answers consistent with a web design/marketing studio's FAQ; keep them short, matching item 1's tone and length.)

- Heading: `FAQ.`
- Subtext: `Got questions? We've got answers. Here's everything you need to know about working with us.`

## Responsive Behavior
- **Desktop (1440px):** 2-column layout (heading/subtext left, accordion list right, list ~60% width).
- **Tablet/Mobile:** stack to 1 column, heading above accordion list, both full width.
- **Breakpoint:** 810px
