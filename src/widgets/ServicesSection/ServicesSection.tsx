import { m } from 'motion/react'

import { Prompt, Tag } from '@shared/components'
import { CARD, cardReveal, cn, revealOnView } from '@shared/lib'

const SERVICES = [
  {
    id: '01',
    bin: 'frontend.dev',
    title: 'I build modern\nweb interfaces',
    desc: 'Interfaces with React, Vue, Nuxt and TypeScript. Focus on performance, animation and great UX.',
    tags: ['React', 'Vue', 'Nuxt', 'TypeScript', 'Tailwind'],
  },
  {
    id: '02',
    bin: 'backend.dev',
    title: 'I build a reliable\nserver layer',
    desc: 'REST APIs with Node.js, NestJS and Bun. I work with PostgreSQL and Prisma and design data schemas.',
    tags: ['Node.js', 'Nest.js', 'Bun', 'PostgreSQL', 'Prisma'],
  },
]

export function ServicesSection() {
  return (
    <section
      id='services'
      className='scroll-mt-24'
    >
      <Prompt
        cmd='ls ~/services'
        comment='how I can help'
        title='Services'
        index='04'
      />

      <m.div
        {...revealOnView()}
        className='mt-5 grid grid-cols-2 gap-4 sm:grid-cols-1'
      >
        {SERVICES.map((s) => (
          <m.article
            key={s.id}
            variants={cardReveal}
            className={cn(CARD, 'group flex flex-col p-8 sm:p-5')}
          >
            <p className='text-sm'>
              <span className='text-acc'>$</span>{' '}
              <span className='text-text-muted'>./{s.bin}</span>
              <span className='text-text-dim'> --service {s.id}</span>
            </p>

            <h3 className='font-display text-text group-hover:text-glow mt-6 text-2xl leading-tight font-bold whitespace-pre-line transition-[text-shadow]'>
              {s.title}
            </h3>

            <p className='text-text-muted mt-4 leading-relaxed'>{s.desc}</p>

            <div className='mt-6 flex flex-wrap gap-2'>
              {s.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </m.article>
        ))}
      </m.div>
    </section>
  )
}
