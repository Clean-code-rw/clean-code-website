import { useEffect, useState } from 'react'

const REPO_URL = 'https://github.com/YOUR-ORG/cleancode'

interface HealthResponse {
  status: string
}

function App() {
  const [apiStatus, setApiStatus] = useState('checking…')

  useEffect(() => {
    fetch('/api/health/')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<HealthResponse>
      })
      .then((data) => setApiStatus(data.status))
      .catch((err: Error) => setApiStatus(`unreachable (${err.message})`))
  }, [])

  return (
    <main className="mx-auto max-w-180 px-4 pt-[15vh] pb-12">
      <h1 className="mb-4 text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.1] font-bold">
        Clean Code <span className="text-accent">RW</span>
      </h1>
      <p className="mb-8 text-[1.2rem] text-muted">
        A community of developers in Rwanda who care about writing clean,
        maintainable software. This website is under construction, and it is
        being built by the community.
      </p>
      <a
        className="inline-block rounded-lg bg-accent px-5 py-2.5 font-semibold text-bg no-underline"
        href={REPO_URL}
        target="_blank"
        rel="noreferrer"
      >
        Contribute on GitHub
      </a>
      <p className="mt-12 text-[0.9rem] text-muted">
        API status: <code>{apiStatus}</code>
      </p>
    </main>
  )
}

export default App
