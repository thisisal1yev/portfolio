import { useRef } from 'react'
import type { PropsWithChildren } from 'react'
import { m, useMotionValue, useSpring } from 'motion/react'

import { cn } from '@shared/lib'

interface Props extends PropsWithChildren {
  href: string
  className?: string
  /** download attribute / new tab */
  download?: boolean
  external?: boolean
  /** pull strength (0–1) */
  strength?: number
}

const SPRING = { stiffness: 220, damping: 16, mass: 0.4 }

/** Anchor that magnetically drifts toward the cursor on hover. */
export function MagneticButton({
  children,
  href,
  className,
  download,
  external,
  strength = 0.4,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, SPRING)
  const y = useSpring(my, SPRING)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set((e.clientX - (r.left + r.width / 2)) * strength)
    my.set((e.clientY - (r.top + r.height / 2)) * strength)
  }

  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <m.a
      ref={ref}
      href={href}
      download={download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn(
        'bracket group inline-flex items-center gap-2 border px-5 py-2.5 text-sm transition-colors',
        className,
      )}
    >
      {children}
    </m.a>
  )
}
