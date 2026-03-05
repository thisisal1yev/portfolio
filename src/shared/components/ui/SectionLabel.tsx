import { motion } from 'motion/react'

import { fadeIn } from '@shared/lib'

interface Props {
  index: string
  label: string
}

export function SectionLabel({ index, label }: Props) {
  return (
    <motion.p
      variants={fadeIn}
      className='mb-10 text-sm tracking-widest text-muted uppercase'
    >
      {index} — {label}
    </motion.p>
  )
}
