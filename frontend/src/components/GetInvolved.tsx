import { CONTRIBUTION_WAYS } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function GetInvolved() {
  return (
    <section id="get-involved" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get involved"
          title={
            <>
              Every skill has a <span className="text-teal">place</span> here
            </>
          }
          description="You don't have to write code to help. Here are the ways members contribute today."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CONTRIBUTION_WAYS.map((way, index) => (
            <Reveal as="li" key={way.title} delayMs={index * 80}>
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 text-center transition duration-300 hover:-translate-y-1.5 hover:border-sky/50 hover:shadow-[0_24px_48px_-32px_rgb(30_159_214/0.8)] sm:text-left">
                <span className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-sky-soft text-sky transition duration-300 group-hover:rotate-6 group-hover:bg-sky group-hover:text-white sm:mx-0">
                  <Icon name={way.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-serif text-xl font-semibold text-ink">{way.title}</h3>
                <p className="mt-2 text-sm text-muted">{way.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default GetInvolved
