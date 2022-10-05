import Ghost from '@components/ghost'
import styles from './index.module.css'

interface GhostsProps {
  possibleGhosts: GhostSlug[]
}

export default function Ghosts({ possibleGhosts }: GhostsProps) {
  return (
    <section className={styles.section}>
      {possibleGhosts.length === 0 ? (
        <p>Sorry, no ghost types were found for those choices.</p>
      ) : (
        possibleGhosts.map((slug) => <Ghost slug={slug} key={slug} />)
      )}
    </section>
  )
}
