import { useCallback, useEffect, useEffectEvent, useState } from 'react'
import { m } from 'motion/react'

import { EASE } from '@shared/lib'
import { Cursor } from '@shared/components'

interface Props {
  onComplete: () => void
}

interface BootLine {
  text: string
  ok?: boolean
  accent?: boolean
}

const LINES: BootLine[] = [
  { text: 'boot: thisisaliyev.dev — kernel v2.0' },
  { text: 'mount  /about /stack /projects /experience', ok: true },
  { text: 'fetch  github.api/stats', ok: true },
  { text: 'init   motion + crt-shader', ok: true },
  { text: '$ whoami', accent: true },
  { text: '> axmadillo_aliyev :: software_engineer' },
  { text: '$ ./start --portfolio' },
]

const STEP_MS = 230

export function IntroOverlay({ onComplete }: Props) {
  const [visible, setVisible] = useState(0)

  const finish = useCallback(() => {
    setVisible(LINES.length)
    onComplete()
  }, [onComplete])

  const onDone = useEffectEvent(() => onComplete())
  const onSkip = useEffectEvent(() => finish())

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    let i = 0
    const id = setInterval(() => {
      i += 1
      setVisible(i)
      if (i >= LINES.length) {
        clearInterval(id)
        setTimeout(onDone, 520)
      }
    }, STEP_MS)

    const skip = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') onSkip()
    }
    window.addEventListener('keydown', skip)

    return () => {
      document.body.style.overflow = ''
      clearInterval(id)
      window.removeEventListener('keydown', skip)
    }
  }, [])

  return (
    <m.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: EASE } }}
      onClick={finish}
      className='fixed inset-0 z-50 flex items-center justify-center bg-bg-deep px-6'
    >
      <div className='cursor-glow' aria-hidden />

      <div className='relative w-full max-w-xl'>
        <div className='mb-6 flex items-center gap-2'>
          <span className='h-3 w-3 rounded-full bg-dot-red' />
          <span className='h-3 w-3 rounded-full bg-dot-amber' />
          <span className='h-3 w-3 rounded-full bg-dot-green' />
          <span className='text-text-dim ml-3 text-xs'>— init.sh</span>
        </div>

        <div className='space-y-1.5 text-sm sm:text-xs'>
          {LINES.slice(0, visible).map((line, i) => (
            <m.div
              key={line.text}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className='flex items-center justify-between gap-4'
            >
              <span
                className={
                  line.accent
                    ? 'text-acc text-glow'
                    : line.text.startsWith('>')
                      ? 'text-text'
                      : 'text-text-muted'
                }
              >
                {line.text}
                {i === visible - 1 && <Cursor small />}
              </span>
              {line.ok && (
                <span className='text-acc text-glow shrink-0'>[ ok ]</span>
              )}
            </m.div>
          ))}
        </div>

        <p className='text-text-dim mt-8 text-xs'>
          press <span className='text-text-muted'>Enter</span> to skip
        </p>
      </div>
    </m.div>
  )
}
