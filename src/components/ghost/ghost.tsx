import Tags from '@components/tags'
import Sanity from '@components/sanity'
import Minimize from '@components/minimize'
import { getGhostData } from '@lib/ghosts'
import { arrayContains, arrayAddUnique, arrayRemoveAll } from '@lib/arrays'
import cn from 'classnames'
import styles from './ghost.module.css'

interface GhostProps {
  minimizedGhosts: GhostSlug[]
  setMinimizedGhosts: (minimizedGhosts: GhostSlug[]) => void
  slug: GhostSlug
}

export default function Ghost({
  minimizedGhosts,
  setMinimizedGhosts,
  slug,
}: GhostProps) {
  /**
   * Handles the click logic for minimizing the ghost.
   */
  function handleClick() {
    if (arrayContains(slug, minimizedGhosts))
      setMinimizedGhosts(arrayRemoveAll(slug, minimizedGhosts) as GhostSlug[])
    else
      setMinimizedGhosts(arrayAddUnique(slug, minimizedGhosts) as GhostSlug[])
  }

  const { label, evidences, hunt, desc, wiki } = getGhostData(slug)
  const minimized = arrayContains(slug, minimizedGhosts)

  return (
    <article
      className={cn([styles.article], {
        [styles.disabled]: minimized,
      })}
    >
      <header className={styles.header}>
        <a
          className={styles.anchor}
          href={wiki}
          target="_blank"
          rel="noopener noreferrer"
          title="Visit Ghost Wiki Page"
        >
          {label}
        </a>
        <Sanity int={hunt} />
        <span className={styles.button}>
          <Minimize callback={handleClick} open={minimized} />
        </span>
      </header>
      {!minimized && desc}
      <Tags tags={evidences} />
    </article>
  )
}
