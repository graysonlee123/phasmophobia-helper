import { ghosts } from '@data/ghosts'
import { arrayContains } from './arrays'

/**
 * Gets all data about a ghost.
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
 * @returns True if the ghost has the evidence, false otherwise.
 */
export function ghostHasEvidence(ghost: GhostSlug, evidence: EvidenceSlug) {
  const { evidences } = getGhostData(ghost)
  return arrayContains(evidence, evidences)
}

/**
 * Gets currently possible ghost types.
 *
 * Checks the currently checked and disabled evidences to determine
 * which ghosts are possible, based on their evidence array.
 *
 * @param checkedEvidences The currently checked evidence slugs.
 * @param disabledEvidences The currently disabled evidence slugs.
 * @returns An array of ghost slugs.
 */
export function getPossibleGhosts(
  checkedEvidences: EvidenceState,
  disabledEvidences: EvidenceState
) {
  return ghosts
    .filter(({ slug }) => {
      let passed = true

      /**
       * Don't show the ghost if it doesn't
       * have a checked evidence as a possibility.
       */
      checkedEvidences.forEach((evidence) => {
        if (!ghostHasEvidence(slug, evidence)) {
          passed = false
        }
      })

      /**
       * Don't show the ghost if it does
       * have a disabled evidence as a possibility.
       */
      disabledEvidences.forEach((evidence) => {
        if (ghostHasEvidence(slug, evidence)) {
          passed = false
        }
      })

      return passed
    })
    .map((ghost) => ghost.slug)
}
