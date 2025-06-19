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
    <p className={cn('flex items-center gap-2', className)}>
      <span>{label}&nbsp;</span>

      <a
        href={href}
        className='underline-offset-4 hover:underline'
      >
        {children}
      </a>
    </p>
  )
}
