/**
 * Searches an array for a value.
 *
 * @param value A value to check for.
 * @param array The array to search.
 * @returns True if `value` is found, false otherwise.
 */
export default function arrayContains<T>(value: T, array: T[]) {
  return array.indexOf(value) > -1
}
