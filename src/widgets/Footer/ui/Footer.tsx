export function Footer() {
  return (
    <footer className='mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-8 md:px-5'>
      <span className='text-sm text-muted'>
        thisisaliyev® {new Date().getFullYear()}
      </span>
      <span className='text-sm text-muted'>Фронтенд разработчик</span>
    </footer>
  )
}
