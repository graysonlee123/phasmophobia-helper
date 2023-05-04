import ghostData from '@data/ghosts.json'
import { useCheckedEvidences, useDisabledEvidences } from '@store/index'
import arrayContains from '@utils/arrayContains'
import { useMemo } from 'react'

export default function usePossibleGhosts() {
  const ghosts = ghostData as Ghost[]
  const checkedEvidences = useCheckedEvidences()
  const disabledEvidences = useDisabledEvidences()

  return useMemo(() => {
    return ghosts.filter((ghost) => {
      /**
       * All ghosts pass by default. Criteria to fail a ghost:
       *
       * 1. The ghost does not have one of the checked evidences.
       * 2. The ghost has one of the disabled evidences.
       */
      let passed = true
      const ghostEvidences = [...ghost.evidences, ...(ghost.falseEvidences ?? [])]

      /**
       * Fail the ghost if it does not have one of the checked evidence as a possibility.
       */
      checkedEvidences.forEach((evidence) => {
        if (!arrayContains(evidence, ghostEvidences)) passed = false
      })

      /**
       * Fail the ghost if it has one of the disabled evidence as a possibility.
       */
      disabledEvidences.forEach((evidence) => {
        if (arrayContains(evidence, ghostEvidences)) passed = false
      })

      return passed
    })
  }, [ghosts, checkedEvidences, disabledEvidences])
}
