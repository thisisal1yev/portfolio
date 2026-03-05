import { ChevronDown } from 'lucide-react'
import { motion } from 'motion/react'

import { Button } from '@shared/components'
import { fadeUp, scrollPulse, staggerContainer } from '@shared/lib'

export function HeroSection() {
  return (
    <motion.section
      variants={staggerContainer}
      initial='hidden'
      animate='visible'
      className='relative flex min-h-screen flex-col justify-center px-8 pt-16 md:px-5'
    >
      <div className='mx-auto w-full max-w-7xl space-y-6'>
        <motion.h1
          variants={fadeUp}
          className='text-[clamp(56px,9vw,144px)] font-black leading-[0.9] tracking-tighter text-white'
        >
          Ахмадилло
          <br />
          Алиев
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className='text-3xl font-light text-muted sm:text-2xl'
        >
          Фронтенд разработчик
        </motion.p>

        <motion.p
          variants={fadeUp}
          className='max-w-lg text-lg leading-relaxed text-muted/80 sm:text-base'
        >
          Создаю красивые и быстрые интерфейсы. Специализируюсь на React,
          Vue и современных стеках фронтенда.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className='flex items-center gap-4 pt-4'
        >
          <Button
            label='Смотреть проекты'
            link='/#projects'
          />

          <a
            href='https://github.com/thisisal1yev'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm tracking-widest uppercase text-muted underline-offset-4 transition-colors duration-200 hover:text-white hover:underline'
          >
            GitHub →
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={scrollPulse}
        animate='animate'
        className='absolute bottom-10 left-1/2 -translate-x-1/2'
      >
        <ChevronDown
          size={28}
          className='text-muted'
        />
      </motion.div>
    </motion.section>
  )
}
