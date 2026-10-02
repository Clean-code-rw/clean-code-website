import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: string
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-medium tracking-widest text-teal uppercase">
        <span className="h-px w-6 bg-teal" aria-hidden="true" />
        {eyebrow}
        <span className="h-px w-6 bg-teal" aria-hidden="true" />
      </p>
      <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {description && <p className="mt-5 text-base text-muted md:text-lg">{description}</p>}
    </Reveal>
  )
}

export default SectionHeading
