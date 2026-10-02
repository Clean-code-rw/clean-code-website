import { useEffect, useState } from 'react'
import { NAV_LINKS, REPO_URL } from '../data/content'
import { useScrolled } from '../hooks/useScrolled'
import ButtonLink from './ButtonLink'
import Icon from './Icon'
import Logo from './Logo'

function Navbar() {
  const isScrolled = useScrolled()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  // Lock page scroll behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const isRaised = isScrolled || isMenuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isRaised ? 'border-b border-line bg-bg/85 backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}
      >
        <a href="#top" onClick={closeMenu} aria-label="Clean Code RW, back to top">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
                <span
                  className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-sky transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ButtonLink href={REPO_URL} external className="px-5 py-2.5">
            <Icon name="github" className="h-4 w-4" />
            Join on GitHub
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink transition hover:border-sky/60 md:hidden"
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden ${
          isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-4 pt-2 pb-6">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-300 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? `${index * 50 + 80}ms` : '0ms' }}
              >
                <a
                  href={link.href}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 font-serif text-xl text-ink transition hover:bg-surface"
                >
                  {link.label}
                  <Icon name="arrow-right" className="h-4 w-4 text-sky" />
                </a>
              </li>
            ))}
            <li className="mt-3 px-1">
              <ButtonLink
                href={REPO_URL}
                external
                onClick={closeMenu}
                className="w-full py-3.5"
              >
                <Icon name="github" className="h-4 w-4" />
                Join on GitHub
              </ButtonLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
