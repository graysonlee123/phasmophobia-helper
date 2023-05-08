import { useCallback, useEffect, useState } from 'react'
import useMounted from './useMounted'

/**
 * Interacts with a browser's local storage.
 * @param key The key for the storage.
 * @param fallback The value that the hook should fallback to if nothing is found in storage or
 *                 if there is an issue accessing storage. This value will also be set in storage.
 */
export default function useLocalStorage<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(fallback)
  const mounted = useMounted()

  /**
   * A wrapper for setting the value in local storage.
   */
  const setStorage = useCallback(
    (value: T) => {
      try {
        localStorage.setItem(key, JSON.stringify(value))
        setValue(value)
      } catch (error) {
        console.error(error)
      }
    },
    [key]
  )

  /**
   * Access the storage and set it in the state when the components mounts.
   */
  useEffect(() => {
    if (mounted) {
      try {
        const storage = localStorage.getItem(key)

        if (storage) setValue(JSON.parse(storage))
        else setStorage(fallback)
      } catch (error) {
        console.error("There was an issue reading from your browser's storage.", error)
      }
    }
  }, [key, fallback, mounted, setStorage])

  return [value, setStorage] as const
}
