import { useRef } from 'react'
import { useInView } from 'motion/react'

import { cn } from '@shared/lib'
import { useTypewriter } from '@shared/hooks'
import { Cursor } from './Cursor'

interface Props {
  text: string
  speed?: number
  startDelay?: number
  className?: string
  /** show blinking caret while/after typing */
  caret?: boolean
  /** type immediately instead of waiting to scroll into view */
  immediate?: boolean
  onDone?: () => void
}

/**
 * Types `text` once it scrolls into view (or immediately).
 * Full text is reserved invisibly so the layout never reflows mid-type.
 */
export function TypeWriter({
  text,
  speed,
  startDelay,
  className,
  caret = true,
  immediate = false,
  onDone,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const start = immediate || inView

  const { output } = useTypewriter(text, { speed, startDelay, start, onDone })

  return (
    <span ref={ref} className={cn('inline-grid', className)}>
      <span className='invisible col-start-1 row-start-1' aria-hidden>
        {text}
      </span>
      <span className='col-start-1 row-start-1 whitespace-pre-wrap'>
        {output}
        {caret && start && <Cursor small />}
      </span>
    </span>
  )
}
