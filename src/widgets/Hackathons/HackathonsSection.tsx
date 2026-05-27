import { motion } from 'motion/react'

import { SectionLabel } from '@shared/components'
import { staggerContainer } from '@shared/lib'
import { hackathonsData } from './hackathons.data'
import { HackathonCard } from './ui/HackathonCard'

export function HackathonsSection() {
  return (
    <motion.section
      id='hackathons'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      className='rounded-2xl bg-surface p-8 sm:p-5'
    >
      <SectionLabel
        index='5'
        label='Хакатоны'
      />

      <div className='mt-8 grid grid-cols-2 gap-5 md:grid-cols-1'>
        {hackathonsData.map((item) => (
          <HackathonCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </motion.section>
  )
}
