import { m } from 'motion/react'
import { ArrowUpRight, Trophy } from 'lucide-react'

import { cardReveal } from '@shared/lib'

interface Props {
  name: string
  year: string
  project?: string
  stack?: string
  result: string
  link: string
}

export function HackathonCard({ name, year, project, stack, result, link }: Props) {
  const hasLink = link && link !== '#'

  return (
    <m.div
      variants={cardReveal}
      className='panel bracket group flex flex-col gap-3 p-6 transition-colors hover:border-acc-dim'
    >
      <p className='text-xs text-acc'>
        <span className='text-text-dim'>~/</span>
        {year}
      </p>
      <h3 className='font-display text-xl font-bold leading-snug text-text'>
        {name}
      </h3>
      {project && <p className='text-sm text-text-muted'>{project}</p>}
      {stack && <p className='text-xs text-text-dim'># {stack}</p>}

      <div className='mt-auto pt-1'>
        {hasLink ? (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex w-fit items-center gap-1.5 rounded-sm border border-acc-dim bg-acc/10 px-3 py-1.5 text-xs text-acc transition-colors hover:bg-acc/20'
          >
            <Trophy size={12} /> {result} <ArrowUpRight size={13} />
          </a>
        ) : (
          <span className='inline-flex w-fit items-center gap-1.5 rounded-sm border border-acc-dim bg-acc/10 px-3 py-1.5 text-xs text-acc'>
            <Trophy size={12} /> {result}
          </span>
        )}
      </div>
    </m.div>
  )
}
