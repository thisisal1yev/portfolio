import { motion } from 'motion/react'

import { SectionLabel } from '@shared/components'
import { fadeUp, staggerContainer } from '@shared/lib'
import { MarqueeBlock } from '../MarqueeBlock'

export function SkillsSection() {
  return (
    <motion.section
      id='skills'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.15 }}
      className='bg-surface rounded-2xl p-8 sm:p-5'
    >
      <SectionLabel
        index='2'
        label='Навыки'
      />

      <div className='mt-4 flex items-center justify-between gap-16 md:flex-col md:items-start'>
        <div className='space-y-4'>
          <motion.h2
            variants={fadeUp}
            className='text-text text-5xl leading-tight font-bold md:text-4xl'
          >
            Технические
            <br />
            навыки
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className='text-text-muted text-lg'
          >
            В арсенале все современные
            <br />
            стеки технологий
          </motion.p>
        </div>

        <MarqueeBlock />
      </div>
    </motion.section>
  )
}
