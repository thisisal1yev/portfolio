import { motion } from 'motion/react'

import { fadeUp, staggerContainer } from '@shared/lib'

export function ServicesSection() {
  return (
    <motion.section
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
          Разрабатываю интерфейсы на React, Vue, Nuxt с TypeScript. Фокус на
          производительность, анимации и отличный UX.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className='bg-surface rounded-2xl p-8 sm:p-5'
      >
        <span className='bg-surface-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-white'>
          <span>2</span> Backend Development
        </span>

        <h3 className='text-text mt-6 text-3xl leading-tight font-bold'>
          Строю надёжный
          <br />
          серверный слой
        </h3>

        <p className='text-text-muted mt-4 text-base leading-relaxed'>
          Разрабатываю REST API на Node.js, NestJS и Bun. Работаю с PostgreSQL
          и Prisma.
        </p>
      </motion.div>
    </motion.section>
  )
}
