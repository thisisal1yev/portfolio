import { useEffect, type RefObject } from 'react'

/**
 * Moves the phosphor cursor-glow element to follow the pointer by writing
 * `transform` directly on it — a compositor-only property, so no other
 * element's styles are invalidated per frame. rAF-throttled, skipped for touch.
 */
export function useMouseGlow(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const el = ref.current
    if (!el) return
    let frame = 0
    let x = 0
    let y = 0

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (frame) return
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`
        frame = 0
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ref])
}
