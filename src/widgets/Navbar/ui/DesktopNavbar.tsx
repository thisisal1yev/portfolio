import { motion } from 'motion/react'

import { EASE } from '@shared/lib'

export function DesktopNavbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className='flex items-center justify-between px-5 py-4'
    >
      <span className='text-sm tracking-wide text-text-muted'>
        thisisaliyev®, v0.1
      </span>

      <a
        href='https://t.me/thisisaliyev'
        target='_blank'
        rel='noopener noreferrer'
        className='text-sm tracking-wide text-text-muted underline-offset-4 hover:underline'
      >
        тг. @thisisaliyev
      </a>
    </motion.nav>
  )
}
