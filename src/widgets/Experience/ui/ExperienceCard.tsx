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
    <motion.div
      variants={cardReveal}
      className='group flex flex-col rounded-xl bg-bg p-6'
    >
      <div className='space-y-3'>
        <p className='text-sm tracking-wide text-text-muted'>{duration}</p>

        <h3 className='text-2xl font-bold text-text'>{company}</h3>

        <p className='text-base text-text-muted'>{position}</p>

        <p className='text-sm leading-relaxed text-text-muted'>
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
              className='aspect-video w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105'
            />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
