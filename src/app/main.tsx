import { useCallback, useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion, useAnimation } from 'motion/react'

import { Home } from '@pages'
import { IntroOverlay } from '@widgets'
import { EASE } from '@shared/lib'
import './index.css'

function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const homeControls = useAnimation()

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
    homeControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    })
  }, [homeControls])

  return (
    <>
      <AnimatePresence>
        {!introComplete && (
          <IntroOverlay
            key='intro'
            onComplete={handleIntroComplete}
          />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={homeControls}
      >
        <Home />
      </motion.div>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
