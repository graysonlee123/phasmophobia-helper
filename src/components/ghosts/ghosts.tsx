import { getPossibleGhosts } from '@lib/data'
import Ghost from '@components/ghost'
import { useEffect, useState } from 'react'

interface GhostsProps {
  checkedEvidences: string[]
  disabledEvidences: string[]
}

export default function Ghosts({
  checkedEvidences,
  disabledEvidences,
}: GhostsProps) {
  const [possibleGhosts, setPossibleGhosts] = useState<string[]>([])

  useEffect(
    function () {
      setPossibleGhosts(getPossibleGhosts(checkedEvidences, disabledEvidences))
    },
    [checkedEvidences, disabledEvidences]
  )

  return (
    <>
      <p>Ghosts:</p>
      {possibleGhosts.length === 0 ? (
        <p>Sorry, no ghost types were found for those choices.</p>
      ) : (
        possibleGhosts.map((slug) => <Ghost key={slug} slug={slug} />)
      )}
    </>
  )
}
