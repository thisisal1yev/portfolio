import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './app/index.css'
import { Home } from './app/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
