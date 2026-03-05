import { cn } from '@shared/lib'
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  href: string
  label: string
  className?: string
}

export function Link({ children, label, href, className }: Props) {
  return (
    <span className={cn('flex items-center gap-2 sm:text-sm', className)}>
      <span>{label}&nbsp;</span>

      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='underline-offset-4 hover:underline'
      >
        {children}
      </a>
    </span>
  )
}
