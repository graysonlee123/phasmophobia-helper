import { useContext, useMemo } from 'react'
import { EvidencesContext } from '@contexts/Evidences'
import { GhostsContext } from '@contexts/Ghosts'
import { useCheckedEvidences } from '@store/index'

const usePossibleEvidences = () => {
  const ghosts = useContext(GhostsContext)
  const evidences = useContext(EvidencesContext)
  const checkedEvidences = useCheckedEvidences()

  return useMemo(() => {
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
    return evidences
      .filter(({ id: slug }) => flat.indexOf(slug) > -1)
      .map(({ id: slug }) => slug)
  }, [ghosts, evidences, checkedEvidences])
}

export default usePossibleEvidences
