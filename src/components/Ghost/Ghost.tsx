import Tags from '@components/Tags'
import Sanity from '@components/Sanity'
import Minimize from '@components/Minimize'
import { getGhostData } from '@lib/ghosts'
import { arrayContains, arrayAddUnique, arrayRemoveAll } from '@lib/arrays'
import { sendGtagEvent } from '@lib/analytics'
import { getEvidenceTags } from '@lib/evidences'
import cn from 'classnames'
import styles from './Ghost.module.css'

interface GhostProps {
  minimizedGhosts: GhostState
  setMinimizedGhosts: SetGhostState
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
    if (arrayContains(slug, minimizedGhosts)) {
      setMinimizedGhosts(arrayRemoveAll(slug, minimizedGhosts) as GhostState)

      sendGtagEvent({
        name: 'ghost_maximized',
        params: {
          ghost_slug: slug,
        },
      })
    } else {
      setMinimizedGhosts(arrayAddUnique(slug, minimizedGhosts) as GhostState)

      sendGtagEvent({
        name: 'ghost_minimized',
        params: {
          ghost_slug: slug,
        },
      })
    }
  }

  const { label, evidences, hunt, desc, wiki } = getGhostData(slug)
  const minimized = arrayContains(slug, minimizedGhosts)
  const tags: Tags = getEvidenceTags(slug, evidences)

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
      <Tags tags={tags} />
    </article>
  )
}
