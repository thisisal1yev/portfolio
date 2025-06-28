import { Button } from '@shared/components'

export function ExperienceCard() {
  return (
    <div className='dark:bg-dark-secondary group flex w-full flex-col rounded-xl bg-white p-5'>
      <Button
        link=''
        label='Kwork'
        className='mb-10 flex h-auto grow gap-x-0 font-semibold'
      >
        <p className='bg-dark-primary rounded-full px-4 py-1.5 text-white transition-transform duration-300 group-hover:rounded-e-none'>
          1.
        </p>
      </Button>

      <div className='space-y-5'>
        <h4 className='font-semibold'>
          Frontend разработчик - Май 2023 - настоящее время
        </h4>

        <p className='text-sm font-medium text-neutral-500 dark:text-neutral-300'>
          Активно участвовал в создании адаптивных и интуитивно понятных
          интерфейсов на фриланс-платформе. Разрабатывал современные решения в
          соответствии с требованиями клиентов.
        </p>

        <div className='overflow-hidden rounded-2xl'>
          <a
            href='https://kwork.ru/user/thisisaliyev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='object-cover transition-transform duration-300 group-hover:scale-110'
              src='/images/xp/kwork.png'
              alt='Kwork profile'
            />
          </a>
        </div>
      </div>
    </div>
  )
}
