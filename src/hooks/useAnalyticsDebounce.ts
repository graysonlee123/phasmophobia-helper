import { useRef } from 'react'
import { sendGtagEvent } from '@lib/analytics'
import { ANALYTICS_DEBOUNCE } from '@lib/constants'

const useAnalyticsDebounce = () => {
  const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null)

  return (data: GtagEvent) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      sendGtagEvent(data)
    }, ANALYTICS_DEBOUNCE)
  }
}

export default useAnalyticsDebounce
