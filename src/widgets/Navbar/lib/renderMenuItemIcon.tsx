import {
  CircleAlert,
  CodeXml,
  GalleryVerticalEnd,
  Voicemail,
} from 'lucide-react'

export function renderMenuItemIcon(
  whoseOwn: 'about' | 'skills' | 'projects' | 'contacts',
) {
  switch (whoseOwn) {
    case 'about':
      return <CircleAlert size={24} />
    case 'skills':
      return <CodeXml size={24} />
    case 'projects':
      return <GalleryVerticalEnd size={24} />
    case 'contacts':
      return <Voicemail size={24} />
    default:
      return null
  }
}
