import { cn } from '@shared/lib'

export function Link({
  children,
  label,
  href,
  className,
}: Readonly<{
  children: React.ReactNode
  href: string
  label: string
  className?: string
}>) {
  return (
    <p className={cn('flex items-center gap-2 sm:text-sm', className)}>
      <span>{label}&nbsp;</span>

      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='underline-offset-4 hover:underline'
      >
        {children}
      </a>
    </p>
  )
}
