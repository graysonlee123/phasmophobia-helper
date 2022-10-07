import { event } from 'nextjs-google-analytics'

/**
 * Sends an event to Google Analytics.
 *
 * @param data The data to send. An object with `name` and optional `params`.
 */
export function sendGtagEvent(data: GtagEvent) {
  const { name, params } = data

  event(name, params || {})
}
