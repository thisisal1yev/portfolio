import { motion } from 'motion/react'
import { Download } from 'lucide-react'

import { useActiveSection } from '@shared/hooks'
import { EASE } from '@shared/lib'

const NAV_ITEMS = [
  { id: 'about', file: 'about.md', label: 'О себе', index: '01' },
  { id: 'stats', file: 'stats.json', label: 'Статистика', index: '02' },
  { id: 'stack', file: 'stack.ts', label: 'Стек', index: '03' },
  { id: 'services', file: 'services.sh', label: 'Услуги', index: '04' },
  { id: 'education', file: 'education.log', label: 'Образование', index: '05' },
  { id: 'experience', file: 'experience.git', label: 'Опыт', index: '06' },
  { id: 'hackathons', file: 'hackathons.md', label: 'Хакатоны', index: '07' },
  { id: 'projects', file: 'projects/', label: 'Проекты', index: '08' },
  { id: 'contacts', file: 'contact.sh', label: 'Контакты', index: '09' },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export function SidebarSection() {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <motion.aside
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
      className='sticky top-[72px] flex h-[calc(100vh-88px)] flex-col justify-between py-2 md:hidden'
    >
      {/* brand */}
      <div className='space-y-1'>
        <p className='text-acc text-glow text-lg font-bold'>~/aliyev</p>
        <p className='text-text-muted text-sm'>Ахмадилло Алиев</p>
        <p className='text-text-dim text-xs'>Software Engineer</p>
        <p className='text-text-dim text-xs'>
          lang: <span className='text-text-muted'>UZ · RU · EN · JA</span>
        </p>
      </div>

      {/* file-tree nav */}
      <nav className='my-8 flex-1 overflow-hidden'>
        <p className='text-text-dim mb-3 text-xs'>{'// sections'}</p>
        <p className='text-text-muted mb-1 text-sm'>src/</p>
        <ul className='space-y-0.5'>
          {NAV_ITEMS.map(({ id, file, index }, i) => {
            const isLast = i === NAV_ITEMS.length - 1
            const active = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`group flex items-center gap-1.5 text-sm transition-colors ${
                    active ? 'text-acc' : 'text-text-muted hover:text-text'
                  }`}
                >
                  <span className='text-text-dim select-none'>
                    {isLast ? '└─' : '├─'}
                  </span>
                  <span
                    className={`w-1 text-acc transition-opacity ${
                      active ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    ▸
                  </span>
                  <span className='text-text-dim text-xs tabular-nums'>
                    {index}
                  </span>
                  <span className={active ? 'text-glow' : ''}>{file}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* CV download */}
      <a
        href='/resume_en.pdf'
        download
        className='bracket group flex items-center gap-2 border border-border px-3 py-2.5 text-sm text-text-muted transition-colors hover:border-acc-dim hover:text-acc'
      >
        <span className='text-acc'>$</span>
        <Download size={14} className='transition-transform group-hover:translate-y-0.5' />
        <span>wget resume.pdf</span>
      </a>
    </motion.aside>
  )
}
