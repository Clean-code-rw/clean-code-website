import { ISSUES_URL, NAV_LINKS, REPO_URL } from '../data/content'
import { type ApiStatus, useApiStatus } from '../hooks/useApiStatus'
import Logo from './Logo'

const STATUS_DOT: Record<ApiStatus, string> = {
  checking: 'bg-muted',
  ok: 'bg-teal animate-pulse-dot',
  unreachable: 'bg-red-500',
}

const RESOURCE_LINKS = [
  { label: 'GitHub repository', href: REPO_URL },
  { label: 'Open issues', href: ISSUES_URL },
  { label: 'Report a bug', href: `${ISSUES_URL}/new?template=bug_report.md` },
  { label: 'Request a feature', href: `${ISSUES_URL}/new?template=feature_request.md` },
]

function Footer() {
  const apiStatus = useApiStatus()

  return (
    <footer className="border-t border-line bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[2fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm text-muted">
            A community of developers in Rwanda who care about writing clean, maintainable
            software. Built in the open, by the community, for the community.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 font-mono text-xs font-medium tracking-widest text-ink uppercase">
            Explore
          </h2>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted transition-colors hover:text-sky">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-mono text-xs font-medium tracking-widest text-ink uppercase">
            Resources
          </h2>
          <ul className="space-y-3">
            {RESOURCE_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted transition-colors hover:text-sky"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted sm:flex-row sm:px-6 lg:px-8">
          <p>Made with care in Rwanda by the Clean Code RW community · MIT License</p>
          <p className="flex items-center gap-2 font-mono">
            <span className={`h-2 w-2 rounded-full ${STATUS_DOT[apiStatus]}`} aria-hidden="true" />
            API status: {apiStatus}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
