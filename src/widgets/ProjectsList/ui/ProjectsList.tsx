import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

import { Tag } from '@shared/components'
import { cardReveal, staggerContainer } from '@shared/lib'
import { PROJECTS } from '../projects.data'

function ProjectThumb({ src, slug }: { src: string; slug: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className='relative grid aspect-video place-items-center overflow-hidden border-b border-border bg-bg-deep grid-bg'>
        <div className='text-center'>
          <p className='font-display text-3xl font-bold text-text-dim'>
            {'</>'}
          </p>
          <p className='mt-1 text-xs text-text-dim'>~/{slug}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='aspect-video overflow-hidden border-b border-border'>
      <img
        src={src}
        alt={slug}
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
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
    >
      <p className='mb-4 text-xs text-text-dim'>
        total {PROJECTS.length} — drwxr-xr-x aliyev staff
      </p>

      <div className='grid grid-cols-2 gap-4 md:grid-cols-1'>
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.slug}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            variants={cardReveal}
            className='panel bracket group flex flex-col overflow-hidden transition-colors hover:border-acc-dim'
          >
            <ProjectThumb src={project.imgURL} slug={project.slug} />

            <div className='flex flex-1 flex-col p-5'>
              <div className='flex items-start justify-between gap-3'>
                <h4 className='font-display text-xl font-bold text-text transition-[text-shadow] group-hover:text-glow'>
                  <span className='text-text-dim text-sm tabular-nums'>
                    {String(i + 1).padStart(2, '0')}_
                  </span>{' '}
                  {project.title}
                </h4>
                <ArrowUpRight
                  size={18}
                  className='shrink-0 text-text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acc'
                />
              </div>

              <p className='mt-2 text-sm leading-relaxed text-text-muted'>
                {project.description}
              </p>

              <div className='mt-auto flex flex-wrap gap-2 pt-4'>
                {project.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
