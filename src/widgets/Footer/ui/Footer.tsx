import { motion } from 'motion/react'

import { fadeIn } from '@shared/lib'

export function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      className='flex items-center justify-between'
    >
      <span className='text-sm text-text-muted'>
        thisisaliyev® {new Date().getFullYear()}
      </span>
      <span className='text-sm text-text-muted'>Software Developer</span>
    </motion.footer>
  )
}
