import useGhostEvidences from '@hooks/useGhostEvidences'
import { arrayContains, arrayAddUnique, arrayRemoveAll } from '@lib/arrays'
import { sendGtagEvent } from '@lib/analytics'
import Tags from '@components/Tags'
import Sanity from '@components/Sanity'
import Minimize from '@components/Minimize'
import HoverLink from '@components/HoverLink'
import Header from '@components/Header'
import styles from './Ghost.module.css'
import { motion } from 'framer-motion'

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
    <motion.article
      className={styles.article}
      initial={false}
      animate={{
        opacity: minimized ? 0.6 : 1,
        gap: minimized ? '0.25rem' : '0.75rem',
      }}
    >
      <header className={styles.header}>
        <Header>
          <HoverLink
            href={ghost.wiki}
            target="_blank"
            rel="noopener noreferrer"
            title={`View ${ghost.label} wiki page`}
          >
            {ghost.label}
          </HoverLink>
        </Header>
        <Sanity int={ghost.hunt} />
        <span className={styles.button}>
          <Minimize callback={handleClick} open={minimized} />
        </span>
      </header>
      <motion.div
        className={styles.description}
        initial={false}
        animate={{
          height: minimized ? 0 : 'auto',
        }}
      >
        {ghost.desc}
      </motion.div>
      <Tags tags={tags} />
    </motion.article>
  )
}
