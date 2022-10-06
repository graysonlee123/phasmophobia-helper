import { useEffect, useState } from 'react'
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
  const { label, evidences, hunt, desc, wiki } = getGhostData(slug)

  /**
   * Responsible for keeping the minimized state updated.
   */
  const [minimized, setMinimized] = useState<boolean>(false)
  useEffect(
    function () {
      if (arrayContains(slug, minimizedGhosts)) setMinimized(true)
      else setMinimized(false)
    },
    [minimizedGhosts, slug]
  )

  /**
   * Handles the click logic for minimizing the ghost.
   */
  function handleClick() {
    if (arrayContains(slug, minimizedGhosts))
      setMinimizedGhosts(arrayRemoveAll(slug, minimizedGhosts) as GhostSlug[])
    else
      setMinimizedGhosts(arrayAddUnique(slug, minimizedGhosts) as GhostSlug[])
  }

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
