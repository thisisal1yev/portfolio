import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'motion/react'

interface Props {
  value: number
  duration?: number
}

export function AnimateNumber({ value, duration = 1.5 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  // count up only once the number scrolls into view (matches the section's
  // whileInView reveals); on mount the stats live far below the fold, so a
  // mount-time animation would finish off-screen and look static.
  const inView = useInView(ref, { once: true, amount: 0.6 })

  // SSR / first paint + pre-view render the real value (good for no-JS & SEO);
  // the count-up replays 0 → value when the number enters the viewport.
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, duration])

  return <span ref={ref}>{display}</span>
}
