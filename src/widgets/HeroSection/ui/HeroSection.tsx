import { useRef } from 'react'
import { ArrowDown, FileText, Github } from 'lucide-react'
import { motion } from 'motion/react'

import { MagneticButton, TypeWriter } from '@shared/components'
import { useParallax } from '@shared/hooks'
import { EASE, fadeUp, staggerContainer } from '@shared/lib'

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
      <motion.div
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
          <motion.p variants={fadeUp} className='text-sm text-text-muted'>
            <span className='text-acc'>$</span> whoami
          </motion.p>
          <motion.p variants={fadeUp} className='mt-1 text-sm text-text-dim'>
            {'> '}axmadillo_aliyev
          </motion.p>

          {/* giant glitch name */}
          <motion.h1
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
          </motion.h1>

          {/* typed role */}
          <motion.p
            variants={fadeUp}
            className='mt-6 max-w-xl text-lg text-text-muted sm:text-base'
          >
            <span className='text-acc'># </span>
            <TypeWriter
              text='создаю быстрые веб-интерфейсы и надёжные API'
              speed={28}
              className='text-text-muted'
            />
          </motion.p>

          {/* neofetch info + CTAs */}
          <div className='mt-10 grid grid-cols-[1fr_auto] gap-10 md:grid-cols-1 md:gap-8'>
            <motion.dl variants={fadeUp} className='space-y-1.5 text-sm'>
              {INFO.map(({ k, v, acc }) => (
                <div key={k} className='flex gap-3'>
                  <dt className='w-20 shrink-0 text-acc'>{k}</dt>
                  <dd className='text-text-dim'>::</dd>
                  <dd className={acc ? 'text-acc text-glow' : 'text-text-muted'}>
                    {v}
                  </dd>
                </div>
              ))}
            </motion.dl>

            <motion.div
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
                <Github size={15} />
                <span>github</span>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className='mt-5 flex items-center gap-2 text-xs text-text-dim'
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: EASE }}
        >
          <ArrowDown size={14} className='text-acc' />
        </motion.span>
        scroll — или cd в раздел слева
      </motion.div>
    </section>
  )
}
