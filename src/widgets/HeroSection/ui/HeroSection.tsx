import { useRef } from 'react'
import { ArrowDown, FileText } from 'lucide-react'
import { m } from 'motion/react'

import { MagneticButton, TypeWriter } from '@shared/components'
import { useParallax } from '@shared/hooks'
import { EASE, fadeUp, staggerContainer } from '@shared/lib'

function GithubMark({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden
    >
      <path d='M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z' />
    </svg>
  )
}

const PARALLAX_IN: [number, number] = [0, 1]
const PARALLAX_OUT: [number, number] = [0, -60]

const INFO = [
  { k: 'host', v: 'Андижан, Узбекистан' },
  { k: 'role', v: 'Software Engineer' },
  { k: 'focus', v: 'Frontend · Backend · DevOps' },
  { k: 'stack', v: 'React · Vue · Node · Nest' },
  { k: 'langs', v: 'UZ · RU · EN · JA' },
  { k: 'status', v: 'открыт для офферов', acc: true },
]

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const y = useParallax(ref, PARALLAX_IN, PARALLAX_OUT)

  return (
    <section ref={ref} className='pt-2'>
      <m.div
        initial='hidden'
        animate='visible'
        variants={staggerContainer}
        className='panel bracket overflow-hidden'
      >
        {/* window titlebar */}
        <div className='flex items-center justify-between border-b border-border px-4 py-2.5'>
          <div className='flex items-center gap-2'>
            <span className='h-2.5 w-2.5 rounded-full bg-dot-red' />
            <span className='h-2.5 w-2.5 rounded-full bg-dot-amber' />
            <span className='h-2.5 w-2.5 rounded-full bg-dot-green' />
            <span className='text-text-dim ml-2 text-xs'>aliyev — ~/portfolio</span>
          </div>
          <span className='text-text-dim text-xs xs:hidden'>80×24</span>
        </div>

        <div className='grid-bg p-8 sm:p-5'>
          <m.p variants={fadeUp} className='text-sm text-text-muted'>
            <span className='text-acc'>$</span> whoami
          </m.p>
          <m.p variants={fadeUp} className='mt-1 text-sm text-text-dim'>
            {'> '}axmadillo_aliyev
          </m.p>

          {/* giant glitch name */}
          <m.h1
            style={{ y }}
            variants={fadeUp}
            className='mt-6 font-display text-[clamp(44px,9vw,128px)] font-bold uppercase leading-[0.88] tracking-tighter text-text'
          >
            <span className='glitch text-glow' data-text='AXMADILLO'>
              AXMADILLO
            </span>
            <br />
            <span className='glitch' data-text='ALIYEV'>
              ALIYEV
            </span>
            <span className='caret align-baseline' />
          </m.h1>

          {/* typed role */}
          <m.p
            variants={fadeUp}
            className='mt-6 max-w-xl text-lg text-text-muted sm:text-base'
          >
            <span className='text-acc'># </span>
            <TypeWriter
              text='создаю быстрые веб-интерфейсы и надёжные API'
              speed={28}
              className='text-text-muted'
            />
          </m.p>

          {/* neofetch info + CTAs */}
          <div className='mt-10 grid grid-cols-[1fr_auto] gap-10 md:grid-cols-1 md:gap-8'>
            <m.dl variants={fadeUp} className='space-y-1.5 text-sm'>
              {INFO.map(({ k, v, acc }) => (
                <div key={k} className='flex gap-3'>
                  <dt className='w-20 shrink-0 text-acc'>{k}</dt>
                  <dd className='text-text-dim'>::</dd>
                  <dd className={acc ? 'text-acc text-glow' : 'text-text-muted'}>
                    {v}
                  </dd>
                </div>
              ))}
            </m.dl>

            <m.div
              variants={fadeUp}
              className='flex flex-col items-stretch gap-3 md:flex-row md:flex-wrap'
            >
              <MagneticButton
                href='#contacts'
                className='justify-center border-acc-dim bg-acc/10 text-acc hover:bg-acc/20'
              >
                <span>./contact.sh</span>
              </MagneticButton>
              <MagneticButton
                href='/resume_en.pdf'
                download
                className='justify-center border-border text-text-muted hover:border-acc-dim hover:text-acc'
              >
                <FileText size={15} />
                <span>cat resume.pdf</span>
              </MagneticButton>
              <MagneticButton
                href='https://github.com/thisisal1yev'
                external
                className='justify-center border-border text-text-muted hover:border-acc-dim hover:text-acc'
              >
                <GithubMark size={15} />
                <span>github</span>
              </MagneticButton>
            </m.div>
          </div>
        </div>
      </m.div>

      {/* scroll hint */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className='mt-5 flex items-center gap-2 text-xs text-text-dim'
      >
        <m.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: EASE }}
        >
          <ArrowDown size={14} className='text-acc' />
        </m.span>
        scroll — или cd в раздел слева
      </m.div>
    </section>
  )
}
