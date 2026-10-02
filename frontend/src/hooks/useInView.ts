import { useEffect, useRef, useState } from 'react'

/** Reports whether the element has entered the viewport. It stays true once seen. */
export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || isInView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, isInView])

  return { ref, isInView }
}
