import { motion } from 'motion/react'

import { SectionLabel } from '@shared/components'
import { staggerContainer } from '@shared/lib'
import { educationData } from './education.data'
import { EducationCard } from './ui/EducationCard'

export function EducationSection() {
  return (
    <motion.section
      id='education'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      className='rounded-2xl bg-surface p-8 sm:p-5'
    >
      <SectionLabel
        index='3'
        label='Образование'
      />

      <div className='mt-8 grid grid-cols-2 gap-5 md:grid-cols-1'>
        {educationData.map((item) => (
          <EducationCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </motion.section>
  )
}
