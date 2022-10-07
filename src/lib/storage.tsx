/**
 * Stores a stringified version of a variable.
 *
 * @param key The item key to set in local storage.
 * @param value The value to store.
 */
export function setStorageItem(
  key: StorageKeys,
  value: GhostState | EvidenceState
) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error('There was an issue writing to the local storage.', error)
  }
}

/**
 * Gets data from local storage.
 *
 * @param key The item key to get from local storage.
 * @returns The parsed data, or `null`.
 */
export function getStorageItem(key: StorageKeys) {
  if (typeof window !== 'undefined') {
    try {
      const storage = localStorage.getItem(key)

      if (null === storage) return null

      return JSON.parse(storage)
    } catch (error) {
      console.error('There was an issue reading the local storage.', error)
    }
  }

  return null
}
