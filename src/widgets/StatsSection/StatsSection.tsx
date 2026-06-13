import { m } from 'motion/react'

import { AnimateNumber, Prompt } from '@shared/components'
import { useGitHubStats } from '@shared/hooks'
import { EASE, fadeUp, staggerContainer } from '@shared/lib'

const STAT_LABELS = [
  { key: 'repos' as const, cmd: 'public_repos', label: 'публичных репозиториев' },
  { key: 'followers' as const, cmd: 'followers', label: 'подписчиков на GitHub' },
  { key: 'stars' as const, cmd: 'stars_earned', label: 'заработанных звёзд' },
]

export function StatsSection() {
  const { stats, loading } = useGitHubStats()

  return (
    <section id='stats' className='scroll-mt-24'>
      <Prompt cmd='gh api /users/aliyev' comment='статистика' index='02' />

      <m.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className='mt-5 grid grid-cols-3 gap-4 sm:grid-cols-1'
      >
        {STAT_LABELS.map(({ key, cmd, label }) => (
          <m.div
            key={key}
            variants={fadeUp}
            className='panel bracket flex flex-col gap-6 p-7 sm:p-5'
          >
            <p className='text-acc text-xs'>{`> ${cmd}`}</p>

            <span className='font-display text-[clamp(56px,5.5vw,88px)] font-bold leading-none tracking-tight text-text text-glow'>
              {loading ? (
                <span className='text-text-dim'>--</span>
              ) : (
                <AnimateNumber value={stats[key]} />
              )}
            </span>

            {/* decorative load bar */}
            <div className='h-px w-full bg-border'>
              <m.div
                className='h-px bg-acc'
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>

            <p className='text-sm text-text-muted'>{label}</p>
          </m.div>
        ))}
      </m.div>
    </section>
  )
}
