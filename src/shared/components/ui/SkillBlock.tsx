import { cn } from '@shared/lib'
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  skill: string
  className?: string
}

export function SkillBlock({ skill, className, children }: Props) {
  return (
    <div
      className={cn(
        'group flex flex-col items-center justify-center gap-3 rounded-xl border border-transparent bg-bg p-6 transition-colors duration-300 hover:border-surface-dark/20',
        className,
      )}
    >
      <div className='h-12 w-12 grayscale transition-all duration-300 group-hover:grayscale-0'>
        {children}
      </div>
      <span className='text-sm text-text-muted'>{skill}</span>
    </div>
  )
}
