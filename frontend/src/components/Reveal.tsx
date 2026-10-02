import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  delayMs?: number
}

/** Fades its children up the first time they scroll into view. */
function Reveal({ children, as: Tag = 'div', className = '', delayMs = 0 }: RevealProps) {
  const { ref, isInView } = useInView<HTMLElement>()
  const style = { '--reveal-delay': `${delayMs}ms` } as CSSProperties

  return (
    <Tag ref={ref} style={style} className={`reveal ${isInView ? 'is-visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}

export default Reveal
