import { ANALYTICS_DEBOUNCE, ANALYTICS_EVENT_GHOST_SOLVED } from '@data/constants'
import { useEffect } from 'react'
import useAnalyticsDebounce from './useAnalyticsDebounce'
import useWinner from './useWinner'

export default function useReportWinner() {
  const { debouncer, timeoutRef } = useAnalyticsDebounce(ANALYTICS_DEBOUNCE * 2)
  const winner = useWinner()

  useEffect(() => {
    if (winner) {
      debouncer({
        name: ANALYTICS_EVENT_GHOST_SOLVED,
        params: {
          ghost_slug: winner,
        },
      })
    } else {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current)
      }
    }
  }, [winner, debouncer, timeoutRef])
}
