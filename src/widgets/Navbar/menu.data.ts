interface MenuType {
  id: 'about' | 'skills' | 'projects' | 'contacts'
  title: string
  href: string
}

export const menu: MenuType[] = [
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
