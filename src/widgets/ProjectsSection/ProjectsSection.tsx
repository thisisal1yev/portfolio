import { Prompt } from '@shared/components'
import { ProjectsList } from '../ProjectsList'

export function ProjectsSection() {
  return (
    <section
      id='projects'
      className='scroll-mt-24'
    >
      <Prompt
        cmd='ls -la ~/projects'
        comment='selected projects'
        title='Projects'
        index='08'
      />

      <div className='mt-5'>
        <ProjectsList />
      </div>
    </section>
  )
}
