import { ThemeContext } from '@shared/contexts'
import { useContext } from 'react'

export function useTheme() {
  return useContext(ThemeContext)
}
