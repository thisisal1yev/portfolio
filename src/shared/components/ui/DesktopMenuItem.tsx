import { cn } from '@shared/lib'
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  isActive?: boolean
  href?: string
}

export function DesktopMenuItem({ href, isActive, children }: Props) {
  return (
    <a
      href={href ?? '#'}
      className={cn(
        'text-sm tracking-widest uppercase text-muted transition-colors duration-200 hover:text-white',
        isActive && 'text-purple',
      )}
    >
      {children}
    </a>
  )
}
