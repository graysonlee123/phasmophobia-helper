/**
 * Searches an array for a value.
 *
 * @param value A value to check for.
 * @param array The array to search.
 * @returns True if `value` is found, false otherwise.
 */
export function arrayContains<T>(value: T, array: T[]) {
  return array.indexOf(value) > -1
}

/**
 * Adds a unique value to an array.
 *
 * If the array already contains the value passed,
 * it will not be added to the array.
 *
 * @param value A value to add.
 * @param array The array to modify.
 * @returns A possibly modified array.
 */
export function arrayAddUnique<T>(value: T, array: T[]) {
  return arrayContains<T>(value, array) ? array : [...array, value]
}

/**
 * Removes all occurring values from an array.
 *
 * If nothing is found, it will just return unmodified array.
 *
 * @param value A value to remove.
 * @param array The array to modify.
 * @returns A possibly modified array.
 */
export function arrayRemoveAll<T>(value: T, array: T[]) {
  return array.filter((item) => item !== value)
}
