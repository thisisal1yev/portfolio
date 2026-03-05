import { Github } from 'lucide-react'
import { motion } from 'motion/react'

import { DesktopMenuItem } from '@shared/components'
import { EASE } from '@shared/lib'
import { MENU, type SectionId } from '../menu.data'

interface Props {
  visibility: Record<SectionId, boolean>
}

export function DesktopNavbar({ visibility }: Props) {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className='fixed top-0 left-0 z-50 w-full border-b border-gray bg-dark-primary/95 backdrop-blur-sm'
    >
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-8 md:px-5'>
        <span className='text-sm tracking-widest text-muted uppercase'>
          thisisaliyev®
        </span>

        <ul className='flex items-center gap-8 md:hidden'>
          {MENU.map((item) => (
            <li key={item.id}>
              <DesktopMenuItem
                href={item.href}
                isActive={visibility[item.id]}
              >
                {item.title}
              </DesktopMenuItem>
            </li>
          ))}
        </ul>

        <a
          href='https://github.com/thisisal1yev'
          target='_blank'
          rel='noopener noreferrer'
          className='text-muted transition-colors duration-200 hover:text-white'
        >
          <Github size={20} />
        </a>
      </div>
    </motion.nav>
  )
}
