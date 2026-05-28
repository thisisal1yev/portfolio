import { motion } from 'motion/react'

import { fadeUp, staggerContainer } from '@shared/lib'
import { Send } from 'lucide-react'

const SOCIALS = [
  { href: 'https://www.linkedin.com/in/thisisaliyev/', label: 'LinkedIn' },
  { href: 'https://t.me/thisisaliyev', label: 'Telegram' },
  { href: 'https://www.instagram.com/thisisaliyev.a', label: 'Instagram' },
  { href: 'https://github.com/thisisal1yev', label: 'GitHub' },
]

export function ContactsSection() {
  return (
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
        <h2 className='text-text text-4xl font-bold md:text-3xl'>Контакты</h2>

        <div className='mt-auto space-y-6 pt-10'>
          <div className='grid grid-cols-[100px_1fr] gap-x-4'>
            <span className='text-text-muted'>адрес</span>
            <div>
              <p className='text-text'>
                Рес. Узбекистан,
                <br />
                Андижанская обл., Чинобод
              </p>

              <a
                href='https://yandex.uz/maps/-/CPHUqMlB'
                target='_blank'
                rel='noopener noreferrer'
                className='text-text underline underline-offset-4 hover:no-underline'
              >
                на карте
              </a>
            </div>
          </div>

          <div className='grid grid-cols-[100px_1fr] gap-x-4 gap-y-1'>
            <span className='text-text-muted'>тел.</span>
            <a
              href='tel:+998880112511'
              className='text-text hover:underline'
            >
              +998 (88) 011 25 11
            </a>

            <span className='text-text-muted'>email</span>
            <a
              href='mailto:aaalievvv1@gmail.com'
              className='text-text hover:underline'
            >
              aaalievvv1@gmail.com
            </a>
          </div>

          <div className='grid grid-cols-[100px_1fr] gap-x-4'>
            <span className='text-text-muted'>соцсети</span>
            <div className='space-y-0.5'>
              {SOCIALS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-text block underline-offset-4 hover:underline'
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-8 flex h-10 items-center gap-0.5'>
          <div className='bg-surface-dark flex h-10 w-10 items-center rounded-full'>
            <Send
              className='mx-auto text-white'
              size={18}
            />
          </div>

          <a
            href='https://t.me/thisisaliyev'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-surface-dark inline-flex h-10 flex-1 items-center justify-center gap-3 overflow-hidden rounded-full px-5 py-2 text-white transition-opacity hover:opacity-80'
          >
            <span className='pr-6 text-sm'>Написать мне</span>
          </a>
        </div>
      </motion.div>

      {/* Right — map */}
      <motion.div
        variants={fadeUp}
        className='overflow-hidden rounded-xl'
      >
        <iframe
          src='https://yandex.ru/map-widget/v1/?ll=71.979372,40.876731&z=14&pt=71.979372,40.876731,pm2rdm'
          className='h-full min-h-100 w-full border-0'
          allowFullScreen
          loading='lazy'
          title='Карта'
        />
      </motion.div>
    </motion.section>
  )
}
