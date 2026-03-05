import {
  BriefcaseBusiness,
  CircleAlert,
  CodeXml,
  GalleryVerticalEnd,
  Voicemail,
} from 'lucide-react'

export type SectionId = 'about' | 'skills' | 'experience' | 'projects' | 'contacts'

interface MenuItem {
  id: SectionId
  title: string
  href: string
  icon: React.ReactNode
}

export const MENU: MenuItem[] = [
  {
    id: 'about',
    title: 'О себе',
    href: '/#about',
    icon: <CircleAlert size={24} />,
  },
  {
    id: 'skills',
    title: 'Навыки',
    href: '/#skills',
    icon: <CodeXml size={24} />,
  },
  {
    id: 'experience',
    title: 'Опыт работы',
    href: '/#experience',
    icon: <BriefcaseBusiness size={24} />,
  },
  {
    id: 'projects',
    title: 'Проекты',
    href: '/#projects',
    icon: <GalleryVerticalEnd size={24} />,
  },
  {
    id: 'contacts',
    title: 'Контакты',
    href: '/#contacts',
    icon: <Voicemail size={24} />,
  },
]
