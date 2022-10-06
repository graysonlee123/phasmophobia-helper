import Ghost from '@components/ghost'
import styles from './index.module.css'

interface GhostsProps {
  minimizedGhosts: GhostSlug[]
  setMinimizedGhosts: (minimizedGhosts: GhostSlug[]) => void
  possibleGhosts: GhostSlug[]
}

export default function Ghosts({
  minimizedGhosts,
  setMinimizedGhosts,
  possibleGhosts,
}: GhostsProps) {
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
