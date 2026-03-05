import { motion } from 'motion/react'

import {
  HorizontalLine,
  Link,
  SectionLabel,
  StatsBlock,
} from '@shared/components'
import { useIntersectionObserver } from '@shared/hooks'
import { fadeUp, staggerContainer } from '@shared/lib'
import {
  DesktopNavbar,
  ExperienceSection,
  Footer,
  HeroSection,
  MarqueeBlock,
  ProjectsList,
} from '@widgets'

export function Home() {
  const [aboutRef, aboutVisible] = useIntersectionObserver()
  const [skillsRef, skillsVisible] = useIntersectionObserver()
  const [experienceRef, experienceVisible] =
    useIntersectionObserver<HTMLElement>()
  const [projectsRef, projectsVisible] = useIntersectionObserver()
  const [contactsRef, contactsVisible] = useIntersectionObserver()

  return (
    <>
      <DesktopNavbar
        visibility={{
          about: aboutVisible,
          skills: skillsVisible,
          experience: experienceVisible,
          projects: projectsVisible,
          contacts: contactsVisible,
        }}
      />

      <main>
        {/* Hero */}
        <HeroSection />

        <HorizontalLine />

        {/* About */}
        <motion.section
          ref={aboutRef}
          id='about'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
          className='mx-auto w-full max-w-7xl px-8 py-24 md:px-5'
        >
          <SectionLabel
            index='01'
            label='О себе'
          />

          <div className='grid grid-cols-2 gap-16 md:grid-cols-1 md:gap-10'>
            <div className='space-y-6'>
              <motion.p
                variants={fadeUp}
                className='text-lg leading-relaxed text-white/80'
              >
                Доброго времени суток! Меня зовут{' '}
                <span className='font-semibold text-purple'>
                  Алиев Ахмадилло.
                </span>
              </motion.p>

              <motion.p
                variants={fadeUp}
                className='text-lg leading-relaxed text-white/80'
              >
                Я{' '}
                <span className='font-semibold text-purple'>
                  фронтенд разработчик
                </span>{' '}
                родом из солнечного Узбекистана. С детства увлекался
                информатикой — именно тогда впервые познакомился с HTML, CSS и
                Python.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className='text-lg leading-relaxed text-white/80'
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
                  text='22'
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <StatsBlock
                  title='Подписчики GitHub'
                  text='2'
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <StatsBlock
                  title='Заработанные звёзды'
                  text='26'
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <HorizontalLine />

        {/* Skills */}
        <motion.section
          ref={skillsRef}
          id='skills'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
          className='mx-auto w-full max-w-7xl px-8 py-24 md:px-5'
        >
          <SectionLabel
            index='02'
            label='Навыки'
          />

          <div className='flex items-center justify-between gap-16 md:flex-col md:items-start'>
            <div className='space-y-4'>
              <motion.h2
                variants={fadeUp}
                className='text-5xl font-bold leading-tight md:text-4xl'
              >
                Технические
                <br />
                навыки
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className='text-lg text-muted'
              >
                В арсенале все современные
                <br />
                стеки технологий
              </motion.p>
            </div>

            <MarqueeBlock />
          </div>
        </motion.section>

        <HorizontalLine />

        {/* Experience */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          className='mx-auto w-full max-w-7xl px-8 md:px-5'
        >
          <div className='pt-24'>
            <SectionLabel
              index='03'
              label='Опыт работы'
            />
          </div>
        </motion.div>

        <ExperienceSection experienceRef={experienceRef} />

        <HorizontalLine />

        {/* Projects */}
        <motion.section
          ref={projectsRef}
          id='projects'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          className='mx-auto w-full max-w-7xl px-8 py-24 md:px-5'
        >
          <SectionLabel
            index='04'
            label='Проекты'
          />

          <motion.h2
            variants={fadeUp}
            className='mb-12 text-5xl font-bold md:text-4xl'
          >
            Избранные проекты
          </motion.h2>

          <ProjectsList />
        </motion.section>

        <HorizontalLine />

        {/* Contacts */}
        <motion.section
          ref={contactsRef}
          id='contacts'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
          className='mx-auto w-full max-w-7xl px-8 py-24 md:px-5'
        >
          <SectionLabel
            index='05'
            label='Контакты'
          />

          <motion.h2
            variants={fadeUp}
            className='mb-16 text-[clamp(40px,6vw,96px)] font-black leading-[0.95] tracking-tighter'
          >
            Начнём работать
            <br />
            вместе?
          </motion.h2>

          <div className='grid grid-cols-3 gap-10 md:grid-cols-1 md:gap-6'>
            <motion.div
              variants={fadeUp}
              className='space-y-1'
            >
              <p className='text-xs tracking-widest text-muted uppercase'>
                Адрес
              </p>
              <p className='text-white'>Рес. Узбекистан, Андижанская обл.</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className='space-y-3'
            >
              <div className='space-y-1'>
                <p className='text-xs tracking-widest text-muted uppercase'>
                  Телефон
                </p>
                <Link
                  label=''
                  href='tel:+998950490473'
                >
                  +998 (95) 049 04 73
                </Link>
              </div>
              <div className='space-y-1'>
                <p className='text-xs tracking-widest text-muted uppercase'>
                  Email
                </p>
                <Link
                  label=''
                  href='mailto:aaalievvv1@gmail.com'
                >
                  aaalievvv1@gmail.com
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className='space-y-3'
            >
              <p className='text-xs tracking-widest text-muted uppercase'>
                Соцсети
              </p>
              <div className='space-y-2'>
                <Link
                  label=''
                  href='https://t.me/thisisaliyev_channel'
                >
                  Телеграм-канал
                </Link>
                <Link
                  label=''
                  href='https://www.instagram.com/thisisal1ev'
                >
                  Инстаграм
                </Link>
                <Link
                  label=''
                  href='https://t.me/thisisaliyev_blog'
                >
                  Личный блог
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <HorizontalLine />

        <Footer />
      </main>
    </>
  )
}
