import MarqueeImport from 'react-fast-marquee'

// react-fast-marquee is pure CJS (no `exports`/`module` field); under Vite 8
// (Rolldown) the default import can resolve to the module namespace object
// instead of the component. Unwrap `.default` when that happens.
const Marquee = (
  (MarqueeImport as { default?: typeof MarqueeImport }).default ?? MarqueeImport
) as typeof MarqueeImport

import { SKILLS } from '../skills.data'

const HALF = Math.ceil(SKILLS.length / 2)
const ROW_A = SKILLS.slice(0, HALF)
const ROW_B = SKILLS.slice(HALF)

function Chip({ name, img }: { name: string; img?: string }) {
  return (
    <div className='group mx-1.5 flex items-center gap-2.5 rounded-sm border border-border bg-surface/60 px-3.5 py-2 transition-colors hover:border-acc-dim hover:bg-acc/5'>
      {img ? (
        <img
          width={20}
          height={20}
          src={img}
          alt={name}
          loading='lazy'
          className='h-5 w-5 opacity-60 grayscale transition group-hover:opacity-100 group-hover:grayscale-0'
        />
      ) : (
        <span className='text-acc-dim transition-colors group-hover:text-acc'>
          ▹
        </span>
      )}
      <span className='text-sm text-text-muted transition-colors group-hover:text-text'>
        {name}
      </span>
    </div>
  )
}

const FADE =
  'pointer-events-none absolute inset-y-0 z-10 w-24 sm:w-12'

export function MarqueeBlock() {
  return (
    <div className='relative -mx-8 mt-6 overflow-hidden sm:-mx-5'>
      <div className={`${FADE} left-0 bg-gradient-to-r from-bg to-transparent`} />
      <div className={`${FADE} right-0 bg-gradient-to-l from-bg to-transparent`} />

      <div className='flex flex-col gap-2'>
        <Marquee speed={32} autoFill gradient={false}>
          {ROW_A.map((s) => (
            <Chip key={s.skillAlias} name={s.skillName} img={s.imgURL} />
          ))}
        </Marquee>
        <Marquee speed={32} autoFill gradient={false} direction='right'>
          {ROW_B.map((s) => (
            <Chip key={s.skillAlias} name={s.skillName} img={s.imgURL} />
          ))}
        </Marquee>
      </div>
    </div>
  )
}
