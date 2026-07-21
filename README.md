# Portfolio

[![CI](https://github.com/thisisal1yev/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/thisisal1yev/portfolio/actions/workflows/ci.yml)

Personal portfolio of **Aliyev Axmadillo** — Software Engineer (Frontend · Backend).
A terminal / IDE-themed single-page site (English): sections are framed as files
in a `src/` tree (`about.md`, `stats.json`, `stack.ts`, `services.sh`,
`education.log`, `experience.git`, `hackathons.md`, `projects/`) and a
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
| Data    | GitHub stats — build snapshot (`prebuild` via `tsx`) + Vercel serverless fn (`api/`), Edge-cached ~1h |
| Contact | Contact form → Telegram Bot API via a host-agnostic core + serverless fn (`api/contact.ts`) |
| Package | Bun (`bun.lock`)                                             |
| CI      | GitHub Actions — lint · typecheck · test · build on push/PR |
| Deploy  | Vercel (push to `master` → auto-deploy)                      |

## Architecture

[Feature-Sliced Design](https://feature-sliced.design/) — layers, top to bottom:

```
src/
├── app/        # entry, global styles (main.tsx, index.css)
├── pages/      # route compositions (Home)
├── widgets/    # self-contained sections (Hero, Stats, Skills, Services,
│               #   Education, Experience, Hackathons, Projects, Contacts, …)
└── shared/     # cross-cutting: components/ui, hooks, lib, data
```

Alongside `src/`: `api/` (Vercel serverless functions) and `scripts/`
(build-time tasks run via `tsx`, e.g. the GitHub-stats snapshot).

Path aliases: `@`, `@app`, `@pages`, `@widgets`, `@shared` (see `vite.config.ts`).

### Notable bits

- **GitHub stats** — computed once in `shared/lib/githubStats.ts` (repos, stars,
  forks, account age, top language, last-push, language mix) and surfaced three
  ways: a **build-time snapshot** (`scripts/fetch-github-stats.ts` →
  `shared/data/github-stats.json`, rendered instantly incl. in the SSG prerender),
  a **Vercel serverless function** (`api/github-stats.ts`) that refreshes it
  server-side with a token and is Edge-cached ~1h, and `useGitHubStats.ts` which
  shows the snapshot then swaps in the live response — the snapshot stays the
  fallback on any failure (local dev, deploy, outage).
- **Contact form** — the Contacts section toggles the map for a terminal-styled
  form (window chrome, shell-prompt fields, a typed submit log, and a pixel
  HTTP-status overlay) that posts to `/api/contact`. A host-agnostic core
  (`shared/lib/contact.ts`) validates input, drops honeypot hits, and delivers
  the message via the Telegram Bot API. A thin Vercel function (`api/contact.ts`)
  and a Vite dev middleware both call that core, so the form works under
  `bun run dev` without `vercel dev`. Covered by `bun test` (core + wrapper).
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
cp .env.example .env   # then fill in the tokens (see Environment)
bun run dev            # start dev server (Vite)
```

## Environment

Secrets are server-side only — never shipped to the client. Copy `.env.example`
to `.env` and fill in what you need:

| Var                  | Used by                        | Notes                                       |
| -------------------- | ------------------------------ | ------------------------------------------- |
| `GITHUB_TOKEN`       | GitHub stats snapshot + `api/` | Optional; raises the GitHub API rate limit  |
| `TELEGRAM_BOT_TOKEN` | Contact form (`api/contact`)   | From @BotFather                             |
| `TELEGRAM_CHAT_ID`   | Contact form (`api/contact`)   | Your chat id — message the bot once first   |

On Vercel, set the same vars under Project → Settings → Environment Variables.

## Scripts

| Script            | Description                                       |
| ----------------- | ------------------------------------------------ |
| `bun run dev`     | Dev server with HMR                              |
| `bun run build`   | Type-check (`tsc -b`) + `vite-react-ssg` prerender |
| `bun run preview` | Serve the production build locally               |
| `bun run lint`    | ESLint over the project                          |
| `bun test`        | Unit tests (contact-form core + API wrapper)     |

## Continuous integration

[GitHub Actions](.github/workflows/ci.yml) runs on every push and pull request to
`master`: `bun install --frozen-lockfile`, then lint, `tsc -b`, `bun test`, and
the SSG build. Verification only — deploys are handled by Vercel.

## Deployment

Hosted on **Vercel**. The `master` branch is the production branch — every push
triggers an automatic deploy.

---

Built by [@thisisal1yev](https://github.com/thisisal1yev).
