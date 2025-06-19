import { User } from 'lucide-react'

import { HorizontalLine } from '../shared/components/ui/HorizontalLine'
import { Link } from '../shared/components/ui/Link'
import { StatsBlock } from '../shared/components/ui/StatsBlock'
import { useTheme } from '../shared/hooks/useTheme'
import { MarqueeBlock } from '../widgets/MarqueeBlock/ui/MarqueeBlock'
import { ProjectsList } from '../widgets/ProjectsList/ui/ProjectsList'

export function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main className='relative container flex h-min min-h-screen min-w-full flex-none flex-nowrap overflow-hidden px-15 py-5 antialiased'>
      <div className='w-3/5 flex-3/5 space-y-10'>
        <section id='about'>
          <h2 className='mb-8'>
            <p className='mb-0.5 flex items-center gap-2 text-2xl leading-7 font-semibold'>
              <User size={42} />

              <span>О себе как личность</span>
            </p>

            <HorizontalLine className='w-44' />
          </h2>

          <div className='space-y-8'>
            <p className='text-xl'>
              Доброго времени суток! Меня зовут&nbsp;
              <span className='dark:text-purple font-medium text-purple-800'>
                Алиев Ахмадилло.
              </span>
            </p>

            <p className='text-lg'>
              Я&nbsp;
              <span className='dark:text-purple font-medium text-purple-800'>
                фронтенд разработчик
              </span>
              &nbsp;родом из солнечного Узбекистана. Я самого детства увлекался
              информатикой, у меня сильно был развит интерес к программированию,
              и в такой обстановке, я первые познакомился с HTML, CSS и
              Python-ом.
            </p>
          </div>
        </section>

        <section
          id='github_stats'
          className='flex w-full items-center justify-between gap-x-5'
        >
          <StatsBlock
            title='Число репозиторий'
            text='22'
          />

          <StatsBlock
            title='Подписчики в GitHub'
            text='2'
          />

          <StatsBlock
            title='Заработанные звезды'
            text='26'
          />
        </section>

        <section
          className='dark:bg-gray bg-dark-secondary relative flex h-160 justify-between overflow-hidden rounded-xl py-8 pl-6'
          id='skills'
        >
          <div className='flex flex-col items-start justify-between'>
            <h2 className='text-purple text-5xl font-bold'>
              Технические
              <br /> навыки
            </h2>

            <p className='text-lg font-medium text-white'>
              В моем арсенале все современные
              <br /> стеки технологии:
            </p>
          </div>

          <MarqueeBlock />
        </section>

        <section
          id='projects'
          className='dark:bg-dark-secondary space-y-5 rounded-xl bg-white p-5'
        >
          <h2 className='border-gray border-b-2 pb-5 text-3xl font-semibold'>
            Избранные проекты
          </h2>

          <ProjectsList />
        </section>

        <section
          id='contacts'
          className='dark:bg-dark-secondary flex h-[550px] w-full items-start justify-between gap-x-10 rounded-xl bg-white p-5'
        >
          <div className='flex h-full w-full flex-col'>
            <h2 className='h-auto grow text-4xl font-semibold'>Контакты</h2>

            <div className='space-y-5'>
              <p className='flex items-start justify-between'>
                <span>адрес</span>

                <span className='w-40'>Рес. Узбекистан, Андижанская обл.</span>
              </p>

              <div>
                <p className='flex items-center justify-between'>
                  <span>тел.</span>

                  <Link
                    label=''
                    href='tel:+998950490473'
                  >
                    +998 (95) 049 04 73
                  </Link>
                </p>

                <p className='flex items-center justify-between'>
                  <span>email</span>

                  <Link
                    label=''
                    href='mailto:aaalievvv1@gmail.com'
                  >
                    aaalievvv1@gmail.com
                  </Link>
                </p>
              </div>

              <div className='mb-10 flex items-start justify-between'>
                <p>cоцсети</p>

                <div className='w-40'>
                  <Link
                    label=''
                    href='https://t.me/thisisaliyev_channel'
                  >
                    телеграм-канал
                  </Link>

                  <Link
                    label=''
                    href='https://www.instagram.com/thisisal1ev'
                  >
                    инстаграм
                  </Link>

                  <Link
                    label=''
                    href='https://t.me/thisisaliyev_blog'
                  >
                    личный блог
                  </Link>
                </div>
              </div>

              <button className='bg-dark-primary w-full rounded-xl px-5 py-2 text-white'>
                Написать мне
              </button>
            </div>
          </div>

          <div className='h-full w-full'>
            <div className='h-full w-full rounded-xl border border-dashed p-5'>
              <h3 className='text-5xl font-bold'>Здесь должно быть карта</h3>
            </div>
          </div>
        </section>

        <section
          id='footer'
          className='dark:bg-dark-secondary rounded-xl bg-white p-5'
        >
          <button onClick={toggleTheme}>
            {theme === 'dark' ? 'dark' : 'light'}
          </button>
        </section>
      </div>

      <div className='flex-2/5'>
        <div className='fixed top-0 right-15 z-10 flex min-h-screen w-1/3 flex-col py-5'>
          <div className='flex items-center justify-between'>
            <span>thisisaliyev®, v0.1</span>

            <Link
              label='тг.'
              href='https://t.me/thisisaliyev'
            >
              @thisisaliyev
            </Link>
          </div>

          <div className='flex h-auto grow flex-col items-start justify-center space-y-10'>
            <div className='h-86 -rotate-4 rounded-2xl border-2 border-dashed p-5 py-5 transition-all duration-300 hover:-translate-x-5 hover:-rotate-6'>
              <p className='text-7xl font-semibold'>
                Здесь могла быть моя фотография
              </p>
            </div>

            <h1 className='dark:text-purple ml-10 text-2xl leading-7 font-medium text-purple-800'>
              Фронтенд разработчик
            </h1>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <Link
                label='т.'
                href='tel:+998950490473'
              >
                +998 (95) 049 04 73
              </Link>

              <Link
                label='e.'
                href='mailto:aaalievvv1@gmail.com'
              >
                aaalievvv1@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
