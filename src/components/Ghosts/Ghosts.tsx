import Ghost from '@components/Ghost'
import { getPossibleGhosts } from '@lib/ghosts'
import styles from './Ghosts.module.css'

interface GhostsProps {
  checkedEvidences: EvidenceState
  disabledEvidences: EvidenceState
  minimizedGhosts: GhostState
  setMinimizedGhosts: SetGhostState
}

export default function Ghosts({
  checkedEvidences,
  disabledEvidences,
  minimizedGhosts,
  setMinimizedGhosts,
}: GhostsProps) {
  const possibleGhosts = getPossibleGhosts(checkedEvidences, disabledEvidences)

  return (
    <section className={styles.section}>
      {possibleGhosts.length === 0 ? (
        <p>Sorry, no ghost types were found for those choices.</p>
      ) : (
        possibleGhosts.map((slug) => (
          <Ghost
            minimizedGhosts={minimizedGhosts}
            setMinimizedGhosts={setMinimizedGhosts}
            slug={slug}
            key={slug}
          />
        ))
      )}
    </section>
  )
}
