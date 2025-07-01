import { Button } from '@shared/components'

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
  description,
  duration,
  id,
  image,
  link,
  position,
}: Props) {
  return (
    <div
      key={id}
      className='dark:bg-dark-secondary group flex w-full flex-col rounded-xl bg-white p-5'
    >
      <Button
        link=''
        label={company}
        className='xs:text-sm mb-10 flex h-auto grow gap-x-0 font-semibold sm:text-base'
      >
        <p className='bg-dark-primary rounded-full px-4 py-1.5 text-white transition-transform duration-300 group-hover:rounded-e-none'>
          {id}.
        </p>
      </Button>

      <div className='space-y-5'>
        <h4 className='xs:text-sm font-semibold'>
          {position} - {duration}
        </h4>

        <p className='xs:text-xs text-sm font-medium text-neutral-500 dark:text-neutral-300'>
          {description}
        </p>

        <div className='overflow-hidden rounded-2xl md:rounded-xl'>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='object-cover transition-transform duration-300 group-hover:scale-110'
              src={image}
              alt='Kwork profile'
            />
          </a>
        </div>
      </div>
    </div>
  )
}
