import { m } from 'motion/react'

import { Prompt, Tag } from '@shared/components'
import { fadeUp, staggerContainer } from '@shared/lib'
import { MarqueeBlock } from '../MarqueeBlock'
import { SKILL_GROUPS } from '../MarqueeBlock/skills.data'

export function SkillsSection() {
  return (
    <section id='stack' className='scroll-mt-24'>
      <Prompt
        cmd='cat stack.json'
        comment='технический стек'
        title='Технический стек'
        index='03'
      />

      <m.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.15 }}
        className='panel bracket mt-5 overflow-hidden p-8 sm:p-5'
      >
        <p className='text-sm text-text-muted'>{'{'}</p>

        <div className='space-y-5 py-3'>
          {SKILL_GROUPS.map((group) => (
            <m.div key={group.key} variants={fadeUp} className='pl-4'>
              <p className='mb-2.5 text-sm'>
                <span className='text-acc'>"{group.key}"</span>
                <span className='text-text-muted'>: [</span>
              </p>
              <div className='flex flex-wrap gap-2 pl-4'>
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
              <span className='block pt-1 text-sm text-text-muted'>]</span>
            </m.div>
          ))}
        </div>

        <p className='text-sm text-text-muted'>{'}'}</p>

        <MarqueeBlock />
      </m.div>
    </section>
  )
}
