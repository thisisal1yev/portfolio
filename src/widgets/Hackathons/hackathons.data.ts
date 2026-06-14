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
    project: 'ФерГТУ · трек «Sun’iy intellekt», No Code · 2–4 апреля',
    stack: 'No Code · AI',
    result: '1 место',
    role: 'Fullstack',
    team: '3 чел.',
    links: { demo: 'https://evenola-ai-eventcraft.lovable.app' },
  },
  {
    id: 2,
    name: 'National AI Hackathon',
    year: '2026',
    project: 'Трек «Kosmik texnologiyalar» · Фергана, IT Park · 20–23 мая',
    stack: 'AI · Space Tech',
    result: 'Финалист',
    role: 'Frontend',
    team: '4 чел.',
    links: { repo: 'https://github.com/thisisal1yev/national-ai-hackathon' },
  },
  {
    id: 3,
    name: 'Tech4Region',
    year: '2025',
    project: 'Трек «Shaharsozlik» · Андижан, Digital City · 28–29 ноября',
    stack: 'AI · Urban Tech',
    result: 'Финалист',
    role: 'Fullstack',
    team: '4 чел.',
    links: {
      demo: 'https://smart-parking-pro-frontend-ai-agent-ai--polonchihonkok.replit.app',
      repo: 'https://github.com/thisisal1yev/NovaPark',
    },
  },
]
