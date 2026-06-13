import type { Variants } from 'motion/react'

/** snappy terminal ease */
export const EASE = [0.22, 1, 0.36, 1] as const
/** punchy, slightly mechanical */
export const EASE_STEP = [0.65, 0, 0.35, 1] as const

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

/** clip-path wipe reveal, left → right */
export const wipeIn: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0.4 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_STEP },
  },
}
