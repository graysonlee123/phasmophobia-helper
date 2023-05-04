import evidenceData from '@data/evidences.json'
import arrayContains from '@utils/arrayContains'

export default function useGhostEvidences(ghost: Ghost) {
  const evidences = (evidenceData as Evidence[]).filter((evidence) =>
    arrayContains(evidence.id, ghost.evidences)
  )

  /**
   * Special treatment for ghosts with false evidences.
   */
  if (ghost.falseEvidences !== undefined) {
    const falseEvidences = (evidenceData as Evidence[]).filter(
      (evidence) => ghost.falseEvidences!.indexOf(evidence.id) > -1
    )

    return { evidences, falseEvidences }
  }

  return { evidences }
}
