import { type ReactNode } from 'react'
import { m } from 'motion/react'

import { AnimateNumber, Prompt } from '@shared/components'
import { useGitHubStats } from '@shared/hooks'
import { EASE, fadeUp, formatRelative, staggerContainer } from '@shared/lib'

const NUM_STATS = [
  {
    key: 'repos' as const,
    cmd: 'public_repos',
    label: 'public repositories',
  },
  {
    key: 'followers' as const,
    cmd: 'followers',
    label: 'GitHub followers',
  },
  { key: 'stars' as const, cmd: 'stars_earned', label: 'stars earned' },
  { key: 'forks' as const, cmd: 'forks_earned', label: 'project forks' },
]

// terminal-palette accents for the language bar
const LANG_PALETTE = ['#34d399', '#22d3ee', '#a78bfa', '#fbbf24', '#f472b6']
const OTHER_COLOR = '#52525b'

const langColor = (name: string, i: number) =>
  name === 'Others' ? OTHER_COLOR : LANG_PALETTE[i % LANG_PALETTE.length]

export function StatsSection() {
  const { stats, loading } = useGitHubStats()

  return (
    <section
      id='stats'
      className='scroll-mt-24'
    >
      <Prompt
        cmd='gh api /users/aliyev'
        comment='statistics'
        title='GitHub statistics'
        index='02'
      />

      {/* numeric stats */}
      <m.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className='mt-5 grid grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2'
      >
        {NUM_STATS.map(({ key, cmd, label }) => (
          <m.div
            key={key}
            variants={fadeUp}
            className='panel bracket hover:border-acc-dim flex flex-col gap-6 p-7 sm:p-5'
          >
            <p className='text-acc text-xs'>{`> ${cmd}`}</p>

            <span className='font-display text-text text-glow text-[clamp(44px,4.5vw,72px)] leading-none font-bold tracking-tight'>
              {loading ? (
                <span className='text-text-dim'>--</span>
              ) : (
                <AnimateNumber value={stats[key]} />
              )}
            </span>

            {/* decorative load bar */}
            <div className='bg-border h-px w-full'>
              <m.div
                className='bg-acc h-px'
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>

            <p className='text-text-muted text-sm'>{label}</p>
          </m.div>
        ))}
      </m.div>

      {/* meta: account age / top language / last push */}
      <m.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className='mt-4 grid grid-cols-3 gap-4 sm:grid-cols-1'
      >
        <MetaCard
          cmd='account_age'
          label='years on GitHub'
        >
          {loading ? '--' : <AnimateNumber value={stats.years} />}
        </MetaCard>
        <MetaCard
          cmd='top_language'
          label='primary language'
        >
          {loading ? '--' : stats.topLanguage}
        </MetaCard>
        <MetaCard
          cmd='last_push'
          label='last activity'
        >
          {loading ? '--' : formatRelative(stats.lastPush)}
        </MetaCard>
      </m.div>

      {/* language breakdown bar */}
      {!loading && stats.languages.length > 0 && (
        <m.div
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='panel bracket hover:border-acc-dim mt-4 flex flex-col gap-4 p-7 sm:p-5'
        >
          <p className='text-acc text-xs'>{'> languages --top 5'}</p>

          <div className='bg-border flex h-2.5 w-full overflow-hidden rounded-full'>
            {stats.languages.map((lang, i) => (
              <m.div
                key={lang.name}
                className='h-full shrink-0'
                // Static width keeps layout stable; animate scaleX on the GPU
                // (no per-frame layout) instead of animating width. Safe here —
                // the segment has no text to squash.
                style={{
                  backgroundColor: langColor(lang.name, i),
                  width: `${lang.pct}%`,
                  transformOrigin: 'left',
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: EASE,
                  delay: 0.1 + i * 0.08,
                }}
              />
            ))}
          </div>

          <div className='flex flex-wrap gap-x-5 gap-y-2'>
            {stats.languages.map((lang, i) => (
              <span
                key={lang.name}
                className='flex items-center gap-2 text-sm'
              >
                <span
                  className='h-2.5 w-2.5 rounded-sm'
                  style={{ backgroundColor: langColor(lang.name, i) }}
                />
                <span className='text-text-muted'>{lang.name}</span>
                <span className='text-text-dim'>{lang.pct}%</span>
              </span>
            ))}
          </div>
        </m.div>
      )}
    </section>
  )
}

function MetaCard({
  cmd,
  label,
  children,
}: {
  cmd: string
  label: string
  children: ReactNode
}) {
  return (
    <m.div
      variants={fadeUp}
      className='panel bracket hover:border-acc-dim flex flex-col gap-3 p-6 sm:p-5'
    >
      <p className='text-acc text-xs'>{`> ${cmd}`}</p>
      <span className='font-display text-text text-glow text-3xl leading-none font-bold tracking-tight sm:text-2xl'>
        {children}
      </span>
      <p className='text-text-muted text-sm'>{label}</p>
    </m.div>
  )
}
