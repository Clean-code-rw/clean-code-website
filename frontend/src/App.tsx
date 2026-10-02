import About from './components/About'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import GetInvolved from './components/GetInvolved'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Principles from './components/Principles'
import TechMarquee from './components/TechMarquee'
import Workflow from './components/Workflow'

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-on-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TechMarquee />
        <About />
        <Principles />
        <GetInvolved />
        <Workflow />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export default App
