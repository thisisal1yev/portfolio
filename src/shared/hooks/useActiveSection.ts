import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  const idsKey = ids.join(',')

  useEffect(() => {
    // One observer for all sections (fewer allocations than one-per-id), with a
    // single canonical teardown.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { threshold: 0.3 },
    )

    for (const id of idsKey.split(',')) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [idsKey])

  return activeId
}
