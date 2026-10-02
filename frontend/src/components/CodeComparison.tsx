import { useState } from 'react'

type Version = 'before' | 'after'

const SNIPPETS: Record<Version, { filename: string; verdict: string; code: string }> = {
  before: {
    filename: 'utils.py',
    verdict: 'What is d? What is x[2]? You have to run it to find out.',
    code: `def proc(d):
    r = []
    for x in d:
        if x[2] > 0 and x[3] == 1:
            r.append(x)
    return r`,
  },
  after: {
    filename: 'events/selectors.py',
    verdict: 'The names tell the story. No guessing, no comments needed.',
    code: `def upcoming_events(events):
    """Published events that still have open seats."""
    return [
        event
        for event in events
        if event.is_published and event.seats_left > 0
    ]`,
  },
}

const KEYWORDS = new Set(['def', 'return', 'for', 'in', 'if', 'and', 'or', 'not'])

// Splits a line into strings, words, numbers and everything in between.
const TOKEN_PATTERN = /("""[^"]*"""|"[^"]*"|\b\w+\b|[^\w"]+)/g

function tokenClass(token: string, previousToken: string) {
  if (token.startsWith('"')) return 'text-teal'
  if (KEYWORDS.has(token)) return 'text-sky'
  if (/^\d+$/.test(token)) return 'text-amber'
  if (previousToken.trim() === 'def') return 'text-on-panel font-semibold'
  return 'text-on-panel-muted'
}

function HighlightedLine({ line }: { line: string }) {
  const tokens = line.match(TOKEN_PATTERN) ?? []
  return (
    <>
      {tokens.map((token, index) => (
        <span key={index} className={tokenClass(token, tokens[index - 1] ?? '')}>
          {token}
        </span>
      ))}
    </>
  )
}

/** A before/after view of the same function, showing what clean code changes. */
function CodeComparison() {
  const [version, setVersion] = useState<Version>('after')
  const snippet = SNIPPETS[version]
  const lines = snippet.code.split('\n')

  return (
    <div className="overflow-hidden rounded-3xl border border-panel-line bg-panel shadow-[0_40px_80px_-40px_rgb(27_35_42/0.8)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-panel-line px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-on-panel-muted/30" />
            <span className="h-3 w-3 rounded-full bg-on-panel-muted/30" />
            <span className="h-3 w-3 rounded-full bg-on-panel-muted/30" />
          </span>
          <span className="font-mono text-xs text-on-panel-muted">{snippet.filename}</span>
        </div>

        <div role="tablist" aria-label="Code version" className="relative flex rounded-full bg-black/25 p-1">
          <span
            className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full transition-all duration-300 ${
              version === 'after' ? 'translate-x-full bg-teal' : 'translate-x-0 bg-on-panel-muted/40'
            }`}
            aria-hidden="true"
          />
          {(['before', 'after'] as const).map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={version === option}
              aria-controls="code-panel"
              onClick={() => setVersion(option)}
              className={`relative z-10 w-20 rounded-full py-1.5 font-mono text-xs font-medium capitalize transition-colors ${
                version === option ? 'text-white' : 'text-on-panel-muted hover:text-on-panel'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <pre
        id="code-panel"
        role="tabpanel"
        className="min-h-[13.5rem] overflow-x-auto px-4 py-6 font-mono text-[13px] leading-7 sm:px-6 sm:text-sm"
      >
        <code key={version} className="block">
          {lines.map((line, index) => (
            <span
              key={index}
              className="flex animate-[code-line-in_0.4s_ease_both]"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <span className="mr-5 w-5 shrink-0 text-right text-on-panel-muted/40 select-none" aria-hidden="true">
                {index + 1}
              </span>
              <span className="whitespace-pre">
                <HighlightedLine line={line} />
              </span>
            </span>
          ))}
        </code>
      </pre>

      <p
        className={`flex items-center gap-3 border-t border-panel-line px-4 py-4 text-sm sm:px-6 ${
          version === 'after' ? 'text-teal' : 'text-amber'
        }`}
        aria-live="polite"
      >
        <span className="font-mono text-xs">{version === 'after' ? '✓' : '?'}</span>
        <span className="text-on-panel">{snippet.verdict}</span>
      </p>
    </div>
  )
}

export default CodeComparison
