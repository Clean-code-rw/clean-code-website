import { PRINCIPLES } from '../data/content'
import CodeComparison from './CodeComparison'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Principles() {
  return (
    <section id="principles" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our principles"
          title={
            <>
              What <span className="text-sky">clean code</span> means to us
            </>
          }
          description="The standards we hold each other to, in reviews and in our own code. They are also how this website is built."
        />

        <Reveal className="mx-auto mb-16 max-w-3xl md:mb-20">
          <CodeComparison />
        </Reveal>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((principle, index) => (
            <Reveal as="li" key={principle.title} delayMs={(index % 3) * 100}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-[0_24px_48px_-32px_rgb(42_157_157/0.8)] sm:p-7">
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-sky to-teal transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-serif text-4xl font-semibold text-line transition-colors group-hover:text-sky/40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <code className="rounded-md bg-teal-soft px-2 py-1 font-mono text-xs text-teal">
                    {principle.snippet}
                  </code>
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{principle.description}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Principles
