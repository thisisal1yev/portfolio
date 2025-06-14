import { cn } from '../lib/utils'

export function HorizontalLine({
  className,
  children,
}: Readonly<{
  children?: React.ReactNode
  className?: string
}>) {
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
