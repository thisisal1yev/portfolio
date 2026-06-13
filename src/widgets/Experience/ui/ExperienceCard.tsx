import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

import { bootLine } from '@shared/lib'

interface Props {
  company: string
  position: string
  duration: string
  description: string
  link: string
  hash: string
  isFirst: boolean
  isLast: boolean
}

export function ExperienceCard({
  company,
  position,
  duration,
  description,
  link,
  hash,
  isFirst,
  isLast,
}: Props) {
  const hasLink = link && link !== '#'

  return (
    <motion.div variants={bootLine} className='group flex gap-4'>
      {/* git graph column */}
      <div className='flex flex-col items-center pt-1'>
        <span
          className={`h-3 w-3 shrink-0 rounded-full border-2 transition-colors ${
            isFirst
              ? 'border-acc bg-acc shadow-[0_0_10px_var(--color-acc)]'
              : 'border-text-dim bg-bg group-hover:border-acc'
          }`}
        />
        {!isLast && <span className='w-px flex-1 bg-border' />}
      </div>

      {/* commit body */}
      <div className={isLast ? 'pb-0' : 'pb-8'}>
        <div className='flex flex-wrap items-center gap-x-2 gap-y-1 text-sm'>
          <span className='text-amber'>{hash}</span>
          {isFirst && (
            <span className='text-cyan'>(HEAD {'->'} main, origin/main)</span>
          )}
          <span className='font-display text-lg font-bold text-text'>
            {company}
          </span>
        </div>

        <p className='mt-1 text-sm text-text-muted'>
          {position} <span className='text-text-dim'>· {duration}</span>
        </p>

        <p className='mt-2 max-w-2xl text-sm leading-relaxed text-text-dim'>
          {description}
        </p>

        {hasLink && (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-2 inline-flex items-center gap-1 text-xs text-text-muted underline-offset-4 transition-colors hover:text-acc hover:underline'
          >
            git remote -v <ArrowUpRight size={12} />
          </a>
        )}
      </div>
    </motion.div>
  )
}
