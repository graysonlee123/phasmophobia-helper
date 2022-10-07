/**
 * Searches an array for a value.
 *
 * @param value A value to check for.
 * @param array The array to search.
 * @returns True if `value` is found, false otherwise.
 */
export function arrayContains(value: string, array: string[]) {
  return array.indexOf(value) > -1
}

/**
 * Adds a unique value to an array.
 *
 * If the array already contains the value passed,
 * it will not be aded to the array.
 *
 * @param value A value to add.
 * @param array The array to modify.
 * @returns A possibly modified array.
 */
export function arrayAddUnique(value: string, array: string[]) {
  return arrayContains(value, array) ? array : [...array, value]
}

/**
 * Removes all occuring values from an array.
 *
 * If nothing is found, it will just return unmodified array.
 *
 * @param value A value to remove.
 * @param array The array to modify.
 * @returns A possibly modified array.
 */
export function arrayRemoveAll(value: string, array: string[]) {
  return array.filter((item) => item !== value)
}
