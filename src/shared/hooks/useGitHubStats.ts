import { useEffect, useState } from 'react'

interface GitHubStats {
  repos: number
  followers: number
  stars: number
}

const GITHUB_USERNAME = 'thisisal1yev'

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 0,
    followers: 0,
    stars: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const [user, repos] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`).then(r => r.json()),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`).then(r => r.json()),
        ])

        const stars = Array.isArray(repos)
          ? repos.reduce(
              (sum: number, repo: { stargazers_count: number }) =>
                sum + repo.stargazers_count,
              0,
            )
          : 0

        setStats({
          repos: user.public_repos ?? 0,
          followers: user.followers ?? 0,
          stars,
        })
      } catch {
        // keep defaults on error
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return { stats, loading }
}
