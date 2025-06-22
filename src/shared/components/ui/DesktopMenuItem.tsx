import { cn } from '@shared/lib'
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  isActive?: boolean
  href?: string
}

export function DesktopMenuItem({ href, isActive, children }: Props) {
  return (
    <a
      className={cn('navbar_link', isActive && 'navbar_link_active')}
      href={href || '#'}
      data-framework='react'
    >
      {children}
    </a>
  )
}
