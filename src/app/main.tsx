import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion } from 'motion/react'

import { Home } from '@pages'
import { IntroOverlay } from '@widgets'
import { EASE } from '@shared/lib'
import './index.css'

const HOME_ENTER = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay: 0.6 },
}

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!introComplete && (
          <IntroOverlay
            key='intro'
            onComplete={() => setIntroComplete(true)}
          />
        )}
      </AnimatePresence>
      <motion.div
        initial={HOME_ENTER.initial}
        animate={HOME_ENTER.animate}
        transition={HOME_ENTER.transition}
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
