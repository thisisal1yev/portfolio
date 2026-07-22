import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { m } from 'motion/react'

import { Tag } from '@shared/components'
import { CARD, cardReveal, cn, revealOnView } from '@shared/lib'
import { PROJECTS } from '../projects.data'

function ProjectThumb({
  src,
  slug,
  title,
  stack,
}: {
  src: string
  slug: string
  title: string
  stack: string[]
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className='border-border bg-bg-deep grid-bg relative grid aspect-video place-items-center overflow-hidden border-b'>
        <div className='text-center'>
          <p className='font-display text-text-dim text-3xl font-bold'>
            {'</>'}
          </p>
          <p className='text-text-dim mt-1 text-xs'>~/{slug}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='border-border aspect-video overflow-hidden border-b'>
      <img
        src={src}
        alt={`Screenshot of project ${title} — ${stack.join(' · ')}`}
        loading='lazy'
        decoding='async'
        onError={() => setFailed(true)}
        className='h-full w-full object-cover opacity-80 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0'
      />
    </div>
  )
}

export function ProjectsList() {
  return (
    <m.div {...revealOnView(0.1)}>
      <p className='text-text-dim mb-4 text-xs'>
        total {PROJECTS.length} — drwxr-xr-x aliyev staff
      </p>

      <div className='grid grid-cols-2 gap-4 md:grid-cols-1'>
        {PROJECTS.map((project, i) => (
          <m.a
            key={project.slug}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            variants={cardReveal}
            className={cn(CARD, 'group flex flex-col')}
          >
            <ProjectThumb
              src={project.imgURL}
              slug={project.slug}
              title={project.title}
              stack={project.stack}
            />

            <div className='flex flex-1 flex-col p-5'>
              <div className='flex items-start justify-between gap-3'>
                <h3 className='font-display text-text group-hover:text-glow text-xl font-bold transition-[text-shadow]'>
                  <span className='text-text-dim text-sm tabular-nums'>
                    {String(i + 1).padStart(2, '0')}_
                  </span>{' '}
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className='text-text-dim group-hover:text-acc shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                />
              </div>

              <p className='text-text-muted mt-2 text-sm leading-relaxed'>
                {project.description}
              </p>

              <div className='mt-auto flex flex-wrap gap-2 pt-4'>
                {project.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </m.a>
        ))}
      </div>
    </m.div>
  )
}
