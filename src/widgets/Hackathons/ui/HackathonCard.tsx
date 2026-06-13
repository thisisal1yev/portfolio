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

export function HackathonCard({
  name,
  year,
  project,
  stack,
  result,
  link,
}: Props) {
  const hasLink = link && link !== '#'

  return (
    <m.div
      variants={cardReveal}
      className='panel bracket group hover:border-acc-dim flex flex-col gap-3 p-6 transition-colors'
    >
      <p className='text-acc text-xs'>
        <span className='text-text-dim'>~/</span>
        {year}
      </p>
      <h3 className='font-display text-text text-xl leading-snug font-bold'>
        {name}
      </h3>
      {project && <p className='text-text-muted text-sm'>{project}</p>}
      {stack && <p className='text-text-dim text-xs'># {stack}</p>}

      <div className='mt-auto pt-1'>
        {hasLink ? (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='border-acc-dim bg-acc/10 text-acc hover:bg-acc/20 inline-flex w-fit items-center gap-1.5 rounded-sm border px-3 py-1.5 text-xs transition-colors'
          >
            <Trophy size={12} /> {result} <ArrowUpRight size={13} />
          </a>
        ) : (
          <span className='border-acc-dim bg-acc/10 text-acc inline-flex w-fit items-center gap-1.5 rounded-sm border px-3 py-1.5 text-xs'>
            <Trophy size={12} /> {result}
          </span>
        )}
      </div>
    </m.div>
  )
}
