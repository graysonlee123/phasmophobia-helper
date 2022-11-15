import { ComponentPropsWithoutRef } from 'react'
import { useEliminatedGhosts, useSetEliminatedGhosts } from '@store/index'
import useGhostEvidences from '@hooks/useGhostEvidences'
import useWinner from '@hooks/useWinner'
import Tags from '@components/Tags'
import Sanity from '@components/Sanity'
import Minimize from '@components/Minimize'
import HoverLink from '@components/HoverLink'
import Header from '@components/Header'
import Writing from '@components/Writing'
import { arrayContains, arrayAddUnique, arrayRemoveAll } from '@lib/arrays'
import { sendGtagEvent } from '@lib/analytics'
import styles from './Ghost.module.css'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

interface GhostProps extends ComponentPropsWithoutRef<'article'> {
  ghost: Ghost
  first?: boolean
  last?: boolean
}

export default function Ghost({ ghost, first = false, last = false }: GhostProps) {
  const eliminatedGhosts = useEliminatedGhosts()
  const setEliminatedGhosts = useSetEliminatedGhosts()
  const { width, height } = useWindowSize()

  /**
   * Handles the click logic for minimizing the ghost.
   */
  function handleClick() {
    if (arrayContains(ghost.id, eliminatedGhosts)) {
      setEliminatedGhosts(arrayRemoveAll(ghost.id, eliminatedGhosts))

      sendGtagEvent({
        name: 'ghost_maximized',
        params: {
          ghost_slug: ghost.id,
        },
      })
    } else {
      setEliminatedGhosts(arrayAddUnique(ghost.id, eliminatedGhosts))

      sendGtagEvent({
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
  const winner = useWinner(ghost.id)

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
        {winner && (
          <Confetti
            width={width}
            height={height}
            numberOfPieces={400}
            gravity={0.2}
            recycle={false}
          />
        )}
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
