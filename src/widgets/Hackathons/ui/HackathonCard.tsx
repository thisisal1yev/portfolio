import { motion } from 'motion/react'

import { cardReveal } from '@shared/lib'

interface Props {
  name: string
  year: string
  project: string
  stack: string
  result: string
  link: string
}

export function HackathonCard({ name, year, project, stack, result, link }: Props) {
  return (
    <motion.div
      variants={cardReveal}
      className='flex flex-col gap-3 rounded-xl bg-bg p-6'
    >
      <p className='text-sm tracking-wide text-text-muted'>{year}</p>
      <h3 className='text-2xl font-bold text-text'>{name}</h3>
      <p className='text-base text-text-muted'>{project}</p>
      <p className='text-sm text-text-muted'>{stack}</p>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='mt-auto w-fit rounded-full bg-surface-dark px-4 py-1.5 text-sm text-white transition-opacity hover:opacity-80'
      >
        {result}
      </a>
    </motion.div>
  )
}
