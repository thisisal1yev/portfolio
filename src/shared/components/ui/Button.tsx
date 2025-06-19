import { cn } from '@shared/lib'
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  label: string
  link: string
  className?: string
}

export function Button({ className, children, label, link }: Props) {
  return (
    <a
      href={link}
      className={cn(
        'inline-flex items-center gap-x-1 text-lg text-white transition duration-300 active:scale-105',
        className,
      )}
    >
      {children}

      <span className='bg-dark-primary inline-block h-10 rounded-full px-4 py-1 transition-all duration-300 group-hover:rounded-s-none'>
        {label}
      </span>
    </a>
  )
}
