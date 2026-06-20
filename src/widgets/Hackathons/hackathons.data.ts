export type HackLinks = { repo?: string; demo?: string; slides?: string }

export interface Hackathon {
  id: number
  name: string
  year: string
  result: string
  project?: string
  stack?: string
  role?: string // "fullstack" | "frontend" | ...
  team?: string // "solo" | "team · 4 people"
  link?: string // result badge link (optional)
  links?: HackLinks // resource icons (repo / demo / slides) — rendered only if set
}

export const hackathonsData: Hackathon[] = [
  {
    id: 1,
    name: 'Oliygoh Kubogi',
    year: '2026',
    project: '«Sun’iy intellekt» track · No Code',
    stack: 'No Code · AI',
    result: '1st place',
    role: 'AI Specialist',
    team: '3 people',
    links: { demo: 'https://evenola-ai-eventcraft.lovable.app' },
  },
  {
    id: 2,
    name: 'National AI Hackathon',
    year: '2026',
    project: '«Kosmik texnologiyalar» track · Fergana, IT Park · May 20–23',
    stack: 'AI · Space Tech',
    result: 'Finalist',
    role: 'Frontend',
    team: '4 people',
    links: { repo: 'https://github.com/thisisal1yev/national-ai-hackathon' },
  },
  {
    id: 3,
    name: 'Tech4Region',
    year: '2025',
    project: '«Shaharsozlik» track · Andijan, Digital City · November 28–29',
    stack: 'AI · Urban Tech',
    result: 'Finalist',
    role: 'Fullstack',
    team: '4 people',
    links: {
      demo: 'https://smart-parking-pro-frontend-ai-agent-ai--polonchihonkok.replit.app',
      repo: 'https://github.com/thisisal1yev/NovaPark',
    },
  },
]
