import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  threshold = 0.6,
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { rootMargin: '0px', threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isIntersecting]
}
