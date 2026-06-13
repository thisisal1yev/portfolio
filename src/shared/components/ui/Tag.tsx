import type { PropsWithChildren } from 'react'

import { cn } from '@shared/lib'

interface Props extends PropsWithChildren {
  className?: string
}

/** Bracketed terminal chip: [ children ]. */
export function Tag({ children, className }: Props) {
  return (
    <span className={cn('tag font-medium', className)}>
      <span className='text-acc-dim'>[</span>
      {children}
      <span className='text-acc-dim'>]</span>
    </span>
  )
}
