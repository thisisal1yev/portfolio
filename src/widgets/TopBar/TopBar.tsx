import { m } from 'motion/react'

import { useClock } from '@shared/hooks'
import { EASE } from '@shared/lib'

export function TopBar() {
  const time = useClock()

  return (
    <m.header
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
      className='sticky top-0 z-40 -mx-6 mb-2 border-b border-border bg-bg/70 px-6 backdrop-blur-md sm:-mx-4 sm:px-4'
    >
      <div className='mx-auto flex h-12 max-w-[1500px] items-center justify-between gap-4'>
        {/* path */}
        <div className='flex items-center gap-3'>
          <span className='text-acc'>$</span>
          <span className='text-text-muted text-sm xs:hidden'>
            aliyev<span className='text-acc-dim'>@</span>portfolio
            <span className='text-text-dim'>: </span>
            <span className='text-cyan'>~/</span>
            <span className='text-text-dim'> — zsh</span>
          </span>
        </div>

        {/* clock + availability */}
        <div className='flex items-center gap-5'>
          <span className='text-text-muted text-sm tabular-nums sm:hidden'>
            <span className='text-text-dim'>TSH </span>
            {time || '--:--:--'}
          </span>

          <span className='flex items-center gap-2 text-sm'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-acc opacity-60' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-acc' />
            </span>
            <span className='text-acc text-glow'>open_to_work</span>
          </span>
        </div>
      </div>
    </m.header>
  )
}
