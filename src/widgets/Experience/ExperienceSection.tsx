import { experienceData } from './experience.data'
import { ExperienceCard } from './ui/ExperienceCard'

interface Props {
  experienceRef: React.RefObject<HTMLDivElement | null>
}

export function ExperienceSection({ experienceRef }: Props) {
  return (
    <section
      id='experience'
      ref={experienceRef}
    >
      <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
        {experienceData.map((item) => (
          <ExperienceCard {...item} />
        ))}
      </div>
    </section>
  )
}
