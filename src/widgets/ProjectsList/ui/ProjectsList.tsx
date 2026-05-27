import { Play } from 'lucide-react'
import { motion } from 'motion/react'

import { cardReveal, staggerContainer } from '@shared/lib'
import { PROJECTS } from '../projects.data'

export function ProjectsList() {
  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      className='space-y-0'
    >
      {PROJECTS.map((project) => (
        <motion.div
          key={project.title}
          variants={cardReveal}
          className='group border-text/10 grid grid-cols-[1fr_1fr] gap-6 border-b py-8 first:pt-0 last:border-none last:pb-0 sm:grid-cols-1'
        >
          {/* Left — info */}
          <div className='flex flex-col justify-between'>
            <h4 className='text-text text-2xl font-bold'>{project.title}</h4>

            <div className='mt-auto space-y-4 pt-6'>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-surface-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-opacity hover:opacity-80'
              >
                <Play size={14} />
                Кейс
              </a>

              <p className='text-text-muted text-sm leading-relaxed'>
                {project.description}
              </p>
            </div>
          </div>

          {/* Right — image */}
          <div className='overflow-hidden rounded-xl'>
            <img
              src={project.imgURL}
              alt={project.title}
              loading='lazy'
              decoding='async'
              className='aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
