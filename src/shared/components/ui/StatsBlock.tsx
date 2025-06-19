import { cn } from '@shared/lib'

export function StatsBlock({
  className,
  title,
  text,
}: Readonly<{
  text: string
  className?: string
  title: string
}>) {
  return (
    <div
      className={cn(
        'text-dark-secondary dark:bg-dark-secondary flex w-full items-center justify-center rounded-2xl bg-white p-5 text-center font-bold dark:text-white',
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
