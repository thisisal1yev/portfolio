import { ArrowUpRight } from 'lucide-react'

import { Button } from '@shared/components/ui/Button'
import { PROJECTS } from '../projects.data'

export function ProjectsList() {
  return (
    <ul className='space-y-5 pt-2'>
      {PROJECTS.map((project) => (
        <li
          key={project.title}
          className='border-light-primary dark:border-gray hover:dark:border-purple group flex justify-between gap-x-5 pb-5 transition-colors duration-300 not-last:border-b-2 hover:border-purple-800'
        >
          <div className='flex w-auto flex-col items-start justify-between'>
            <h4 className='text-2xl font-semibold whitespace-nowrap transition-transform duration-300 group-hover:translate-x-4'>
              {project.title}
            </h4>

            <Button
              link={project.link}
              label={'Link'}
            >
              <ArrowUpRight
                size={40}
                className='bg-dark-primary rounded-full p-2 text-white transition-transform duration-300 group-hover:translate-x-4 group-hover:rounded-e-none'
              />
            </Button>
          </div>

          <p className='mt-auto w-72 text-sm leading-6'>
            {project.description}
          </p>

          <img
            sizes='calc(calc((100vw - 40px) * 0.5833) * 0.3193)'
            decoding='async'
            loading='lazy'
            width='270'
            height='200'
            src={project.imgURL}
            alt={project.title}
            className='h-52 w-72 rounded-lg object-cover transition-transform duration-300 group-hover:scale-95'
          />
        </li>
      ))}
    </ul>
  )
}
