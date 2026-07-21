import { m } from 'motion/react'
import { RotateCcw } from 'lucide-react'

import { EASE } from '@shared/lib'

export interface StatusResult {
  /** HTTP status (0 = no response / network error) */
  code: number
  ok: boolean
  message: string
}

interface Props extends StatusResult {
  onRetry: () => void
}

/** 3×5 bitmaps, one per digit — hand-built pixel font (MSB = left column). */
const GLYPHS: Record<string, readonly number[]> = {
  '0': [0b111, 0b101, 0b101, 0b101, 0b111],
  '1': [0b010, 0b110, 0b010, 0b010, 0b111],
  '2': [0b111, 0b001, 0b111, 0b100, 0b111],
  '3': [0b111, 0b001, 0b111, 0b001, 0b111],
  '4': [0b101, 0b101, 0b111, 0b001, 0b001],
  '5': [0b111, 0b100, 0b111, 0b001, 0b111],
  '6': [0b111, 0b100, 0b111, 0b101, 0b111],
  '7': [0b111, 0b001, 0b010, 0b010, 0b010],
  '8': [0b111, 0b101, 0b111, 0b101, 0b111],
  '9': [0b111, 0b101, 0b111, 0b001, 0b111],
}

const ROWS = [0, 1, 2, 3, 4]
const COLS = [0, 1, 2]

function PixelDigit({ char, color, glow }: { char: string; color: string; glow: string }) {
  const rows = GLYPHS[char] ?? GLYPHS['0']
  return (
    <div className='grid grid-cols-3 gap-[3px]'>
      {ROWS.flatMap(r =>
        COLS.map(c => {
          const lit = (rows[r] >> (2 - c)) & 1
          return (
            <span
              key={`${r}-${c}`}
              className='size-2.5 rounded-[1px] sm:size-2'
              style={{
                background: lit ? color : 'transparent',
                boxShadow: lit ? `0 0 6px ${glow}` : undefined,
              }}
            />
          )
        }),
      )}
    </div>
  )
}

export function StatusOverlay({ code, ok, message, onRetry }: Props) {
  const color = ok ? 'var(--color-acc)' : 'var(--color-magenta)'
  const digits = String(code).padStart(3, '0').split('')

  return (
    <m.div
      role='status'
      aria-live='polite'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: EASE }}
      className='absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 bg-bg-deep/92 p-6 text-center backdrop-blur-sm'
    >
      {/* signature — hand-built pixel status code with a one-shot CRT flicker */}
      <m.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: [0, 1, 0.4, 1], scale: 1 }}
        transition={{ duration: 0.45, times: [0, 0.45, 0.65, 1], ease: EASE }}
        className='flex items-end gap-2.5'
        aria-hidden='true'
      >
        {digits.map((ch, i) => (
          <PixelDigit key={i} char={ch} color={color} glow={color} />
        ))}
      </m.div>

      <m.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.3, ease: EASE }}
      >
        <p
          className={`font-mono text-lg font-bold tracking-[0.35em] ${ok ? 'text-acc text-glow' : 'text-magenta'}`}
        >
          {ok ? 'OK' : 'FAILED'}
        </p>
        <p className='mx-auto mt-2 max-w-[16rem] text-xs text-text-muted'>
          <span className='sr-only'>{`HTTP ${code}: `}</span>
          {message}
        </p>
      </m.div>

      {!ok && (
        <m.button
          type='button'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.42, duration: 0.25 }}
          onClick={onRetry}
          className='bracket inline-flex items-center gap-2 border border-acc-dim bg-acc/10 px-4 py-2 text-xs text-acc transition-colors hover:bg-acc/20'
        >
          <RotateCcw size={13} />
          <span>send again</span>
        </m.button>
      )}
    </m.div>
  )
}
