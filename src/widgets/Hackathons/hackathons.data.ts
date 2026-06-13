export type HackLinks = { repo?: string; demo?: string; slides?: string }

export interface Hackathon {
  id: number
  name: string
  year: string
  result: string
  project?: string
  stack?: string
  role?: string // "fullstack" | "frontend" | ...
  team?: string // "solo" | "команда · 4 чел"
  link?: string // ссылка бейджа результата (опц.)
  links?: HackLinks // ресурс-иконки (repo / demo / slides) — рендерятся только если заданы
}

export const hackathonsData: Hackathon[] = [
  {
    id: 1,
    name: 'Oliygoh Kubogi',
    year: '2026',
    project: 'Трек «Sun’iy intellekt» · направление No Code',
    stack: 'No Code · AI',
    result: '1 место',
    role: 'Fullstack',
  },
  {
    id: 2,
    name: 'National AI Hackathon',
    year: '2026',
    project: 'AI-хакатон, Фергана',
    stack: 'AI',
    result: 'Финалист',
    role: 'Frontend',
    links: { repo: 'https://github.com/thisisal1yev/national-ai-hackathon' },
  },
  {
    id: 3,
    name: 'Tech4Regions',
    year: '2025',
    project: 'Региональный технологический хакатон',
    result: 'Финалист',
    role: 'Fullstack',
  },
]
