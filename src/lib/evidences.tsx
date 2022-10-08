import { evidences } from '@data/evidences'
import { ghosts } from '@data/ghosts'
import { arrayContains } from '@lib/arrays'

/**
 * Gets all the data about an evidence.
 *
 * @param slug The slug of the evidence to find.
 * @returns The evidence data that was found.
 */
export function getEvidenceData(slug: EvidenceSlug) {
  return evidences.find((evidence) => slug === evidence.slug) as Evidence
}

/**
 * Gets currently possible evidences.
 *
 * Evidences that are currently possible check all ghost evidence
 * combinations and determine the shared possibilities.
 *
 * @param checkedEvidences The currently checked evidence slugs.
 * @returns An array of possible evidence slugs.
 */
export function getPossibleEvidences(checkedEvidences: EvidenceState) {
  const data: GhostEvidences[] = []

  /**
   * Loop through each checked evidence and test for ghosts that
   * have all checked evidences in their evidences list.
   */
  ghosts.forEach((ghost) => {
    const check = checkedEvidences.every((evidence) =>
      ghost.evidences.includes(evidence)
    )

    if (check) {
      data.push(ghost.evidences)
    }
  })

  /** Use a set here to make an array with unique values. */
  const flat = Array.from(new Set(data.flat()))
  const result = evidences
    .filter(({ slug }) => flat.indexOf(slug) > -1)
    .map(({ slug }) => slug)

  return result
}

/**
 * Generates the data for a tag based on a ghost's evidences.
 *
 * If an evidence has the ghost in its `ghosts` array, it means
 * the ghost will always have that evidence in nightmare mode.
 *
 * @param ghost The ghost to check for.
 * @param evidences A list of ghost evidences.
 * @returns The data for a tag.
 */
export function getEvidenceTags(
  ghost: GhostSlug,
  evidences: GhostEvidences
): Tags {
  return evidences.map((evidence) => {
    const { slug, label, ghosts, wiki: link } = getEvidenceData(evidence)
    const important = ghosts ? arrayContains(ghost, ghosts) : false

    return {
      slug,
      label,
      important,
      link,
    }
  })
}
