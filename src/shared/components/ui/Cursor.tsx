import { cn } from '@shared/lib'

interface Props {
  className?: string
  small?: boolean
}

/** Blinking phosphor block caret. */
export function Cursor({ className, small }: Props) {
  return <span className={cn('caret', small && 'caret-sm', className)} />
}
