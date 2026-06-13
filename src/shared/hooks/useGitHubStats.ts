import { useEffect, useState } from 'react'

interface Repo {
  language: string | null
  stargazers_count: number
  forks_count: number
  pushed_at: string
}

interface LanguageSlice {
  name: string
  count: number
  pct: number
}

interface GitHubStats {
  repos: number
  followers: number
  stars: number
  forks: number
  years: number
  topLanguage: string
  lastPush: string | null
  languages: LanguageSlice[]
}

const GITHUB_USERNAME = 'thisisal1yev'
const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000

const EMPTY_STATS: GitHubStats = {
  repos: 0,
  followers: 0,
  stars: 0,
  forks: 0,
  years: 0,
  topLanguage: '—',
  lastPush: null,
  languages: [],
}

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats>(EMPTY_STATS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchStats() {
      try {
        const [user, repos] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            signal: controller.signal,
          }).then((r) => r.json()),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
            { signal: controller.signal },
          ).then((r) => r.json()),
        ])

        const list: Repo[] = Array.isArray(repos) ? repos : []

        const stars = list.reduce((sum, r) => sum + (r.stargazers_count ?? 0), 0)
        const forks = list.reduce((sum, r) => sum + (r.forks_count ?? 0), 0)

        // language distribution across repos
        const langCount = new Map<string, number>()
        for (const r of list) {
          if (r.language) {
            langCount.set(r.language, (langCount.get(r.language) ?? 0) + 1)
          }
        }
        const langTotal = [...langCount.values()].reduce((a, b) => a + b, 0)
        const languages = [...langCount.entries()]
          .map(([name, count]) => ({
            name,
            count,
            pct: langTotal ? Math.round((count / langTotal) * 100) : 0,
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5)

        // most recent push across all repos
        const lastPush = list.reduce<string | null>((latest, r) => {
          if (!r.pushed_at) return latest
          return !latest || r.pushed_at > latest ? r.pushed_at : latest
        }, null)

        // account age in full years
        const created = user.created_at ? new Date(user.created_at).getTime() : 0
        const years = created
          ? Math.max(0, Math.floor((Date.now() - created) / YEAR_MS))
          : 0

        setStats({
          repos: user.public_repos ?? 0,
          followers: user.followers ?? 0,
          stars,
          forks,
          years,
          topLanguage: languages[0]?.name ?? '—',
          lastPush,
          languages,
        })
      } catch {
        // keep defaults on error (incl. AbortError when unmounted mid-flight)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    fetchStats()
    return () => controller.abort()
  }, [])

  return { stats, loading }
}
