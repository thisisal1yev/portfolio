import { cn } from '@shared/lib'
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  className?: string
}

export function HorizontalLine({ className, children }: Props) {
  return (
    <span
      className={cn(
        'dark:bg-purple inline-block h-1.5 w-32 rounded-xl bg-purple-800',
        className,
      )}
    >
      {children}
    </span>
  )
}
