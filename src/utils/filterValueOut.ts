/**
 * Removes all occurring values from an array.
 *
 * If nothing is found, it will just return unmodified array.
 *
 * @param value A value to remove.
 * @param array The array to modify.
 * @returns A possibly modified array.
 */
export default function filterValueOut<T>(value: T, array: T[]) {
  return array.filter((item) => item !== value)
}
