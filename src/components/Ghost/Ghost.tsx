import useGhostEvidences from '@hooks/useGhostEvidences'
import { arrayContains, arrayAddUnique, arrayRemoveAll } from '@lib/arrays'
import { sendGtagEvent } from '@lib/analytics'
import Tags from '@components/Tags'
import Sanity from '@components/Sanity'
import Minimize from '@components/Minimize'
import styles from './Ghost.module.css'
import cn from 'classnames'

interface GhostProps {
  ghost: Ghost
  evidences: Evidence[]
  minimizedGhosts: GhostState
  setMinimizedGhosts: SetGhostState
}

export default function Ghost({
  ghost,
  evidences,
  minimizedGhosts,
  setMinimizedGhosts,
}: GhostProps) {
  /**
   * Handles the click logic for minimizing the ghost.
   */
  function handleClick() {
    if (arrayContains(ghost.slug, minimizedGhosts)) {
      setMinimizedGhosts(arrayRemoveAll(ghost.slug, minimizedGhosts))

      sendGtagEvent({
        name: 'ghost_maximized',
        params: {
          ghost_slug: ghost.slug,
        },
      })
    } else {
      setMinimizedGhosts(arrayAddUnique(ghost.slug, minimizedGhosts))

      sendGtagEvent({
        name: 'ghost_minimized',
        params: {
          ghost_slug: ghost.slug,
        },
      })
    }
  }

  const minimized = arrayContains(ghost.slug, minimizedGhosts)
  const ghostEvidences = useGhostEvidences(ghost, evidences)
  const tags = ghostEvidences.map<Tag>((evidence) => ({
    slug: evidence.slug,
    label: evidence.label,
    link: evidence.wiki,
  }))

  return (
    <article
      className={cn([styles.article], {
        [styles.disabled]: minimized,
      })}
    >
      <header className={styles.header}>
        <a
          className={styles.anchor}
          href={ghost.wiki}
          target="_blank"
          rel="noopener noreferrer"
          title="Visit Ghost Wiki Page"
        >
          {ghost.label}
        </a>
        <Sanity int={ghost.hunt} />
        <span className={styles.button}>
          <Minimize callback={handleClick} open={minimized} />
        </span>
      </header>
      {!minimized && ghost.desc}
      <Tags tags={tags} />
    </article>
  )
}
