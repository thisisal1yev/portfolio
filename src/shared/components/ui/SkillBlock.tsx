import { cn } from '@shared/lib'

export function SkillBlock({
  className,
  skill,
  children,
}: Readonly<{
  className?: string
  skill: string
  children: React.ReactNode
}>) {
  return (
    <div
      className={cn(
        'dark:bg-dark-secondary bg-gray hover:border-purple group flex h-52 w-80 flex-col items-center justify-center space-y-2.5 rounded-xl border-2 border-transparent p-1 text-lg font-medium text-white transition-colors duration-300',
        className,
      )}
    >
      <div className='aspect-square h-24 w-24 grayscale transition-all duration-300 group-hover:grayscale-0'>
        {children}
      </div>
      <span>{skill}</span>
    </div>
  )
}
