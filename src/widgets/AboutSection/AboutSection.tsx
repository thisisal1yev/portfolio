import { motion } from 'motion/react'

import { AnimateNumber, SectionLabel, StatsBlock } from '@shared/components'
import { useGitHubStats } from '@shared/hooks'
import { fadeUp, staggerContainer } from '@shared/lib'

export function AboutSection() {
  const { stats, loading } = useGitHubStats()

  return (
    <motion.section
      id='about'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.15 }}
      className='bg-surface rounded-2xl p-8 sm:p-5'
    >
      <SectionLabel
        index='1'
        label='О себе'
      />

      <div className='mt-4 grid grid-cols-2 gap-16 sm:grid-cols-1 sm:gap-10'>
        <div className='space-y-5'>
          <motion.p
            variants={fadeUp}
            className='text-text/80 text-lg leading-relaxed'
          >
            Доброго времени суток! Меня зовут{' '}
            <span className='text-text font-semibold'>Алиев Ахмадилло.</span>
          </motion.p>

          <motion.p
            variants={fadeUp}
            className='text-text/80 text-lg leading-relaxed'
          >
            Я{' '}
            <span className='text-text font-semibold'>Software Developer</span>{' '}
            родом из солнечного Узбекистана. С детства увлекался информатикой —
            именно тогда впервые познакомился с HTML, CSS и Python.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className='text-text/80 text-lg leading-relaxed'
          >
            После окончания курса по фронтенду в WebKing LC начал самостоятельно
            углублять знания, изучая Vue, TypeScript, Node.js и современные
            подходы к разработке.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          className='flex flex-col justify-center gap-10'
        >
          <motion.div variants={fadeUp}>
            <StatsBlock
              title='Репозитории'
              text={loading ? '—' : <AnimateNumber value={stats.repos} />}
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <StatsBlock
              title='Подписчики GitHub'
              text={loading ? '—' : <AnimateNumber value={stats.followers} />}
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <StatsBlock
              title='Заработанные звёзды'
              text={loading ? '—' : <AnimateNumber value={stats.stars} />}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
