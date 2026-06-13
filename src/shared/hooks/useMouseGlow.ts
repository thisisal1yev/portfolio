import { useEffect } from 'react'

/**
 * Updates `--mx` / `--my` CSS vars on <html> to follow the pointer,
 * driving the phosphor cursor-glow. rAF-throttled, skipped for touch.
 */
export function useMouseGlow() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const root = document.documentElement
    let frame = 0
    let x = 0
    let y = 0

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (frame) return
      frame = requestAnimationFrame(() => {
        root.style.setProperty('--mx', `${x}px`)
        root.style.setProperty('--my', `${y}px`)
        frame = 0
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
}
