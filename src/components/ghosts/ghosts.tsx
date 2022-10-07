import Ghost from '@components/ghost'
import { getPossibleGhosts } from '@lib/ghosts'
import styles from './ghosts.module.css'

interface GhostsProps {
  checkedEvidences: EvidenceSlug[]
  disabledEvidences: EvidenceSlug[]
  minimizedGhosts: GhostSlug[]
  setMinimizedGhosts: (minimizedGhosts: GhostSlug[]) => void
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
