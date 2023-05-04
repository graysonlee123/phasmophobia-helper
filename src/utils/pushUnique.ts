import arrayContains from './arrayContains'

/**
 * Adds a unique value to the end of an array.
 *
 * If the array already contains the value passed,
 * it will not be added to the array.
 *
 * @param value A value to add.
 * @param array The array to modify.
 * @returns A possibly modified array.
 */
export default function pushUnique<T>(value: T, array: T[]) {
  return arrayContains<T>(value, array) ? array : [...array, value]
}
