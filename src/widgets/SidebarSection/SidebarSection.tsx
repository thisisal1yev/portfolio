import { motion } from 'motion/react'

import { useActiveSection } from '@shared/hooks'
import { EASE } from '@shared/lib'
import { Download } from 'lucide-react'

const IS_AVAILABLE = true

const NAV_ITEMS = [
  { id: 'about', label: 'О себе', index: '01' },
  { id: 'skills', label: 'Навыки', index: '02' },
  { id: 'education', label: 'Образование', index: '03' },
  { id: 'experience', label: 'Опыт', index: '04' },
  { id: 'hackathons', label: 'Хакатоны', index: '05' },
  { id: 'projects', label: 'Проекты', index: '06' },
  { id: 'contacts', label: 'Контакты', index: '07' },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export function SidebarSection() {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
      className='sticky top-5 flex h-[calc(100vh-40px)] flex-col justify-between md:hidden'
    >
      {/* Top bar: brand left, nav right */}
      <div className='flex items-start justify-between'>
        <span className='text-text-muted text-sm tracking-wide'>
          thisisaliyev®, v0.1
        </span>

        <nav className='flex flex-col items-end gap-1'>
          {NAV_ITEMS.map(({ id, label, index }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`flex items-center gap-3 text-sm transition-colors ${
                activeId === id
                  ? 'text-text font-medium'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              <span className='tabular-nums'>{index}</span>
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Brand text */}
      <div className='flex items-end pb-4'>
        <h1 className='text-text text-[clamp(100px,9vw,160px)] leading-[0.85] font-black tracking-tighter uppercase'>
          THIS
          <br />
          IS
          <br />
          ALIYEV®
        </h1>
      </div>

      {/* Bottom */}
      <div className='flex items-end justify-between'>
        <p className='text-text-muted text-lg tracking-[-0.01em]'>
          Software Developer
          <br />
          {IS_AVAILABLE ? 'Открыт для офферов' : 'Занят'}
        </p>

        <a
          href='/resume_en.pdf'
          download
          className='text-text-muted hover:text-text flex items-center gap-2 text-sm transition-colors'
        >
          <Download size={16} />
          <span>Скачать CV</span>
        </a>
      </div>
    </motion.aside>
  )
}
