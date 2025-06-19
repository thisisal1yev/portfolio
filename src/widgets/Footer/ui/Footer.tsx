import { useTheme } from '@shared/hooks'

export function Footer() {
  const { theme, toggleTheme } = useTheme()

  return (
    <section
      id='footer'
      className='dark:bg-dark-secondary rounded-xl bg-white p-5'
    >
      <button onClick={toggleTheme}>
        {theme === 'dark' ? 'dark' : 'light'}
      </button>
    </section>
  )
}
