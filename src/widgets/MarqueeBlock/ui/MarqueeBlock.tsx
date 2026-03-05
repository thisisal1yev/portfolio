import { motion } from 'motion/react'
import Marquee from 'react-fast-marquee'

import { SkillBlock } from '@shared/components'
import { fadeIn } from '@shared/lib'
import { SKILLS } from '../skills.data'

export function MarqueeBlock() {
  return (
    <motion.div
      variants={fadeIn}
      className='flex h-[500px] items-center justify-center overflow-hidden'
    >
      <Marquee
        direction='down'
        loop={0}
        autoFill
        speed={40}
        className='!h-[500px] !w-72'
      >
        {SKILLS.map((skill) => (
          <SkillBlock
            key={skill.skillAlias}
            skill={skill.skillName}
          >
            <img
              width={48}
              height={48}
              src={skill.imgURL}
              alt={skill.skillAlias}
            />
          </SkillBlock>
        ))}
      </Marquee>
    </motion.div>
  )
}
