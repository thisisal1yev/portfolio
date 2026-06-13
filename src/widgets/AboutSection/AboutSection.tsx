import { motion } from 'motion/react'

import { Prompt } from '@shared/components'
import { fadeUp, staggerContainer } from '@shared/lib'

const OBJECT = [
  { k: 'name', v: '"Ахмадилло Алиев"' },
  { k: 'from', v: '"Узбекистан 🇺🇿"' },
  { k: 'role', v: '"Software Engineer"' },
  { k: 'langs', v: '["UZ", "RU", "EN", "JA"]' },
  { k: 'firstLove', v: '["HTML", "CSS", "Python"]' },
  { k: 'learning', v: 'always === true' },
]

export function AboutSection() {
  return (
    <motion.section
      id='about'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.15 }}
      className='scroll-mt-24'
    >
      <Prompt
        cmd='cat about.md'
        comment='о себе'
        index='01'
      />

      <div className='panel bracket mt-5 grid grid-cols-[1.2fr_1fr] gap-8 p-8 sm:p-5 md:grid-cols-1'>
        {/* prose */}
        <div className='space-y-5'>
          <motion.p
            variants={fadeUp}
            className='text-text text-lg leading-relaxed sm:text-base'
          >
            <span className='text-acc'>## whoami → </span>
            <span className='text-acc text-glow font-medium'>Ахмадилло</span>,
            Software Engineer (UZ).
          </motion.p>

          <motion.p
            variants={fadeUp}
            className='text-text-muted leading-relaxed'
          >
            Пишу fullstack на TypeScript: React / Vue + Node.js / NestJS. Решаю
            задачи end-to-end.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className='text-text-dim text-sm leading-relaxed'
          >
            {'// hobby: '}хакатоны (финалист, призёр) + языки{' '}
            <span className='text-text-muted'>UZ · RU · EN · JA</span>
          </motion.p>
        </div>

        {/* code object */}
        <motion.div
          variants={fadeUp}
          className='border-border bg-bg-deep/60 self-start rounded-sm border p-5 text-sm leading-relaxed'
        >
          <p className='text-text-dim'>{'// developer.ts'}</p>
          <p className='mt-2'>
            <span className='text-magenta'>const</span>{' '}
            <span className='text-cyan'>dev</span>{' '}
            <span className='text-text-muted'>= {'{'}</span>
          </p>
          {OBJECT.map(({ k, v }) => (
            <p
              key={k}
              className='pl-4'
            >
              <span className='text-acc'>{k}</span>
              <span className='text-text-muted'>: </span>
              <span className='text-amber'>{v}</span>
              <span className='text-text-dim'>,</span>
            </p>
          ))}
          <p className='text-text-muted'>{'}'}</p>
        </motion.div>
      </div>
    </motion.section>
  )
}
