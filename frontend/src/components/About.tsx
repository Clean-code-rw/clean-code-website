import { BENEFITS } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-xs font-medium tracking-widest text-teal uppercase">
            Who we are
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] font-semibold tracking-tight text-ink">
            A home for developers who take{' '}
            <span className="text-sky">craft</span> seriously.
          </h2>
          <p className="mt-6 text-base text-muted md:text-lg">
            Clean code is code that is easy to read, easy to change and kind to the next person who
            opens the file. We are students, professionals and self-taught builders across Rwanda
            who practise it together.
          </p>
          <p className="mt-4 text-base text-muted md:text-lg">
            Even this website belongs to the community. You don't need to be a senior developer:
            if you can write a little code, design a page, fix a typo or test a feature, there is a
            place for you here.
          </p>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {BENEFITS.map((benefit, index) => (
            <Reveal
              as="li"
              key={benefit.title}
              delayMs={index * 100}
              className={index % 2 === 1 ? 'sm:translate-y-8' : ''}
            >
              <div className="group h-full rounded-2xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-sky/50 hover:shadow-[0_20px_40px_-28px_rgb(30_159_214/0.7)]">
                <span className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-sky-soft text-sky transition-colors group-hover:bg-sky group-hover:text-white">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-xl font-semibold text-ink">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
