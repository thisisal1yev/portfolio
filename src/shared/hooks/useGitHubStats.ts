import { useEffect, useState } from 'react'

import snapshot from '@shared/data/github-stats.json'
import type { GitHubStats } from '@shared/lib/githubStats'

// Build-time snapshot — shown immediately (incl. SSG prerender) and kept as the
// fallback whenever /api/github-stats is unavailable (local dev, deploy, outage).
const SNAPSHOT = snapshot as GitHubStats

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats>(SNAPSHOT)
  const [loading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchStats() {
      try {
        const res = await fetch('/api/github-stats', {
          signal: controller.signal,
        })
        if (!res.ok) return // keep snapshot
        setStats((await res.json()) as GitHubStats)
      } catch {
        // keep snapshot (incl. AbortError on unmount)
      }
    }

    fetchStats()
    return () => controller.abort()
  }, [])

  return { stats, loading }
}
