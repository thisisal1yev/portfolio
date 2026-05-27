import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion } from 'motion/react'

import { Home } from '@pages'
import { IntroOverlay } from '@widgets'
import { EASE } from '@shared/lib'
import './index.css'

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
      {introComplete && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={HOME_TRANSITION}
        >
          <Home />
        </motion.div>
      )}
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
