import { useMemo } from 'react'
import { useEliminatedGhosts } from '@store/index'
import usePossibleGhosts from '@hooks/usePossibleGhosts'

export default function useWinner(ghostId: GhostId) {
  const possibleGhosts = usePossibleGhosts()
  const elminiatedGhosts = useEliminatedGhosts()

  return useMemo(() => {
    /**
     * A ghost is a winner if:
     *
     * 1. It is the only possible ghost left, or...
     * 2. ...it is the only possible ghost that is not minimized.
     */
    const isPossible = possibleGhosts.some(({ id }) => id === ghostId)
    const isLastPossible = possibleGhosts.length === 1 && isPossible
    const ghostsNotElim = possibleGhosts
      .filter(({ id }) => elminiatedGhosts.indexOf(id) === -1)
      .map(({ id }) => id)
    const isOnlyNotElim = ghostsNotElim.length === 1 && ghostsNotElim.indexOf(ghostId) > -1

    return isLastPossible || isOnlyNotElim
  }, [ghostId, possibleGhosts, elminiatedGhosts])
}
