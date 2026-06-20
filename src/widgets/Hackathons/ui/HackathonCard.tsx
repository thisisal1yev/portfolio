import { ArrowUpRight, ExternalLink, FileText, Trophy } from 'lucide-react'
import { m } from 'motion/react'

import { GithubMark } from '@shared/components'
import { cardReveal } from '@shared/lib'
import type { Hackathon } from '../hackathons.data'

type Props = Omit<Hackathon, 'id'>

const RESULT_BADGE =
  'border-acc-dim bg-acc/10 text-acc inline-flex w-fit items-center gap-1.5 rounded-sm border px-3 py-1.5 text-xs'

const ICON_BTN =
  'border-border text-text-dim hover:border-acc-dim hover:text-acc grid h-7 w-7 place-items-center rounded-sm border transition-colors'

export function HackathonCard({
  name,
  year,
  project,
  stack,
  result,
  role,
  team,
  link,
  links,
}: Props) {
  const hasLink = link && link !== '#'
  const hasResources = links && (links.repo || links.demo || links.slides)

  return (
    <m.div
      variants={cardReveal}
      className='panel bracket group hover:border-acc-dim flex flex-col gap-3 p-6 transition-colors'
    >
      <p className='text-acc text-xs'>
        <span className='text-text-dim'>~/</span>
        {year}
      </p>
      <h3 className='font-display text-text text-xl leading-snug font-bold'>
        {name}
      </h3>
      {project && <p className='text-text-muted text-sm'>{project}</p>}
      {stack && <p className='text-text-dim text-xs'># {stack}</p>}
      {role && (
        <p className='text-xs'>
          <span className='text-acc'>role</span>
          <span className='text-text-dim'> :: </span>
          <span className='text-text-muted'>{role}</span>
        </p>
      )}
      {team && (
        <p className='text-xs'>
          <span className='text-acc'>team</span>
          <span className='text-text-dim'> :: </span>
          <span className='text-text-muted'>{team}</span>
        </p>
      )}

      <div className='mt-auto flex items-center justify-between gap-3 pt-1'>
        {hasLink ? (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className={`${RESULT_BADGE} hover:bg-acc/20`}
          >
            <Trophy size={12} /> {result} <ArrowUpRight size={13} />
          </a>
        ) : (
          <span className={RESULT_BADGE}>
            <Trophy size={12} /> {result}
          </span>
        )}

        {hasResources && (
          <div className='flex items-center gap-2'>
            {links.repo && (
              <a
                href={links.repo}
                target='_blank'
                rel='noopener noreferrer'
                title='Repository'
                className={ICON_BTN}
              >
                <GithubMark size={14} />
              </a>
            )}

            {links.demo && (
              <a
                href={links.demo}
                target='_blank'
                rel='noopener noreferrer'
                title='Demo'
                className={ICON_BTN}
              >
                <ExternalLink size={14} />
              </a>
            )}
            {links.slides && (
              <a
                href={links.slides}
                target='_blank'
                rel='noopener noreferrer'
                title='Slides'
                className={ICON_BTN}
              >
                <FileText size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </m.div>
  )
}
