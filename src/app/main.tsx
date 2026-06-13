import { useCallback, useRef, useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  useAnimation,
} from 'motion/react'

import { Home } from '@pages'
import { IntroOverlay } from '@widgets'
import { CRTOverlay } from '@shared/components'
import { EASE } from '@shared/lib'
import './index.css'

function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const homeControls = useAnimation()
  const startedRef = useRef(false)

  const handleIntroComplete = useCallback(() => {
    if (startedRef.current) return
    startedRef.current = true
    setIntroComplete(true)
    homeControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE },
    })
  }, [homeControls])

  return (
    <LazyMotion features={domAnimation} strict>
      <CRTOverlay />

      <AnimatePresence>
        {!introComplete && (
          <IntroOverlay key='intro' onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <m.div initial={{ opacity: 0, y: 24 }} animate={homeControls}>
        <Home />
      </m.div>
    </LazyMotion>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
