import { motion } from 'motion/react'

import { staggerContainer } from '@shared/lib'
import { experienceData } from './experience.data'
import { ExperienceCard } from './ui/ExperienceCard'

interface Props {
  experienceRef: React.RefObject<HTMLElement | null>
}

export function ExperienceSection({ experienceRef }: Props) {
  return (
    <section
      id='experience'
      ref={experienceRef}
      className='mx-auto w-full max-w-7xl px-8 py-24 md:px-5'
    >
      <div className='relative'>
        <div className='absolute top-0 left-1.5 h-full w-px bg-gray' />

        <motion.ul
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {experienceData.map((item) => (
            <ExperienceCard
              key={item.id}
              {...item}
            />
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
