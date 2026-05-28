import { useEffect, useState } from 'react'
import { animate } from 'motion/react'

interface Props {
  value: number
  duration?: number
}

export function AnimateNumber({ value, duration = 1.5 }: Props) {
  const [display, setDisplay] = useState(0)

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
