import { useRef } from 'react'

import { useMouseGlow } from '@shared/hooks'

/** Phosphor cursor-glow (behind content) + scanline/vignette overlay (above). */
export function CRTOverlay() {
  const glowRef = useRef<HTMLDivElement>(null)
  useMouseGlow(glowRef)
  return (
    <>
      <div ref={glowRef} className='cursor-glow' aria-hidden />
      <div className='crt' aria-hidden />
    </>
  )
}
