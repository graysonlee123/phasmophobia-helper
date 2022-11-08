import { useMemo } from 'react'

const usePossibleEvidences = (
  ghosts: Ghost[],
  evidences: Evidence[],
  checkedEvidences: EvidenceState
) => {
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
      .filter(({ slug }) => flat.indexOf(slug) > -1)
      .map(({ slug }) => slug)
  }, [ghosts, evidences, checkedEvidences])
}

export default usePossibleEvidences
