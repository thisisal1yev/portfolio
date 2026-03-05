import { motion } from 'motion/react'

import { SectionLabel } from '@shared/components'
import { staggerContainer } from '@shared/lib'
import { experienceData } from './experience.data'
import { ExperienceCard } from './ui/ExperienceCard'

export function ExperienceSection() {
  return (
    <motion.section
      id='experience'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      className='rounded-2xl bg-surface p-8 sm:p-5'
    >
      <SectionLabel
        index='3'
        label='Опыт работы'
      />

      <div className='mt-8 grid grid-cols-2 gap-5 md:grid-cols-1'>
        {experienceData.map((item) => (
          <ExperienceCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </motion.section>
  )
}
