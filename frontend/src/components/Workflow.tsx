import { WORKFLOW_STEPS } from '../data/content'
import { useInView } from '../hooks/useInView'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Workflow() {
  const { ref: timelineRef, isInView } = useInView<HTMLOListElement>(0.25)

  return (
    <section id="contribute" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contribute"
          title={
            <>
              From first issue to <span className="text-sky">merged</span>
            </>
          }
          description="Small, focused pull requests are reviewed fastest. Here is the path every contribution takes."
        />

        <ol ref={timelineRef} className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* The connecting line draws itself across the steps on wide screens. */}
          <span
            className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-0.5 bg-line lg:block"
            aria-hidden="true"
          >
            <span
              className={`block h-full origin-left bg-gradient-to-r from-sky to-teal transition-transform duration-[1600ms] ease-out ${
                isInView ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </span>

          {WORKFLOW_STEPS.map((step, index) => (
            <Reveal as="li" key={step.title} delayMs={index * 150} className="relative">
              <div className="flex flex-col items-start lg:items-center lg:text-center">
                <span className="relative z-10 mb-5 grid h-12 w-12 place-items-center rounded-full border-4 border-surface bg-ink font-mono text-sm font-semibold text-on-ink">
                  {index + 1}
                </span>
                <h3 className="font-serif text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
                <code className="mt-4 inline-block max-w-full truncate rounded-lg border border-line bg-card px-3 py-1.5 font-mono text-xs text-teal">
                  {step.command}
                </code>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Workflow
