import { ANALYTICS_DEBOUNCE } from '@data/constants'
import { useEffect } from 'react'
import useAnalyticsDebounce from './useAnalyticsDebounce'
import useWinner from './useWinner'

export default function useReportWinner() {
  const solvedDebounce = useAnalyticsDebounce(ANALYTICS_DEBOUNCE * 2)
  const winner = useWinner()

  useEffect(() => {
    if (winner) {
      solvedDebounce({
        name: 'ghost_solved',
        params: {
          ghost_slug: winner,
        },
      })
    }
  }, [winner, solvedDebounce])
}
