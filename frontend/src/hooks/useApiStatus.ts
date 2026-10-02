import { useEffect, useState } from 'react'

interface HealthResponse {
  status: string
}

export type ApiStatus = 'checking' | 'ok' | 'unreachable'

export function useApiStatus() {
  const [apiStatus, setApiStatus] = useState<ApiStatus>('checking')

  useEffect(() => {
    fetch('/api/health/')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<HealthResponse>
      })
      .then((data) => setApiStatus(data.status === 'ok' ? 'ok' : 'unreachable'))
      .catch(() => setApiStatus('unreachable'))
  }, [])

  return apiStatus
}
