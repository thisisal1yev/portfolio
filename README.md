# Portfolio

Personal portfolio of **Aliyev Axmadillo** — Software Engineer (Frontend · Backend).
A terminal / IDE-themed single-page site: sections are framed as files in a
`src/` tree (`about.md`, `stats.json`, `stack.ts`, `hackathons.md`, …) and a
`./contact.sh` prompt.

```
~/aliyev $ whoami
Software Engineer · UZ · RU · EN · JA
```

## Tech stack

| Area    | Choice                                                     |
| ------- | ---------------------------------------------------------- |
| UI      | React 19, TypeScript 6                                     |
| Build   | Vite 8 (Rolldown) + `@vitejs/plugin-react` (Oxc transform) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`)                      |
| Motion  | `motion`                                                   |
| Icons   | `lucide-react`                                             |
| Misc    | `react-fast-marquee`, `clsx` + `tailwind-merge`            |
| Tooling | ESLint 10, typescript-eslint, Prettier (+ tailwind plugin) |
| Deploy  | Vercel (push to `master` → auto-deploy)                    |

## Architecture

[Feature-Sliced Design](https://feature-sliced.design/) — layers, top to bottom:

```
src/
├── app/        # entry, global styles (main.tsx, index.css)
├── pages/      # route compositions (Home)
├── widgets/    # self-contained sections (Hero, Stats, Hackathons, Contacts, …)
└── shared/     # cross-cutting: components/ui, hooks, lib
```

Path aliases: `@`, `@app`, `@pages`, `@widgets`, `@shared` (see `vite.config.ts`).

### Notable bits

- **Live GitHub stats** — `shared/hooks/useGitHubStats.ts` pulls repos, forks,
  account age, top language and last push from the GitHub API (one-shot fetch,
  `AbortController`-guarded).
- **Hackathons** — data-driven cards in `widgets/Hackathons/hackathons.data.ts`;
  each renders track, venue, result badge, role/team and resource links.
- **Custom hooks** — `useTypewriter`, `useActiveSection`, `useClock`,
  `useMouseGlow`, `useParallax`.

## Getting started

```bash
npm install
npm run dev        # start dev server (Vite)
```

## Scripts

| Script            | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Dev server with HMR                 |
| `npm run build`   | Type-check (`tsc -b`) + Vite build  |
| `npm run preview` | Serve the production build locally  |
| `npm run lint`    | ESLint over the project             |

## Deployment

Hosted on **Vercel**. The `master` branch is the production branch — every push
triggers an automatic deploy.

---

Built by [@thisisal1yev](https://github.com/thisisal1yev).
