import { m } from 'motion/react'

import { Prompt } from '@shared/components'
import { staggerContainer } from '@shared/lib'
import { educationData } from './education.data'
import { EducationCard } from './ui/EducationCard'

export function EducationSection() {
  return (
    <section id='education' className='scroll-mt-24'>
      <Prompt cmd='cat education.log' comment='образование' index='05' />

      <m.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        className='mt-5 grid grid-cols-2 gap-4 md:grid-cols-1'
      >
        {educationData.map((item) => (
          <EducationCard key={item.id} {...item} />
        ))}
      </m.div>
    </section>
  )
}
