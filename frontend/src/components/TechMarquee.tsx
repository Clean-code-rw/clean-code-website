import { TECH_STACK } from '../data/content'

function TechMarquee() {
  // The list is rendered twice so the loop scrolls without a visible seam.
  const loopedStack = [...TECH_STACK, ...TECH_STACK]

  return (
    <section aria-label="Technologies we use" className="relative z-10 border-y border-line bg-card py-6">
      <p className="sr-only">Built with {TECH_STACK.join(', ')}.</p>
      <div
        className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        aria-hidden="true"
      >
        <ul className="flex w-max shrink-0 animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused] sm:gap-14 sm:pr-14">
          {loopedStack.map((tech, index) => (
            <li
              key={`${tech}-${index}`}
              className="flex items-center gap-3 font-mono text-sm whitespace-nowrap text-muted"
            >
              <span className="text-teal">{'</>'}</span>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TechMarquee
