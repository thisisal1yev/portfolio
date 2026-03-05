export function Footer() {
  return (
    <footer className='flex items-center justify-between'>
      <span className='text-sm text-text-muted'>
        thisisaliyev® {new Date().getFullYear()}
      </span>
      <span className='text-sm text-text-muted'>Фронтенд разработчик</span>
    </footer>
  )
}
