import type { RefObject } from 'react'
import { type MotionValue, useScroll, useTransform } from 'motion/react'

const SCROLL_OFFSET: ['start end', 'end start'] = ['start end', 'end start']

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  inputRange: [number, number],
  outputRange: [number | string, number | string],
): MotionValue {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: SCROLL_OFFSET,
  })

  return useTransform(scrollYProgress, inputRange, outputRange)
}
