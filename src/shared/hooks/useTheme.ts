import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme.context'

export function useTheme() {
  return useContext(ThemeContext)
}
