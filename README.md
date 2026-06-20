# Portfolio

Personal portfolio of **Aliyev Axmadillo** — Software Engineer (Frontend · Backend).
A terminal / IDE-themed single-page site (English): sections are framed as files
in a `src/` tree (`about.md`, `stats.json`, `stack.ts`, `hackathons.md`, …) and a
`./contact.sh` prompt. Prerendered to static HTML for SEO.

```
~/aliyev $ whoami
Software Engineer · UZ · RU · EN · JA
```

## Tech stack

| Area    | Choice                                                       |
| ------- | ------------------------------------------------------------ |
| UI      | React 19, TypeScript 6                                       |
| Build   | Vite 8 (Rolldown) + `@vitejs/plugin-react` (Oxc transform)   |
| SSG/SEO | `vite-react-ssg` (prerender → static HTML), `beasties` (critical CSS) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`)                        |
| Motion  | `motion`                                                     |
| Icons   | `lucide-react`                                               |
| Misc    | `react-fast-marquee`, `clsx` + `tailwind-merge`              |
| Tooling | ESLint 10, typescript-eslint, Prettier (+ tailwind plugin)  |
| Package | Bun (`bun.lock`)                                             |
| Deploy  | Vercel (push to `master` → auto-deploy)                      |

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
- **SEO** — prerendered static HTML via `vite-react-ssg`, critical CSS inlined by
  `beasties`, plus Open Graph image, Twitter card and `Person`/`ProfilePage`
  JSON-LD structured data (see `index.html`).

## Getting started

```bash
bun install
bun run dev        # start dev server (Vite)
```

## Scripts

| Script            | Description                                       |
| ----------------- | ------------------------------------------------ |
| `bun run dev`     | Dev server with HMR                              |
| `bun run build`   | Type-check (`tsc -b`) + `vite-react-ssg` prerender |
| `bun run preview` | Serve the production build locally               |
| `bun run lint`    | ESLint over the project                          |

## Deployment

Hosted on **Vercel**. The `master` branch is the production branch — every push
triggers an automatic deploy.

---

Built by [@thisisal1yev](https://github.com/thisisal1yev).
