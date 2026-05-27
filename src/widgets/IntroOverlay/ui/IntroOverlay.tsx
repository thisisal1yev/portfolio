import { useEffect } from 'react'
import { motion } from 'motion/react'

import { EASE } from '@shared/lib'

interface Props {
  onComplete: () => void
}

const LEFT_EXIT = { x: '-110vw', transition: { duration: 0.7, ease: EASE } }
const RIGHT_EXIT = { x: '110vw', transition: { duration: 0.7, ease: EASE } }
const ENTER_TRANSITION = { duration: 0.4, ease: EASE }

export function IntroOverlay({ onComplete }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(onComplete, 500)
    return () => {
      document.body.style.overflow = ''
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.75, duration: 0 } }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-bg'
    >
      <div className='flex items-center'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: ENTER_TRANSITION }}
          exit={LEFT_EXIT}
          className='font-black italic uppercase leading-none tracking-[-0.05em] text-text text-[clamp(60px,10vw,140px)]'
        >
          THISIS
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: ENTER_TRANSITION }}
          exit={RIGHT_EXIT}
          className='font-black italic uppercase leading-none tracking-[-0.05em] text-text text-[clamp(60px,10vw,140px)]'
        >
          ALIYEV
        </motion.span>
      </div>
    </motion.div>
  )
}
