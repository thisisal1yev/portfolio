import { User } from 'lucide-react'
import Marquee from 'react-fast-marquee'

import { HorizontalLine } from '../shared/components/HorizontalLine'
import { Link } from '../shared/components/Link'
import { SkillBlock } from '../shared/components/SkillBlock'
import { StatsBlock } from '../shared/components/StatsBlock'

export function Home() {
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

        <section className='dark:bg-gray bg-dark-primary relative flex h-160 justify-between overflow-hidden rounded-xl py-8 pl-6'>
          <div className='flex flex-col items-start justify-between'>
            <h2 className='text-purple text-5xl font-bold'>
              Технические
              <br /> навыки
            </h2>

            <p className='text-lg font-medium'>
              В моем арсенале все современные
              <br /> стеки технологии:
            </p>
          </div>

          <Marquee
            direction='down'
            autoFill={true}
            loop={0}
            speed={50}
            className='!absolute top-0 -right-50 !m-0 w-96 !overflow-visible !p-0 transition-transform duration-300 hover:scale-105'
          >
            <SkillBlock skill='PostgreSQL'>
              <img
                width={100}
                height={100}
                src={'/images/logos/postgresql.svg'}
                alt='postgresql'
              />
            </SkillBlock>

            <SkillBlock skill='Prisma'>
              <img
                width={100}
                height={100}
                src={'/images/logos/prisma.svg'}
                alt='prisma'
              />
            </SkillBlock>

            <SkillBlock skill='Nest.js'>
              <img
                width={100}
                height={100}
                src={'/images/logos/nestjs.svg'}
                alt='nestjs'
              />
            </SkillBlock>

            <SkillBlock skill='Node.js'>
              <img
                width={100}
                height={100}
                src={'/images/logos/nodejs.svg'}
                alt='nodejs'
              />
            </SkillBlock>

            <SkillBlock skill='Next.js'>
              <img
                width={100}
                height={100}
                src={'/images/logos/nextjs.svg'}
                alt='nextjs'
              />
            </SkillBlock>

            <SkillBlock skill='Redux toolkit'>
              <img
                width={100}
                height={100}
                src={'/images/logos/redux_toolkit.svg'}
                alt='redux_toolkit'
              />
            </SkillBlock>

            <SkillBlock skill='React Router'>
              <img
                width={100}
                height={100}
                src={'/images/logos/react_router.svg'}
                alt='react_router'
              />
            </SkillBlock>

            <SkillBlock skill='React'>
              <img
                width={100}
                height={100}
                src={'/images/logos/react.svg'}
                alt='react'
              />
            </SkillBlock>

            <SkillBlock skill='Nuxt'>
              <img
                width={100}
                height={100}
                src={'/images/logos/nuxt.svg'}
                alt='nextjs'
              />
            </SkillBlock>

            <SkillBlock skill='Pinia'>
              <img
                width={100}
                height={100}
                src={'/images/logos/pinia.svg'}
                alt='pinia'
              />
            </SkillBlock>

            <SkillBlock skill='Vue'>
              <img
                width={100}
                height={100}
                src={'/images/logos/vue.svg'}
                alt='vue'
              />
            </SkillBlock>

            <SkillBlock skill='TypeScript'>
              <img
                width={100}
                height={100}
                src={'/images/logos/typescript.svg'}
                alt='typescript'
              />
            </SkillBlock>

            <SkillBlock skill='Vite'>
              <img
                width={100}
                height={100}
                src={'/images/logos/vite.svg'}
                alt='vite'
              />
            </SkillBlock>

            <SkillBlock skill='Prettier'>
              <img
                width={100}
                height={100}
                src={'/images/logos/prettier.svg'}
                alt='prettier'
              />
            </SkillBlock>

            <SkillBlock skill='JavaScript'>
              <img
                width={100}
                height={100}
                src={'/images/logos/javascript.svg'}
                alt='javascript'
              />
            </SkillBlock>

            <SkillBlock skill='Tailwind CSS'>
              <img
                width={100}
                height={100}
                src={'/images/logos/tailwind.svg'}
                alt='tailwind'
              />
            </SkillBlock>

            <SkillBlock skill='Sass'>
              <img
                width={100}
                height={100}
                src={'/images/logos/sass.svg'}
                alt='sass'
              />
            </SkillBlock>

            <SkillBlock skill='CSS'>
              <img
                width={100}
                height={100}
                src={'/images/logos/css.svg'}
                alt='css'
              />
            </SkillBlock>

            <SkillBlock skill='HTML'>
              <img
                width={100}
                height={100}
                src={'/images/logos/html.svg'}
                alt='html'
              />
            </SkillBlock>
          </Marquee>
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
            <div className='h-86 -rotate-4 rounded-2xl border-2 border-dashed p-5 py-5'>
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
