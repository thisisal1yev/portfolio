import { Languages, Moon, Sun, User } from 'lucide-react'

import { HorizontalLine, Link, StatsBlock } from '@shared/components'
import { useIntersectionObserver, useTheme } from '@shared/hooks'
import {
  DesktopNavbar,
  ExperienceSection,
  MarqueeBlock,
  ProjectsList,
} from '@widgets'

export function Home() {
  const [aboutRef, aboutVisible] = useIntersectionObserver()
  const [skillsRef, skillsVisible] = useIntersectionObserver()
  const [experienceRef, experienceVisible] =
    useIntersectionObserver<HTMLDivElement>()
  const [projectsRef, projectsVisible] = useIntersectionObserver()
  const [contactsRef, contactsVisible] = useIntersectionObserver()

  const { theme, toggleTheme } = useTheme()

  return (
    <main className='relative container flex h-min min-h-screen min-w-full flex-none flex-col-reverse flex-nowrap overflow-hidden px-5 py-5 antialiased lg:flex-row'>
      <div className='space-y-5 lg:w-3/5 lg:flex-3/5'>
        <section
          ref={aboutRef}
          id='about'
          className='dark:bg-dark-secondary space-y-8 rounded-xl bg-white p-5'
        >
          <h2 className='mb-8'>
            <p className='mb-0.5 flex items-center gap-2 text-2xl leading-7 font-semibold'>
              <User size={42} />

              <span>О себе как личность</span>
            </p>

            <HorizontalLine className='w-44' />
          </h2>

          <div className='space-y-8 text-lg'>
            <p className='text-xl'>
              Доброго времени суток! Меня зовут&nbsp;
              <span className='dark:text-purple font-medium text-purple-800'>
                Алиев Ахмадилло.
              </span>
            </p>

            <p>
              Я&nbsp;
              <span className='dark:text-purple font-medium text-purple-800'>
                фронтенд разработчик
              </span>
              &nbsp;родом из солнечного Узбекистана. Я самого детства увлекался
              информатикой, у меня сильно был развит интерес к программированию,
              и в такой обстановке, я впервые познакомился с HTML, CSS и
              Python-ом.
            </p>

            <p>
              После окончания курса по фронтенду в WebKing LC я начал
              самостоятельно углублять свои знания, изучая современные
              технологии и лучшие практики разработки. Самостоятельная работа
              позволила мне освоить такие инструменты, как Vue, TypeScript и
              современные подходы к созданию UI/UX.
            </p>
          </div>

          <div
            id='github_stats'
            className='flex w-full items-center justify-between gap-5'
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
          </div>
        </section>

        <section
          ref={skillsRef}
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

        <ExperienceSection experienceRef={experienceRef} />

        <section
          ref={projectsRef}
          id='projects'
          className='dark:bg-dark-secondary space-y-5 rounded-xl bg-white p-5'
        >
          <h2 className='dark:border-gray border-light-primary border-b-2 pb-5 text-3xl font-semibold'>
            Избранные проекты
          </h2>

          <ProjectsList />
        </section>

        <section
          ref={contactsRef}
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
                <div className='flex items-center justify-between'>
                  <span>тел.</span>

                  <Link
                    label=''
                    href='tel:+998950490473'
                  >
                    +998 (95) 049 04 73
                  </Link>
                </div>

                <div className='flex items-center justify-between'>
                  <span>email</span>

                  <Link
                    label=''
                    href='mailto:aaalievvv1@gmail.com'
                  >
                    aaalievvv1@gmail.com
                  </Link>
                </div>
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
      </div>

      <div className='lg:w-2/5 lg:flex-2/5'>
        <div className='top-0 right-10 z-10 flex min-h-screen flex-col py-5 lg:fixed lg:w-1/3'>
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
            <div className='h-86 -rotate-4 rounded-2xl border-2 border-dashed p-5 py-5 transition-transform duration-300 hover:-translate-x-5 hover:-rotate-6'>
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
                label='GitHub:'
                href='https://github.com/thisisal1yev'
              >
                thisisal1yev
              </Link>

              <div className='flex items-center gap-3'>
                <button>
                  <Languages size={24} />
                </button>

                <button onClick={toggleTheme}>
                  {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DesktopNavbar
        aboutVisible={aboutVisible}
        skillsVisible={skillsVisible}
        experienceVisible={experienceVisible}
        projectsVisible={projectsVisible}
        contactsVisible={contactsVisible}
      />
    </main>
  )
}
