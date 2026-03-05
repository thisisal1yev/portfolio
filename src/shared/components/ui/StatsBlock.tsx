import { cn } from '@shared/lib'

interface Props {
  title: string
  text: string
  className?: string
}

export function StatsBlock({ title, text, className }: Props) {
  return (
    <div
      className={cn(
        'text-dark-secondary dark:bg-dark-primary flex w-full items-center justify-center rounded-2xl bg-neutral-300 p-5 text-center font-bold dark:text-white',
        className,
      )}
    >
      <div>
        <h3 className='text-[110px]'>{text}</h3>
        <p className='text-dark-secondary/80 dark:text-white'>{title}</p>
      </div>
    </div>
  )
}
