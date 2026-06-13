import { motion } from 'motion/react'

import { cn } from '@shared/lib'
import { fadeIn } from '@shared/lib'
import { TypeWriter } from './TypeWriter'

interface Props {
  /** the command the visitor "runs", e.g. `cat about.md` */
  cmd: string
  /** human-readable section name, rendered as a trailing comment */
  comment?: string
  /** two-digit section index */
  index?: string
  className?: string
}

/** A shell prompt that types its command into view — used as a section header. */
export function Prompt({ cmd, comment, index, className }: Props) {
  return (
    <motion.div
      variants={fadeIn}
      className={cn('flex flex-wrap items-baseline gap-x-3 gap-y-1', className)}
    >
      {index && (
        <span className='text-text-dim text-xs tabular-nums'>[{index}]</span>
      )}
      <span className='text-text-dim text-sm'>
        aliyev<span className='text-acc-dim'>@</span>portfolio
        <span className='text-text-dim'>:</span>
        <span className='text-cyan'>~</span>
        <span className='text-acc'> $</span>
      </span>
      <TypeWriter
        text={cmd}
        speed={42}
        className='text-text text-base font-medium'
      />
      {comment && (
        <span className='text-text-dim text-xs'>{`// ${comment}`}</span>
      )}
    </motion.div>
  )
}
