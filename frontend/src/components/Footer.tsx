import { ISSUES_URL, NAV_LINKS, ORG_URL, REPO_URL } from '../data/content'
import Icon from './Icon'
import Logo from './Logo'

const RESOURCE_LINKS = [
  { label: 'GitHub repository', href: REPO_URL },
  { label: 'Open issues', href: ISSUES_URL },
  { label: 'Report a bug', href: `${ISSUES_URL}/new?template=bug_report.md` },
  { label: 'Request a feature', href: `${ISSUES_URL}/new?template=feature_request.md` },
]

const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
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
          <h2 className="mb-4 text-xs font-semibold tracking-widest text-ink uppercase">
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
          <h2 className="mb-4 text-xs font-semibold tracking-widest text-ink uppercase">
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
          <p>
            © {CURRENT_YEAR} Clean Code RW · Made with care in Rwanda by the community
          </p>
          <a
            href={ORG_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Clean Code RW on GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-0.5 hover:border-sky/60 hover:text-sky"
          >
            <Icon name="github" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
