import { useMouseGlow } from '@shared/hooks'

/** Phosphor cursor-glow (behind content) + scanline/vignette overlay (above). */
export function CRTOverlay() {
  useMouseGlow()
  return (
    <>
      <div className='cursor-glow' aria-hidden />
      <div className='crt' aria-hidden />
    </>
  )
}
