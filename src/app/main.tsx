import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Home } from '@pages'
import { ThemeProvider } from '@shared/providers'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </StrictMode>,
)
