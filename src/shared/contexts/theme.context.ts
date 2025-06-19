import { createContext } from 'react'

export interface ThemeContextType {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
})
