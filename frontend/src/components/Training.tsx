import { ORG_URL, TRAINING_FORMATS } from '../data/content'
import ButtonLink from './ButtonLink'
import CurrentProgramCard from './CurrentProgramCard'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Training() {
  return (
    <section id="training" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Training"
          title={
            <>
              We help each other <span className="text-sky">level up</span>
            </>
          }
          description="Growing as a developer is easier together. We organise trainings for members at every stage, with extra support for people who are just getting started."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-8">
          <div className="flex flex-col gap-6">
            {TRAINING_FORMATS.map((format, index) => (
              <Reveal key={format.title} delayMs={index * 120} className="flex-1">
                <article className="group h-full rounded-3xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-[0_24px_48px_-32px_rgb(42_157_157/0.8)] sm:p-8">
                  <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-teal-soft text-teal transition duration-300 group-hover:-rotate-6 group-hover:bg-teal group-hover:text-white">
                    <Icon name={format.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-ink">{format.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {format.description}
                  </p>
                </article>
              </Reveal>
            ))}

            <Reveal delayMs={240}>
              <ButtonLink href={ORG_URL} external variant="outline" className="w-full">
                <Icon name="github" className="h-4 w-4" />
                Follow Clean Code RW on GitHub
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delayMs={150}>
            <CurrentProgramCard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Training
