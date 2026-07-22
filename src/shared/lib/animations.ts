import type { Variants } from 'motion/react'

/** snappy terminal ease */
export const EASE = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

/** rows boot in from the left, like a printing terminal */
export const bootLine: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE },
  },
}

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: EASE },
  },
}

/**
 * Shared "reveal on scroll into view" props for a section wrapper — spread onto
 * an `m.*` element: `<m.div {...revealOnView(0.2)} className="…">`.
 */
export const revealOnView = (
  amount = 0.15,
  variants: Variants = staggerContainer,
) => ({
  variants,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount },
})
