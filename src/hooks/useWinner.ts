import usePossibleGhosts from '@hooks/usePossibleGhosts'
import { useEliminatedGhosts } from '@store/index'
import { useMemo } from 'react'

export default function useWinner() {
  const possibleGhosts = usePossibleGhosts()
  const eliminatedGhosts = useEliminatedGhosts()

  return useMemo(() => {
    /**
     * A ghost is a winner if:
     *
     * 1. It is the only possible ghost left, or...
     * 2. ...it is the only possible ghost that is not minimized.
     */
    if (possibleGhosts.length === 1) {
      return possibleGhosts[0].id
    }

    const ghostsNotEliminated = possibleGhosts.filter(
      ({ id }) => eliminatedGhosts.indexOf(id) === -1
    )

    if (ghostsNotEliminated.length === 1) {
      return ghostsNotEliminated[0].id
    }

    return null
  }, [possibleGhosts, eliminatedGhosts])
}
