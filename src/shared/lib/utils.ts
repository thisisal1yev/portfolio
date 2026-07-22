import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Shared card surface — panel + hover-bracket framing. Compose with `cn()`. */
export const CARD = 'panel bracket transition-colors hover:border-acc-dim'

const RELATIVE_UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
]

// hoisted: building an Intl formatter is expensive, so reuse one instance
const RELATIVE_FORMATTER = new Intl.RelativeTimeFormat('en', {
  numeric: 'auto',
})

/** "2 days ago" / "yesterday" from an ISO timestamp. */
export function formatRelative(iso: string | null) {
  if (!iso) return '—'
  const seconds = Math.round((Date.now() - new Date(iso).getTime()) / 1000)
  if (seconds < 60) return 'just now'

  for (const [unit, secs] of RELATIVE_UNITS) {
    if (Math.abs(seconds) >= secs) {
      return RELATIVE_FORMATTER.format(-Math.round(seconds / secs), unit)
    }
  }
  return 'just now'
}
