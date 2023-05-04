import evidenceData from '@data/evidences.json'
import ghostData from '@data/ghosts.json'
import { useCheckedEvidences } from '@store/index'
import { useMemo } from 'react'

export default function usePossibleEvidences() {
  const ghosts = ghostData as Ghost[]
  const evidences = evidenceData as Evidence[]
  const checkedEvidences = useCheckedEvidences()

  return useMemo(() => {
    const data = new Set<EvidenceId>()

    /**
     * Loop through every ghost and test that the ghost has all of the checked evidences.
     */
    ghosts.forEach((ghost) => {
      const ghostEvidences = [...ghost.evidences, ...(ghost.falseEvidences ?? [])]
      const check = checkedEvidences.every((evidence) => ghostEvidences.includes(evidence))

      if (check) {
        ghostEvidences.forEach((evidence) => data.add(evidence))
      }
    })

    return evidences.filter((evidence) => data.has(evidence.id)).map((evidence) => evidence.id)
  }, [ghosts, evidences, checkedEvidences])
}
