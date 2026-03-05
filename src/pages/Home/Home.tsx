import { motion } from 'motion/react'

import { SectionLabel, StatsBlock } from '@shared/components'
import { useGitHubStats } from '@shared/hooks'
import { EASE, fadeUp, staggerContainer } from '@shared/lib'
import {
  ExperienceSection,
  MarqueeBlock,
  ProjectsList,
} from '@widgets'

export function Home() {
  const { stats, loading } = useGitHubStats()

  return (
    <div className='grid min-h-screen grid-cols-[65fr_35fr] gap-10 p-5 md:grid-cols-1'>
      {/* Left — scrollable content */}
      <main className='flex flex-col gap-5'>
        {/* Services */}
        <motion.section
          id='about'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
          className='grid grid-cols-2 gap-5 sm:grid-cols-1'
        >
          <motion.div
            variants={fadeUp}
            className='bg-surface rounded-2xl p-8 sm:p-5'
          >
            <span className='bg-surface-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-white'>
              <span>1</span> Frontend Development
            </span>

            <h3 className='text-text mt-6 text-3xl leading-tight font-bold'>
              Создаю современные
              <br />
              веб-интерфейсы
            </h3>

            <p className='text-text-muted mt-4 text-base leading-relaxed'>
              Специализируюсь на React, Vue и современных фреймворках.
              Разрабатываю адаптивные и производительные приложения с вниманием
              к деталям и пользовательскому опыту.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className='bg-surface rounded-2xl p-8 sm:p-5'
          >
            <span className='bg-surface-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-white'>
              <span>2</span> UI/UX Design
            </span>

            <h3 className='text-text mt-6 text-3xl leading-tight font-bold'>
              Продуманный дизайн
              <br />и пользовательский опыт
            </h3>

            <p className='text-text-muted mt-4 text-base leading-relaxed'>
              Создаю интуитивные и визуально привлекательные интерфейсы.
              Забочусь о каждой детали — от типографики до анимаций.
            </p>
          </motion.div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id='skills'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
          className='bg-surface rounded-2xl p-8 sm:p-5'
        >
          <SectionLabel
            index='2'
            label='Навыки'
          />

          <div className='mt-4 flex items-center justify-between gap-16 md:flex-col md:items-start'>
            <div className='space-y-4'>
              <motion.h2
                variants={fadeUp}
                className='text-text text-5xl leading-tight font-bold md:text-4xl'
              >
                Технические
                <br />
                навыки
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className='text-text-muted text-lg'
              >
                В арсенале все современные
                <br />
                стеки технологий
              </motion.p>
            </div>

            <MarqueeBlock />
          </div>
        </motion.section>

        {/* Experience */}
        <ExperienceSection />

        {/* Projects */}
        <motion.section
          id='projects'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          className='bg-surface rounded-2xl p-8 sm:p-5'
        >
          <SectionLabel
            index='4'
            label='Проекты'
          />

          <motion.h2
            variants={fadeUp}
            className='text-text mt-4 mb-8 text-4xl font-bold md:text-3xl'
          >
            Избранные проекты
          </motion.h2>

          <ProjectsList />
        </motion.section>

        {/* About me */}
        <motion.section
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
          className='bg-surface rounded-2xl p-8 sm:p-5'
        >
          <SectionLabel
            index='5'
            label='О себе'
          />

          <div className='mt-4 grid grid-cols-2 gap-16 sm:grid-cols-1 sm:gap-10'>
            <div className='space-y-5'>
              <motion.p
                variants={fadeUp}
                className='text-text/80 text-lg leading-relaxed'
              >
                Доброго времени суток! Меня зовут{' '}
                <span className='text-text font-semibold'>
                  Алиев Ахмадилло.
                </span>
              </motion.p>

              <motion.p
                variants={fadeUp}
                className='text-text/80 text-lg leading-relaxed'
              >
                Я{' '}
                <span className='text-text font-semibold'>
                  фронтенд разработчик
                </span>{' '}
                родом из солнечного Узбекистана. С детства увлекался
                информатикой — именно тогда впервые познакомился с HTML, CSS и
                Python.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className='text-text/80 text-lg leading-relaxed'
              >
                После окончания курса по фронтенду в WebKing LC начал
                самостоятельно углублять знания, изучая Vue, TypeScript и
                современные подходы к UI/UX.
              </motion.p>
            </div>

            <motion.div
              variants={staggerContainer}
              className='flex flex-col justify-center gap-10'
            >
              <motion.div variants={fadeUp}>
                <StatsBlock
                  title='Репозитории'
                  text={loading ? '—' : String(stats.repos)}
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <StatsBlock
                  title='Подписчики GitHub'
                  text={loading ? '—' : String(stats.followers)}
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <StatsBlock
                  title='Заработанные звёзды'
                  text={loading ? '—' : String(stats.stars)}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contacts */}
        <motion.section
          id='contacts'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          className='bg-surface grid grid-cols-2 gap-5 rounded-2xl p-8 sm:grid-cols-1 sm:p-5'
        >
          {/* Left — info */}
          <motion.div
            variants={fadeUp}
            className='flex flex-col justify-between'
          >
            <h2 className='text-text text-4xl font-bold md:text-3xl'>
              Контакты
            </h2>

            <div className='mt-auto space-y-6 pt-10'>
              <div className='grid grid-cols-[100px_1fr] gap-x-4'>
                <span className='text-text-muted'>адрес</span>
                <div>
                  <p className='text-text'>
                    Рес. Узбекистан,
                    <br />
                    Андижанская обл.
                  </p>
                  <a
                    href='https://maps.google.com/?q=Andijan+Uzbekistan'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-text underline underline-offset-4'
                  >
                    на карте
                  </a>
                </div>
              </div>

              <div className='grid grid-cols-[100px_1fr] gap-x-4 gap-y-1'>
                <span className='text-text-muted'>тел.</span>
                <a
                  href='tel:+998950490473'
                  className='text-text'
                >
                  +998 (95) 049 04 73
                </a>

                <span className='text-text-muted'>email</span>
                <a
                  href='mailto:aaalievvv1@gmail.com'
                  className='text-text'
                >
                  aaalievvv1@gmail.com
                </a>
              </div>

              <div className='grid grid-cols-[100px_1fr] gap-x-4'>
                <span className='text-text-muted'>соцсети</span>
                <div className='space-y-0.5'>
                  <a
                    href='https://t.me/thisisaliyev_channel'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-text block underline-offset-4 hover:underline'
                  >
                    телеграм-канал
                  </a>
                  <a
                    href='https://www.instagram.com/thisisaliyev.a'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-text block underline-offset-4 hover:underline'
                  >
                    инстаграм
                  </a>
                  <a
                    href='https://github.com/thisisal1yev'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-text block underline-offset-4 hover:underline'
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <a
              href='https://t.me/thisisaliyev'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-surface-dark mt-8 flex items-center gap-3 overflow-hidden rounded-full text-white transition-opacity hover:opacity-80'
            >
              <span className='bg-surface-dark flex h-12 w-12 items-center justify-center rounded-full text-white'>
                ✈
              </span>
              <span className='pr-6 text-sm'>Написать мне</span>
            </a>
          </motion.div>

          {/* Right — map */}
          <motion.div
            variants={fadeUp}
            className='overflow-hidden rounded-xl'
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.26036492442!2d72.2!3d40.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38badd1256348b25%3A0x2753629812632942!2sAndijan%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1'
              className='h-full min-h-[400px] w-full border-0'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Карта'
            />
          </motion.div>
        </motion.section>
      </main>

      {/* Right — sticky sidebar with name */}
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className='sticky top-5 flex h-[calc(100vh-40px)] flex-col justify-between md:hidden'
      >
        <div>
          <div className='flex items-center justify-between'>
            <span className='text-text-muted text-sm tracking-wide'>
              thisisaliyev®, v0.1
            </span>

            <a
              href='https://t.me/thisisaliyev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-text-muted text-sm tracking-wide underline-offset-4 hover:underline'
            >
              тг. @thisisaliyev
            </a>
          </div>

          <h1 className='text-text -rotate-12 my-auto text-[clamp(180px,7vw,150px)] leading-[0.85] font-black tracking-[-0.05em] uppercase'>
            THIS
            <br />
            ISAL
            <br />
            IYEV®
          </h1>
        </div>

        <p className='text-text-muted text-lg tracking-[-0.01em]'>
          Фронтенд разработчик
        </p>
      </motion.aside>
    </div>
  )
}
