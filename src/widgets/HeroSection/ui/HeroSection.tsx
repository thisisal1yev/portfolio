import { useRef } from 'react'
import { ArrowDown, FileText } from 'lucide-react'
import { m } from 'motion/react'

import { GithubMark, MagneticButton, TypeWriter } from '@shared/components'
import { useParallax } from '@shared/hooks'
import { EASE, fadeUp, staggerContainer } from '@shared/lib'

const PARALLAX_IN: [number, number] = [0, 1]
const PARALLAX_OUT: [number, number] = [0, -60]

const INFO = [
  { k: 'host', v: 'Andijan, Uzbekistan' },
  { k: 'role', v: 'Software Engineer' },
  { k: 'focus', v: 'Frontend · Backend · DevOps' },
  { k: 'langs', v: 'UZ · RU · EN · JA' },
  { k: 'status', v: 'open to offers', acc: true },
]

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const y = useParallax(ref, PARALLAX_IN, PARALLAX_OUT)

  return (
    <section
      ref={ref}
      className='pt-2'
    >
      <m.div
        initial='hidden'
        animate='visible'
        variants={staggerContainer}
        className='panel bracket overflow-hidden'
      >
        {/* window titlebar */}
        <div className='border-border flex items-center justify-between border-b px-4 py-2.5'>
          <div className='flex items-center gap-2'>
            <span className='bg-dot-red h-2.5 w-2.5 rounded-full' />
            <span className='bg-dot-amber h-2.5 w-2.5 rounded-full' />
            <span className='bg-dot-green h-2.5 w-2.5 rounded-full' />
            <span className='text-text-dim ml-2 text-xs'>
              aliyev — ~/portfolio
            </span>
          </div>
          <span className='text-text-dim xs:hidden text-xs'>80×24</span>
        </div>

        <div className='grid-bg p-8 sm:p-5'>
          <m.p
            variants={fadeUp}
            className='text-text-muted text-sm'
          >
            <span className='text-acc'>$</span> whoami
          </m.p>
          <m.p
            variants={fadeUp}
            className='text-text-dim mt-1 text-sm'
          >
            {'> '}axmadillo_aliyev
          </m.p>

          {/* giant glitch name */}
          <m.h1
            style={{ y }}
            variants={fadeUp}
            className='font-display text-text mt-6 text-[clamp(44px,9vw,128px)] leading-[0.88] font-bold tracking-tighter uppercase'
          >
            <span
              className='glitch text-glow'
              data-text='AXMADILLO'
            >
              AXMADILLO
            </span>
            <br />
            <span
              className='glitch'
              data-text='ALIYEV'
            >
              ALIYEV
            </span>
            <span className='caret align-baseline' />
          </m.h1>

          {/* typed role */}
          <m.p
            variants={fadeUp}
            className='text-text-muted mt-6 max-w-xl text-lg sm:text-base'
          >
            <span className='text-acc'># </span>
            <TypeWriter
              text='I build fast web interfaces and reliable APIs'
              speed={28}
              className='text-text-muted'
            />
          </m.p>

          {/* neofetch info + CTAs */}
          <div className='mt-10 grid grid-cols-[1fr_auto] gap-10 md:grid-cols-1 md:gap-8'>
            <m.dl
              variants={fadeUp}
              className='space-y-1.5 text-sm'
            >
              {INFO.map(({ k, v, acc }) => (
                <div
                  key={k}
                  className='flex gap-3'
                >
                  <dt className='text-acc w-20 shrink-0'>{k}</dt>
                  <dd className='text-text-dim'>::</dd>
                  <dd
                    className={acc ? 'text-acc text-glow' : 'text-text-muted'}
                  >
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
                className='border-acc-dim bg-acc/10 text-acc hover:bg-acc/20 justify-center'
              >
                <span>./contact.sh</span>
              </MagneticButton>
              <MagneticButton
                href='/resume_en.pdf'
                download
                className='border-border text-text-muted hover:border-acc-dim hover:text-acc justify-center'
              >
                <FileText size={15} />
                <span>cat resume.pdf</span>
              </MagneticButton>
              <MagneticButton
                href='https://github.com/thisisal1yev'
                external
                className='border-border text-text-muted hover:border-acc-dim hover:text-acc justify-center'
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
        className='text-text-dim mt-5 flex items-center gap-2 text-xs'
      >
        <m.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: EASE }}
        >
          <ArrowDown
            size={14}
            className='text-acc'
          />
        </m.span>
        scroll — or cd into a section on the left
      </m.div>
    </section>
  )
}
