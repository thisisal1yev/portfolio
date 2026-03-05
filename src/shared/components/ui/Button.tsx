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
        'inline-flex items-center border border-gray px-6 py-3 text-sm tracking-widest uppercase text-white transition-colors duration-300 hover:border-purple hover:text-purple',
        className,
      )}
    >
      {label}
    </a>
  )
}
