// Vercel Node serverless function (Web handler signature). Fetches GitHub
// server-side with a token, returns precomputed stats, and lets Vercel's Edge
// network cache the response ~1h so GitHub is hit ~once/hour.
import { computeStats, type GitHubUser } from '../src/shared/lib/githubStats.js'

const USERNAME = 'thisisal1yev'

export default async function handler(): Promise<Response> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  }
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, { headers }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`, {
        headers,
      }),
    ])
    if (!userRes.ok || !reposRes.ok) {
      return new Response(
        JSON.stringify({
          error: `github ${userRes.status}/${reposRes.status}`,
        }),
        { status: 502, headers: { 'content-type': 'application/json' } },
      )
    }
    const [user, repos] = await Promise.all([userRes.json(), reposRes.json()])
    const stats = computeStats(user as GitHubUser, repos)
    return new Response(JSON.stringify(stats), {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    })
  }
}
