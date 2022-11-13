import { useContext, useMemo } from 'react'
import { GhostsContext } from '@contexts/Ghosts'
import { useCheckedEvidences, useDisabledEvidences } from '@store/index'
import { arrayContains } from '@lib/arrays'

const usePossibleGhosts = () => {
  const ghosts = useContext(GhostsContext)
  const checkedEvidences = useCheckedEvidences()
  const disabledEvidences = useDisabledEvidences()

  return useMemo(() => {
    return ghosts.filter((ghost) => {
      let passed = true

      /**
       * Don't show the ghost if it doesn't
       * have a checked evidence as a possibility.
       */
      checkedEvidences.forEach((evidence) => {
        if (!arrayContains(evidence, ghost.evidences)) {
          passed = false
        }
      })

      /**
       * Don't show the ghost if it does
       * have a disabled evidence as a possibility.
       */
      disabledEvidences.forEach((evidence) => {
        if (arrayContains(evidence, ghost.evidences)) {
          passed = false
        }
      })

      return passed
    })
  }, [ghosts, checkedEvidences, disabledEvidences])
}

export default usePossibleGhosts
