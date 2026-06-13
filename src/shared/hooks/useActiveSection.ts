import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  const idsKey = ids.join(',')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    idsKey.split(',').forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { threshold: 0.3 },
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [idsKey])

  return activeId
}
