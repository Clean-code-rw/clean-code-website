import { useEffect, useState } from 'react'
import './App.css'

const REPO_URL = 'https://github.com/YOUR-ORG/cleancode'

function App() {
  const [apiStatus, setApiStatus] = useState('checking…')

  useEffect(() => {
    fetch('/api/health/')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => setApiStatus(data.status))
      .catch((err) => setApiStatus(`unreachable (${err.message})`))
  }, [])

  return (
    <main className="home">
      <h1>
        Clean Code <span>RW</span>
      </h1>
      <p className="tagline">
        A community of developers in Rwanda who care about writing clean,
        maintainable software. This website is under construction, and it is
        being built by the community.
      </p>
      <a
        className="cta"
        href={REPO_URL}
        target="_blank"
        rel="noreferrer"
      >
        Contribute on GitHub
      </a>
      <p className="status">
        API status: <code>{apiStatus}</code>
      </p>
    </main>
  )
}

export default App
