import { ANALYTICS_DEBOUNCE } from '@data/constants'
import sendAnalyticsEvent from '@lib/sendAnalyticsEvents'
import { useRef } from 'react'

export default function useAnalyticsDebounce(debounce = ANALYTICS_DEBOUNCE) {
  const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null)

  function debouncer(data: GtagEvent) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      sendAnalyticsEvent(data)
    }, debounce)
  }

  return { debouncer, timeoutRef }
}
