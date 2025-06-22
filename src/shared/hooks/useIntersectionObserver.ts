import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit = {
    rootMargin: '0px',
    threshold: 0.5,
  },
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new window.IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      options,
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return [ref, isIntersecting]
}
