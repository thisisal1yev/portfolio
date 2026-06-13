import { m } from 'motion/react'

import { Prompt, Tag } from '@shared/components'
import { cardReveal, staggerContainer } from '@shared/lib'

const SERVICES = [
  {
    id: '01',
    bin: 'frontend.dev',
    title: 'Создаю современные\nвеб-интерфейсы',
    desc: 'Интерфейсы на React, Vue, Nuxt с TypeScript. Фокус на производительность, анимации и отличный UX.',
    tags: ['React', 'Vue', 'Nuxt', 'TypeScript', 'Tailwind'],
  },
  {
    id: '02',
    bin: 'backend.dev',
    title: 'Строю надёжный\nсерверный слой',
    desc: 'REST API на Node.js, NestJS и Bun. Работаю с PostgreSQL и Prisma, проектирую схемы данных.',
    tags: ['Node.js', 'Nest.js', 'Bun', 'PostgreSQL', 'Prisma'],
  },
]

export function ServicesSection() {
  return (
    <section id='services' className='scroll-mt-24'>
      <Prompt cmd='ls ~/services' comment='чем помогу' index='04' />

      <m.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.15 }}
        className='mt-5 grid grid-cols-2 gap-4 sm:grid-cols-1'
      >
        {SERVICES.map((s) => (
          <m.article
            key={s.id}
            variants={cardReveal}
            className='panel bracket group flex flex-col p-8 transition-colors hover:border-acc-dim sm:p-5'
          >
            <p className='text-sm'>
              <span className='text-acc'>$</span>{' '}
              <span className='text-text-muted'>./{s.bin}</span>
              <span className='text-text-dim'> --service {s.id}</span>
            </p>

            <h3 className='mt-6 whitespace-pre-line font-display text-2xl font-bold leading-tight text-text transition-[text-shadow] group-hover:text-glow'>
              {s.title}
            </h3>

            <p className='mt-4 leading-relaxed text-text-muted'>{s.desc}</p>

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
