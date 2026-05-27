import { motion } from 'motion/react'

import { cardReveal } from '@shared/lib'

interface Props {
  institution: string
  degree: string
  period: string
  description: string
}

export function EducationCard({ institution, degree, period, description }: Props) {
  return (
    <motion.div
      variants={cardReveal}
      className='flex flex-col gap-3 rounded-xl bg-bg p-6'
    >
      <p className='text-sm tracking-wide text-text-muted'>{period}</p>
      <h3 className='text-2xl font-bold text-text'>{institution}</h3>
      <p className='text-base text-text-muted'>{degree}</p>
      <p className='text-sm leading-relaxed text-text-muted'>{description}</p>
    </motion.div>
  )
}
