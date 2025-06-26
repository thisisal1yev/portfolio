interface MenuType {
  id: 'about' | 'skills' | 'projects' | 'contacts' | 'experience'
  title: string
  href: string
}

export const MENU: MenuType[] = [
  {
    id: 'about',
    title: 'О себе',
    href: '/#about',
  },
  {
    id: 'skills',
    title: 'Навыки',
    href: '/#skills',
  },
  {
    id: 'experience',
    title: 'Опыт работы',
    href: '/#experience',
  },
  {
    id: 'projects',
    title: 'Проекты',
    href: '/#projects',
  },
  {
    id: 'contacts',
    title: 'Контакты',
    href: '/#contacts',
  },
]
