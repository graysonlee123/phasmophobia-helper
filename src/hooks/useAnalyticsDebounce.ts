import { useRef } from 'react'
import sendAnalyticsEvent from '@lib/sendAnalyticsEvents'
import { ANALYTICS_DEBOUNCE } from '@data/constants'

const useAnalyticsDebounce = () => {
  const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null)

  return (data: GtagEvent) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      sendAnalyticsEvent(data)
    }, ANALYTICS_DEBOUNCE)
  }
}

export default useAnalyticsDebounce
