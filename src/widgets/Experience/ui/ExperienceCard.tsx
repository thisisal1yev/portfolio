import { motion } from 'motion/react'

import { cardReveal } from '@shared/lib'

interface Props {
  id: number
  company: string
  position: string
  duration: string
  description: string
  image: string
  link: string
}

export function ExperienceCard({
  company,
  position,
  duration,
  description,
  image,
  link,
}: Props) {
  return (
    <motion.li
      variants={cardReveal}
      className='relative pb-16 pl-10'
    >
      <div className='absolute top-1.5 left-0 h-3 w-3 rounded-full bg-purple' />

      <div className='space-y-3'>
        <p className='text-sm tracking-widest text-muted uppercase'>{duration}</p>

        <h3 className='text-2xl font-bold text-white'>{company}</h3>

        <p className='text-base text-muted'>{position}</p>

        <p className='max-w-xl text-sm leading-relaxed text-white/60'>
          {description}
        </p>

        <div className='overflow-hidden rounded-xl pt-2'>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={image}
              alt={company}
              className='aspect-video max-w-sm w-full rounded-xl object-cover transition-transform duration-500 hover:scale-105'
            />
          </a>
        </div>
      </div>
    </motion.li>
  )
}
