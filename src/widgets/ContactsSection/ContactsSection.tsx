import { useEffect, useState } from 'react'
import { m } from 'motion/react'
import { Send } from 'lucide-react'

import { Prompt } from '@shared/components'
import { fadeUp, staggerContainer } from '@shared/lib'

import { ContactForm } from './ContactForm'

const SOCIALS = [
  {
    href: 'https://www.linkedin.com/in/thisisaliyev/',
    label: 'linkedin',
    handle: 'in/thisisaliyev',
    icon: '/images/logos/linkedin.svg',
  },
  {
    href: 'https://t.me/thisisaliyev',
    label: 'telegram',
    handle: 't.me/thisisaliyev',
    icon: '/images/logos/telegram.svg',
  },
  {
    href: 'https://www.instagram.com/thisisaliyev.a',
    label: 'instagram',
    handle: '@thisisaliyev.a',
    icon: '/images/logos/instagram.svg',
  },
  {
    href: 'https://github.com/thisisal1yev',
    label: 'github',
    handle: 'thisisal1yev',
    icon: '/images/logos/github.svg',
  },
  {
    href: 'https://gitlab.com/thisisaliyev',
    label: 'gitlab',
    handle: 'thisisaliyev',
    icon: '/images/logos/gitlab.svg',
  },
]

const ICON_MASK = {
  maskSize: 'contain',
  WebkitMaskSize: 'contain',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
  maskPosition: 'center',
  WebkitMaskPosition: 'center',
} as const

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
        "Andijan region, Chinobod, UZ"
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

function MapPanel() {
  return (
    <>
      <iframe
        src='https://yandex.ru/map-widget/v1/?ll=71.979372,40.876731&z=14&pt=71.979372,40.876731,pm2rdm'
        sandbox='allow-scripts allow-same-origin allow-popups'
        className='absolute inset-0 h-full w-full border-0 opacity-90'
        style={{
          filter:
            'invert(0.92) hue-rotate(180deg) brightness(0.85) contrast(0.95) sepia(0.18)',
        }}
        allowFullScreen
        loading='lazy'
        title='Map — Chinobod'
      />
      <span className='pointer-events-none absolute left-3 top-3 rounded-sm border border-border bg-bg-deep/80 px-2 py-1 text-xs text-acc'>
        ◉ geo: 40.87, 71.97
      </span>
    </>
  )
}

function SentPanel({ onBack }: { onBack: () => void }) {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-4 p-6 text-center'>
      <p className='font-mono text-sm text-acc text-glow'>✓ message sent — exit 0</p>
      <p className='max-w-xs text-xs text-text-muted'>
        Thanks — I'll get back to you soon.
      </p>
      <button
        type='button'
        onClick={onBack}
        className='rounded-sm border border-border px-4 py-2 text-xs text-text-dim transition-colors hover:border-acc-dim hover:text-acc'
      >
        ← back to map
      </button>
    </div>
  )
}

export function ContactsSection() {
  const [view, setView] = useState<'map' | 'form' | 'sent'>('map')

  useEffect(() => {
    if (view !== 'form') return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setView('map')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [view])

  return (
    <section id='contacts' className='scroll-mt-24'>
      <Prompt cmd='./contact.sh' comment='get in touch' index='09' />

      <m.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        className='panel bracket mt-5 grid grid-cols-2 overflow-hidden md:grid-cols-1'
      >
        {/* left — info */}
        <m.div variants={fadeUp} className='flex flex-col p-8 sm:p-5'>
          <p className='text-sm text-text-muted'>
            <span className='text-acc'>$</span> echo{' '}
            <span className='text-amber'>$GREETING</span>
          </p>
          <h2 className='mt-3 font-display text-3xl font-bold leading-tight text-text text-glow md:text-2xl'>
            Let's build
            <br />
            something together
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
            <div className='mt-1 flex flex-col pl-4'>
              {SOCIALS.map(({ href, label, handle, icon }) => (
                <a
                  key={href}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`${label} — ${handle}`}
                  className='group -mx-2 flex items-center gap-2.5 rounded-sm px-2 py-1.5 text-text-dim transition-colors hover:bg-acc/[0.06] hover:text-acc'
                >
                  <span
                    aria-hidden='true'
                    className='w-2 shrink-0 text-acc opacity-0 transition-opacity group-hover:opacity-100'
                  >
                    ▸
                  </span>
                  <span
                    aria-hidden='true'
                    className='size-[18px] shrink-0 bg-current'
                    style={{ ...ICON_MASK, maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }}
                  />
                  <span className='text-sm text-text-muted transition-colors group-hover:text-text'>
                    {label}
                  </span>
                  <span className='ml-auto font-mono text-xs text-text-dim transition-colors group-hover:text-acc-dim'>
                    {handle}
                  </span>
                </a>
              ))}
            </div>
            <p className='mt-2 text-sm text-acc'>)</p>
          </div>

          <div className='mt-auto pt-8'>
            <button
              type='button'
              onClick={() => setView('form')}
              className='bracket group inline-flex items-center gap-2 border border-acc-dim bg-acc/10 px-5 py-2.5 text-sm text-acc transition-colors hover:bg-acc/20'
            >
              <Send size={15} />
              <span>Send message</span>
            </button>
          </div>
        </m.div>

        {/* right — map / form / sent */}
        <div className='relative min-h-72 border-l border-border md:min-h-64 md:border-l-0 md:border-t'>
          {view === 'form' ? (
            <m.div
              key='form'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className='absolute inset-0'
            >
              <ContactForm
                onSuccess={() => setView('sent')}
                onClose={() => setView('map')}
              />
            </m.div>
          ) : view === 'sent' ? (
            <m.div
              key='sent'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className='absolute inset-0'
            >
              <SentPanel onBack={() => setView('map')} />
            </m.div>
          ) : (
            <m.div
              key='map'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className='absolute inset-0'
            >
              <MapPanel />
            </m.div>
          )}
        </div>
      </m.div>
    </section>
  )
}
