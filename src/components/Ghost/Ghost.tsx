import { ComponentPropsWithoutRef } from 'react'
import { useEliminatedGhosts, useSetEliminatedGhosts } from '@store/index'
import useGhostEvidences from '@hooks/useGhostEvidences'
import Tags from '@components/Tags'
import Sanity from '@components/Sanity'
import Minimize from '@components/Minimize'
import HoverLink from '@components/HoverLink'
import Header from '@components/Header'
import Writing from '@components/Writing'
import sendAnalyticsEvent from '@lib/sendAnalyticsEvents'
import styles from './Ghost.module.css'
import { motion } from 'framer-motion'
import arrayContains from '@utils/arrayContains'
import filterValueOut from '@utils/filterValueOut'
import pushUnique from '@utils/pushUnique'

interface GhostProps extends ComponentPropsWithoutRef<'article'> {
  ghost: Ghost
  first?: boolean
  last?: boolean
}

export default function Ghost({ ghost, first = false, last = false }: GhostProps) {
  const eliminatedGhosts = useEliminatedGhosts()
  const setEliminatedGhosts = useSetEliminatedGhosts()

  /**
   * Handles the click logic for minimizing the ghost.
   */
  function handleClick() {
    if (arrayContains(ghost.id, eliminatedGhosts)) {
      setEliminatedGhosts(filterValueOut(ghost.id, eliminatedGhosts))

      sendAnalyticsEvent({
        name: 'ghost_maximized',
        params: {
          ghost_slug: ghost.id,
        },
      })
    } else {
      setEliminatedGhosts(pushUnique(ghost.id, eliminatedGhosts))

      sendAnalyticsEvent({
        name: 'ghost_minimized',
        params: {
          ghost_slug: ghost.id,
        },
      })
    }
  }

  const eliminated = arrayContains(ghost.id, eliminatedGhosts)
  const { evidences, falseEvidences } = useGhostEvidences(ghost)
  const ghostEvidences = [...evidences, ...(falseEvidences ?? [])]
  const evidenceTags = ghostEvidences.map<Tag>((evidence) => ({
    slug: evidence.id,
    label: evidence.shortName ?? evidence.name,
    link: evidence.url,
    important: evidence.ghosts !== undefined && evidence.ghosts.indexOf(ghost.id) > -1,
  }))

  return (
    <motion.article
      className={styles.article}
      initial={false}
      animate={{
        opacity: eliminated ? 0.6 : 1,
        gap: eliminated ? '0.25rem' : '0.75rem',
      }}
      style={{
        paddingTop: first ? 0 : undefined,
        paddingBottom: last ? 0 : undefined,
      }}
    >
      <header className={styles.header}>
        <Header>
          <HoverLink
            href={ghost.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`View ${ghost.name} wiki page`}
          >
            {ghost.name}
          </HoverLink>
        </Header>
        <Sanity int={ghost.hunt} />
        <span className={styles.button}>
          <Minimize callback={handleClick} open={eliminated} />
        </span>
      </header>
      <motion.div
        className={styles.description}
        initial={false}
        animate={{
          height: eliminated ? 0 : 'auto',
        }}
      >
        <Writing markdown>
          {ghost.about ??
            `There is no description for this ghost. But, you can visit its [Wiki page](${ghost.url}).`}
        </Writing>
      </motion.div>
      <Tags tags={evidenceTags} />
    </motion.article>
  )
}
