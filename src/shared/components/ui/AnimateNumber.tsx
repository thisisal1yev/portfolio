import { useEffect, useState } from 'react'
import { animate } from 'motion/react'

interface Props {
  value: number
  duration?: number
}

export function AnimateNumber({ value, duration = 1.5 }: Props) {
  // SSR / first paint renders the real value (good for no-JS & SEO);
  // the effect below replays the 0 → value count-up on the client.
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [value, duration])

  return <>{display}</>
}
