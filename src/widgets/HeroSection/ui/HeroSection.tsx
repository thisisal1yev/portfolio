import { Play } from 'lucide-react'
import { motion } from 'motion/react'

import { fadeUp } from '@shared/lib'

export function HeroSection() {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={fadeUp}
      className='relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface'
    >
      <img
        src='https://framerusercontent.com/images/wQo7RdwFi65CZtFq2ttWIRPfRoA.jpg'
        alt='Portfolio showcase'
        className='h-full w-full object-cover'
      />

      <a
        href='https://github.com/thisisal1yev'
        target='_blank'
        rel='noopener noreferrer'
        className='absolute top-5 left-5 flex items-center gap-2 rounded-full bg-surface-dark px-4 py-2 text-sm text-white transition-opacity hover:opacity-80'
      >
        <Play size={14} />
        Портфолио
      </a>
    </motion.div>
  )
}
