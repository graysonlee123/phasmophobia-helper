import Ghost from '@components/ghost'
import styles from './index.module.css'

interface GhostsProps {
  possibleGhosts: GhostSlug[]
  addCheckedEvidences: (evidences: EvidenceSlug[]) => void
}

export default function Ghosts({
  addCheckedEvidences,
  possibleGhosts,
}: GhostsProps) {
  return (
    <section className={styles.section}>
      {possibleGhosts.length === 0 ? (
        <p>Sorry, no ghost types were found for those choices.</p>
      ) : (
        possibleGhosts.map((slug) => (
          <Ghost
            slug={slug}
            addCheckedEvidences={addCheckedEvidences}
            key={slug}
          />
        ))
      )}
    </section>
  )
}
