import { User } from 'lucide-react'
import Marquee from 'react-fast-marquee'

import { HorizontalLine } from '../shared/components/HorizontalLine'
import { Link } from '../shared/components/Link'
import { SkillBlock } from '../shared/components/SkillBlock'
import { StatsBlock } from '../shared/components/StatsBlock'
import { SKILLS } from '../skills.data'

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
            className='marquee-line !m-0 h-96 !w-96 !overflow-visible !p-0 transition-transform duration-300 hover:scale-105'
          >
            {SKILLS.map((skill) => (
              <SkillBlock
                skill={skill.skillName}
                key={skill.skillAlias}
              >
                <img
                  width={100}
                  height={100}
                  src={skill.imgURL}
                  alt={skill.skillAlias}
                />
              </SkillBlock>
            ))}
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
