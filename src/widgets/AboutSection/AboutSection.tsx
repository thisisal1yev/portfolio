import { m } from 'motion/react'

import { Prompt } from '@shared/components'
import { CARD, cn, fadeUp, revealOnView } from '@shared/lib'

const OBJECT = [
  { k: 'name', v: '"Akhmadillo Aliyev"' },
  { k: 'from', v: '"Uzbekistan 🇺🇿"' },
  { k: 'role', v: '"Software Engineer"' },
  { k: 'langs', v: '["UZ", "RU", "EN", "JA"]' },
  { k: 'learning', v: 'always === true' },
]

export function AboutSection() {
  return (
    <m.section
      id='about'
      {...revealOnView()}
      className='scroll-mt-24'
    >
      <Prompt
        cmd='cat about.md'
        comment='about me'
        title='About'
        index='01'
      />

      <div className={cn(CARD, 'mt-5 grid grid-cols-[1.2fr_1fr] gap-8 p-8 sm:p-5 md:grid-cols-1')}>
        {/* prose */}
        <div className='space-y-5'>
          <m.p
            variants={fadeUp}
            className='text-text text-lg leading-relaxed sm:text-base'
          >
            <span className='text-acc'>## whoami → </span>
            <span className='text-acc text-glow font-medium'>Akhmadillo</span>,
            Software Engineer (UZ).
          </m.p>

          <m.p
            variants={fadeUp}
            className='text-text-muted leading-relaxed'
          >
            I write fullstack in TypeScript: React / Vue + Node.js / NestJS. I
            solve problems end-to-end.
          </m.p>

          <m.p
            variants={fadeUp}
            className='text-text-dim text-sm leading-relaxed'
          >
            {'// hobby: '}hackathons (finalist, winner) + languages{' '}
            <span className='text-text-muted'>UZ · RU · EN · JA</span>
          </m.p>

          <m.p
            variants={fadeUp}
            className='text-acc text-glow leading-relaxed font-medium'
          >
            ## t-shaped → broad coverage across the stack, depth in frontend
          </m.p>
        </div>

        {/* code object */}
        <m.div
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
        </m.div>
      </div>
    </m.section>
  )
}
