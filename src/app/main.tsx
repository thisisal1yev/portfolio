import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion } from 'motion/react'

import { Home } from '@pages'
import { IntroOverlay } from '@widgets'
import { EASE } from '@shared/lib'
import './index.css'

const HOME_INITIAL = { opacity: 0, y: 50 }
const HOME_VISIBLE = { opacity: 1, y: 0 }
const HOME_TRANSITION = { duration: 0.7, ease: EASE }

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
        initial={HOME_INITIAL}
        animate={introComplete ? HOME_VISIBLE : HOME_INITIAL}
        transition={HOME_TRANSITION}
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
