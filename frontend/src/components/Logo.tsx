interface LogoProps {
  className?: string
  withWordmark?: boolean
}

/** The Clean Code CC mark. The dark strokes follow the text color so it works in dark mode. */
function Logo({ className = '', withWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="12 18 194 116"
        className="h-9 w-auto shrink-0 text-ink"
        fill="none"
        role="img"
        aria-label="Clean Code RW logo"
      >
        <path d="M97 107.2 C118 90 118 66 141 61" stroke="currentColor" strokeWidth="22" />
        <path d="M189 61 A34 34 0 1 0 189 109" stroke="currentColor" strokeWidth="22" />
        <path d="M97 42.8 A42 42 0 1 0 97 107.2" className="stroke-sky" strokeWidth="22" />
        <path d="M76 61 L65 89" className="stroke-teal" strokeWidth="5" strokeLinecap="round" />
      </svg>
      {withWordmark && (
        <span className="font-serif text-xl leading-none font-semibold tracking-tight text-ink">
          Clean Code <span className="text-sky">RW</span>
        </span>
      )}
    </span>
  )
}

export default Logo
