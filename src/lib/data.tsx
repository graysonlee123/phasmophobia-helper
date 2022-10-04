import { evidences } from '@data/evidences'
import { ghosts } from '@data/ghosts'

export function getEvidenceData(slug: string) {
  return evidences.find((evidence) => slug === evidence.slug)
}

export function getEvidenceName(slug: string) {
  const data = getEvidenceData(slug)

  if (undefined === data) {
    return ''
  }

  const { name } = data

  return name
}

export function ghostHasEvidence(ghost: string, evidence: string) {
  const data = getGhostData(ghost)

  if (undefined === data) return undefined

  const { evidences } = data

  return evidences.indexOf(evidence) > -1
}

export function getGhostData(slug: string) {
  return ghosts.find((ghost) => ghost.slug === slug)
}

export function getPossibleGhosts(
  checkedEvidences: string[],
  disabledEvidences: string[]
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

export function getImpossibleEvidences(checkedEvidences: string[]) {
  const data: [string, string, string][] = []

  /**
   * Loop through each user's checked evidence and test for
   * ghosts that have all checked evidences in their evidences list.
   */
  ghosts.forEach((ghost) => {
    const check = checkedEvidences.every((evidence) =>
      ghost.evidences.includes(evidence)
    )

    if (check) {
      data.push(ghost.evidences)
    }
  })

  /**
   * Using a set here to make an array with unique values.
   */
  const flat = Array.from(new Set(data.flat()))
  const result = evidences
    .filter(({ slug }) => flat.indexOf(slug) < 0)
    .map(({ slug }) => slug)

  return result
}
