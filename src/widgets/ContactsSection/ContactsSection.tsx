import { motion } from 'motion/react'
import { Send } from 'lucide-react'

import { MagneticButton, Prompt } from '@shared/components'
import { fadeUp, staggerContainer } from '@shared/lib'

const SOCIALS = [
  { href: 'https://www.linkedin.com/in/thisisaliyev/', label: 'linkedin' },
  { href: 'https://t.me/thisisaliyev', label: 'telegram' },
  { href: 'https://www.instagram.com/thisisaliyev.a', label: 'instagram' },
  { href: 'https://github.com/thisisal1yev', label: 'github' },
  { href: 'https://gitlab.com/thisisaliyev', label: 'gitlab' },
]

const ENV = [
  {
    k: 'ADDR',
    node: (
      <a
        href='https://yandex.uz/maps/-/CPHUqMlB'
        target='_blank'
        rel='noopener noreferrer'
        className='text-text-muted underline-offset-4 hover:text-acc hover:underline'
      >
        "Андижанская обл., Чинобод, UZ"
      </a>
    ),
  },
  {
    k: 'PHONE',
    node: (
      <a href='tel:+998880112511' className='text-text-muted hover:text-acc'>
        "+998 (88) 011 25 11"
      </a>
    ),
  },
  {
    k: 'EMAIL',
    node: (
      <a
        href='mailto:aaalievvv1@gmail.com'
        className='text-text-muted hover:text-acc'
      >
        "aaalievvv1@gmail.com"
      </a>
    ),
  },
]

export function ContactsSection() {
  return (
    <section id='contacts' className='scroll-mt-24'>
      <Prompt cmd='./contact.sh' comment='связаться со мной' index='09' />

      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        className='panel bracket mt-5 grid grid-cols-2 overflow-hidden md:grid-cols-1'
      >
        {/* left — info */}
        <motion.div variants={fadeUp} className='flex flex-col p-8 sm:p-5'>
          <p className='text-sm text-text-muted'>
            <span className='text-acc'>$</span> echo{' '}
            <span className='text-amber'>$GREETING</span>
          </p>
          <h2 className='mt-3 font-display text-3xl font-bold leading-tight text-text text-glow md:text-2xl'>
            Давай построим
            <br />
            что-нибудь вместе
          </h2>

          <dl className='mt-8 space-y-2.5 text-sm'>
            {ENV.map(({ k, node }) => (
              <div key={k} className='flex flex-wrap gap-x-2'>
                <dt className='text-acc'>
                  <span className='text-magenta'>export</span> {k}
                </dt>
                <dd className='text-text-dim'>=</dd>
                <dd>{node}</dd>
              </div>
            ))}
          </dl>

          <div className='mt-6'>
            <p className='mb-2 text-sm text-acc'>SOCIALS=(</p>
            <div className='flex flex-wrap gap-2 pl-4'>
              {SOCIALS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='tag font-medium'
                >
                  <span className='text-acc-dim'>[</span>
                  {label}
                  <span className='text-acc-dim'>]</span>
                </a>
              ))}
            </div>
            <p className='mt-2 text-sm text-acc'>)</p>
          </div>

          <div className='mt-auto pt-8'>
            <MagneticButton
              href='https://t.me/thisisaliyev'
              external
              className='border-acc-dim bg-acc/10 text-acc hover:bg-acc/20'
            >
              <Send size={15} />
              <span>написать в Telegram</span>
            </MagneticButton>
          </div>
        </motion.div>

        {/* right — map */}
        <motion.div
          variants={fadeUp}
          className='relative min-h-72 border-l border-border md:min-h-64 md:border-l-0 md:border-t'
        >
          <iframe
            src='https://yandex.ru/map-widget/v1/?ll=71.979372,40.876731&z=14&pt=71.979372,40.876731,pm2rdm'
            className='absolute inset-0 h-full w-full border-0 opacity-90'
            style={{
              filter:
                'invert(0.92) hue-rotate(180deg) brightness(0.85) contrast(0.95) sepia(0.18)',
            }}
            allowFullScreen
            loading='lazy'
            title='Карта — Чинобод'
          />
          <span className='pointer-events-none absolute left-3 top-3 rounded-sm border border-border bg-bg-deep/80 px-2 py-1 text-xs text-acc'>
            ◉ geo: 40.87, 71.97
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
