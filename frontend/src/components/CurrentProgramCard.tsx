import { CURRENT_PROGRAM } from '../data/content'
import Icon from './Icon'

function CurrentProgramCard() {
  const weeks = Array.from({ length: CURRENT_PROGRAM.durationWeeks }, (_, index) => index + 1)

  return (
    <article className="relative h-full overflow-hidden rounded-3xl bg-panel p-6 text-on-panel shadow-[0_40px_80px_-40px_rgb(27_35_42/0.8)] sm:p-8">
      <div
        className="absolute -top-20 -right-20 h-64 w-64 animate-float-slow rounded-full bg-sky/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/20 px-3 py-1 text-xs font-semibold text-teal">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-teal" aria-hidden="true" />
            Happening now
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-on-panel-muted">
            <Icon name="calendar" className="h-3.5 w-3.5" />
            {CURRENT_PROGRAM.durationWeeks} weeks
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-on-panel-muted">
            <Icon name="users" className="h-3.5 w-3.5" />
            For {CURRENT_PROGRAM.audience.toLowerCase()}
          </span>
        </div>

        <h3 className="mt-6 font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight font-semibold">
          {CURRENT_PROGRAM.title}
        </h3>
        <p className="mt-3 max-w-lg text-sm text-on-panel-muted sm:text-base">
          {CURRENT_PROGRAM.description}
        </p>

        <ol className="mt-6 flex gap-1.5" aria-label={`${CURRENT_PROGRAM.durationWeeks}-week program`}>
          {weeks.map((week) => (
            <li
              key={week}
              className="flex-1 animate-[fade-up_0.5s_ease_both]"
              style={{ animationDelay: `${week * 80}ms` }}
            >
              <span className="block h-1.5 rounded-full bg-gradient-to-r from-sky to-teal" />
              <span className="mt-2 block text-center text-[10px] text-on-panel-muted sm:text-xs">
                W{week}
              </span>
            </li>
          ))}
        </ol>

        <h4 className="mt-8 mb-4 text-xs font-semibold tracking-widest text-on-panel-muted uppercase">
          What participants learn
        </h4>
        <ul className="grid gap-3 sm:grid-cols-2">
          {CURRENT_PROGRAM.topics.map((topic) => (
            <li
              key={topic.title}
              className="group flex items-start gap-3 rounded-2xl border border-panel-line bg-white/[0.03] p-3.5 transition hover:border-sky/50 hover:bg-white/[0.06]"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky/15 text-sky transition group-hover:bg-sky group-hover:text-white">
                <Icon name={topic.icon} className="h-4.5 w-4.5" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{topic.title}</span>
                <span className="block text-xs text-on-panel-muted">{topic.description}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default CurrentProgramCard
