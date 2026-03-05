import { cn } from '@shared/lib'

interface Props {
  label: string
  link: string
  className?: string
}

export function Button({ label, link, className }: Props) {
  return (
    <a
      href={link}
      className={cn(
        'inline-flex items-center rounded-full bg-surface-dark px-6 py-3 text-sm text-white transition-opacity duration-200 hover:opacity-80',
        className,
      )}
    >
      {label}
    </a>
  )
}
