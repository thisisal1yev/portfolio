import { m } from 'motion/react'

import { Prompt } from '@shared/components'
import { staggerContainer } from '@shared/lib'
import { hackathonsData } from './hackathons.data'
import { HackathonCard } from './ui/HackathonCard'

export function HackathonsSection() {
  return (
    <section id='hackathons' className='scroll-mt-24'>
      <Prompt
        cmd='ls ~/hackathons'
        comment='hackathons'
        title='Hackathons'
        index='07'
      />

      <m.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        className='mt-5 grid grid-cols-2 gap-4 md:grid-cols-1'
      >
        {hackathonsData.map((item) => (
          <HackathonCard key={item.id} {...item} />
        ))}
      </m.div>
    </section>
  )
}
