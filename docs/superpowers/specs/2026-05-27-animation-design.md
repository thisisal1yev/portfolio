# Animation Design — Portfolio

**Date:** 2026-05-27  
**Library:** Motion v12 (already installed)  
**Goal:** Scroll-triggered fade-in animations + parallax effects, inspired by beta.ru aesthetic

---

## Decision: Motion over GSAP

Motion is already installed and used across all widgets. For A+B level animation complexity (scroll-triggered reveals + simple parallax), Motion's `whileInView`, `useScroll`, and `useTransform` APIs are sufficient. GSAP would only be justified for C-level pinned-section scrubbing timelines, which is out of scope for this portfolio.

---

## Architecture

### Two animation layers

**1. Scroll-triggered enter animations**

- Mechanism: `whileInView` + `viewport={{ once: true, margin: "-100px" }}`
- All variants live in `src/shared/lib/animations.ts`
- Stagger groups use `staggerContainer` as parent + child variants
- Timing: `0.6–0.7s` duration, `EASE = [0.44, 0, 0.56, 1]` (already defined)

**2. Parallax**

- Mechanism: `useScroll` + `useTransform` via a shared hook
- New file: `src/shared/hooks/useParallax.ts`
- Signature: `useParallax(ref, inputRange, outputRange)` → `MotionValue`
- Applied only to HeroSection background image

---

## Changes

### `src/shared/lib/animations.ts`
No new variants needed. Existing `fadeUp`, `fadeIn`, `cardReveal`, `staggerContainer` cover all cases.

### `src/shared/hooks/useParallax.ts`
New hook wrapping `useScroll` + `useTransform`. Accepts `ref`, input scroll range `[0, 1]`, and output transform range (e.g. `[0, -20]` for y-parallax).

---

## Widget-by-widget plan

| Widget | Animation | Mechanism |
|---|---|---|
| HeroSection | Existing `fadeUp` on mount (keep, above the fold) + bg parallax `-20px` | `animate='visible'` (already) + `useParallax` |
| MarqueeBlock | `fadeIn` on enter | `whileInView` |
| ProjectsList | Cards stagger with `cardReveal` + `whileHover={{ scale: 1.02 }}` | `whileInView` + `staggerContainer` |
| ExperienceSection | Cards stagger with `fadeUp` | `whileInView` + `staggerContainer` |
| Footer | `fadeIn` on enter | `whileInView` |

---

## Constraints

- `viewport={{ once: true }}` on all — no re-trigger on scroll back up
- `margin: "-100px"` — animate slightly before element hits viewport edge
- No new animation libraries — Motion only
- HeroSection existing animations untouched except adding parallax to bg image
- Navbar animations untouched

---

## Out of scope

- Pinned/sticky scroll sections
- Page transition animations
- Custom cursor
- Scroll-scrubbed text reveals
