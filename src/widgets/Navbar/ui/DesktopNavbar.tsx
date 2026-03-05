import { createPortal } from 'react-dom'

import { DesktopMenuItem } from '@shared/components'
import { MENU, type SectionId } from '../menu.data'

interface Props {
  visibility: Record<SectionId, boolean>
}

export function DesktopNavbar({ visibility }: Props) {
  return createPortal(
    <nav className='pointer-events-none fixed bottom-10 left-0 z-10 flex w-full items-center justify-center pt-12 md:hidden'>
      <div className='container flex justify-center'>
        <div className='bg-light-primary/90 ring-dark-primary/[20%] max-w-full rounded-3xl dark:bg-zinc-950/90'>
          <div className='scrollbar-none pointer-events-auto overflow-x-auto scroll-smooth p-1.5'>
            <div className='isolate grid grid-cols-5 gap-x-0.5'>
              {MENU.map((item) => (
                <DesktopMenuItem
                  key={item.id}
                  href={item.href}
                  isActive={visibility[item.id]}
                >
                  {item.icon}
                  {item.title}
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
