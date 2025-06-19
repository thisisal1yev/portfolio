import { useEffect, useState, type PropsWithChildren } from 'react'
import { ThemeContext } from '../contexts/theme.context'

interface Props extends PropsWithChildren {}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('theme')

    return stored === 'dark' || stored === 'light' ? stored : 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
