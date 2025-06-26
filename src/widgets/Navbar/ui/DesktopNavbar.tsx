import { createPortal } from 'react-dom'

import { DesktopMenuItem } from '@shared/components/ui/DesktopMenuItem'
import { renderMenuItemIcon } from '../lib/renderMenuItemIcon'
import { MENU } from '../menu.data'

type Props = {
  aboutVisible: boolean
  skillsVisible: boolean
  experienceVisible: boolean
  projectsVisible: boolean
  contactsVisible: boolean
}

export function DesktopNavbar({
  aboutVisible,
  skillsVisible,
  experienceVisible,
  projectsVisible,
  contactsVisible,
}: Props) {
  const isElementInViewport = (
    id: 'about' | 'skills' | 'projects' | 'contacts' | 'experience',
  ): boolean => {
    switch (id) {
      case 'about':
        return aboutVisible
      case 'skills':
        return skillsVisible
      case 'experience':
        return experienceVisible
      case 'projects':
        return projectsVisible
      case 'contacts':
        return contactsVisible
      default:
        return false
    }
  }

  return createPortal(
    <nav className='pointer-events-none fixed bottom-10 left-0 z-10 hidden w-full items-center justify-center pt-12 lg:flex'>
      <div className='container flex justify-center'>
        <div className='bg-light-primary/90 ring-dark-primary/[20%] max-w-full rounded-3xl dark:bg-zinc-950/90'>
          <div className='scrollbar-none pointer-events-auto overflow-x-auto scroll-smooth p-1.5'>
            <div className='isolate grid grid-cols-5 gap-x-0.5'>
              {MENU.map((item) => (
                <DesktopMenuItem
                  key={item.title}
                  href={item.href}
                  isActive={isElementInViewport(item.id)}
                >
                  {renderMenuItemIcon(item.id)}
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                </DesktopMenuItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>,
    document.body,
  )
}
