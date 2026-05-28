import { motion } from 'motion/react'

import { SectionLabel } from '@shared/components'
import { fadeUp, staggerContainer } from '@shared/lib'
import { ProjectsList } from '../ProjectsList'

export function ProjectsSection() {
  return (
    <motion.section
      id='projects'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      className='bg-surface rounded-2xl p-8 sm:p-5'
    >
      <SectionLabel
        index='6'
        label='Проекты'
      />

      <motion.h2
        variants={fadeUp}
        className='text-text mt-4 mb-8 text-4xl font-bold md:text-3xl'
      >
        Избранные проекты
      </motion.h2>

      <ProjectsList />
    </motion.section>
  )
}
