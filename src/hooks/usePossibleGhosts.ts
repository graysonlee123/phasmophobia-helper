import { arrayContains } from '@lib/arrays'
import { useMemo } from 'react'

const usePossibleGhosts = (
  ghosts: Ghost[],
  checkedEvidenceSlugs: EvidenceState,
  disabledEvidenceSlugs: EvidenceState
) => {
  return useMemo(() => {
    return ghosts.filter((ghost) => {
      let passed = true

      /**
       * Don't show the ghost if it doesn't
       * have a checked evidence as a possibility.
       */
      checkedEvidenceSlugs.forEach((evidence) => {
        if (!arrayContains(evidence, ghost.evidences)) {
          passed = false
        }
      })

      /**
       * Don't show the ghost if it does
       * have a disabled evidence as a possibility.
       */
      disabledEvidenceSlugs.forEach((evidence) => {
        if (arrayContains(evidence, ghost.evidences)) {
          passed = false
        }
      })

      return passed
    })
  }, [ghosts, checkedEvidenceSlugs, disabledEvidenceSlugs])
}

export default usePossibleGhosts
