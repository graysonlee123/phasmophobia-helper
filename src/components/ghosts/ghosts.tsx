import Ghost from '@components/ghost'
import styles from './index.module.css'

interface GhostsProps {
  possibleGhosts: GhostSlug[]
  toggleGhost: (slug: GhostSlug) => void
  ghostIsMinimized: (slug: GhostSlug) => boolean
}

export default function Ghosts({
  possibleGhosts,
  toggleGhost,
  ghostIsMinimized,
}: GhostsProps) {
  return (
    <section className={styles.section}>
      {possibleGhosts.length === 0 ? (
        <p>Sorry, no ghost types were found for those choices.</p>
      ) : (
        possibleGhosts.map((slug) => (
          <Ghost
            toggleGhost={toggleGhost}
            ghostIsMinimized={ghostIsMinimized}
            slug={slug}
            key={slug}
          />
        ))
      )}
    </section>
  )
}
