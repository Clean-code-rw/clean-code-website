import { GOOD_FIRST_ISSUES_URL, REPO_URL } from '../data/content'
import ButtonLink from './ButtonLink'
import CommunityCollage from './CommunityCollage'
import Icon from './Icon'

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-24 left-1/2 -z-10 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-teal/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <a
          href={GOOD_FIRST_ISSUES_URL}
          target="_blank"
          rel="noreferrer"
          className="mb-8 inline-flex animate-[fade-up_0.7s_ease_both] items-center gap-2.5 rounded-full border border-line bg-card px-4 py-1.5 text-xs font-medium text-muted shadow-sm transition hover:border-teal/60 hover:text-ink sm:text-sm"
        >
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-teal" aria-hidden="true" />
          Open source · Built by developers in Rwanda
          <Icon name="arrow-right" className="h-3.5 w-3.5" />
        </a>

        <h1 className="animate-[fade-up_0.8s_ease_0.1s_both] font-serif text-[clamp(2.6rem,7.5vw,5.5rem)] leading-[1.02] font-semibold tracking-tight text-ink">
          Write code people
          <br className="hidden sm:block" /> love to{' '}
          <span className="relative inline-block text-sky">
            read
            <svg
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-0 h-3 w-full text-teal sm:h-4"
              aria-hidden="true"
            >
              <path
                d="M2 14 C50 4 150 4 198 12"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
                className="[stroke-dasharray:220] [stroke-dashoffset:220] animate-[draw_1s_ease_0.9s_forwards]"
              />
            </svg>
          </span>
          <span className="ml-1 inline-block h-[0.8em] w-[0.08em] translate-y-[0.08em] animate-blink bg-teal align-baseline" aria-hidden="true" />
        </h1>

        <p className="mx-auto mt-8 max-w-xl animate-[fade-up_0.8s_ease_0.25s_both] text-base text-muted sm:text-lg">
          Clean Code RW is a community of developers in Rwanda who care about writing clean,
          maintainable software. We learn, review and build in the open, together.
        </p>

        <div className="mt-10 flex animate-[fade-up_0.8s_ease_0.4s_both] flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={REPO_URL} external className="w-full sm:w-auto">
            Join the community
            <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </ButtonLink>
          <ButtonLink href="#principles" variant="outline" className="w-full sm:w-auto">
            <Icon name="code" className="h-4 w-4 text-sky" />
            Explore our principles
          </ButtonLink>
        </div>
      </div>

      <CommunityCollage />
    </section>
  )
}

export default Hero
