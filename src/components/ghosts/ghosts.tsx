import { useEffect, useState } from 'react'
import { getPossibleGhosts } from '@lib/data'
import Ghost from '@components/ghost'
import styles from './index.module.css'

interface GhostsProps {
  checkedEvidences: EvidenceSlug[]
  disabledEvidences: EvidenceSlug[]
}

export default function Ghosts({
  checkedEvidences,
  disabledEvidences,
}: GhostsProps) {
  const [possibleGhosts, setPossibleGhosts] = useState<GhostSlug[]>([])

  useEffect(
    function () {
      setPossibleGhosts(getPossibleGhosts(checkedEvidences, disabledEvidences))
    },
    [checkedEvidences, disabledEvidences]
  )

  return (
    <section className={styles.section}>
      {possibleGhosts.length === 0 ? (
        <p>Sorry, no ghost types were found for those choices.</p>
      ) : (
        possibleGhosts.map((slug) => <Ghost key={slug} slug={slug} />)
      )}
    </section>
  )
}
