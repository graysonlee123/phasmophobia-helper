import { getStorageItem, setStorageItem } from '@lib/storage'
import { useEffect, useState } from 'react'

function useStorageState<T>(key: StorageKeys) {
  const [loaded, setLoaded] = useState(false)
  const [slugs, setSlugs] = useState<T[]>([])

  /** Load the storage on first mount. */
  useEffect(() => {
    setSlugs(getStorageItem(key) || [])
    setLoaded(true)
  }, [key])

  /** Set the storage when it changes, if storage has been loaded. */
  useEffect(() => {
    if (loaded) {
      setStorageItem(key, slugs as GhostState | EvidenceState)
    }
  }, [loaded, key, slugs])

  return [slugs, setSlugs] as const
}

export default useStorageState
