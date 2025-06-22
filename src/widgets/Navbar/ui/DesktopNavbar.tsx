import { createPortal } from 'react-dom'

import { DesktopMenuItem } from '@shared/components/ui/DesktopMenuItem'
import { renderMenuItemIcon } from '../lib/renderMenuItemIcon'
import { menu } from '../menu.data'

type Props = {
  aboutVisible: boolean
  skillsVisible: boolean
  projectsVisible: boolean
  contactsVisible: boolean
}

export function DesktopNavbar({
  aboutVisible,
  skillsVisible,
  projectsVisible,
  contactsVisible,
}: Props) {
  const isElementInViewport = (
    id: 'about' | 'skills' | 'projects' | 'contacts',
  ): boolean => {
    switch (id) {
      case 'about':
        return aboutVisible
      case 'skills':
        return skillsVisible
      case 'projects':
        return projectsVisible
      case 'contacts':
        return contactsVisible
      default:
        return false
    }
  }

  return createPortal(
    <nav className='pointer-events-none fixed bottom-10 left-0 z-10 hidden w-full pt-12 lg:block'>
      <div className='container flex justify-center'>
        <div className='bg-light-primary/90 ring-dark-primary/[20%] max-w-full rounded-3xl dark:bg-zinc-950/90'>
          <div className='scrollbar-none pointer-events-auto overflow-x-auto scroll-smooth p-1.5'>
            <div className='isolate grid grid-cols-5 gap-x-0.5'>
              {menu.map((item) => (
                <DesktopMenuItem
                  key={item.title}
                  href={item.href}
                  isActive={isElementInViewport(item.id)}
                >
                  {renderMenuItemIcon(item.id)}
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                </DesktopMenuItem>
              ))}

              <a
                className='navbar_link'
                href='https://github.com/thisisal1yev'
                target='_blank'
                aria-label='GitHub'
              >
                <svg
                  viewBox='0 0 16 16'
                  className='size-6 fill-current'
                  role='none'
                >
                  <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>,
    document.body,
  )
}
