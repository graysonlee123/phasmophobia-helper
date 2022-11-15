import { useContext, useMemo } from 'react'
import { EvidencesContext } from '@contexts/Evidences'
import { GhostsContext } from '@contexts/Ghosts'
import { useCheckedEvidences } from '@store/index'

const usePossibleEvidences = () => {
  const ghosts = useContext(GhostsContext)
  const evidences = useContext(EvidencesContext)
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

export default usePossibleEvidences
