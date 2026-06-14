import { m } from 'motion/react'

import { Prompt } from '@shared/components'
import { staggerContainer } from '@shared/lib'
import { experienceData } from './experience.data'
import { ExperienceCard } from './ui/ExperienceCard'

/** deterministic 7-char "commit hash" from a string */
function shortHash(seed: string) {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return h.toString(16).padStart(7, '0').slice(0, 7)
}

export function ExperienceSection() {
  return (
    <section id='experience' className='scroll-mt-24'>
      <Prompt
        cmd='git log --author=aliyev'
        comment='опыт работы'
        title='Опыт работы'
        index='06'
      />

      <m.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        className='panel mt-5 p-8 sm:p-5'
      >
        {experienceData.map((item, i) => (
          <ExperienceCard
            key={item.id}
            {...item}
            hash={shortHash(item.company + item.duration)}
            isFirst={i === 0}
            isLast={i === experienceData.length - 1}
          />
        ))}
      </m.div>
    </section>
  )
}
