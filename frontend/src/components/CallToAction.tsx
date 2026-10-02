import { GOOD_FIRST_ISSUES_URL, REPO_URL } from '../data/content'
import ButtonLink from './ButtonLink'
import Icon from './Icon'
import Reveal from './Reveal'

function CallToAction() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-panel px-6 py-16 text-center sm:px-12 sm:py-20">
        <div
          className="absolute -top-24 -left-24 h-72 w-72 animate-float-slow rounded-full bg-sky/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 -bottom-24 h-72 w-72 animate-float rounded-full bg-teal/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          <p className="mb-5 text-xs font-semibold tracking-widest text-on-panel-muted uppercase">
            Open to everyone
          </p>
          <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,3.75rem)] leading-[1.08] font-semibold tracking-tight text-on-panel">
            Your first pull request is closer than you think.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-on-panel-muted sm:text-lg">
            Issues labelled good first issue are picked to be friendly first contributions. Grab
            one, say hello and we'll help you get it merged.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={GOOD_FIRST_ISSUES_URL} variant="light" external className="w-full sm:w-auto">
              Find a good first issue
              <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href={REPO_URL} variant="ghost" external className="w-full sm:w-auto">
              <Icon name="github" className="h-4 w-4" />
              Star the repository
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default CallToAction
