import { createPortal } from 'react-dom'

export function DesktopNavbar() {
  return createPortal(
    <nav className='pointer-events-none fixed bottom-5 left-0 z-10 w-full pt-12'>
      <div className='container flex justify-center'>
        <div className='bg-light-primary/90 max-w-full rounded-[1.375rem] ring ring-black/[5%] backdrop-blur-xl backdrop-saturate-[140%] dark:border dark:border-white/[8%] dark:bg-zinc-950/90 dark:ring-0'>
          <div className='scrollbar-none pointer-events-auto overflow-x-auto scroll-smooth rounded-[inherit] p-1.5'>
            <div className='isolate grid grid-cols-[repeat(5,5.6875em)]'>
              <a
                className='text-muted hover:text-primary data-[active]:text-primary group/link relative flex flex-col items-center gap-1.5 rounded-2xl px-4 pt-2.5 pb-1.5 text-xs font-medium transition-[color] outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset'
                href='/'
                data-framework='react'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-book-open size-6'
                >
                  <path d='M12 7v14'></path>
                  <path d='M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z'></path>
                </svg>
                Docs
              </a>
              <a
                className='text-muted hover:text-primary data-[active]:text-primary group/link relative flex flex-col items-center gap-1.5 rounded-2xl px-4 pt-2.5 pb-1.5 text-xs font-medium transition-[color] outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset'
                data-active=''
                href='/examples'
                data-framework='react'
              >
                <div
                  className='absolute inset-0 -z-10 size-full rounded-[inherit] bg-white shadow-lg dark:bg-white/12.5 dark:shadow-none'
                  style={{ opacity: 1 }}
                ></div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-shapes size-6'
                >
                  <path d='M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z'></path>
                  <rect
                    x='3'
                    y='14'
                    width='7'
                    height='7'
                    rx='1'
                  ></rect>
                  <circle
                    cx='17.5'
                    cy='17.5'
                    r='3.5'
                  ></circle>
                </svg>
                Examples
              </a>
              <a
                className='text-muted hover:text-primary data-[active]:text-primary group/link relative flex flex-col items-center gap-1.5 rounded-2xl px-4 pt-2.5 pb-1.5 text-xs font-medium transition-[color] outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset'
                href='/showcase'
                data-framework='react'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-gallery-vertical-end size-6 -scale-y-100'
                >
                  <path d='M7 2h10'></path>
                  <path d='M5 6h14'></path>
                  <rect
                    width='18'
                    height='12'
                    x='3'
                    y='10'
                    rx='2'
                  ></rect>
                </svg>
                Showcase
              </a>
              <a
                className='text-muted hover:text-primary data-[active]:text-primary flex flex-col items-center gap-1.5 rounded-2xl px-4 pt-2.5 pb-1.5 text-xs font-medium lowercase transition-[color] outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset'
                href='https://github.com/barvian/number-flow'
                target='_blank'
                aria-label='Star on GitHub'
              >
                <svg
                  viewBox='0 0 16 16'
                  className='size-6 fill-current'
                  role='none'
                >
                  <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
                </svg>
                6.3K
              </a>
              <a
                href='https://x.com/mbarvian'
                className='text-muted hover:text-primary data-[active]:text-primary flex flex-col items-center gap-1.5 rounded-2xl px-4 pt-2.5 pb-1.5 text-xs font-medium transition-[color] outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset'
                target='_blank'
              >
                <svg
                  viewBox='0 0 24 24'
                  className='size-6 fill-current'
                >
                  <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
                </svg>
                Follow
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>,
    document.body,
  )
}
