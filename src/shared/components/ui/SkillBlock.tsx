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
        'dark:bg-dark-secondary bg-gray hover:border-purple group flex h-52 w-80 flex-col items-center justify-center space-y-2.5 rounded-xl border-2 border-transparent p-1 text-lg font-medium text-white transition-colors duration-300',
        className,
      )}
    >
      <div className='aspect-square h-24 w-24 grayscale transition-colors duration-300 group-hover:grayscale-0'>
        {children}
      </div>
      <span>{skill}</span>
    </div>
  )
}
