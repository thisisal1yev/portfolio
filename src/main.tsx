import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './app/index.css'
import { Home } from './app/index.tsx'
import { ThemeProvider } from './shared/providers/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </StrictMode>,
)
