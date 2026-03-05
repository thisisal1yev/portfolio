import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

import { cardReveal, staggerContainer } from '@shared/lib'
import { PROJECTS } from '../projects.data'

export function ProjectsList() {
  return (
    <motion.ul
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
    >
      {PROJECTS.map((project, index) => (
        <motion.li
          key={project.title}
          variants={cardReveal}
          className='group grid grid-cols-[64px_1fr_260px] items-center gap-8 border-b border-gray py-8 sm:grid-cols-1 sm:gap-4'
        >
          <span className='text-5xl font-black text-muted/30 sm:text-3xl'>
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className='space-y-2'>
            <h4 className='text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple'>
              {project.title}
            </h4>
            <p className='text-sm leading-relaxed text-muted'>
              {project.description}
            </p>
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1 text-sm tracking-widest text-muted uppercase transition-colors duration-200 hover:text-white sm:flex'
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          </div>

          <div className='relative overflow-hidden rounded-xl sm:hidden'>
            <img
              src={project.imgURL}
              alt={project.title}
              loading='lazy'
              decoding='async'
              className='aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110'
            />
            <div className='absolute inset-0 flex items-center justify-center bg-dark-primary/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              <ArrowUpRight
                size={32}
                className='text-white'
              />
            </div>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  )
}
