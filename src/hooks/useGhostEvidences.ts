import { useContext } from 'react'
import { EvidencesContext } from '@contexts/Evidences'

export type UseGhostEvidencesHook = (ghost: Ghost) => {
  evidences: Evidences
  falseEvidences?: Evidences
}

const useGhostEvidences: UseGhostEvidencesHook = (ghost) => {
  const allEvidences = useContext(EvidencesContext)

  const evidences = allEvidences.filter((evidence) => ghost.evidences.indexOf(evidence.id) > -1)

  if (undefined !== ghost.falseEvidences) {
    const falseEvidences = allEvidences.filter(
      (evidence) => ghost.falseEvidences!.indexOf(evidence.id) > -1
    )

    return { evidences, falseEvidences }
  }

  return { evidences }
}

export default useGhostEvidences
