import { motion } from 'motion/react'

import { lineGrow } from '@shared/lib'

export function HorizontalLine() {
  return (
    <motion.div
      variants={lineGrow}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='h-px w-full bg-gray origin-left'
    />
  )
}
