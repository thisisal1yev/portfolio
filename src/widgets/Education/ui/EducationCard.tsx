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
      className='panel bracket group flex flex-col gap-2.5 p-6 transition-colors hover:border-acc-dim'
    >
      <p className='text-xs text-acc'>
        <span className='text-text-dim'>[</span>
        {period}
        <span className='text-text-dim'>]</span>
      </p>
      <h3 className='font-display text-xl font-bold leading-snug text-text'>
        {institution}
      </h3>
      <p className='text-sm text-text-muted'>
        {'> '}
        {degree}
      </p>
      <p className='text-sm leading-relaxed text-text-dim'>{description}</p>
    </motion.div>
  )
}
