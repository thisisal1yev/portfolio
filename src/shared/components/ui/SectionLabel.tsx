import { motion } from 'motion/react'

import { fadeIn } from '@shared/lib'

interface Props {
  index: string
  label: string
}

export function SectionLabel({ index, label }: Props) {
  return (
    <motion.span
      variants={fadeIn}
      className='mb-6 inline-flex items-center gap-2 rounded-full bg-surface-dark px-4 py-1.5 text-sm text-white'
    >
      <span>{index}</span>
      {label}
    </motion.span>
  )
}
