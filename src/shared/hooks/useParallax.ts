import type { RefObject } from 'react'
import { type MotionValue, useScroll, useTransform } from 'motion/react'

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  inputRange: [number, number],
  outputRange: [number | string, number | string],
): MotionValue {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  return useTransform(scrollYProgress, inputRange, outputRange)
}
