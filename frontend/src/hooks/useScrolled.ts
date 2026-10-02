import { useEffect, useState } from 'react'

/** Reports whether the page has scrolled further than `offset` pixels. */
export function useScrolled(offset = 12) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > offset)
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [offset])

  return isScrolled
}
