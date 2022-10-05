import { evidences } from '@data/evidences'
import { ghosts } from '@data/ghosts'

/**
 * Gets all the data about an evidence piece.
 *
 * @param slug The slug of the evidence to find.
 * @returns The data that was found.
 */
export function getEvidenceData(slug: EvidenceSlug) {
  return evidences.find((evidence) => slug === evidence.slug) as Evidence
}

/**
 * Gets all the data about a ghost.
 *
 * @param slug The slug of the ghost to find.
 * @returns The data that was found.
 */
export function getGhostData(slug: GhostSlug) {
  return ghosts.find((ghost) => ghost.slug === slug) as Ghost
}

/**
 * Checks a ghost to see if its evidences contains a value.
 *
 * @param ghost The slug of the ghost to check.
 * @param evidence The slug of the evidence to check.
 * @returns True if the ghost has the evidence.
 */
export function ghostHasEvidence(ghost: GhostSlug, evidence: EvidenceSlug) {
  const { evidences } = getGhostData(ghost)

  return evidences.indexOf(evidence) > -1
}
