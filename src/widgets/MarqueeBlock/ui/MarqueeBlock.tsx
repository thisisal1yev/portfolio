import Marquee from 'react-fast-marquee'

import { SkillBlock } from '../../../shared/components/ui/SkillBlock'
import { SKILLS } from '../skills.data'

export function MarqueeBlock() {
  return (
    <div className='mr-5 flex h-full w-96 items-center justify-center'>
      <Marquee
        direction='down'
        loop={0}
        autoFill={true}
        speed={50}
        className='!m-0 h-96 !w-96 !overflow-visible !p-0 transition-transform duration-300 hover:scale-105'
      >
        {SKILLS.map((skill) => (
          <SkillBlock
            skill={skill.skillName}
            key={skill.skillAlias}
          >
            <img
              width={100}
              height={100}
              src={skill.imgURL}
              alt={skill.skillAlias}
            />
          </SkillBlock>
        ))}
      </Marquee>
    </div>
  )
}
