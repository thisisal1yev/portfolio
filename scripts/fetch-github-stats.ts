// Build-time GitHub snapshot. Runs via the `prebuild` npm script.
// Writes src/shared/data/github-stats.json. On fetch failure it leaves an
// existing file untouched (or seeds an empty one if none exists) and exits 0,
// so the build never breaks on a GitHub outage / rate limit.
import { existsSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { EMPTY_STATS, computeStats } from '../src/shared/lib/githubStats'

const USERNAME = 'thisisal1yev'
const OUT = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../src/shared/data/github-stats.json',
)

const headers: Record<string, string> = {
  Accept: 'application/vnd.github+json',
}
if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
}

async function main() {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${USERNAME}`, { headers }),
    fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`, {
      headers,
    }),
  ])
  if (!userRes.ok || !reposRes.ok) {
    throw new Error(`github ${userRes.status}/${reposRes.status}`)
  }
  const [user, repos] = await Promise.all([userRes.json(), reposRes.json()])
  const stats = computeStats(user, repos)

  await mkdir(dirname(OUT), { recursive: true })
  await writeFile(OUT, JSON.stringify(stats, null, 2) + '\n')
  console.log(
    `[github-stats] snapshot: ${stats.repos} repos, ${stats.stars} stars`,
  )
}

main().catch(async (err) => {
  console.warn(`[github-stats] fetch failed, keeping existing file: ${err}`)
  if (!existsSync(OUT)) {
    await mkdir(dirname(OUT), { recursive: true })
    await writeFile(OUT, JSON.stringify(EMPTY_STATS, null, 2) + '\n')
    console.warn('[github-stats] seeded empty snapshot so the import resolves')
  }
  process.exit(0)
})
