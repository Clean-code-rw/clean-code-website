import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'light' | 'ghost'

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  external?: boolean
  className?: string
  onClick?: () => void
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-ink text-on-ink shadow-[0_8px_24px_-12px_rgb(43_54_64/0.7)] hover:-translate-y-0.5 hover:bg-ink-deep',
  outline:
    'border border-line bg-card text-ink hover:-translate-y-0.5 hover:border-sky/60 hover:shadow-[0_8px_24px_-14px_rgb(30_159_214/0.6)]',
  // light and ghost sit on the dark panel, which stays dark in both themes.
  light: 'bg-white text-panel hover:-translate-y-0.5 hover:bg-white/90',
  ghost:
    'border border-on-panel-muted/30 text-on-panel hover:-translate-y-0.5 hover:border-on-panel',
}

function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
  onClick,
}: ButtonLinkProps) {
  const externalProps = external ? { target: '_blank', rel: 'noreferrer' } : {}

  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap transition duration-300 ${VARIANT_CLASSES[variant]} ${className}`}
      {...externalProps}
    >
      {children}
    </a>
  )
}

export default ButtonLink
