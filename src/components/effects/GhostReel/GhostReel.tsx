import { VOWELS } from '@data/constants'
import ghostData from '@data/ghosts.json'
import useMounted from '@hooks/useMounted'
import usePossibleGhosts from '@hooks/usePossibleGhosts'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function GhostReel() {
  const ghosts = ghostData as Ghost[]
  const possibleGhosts = usePossibleGhosts()
  const mounted = useMounted()
  const [ghost, setGhost] = useState({ data: ghosts[0] })
  const [nextGhost, setNextGhost] = useState({ data: ghosts[1] })
  const timeout = useRef<NodeJS.Timeout | null>(null)
  const prefersReducedMotion = useReducedMotion()

  /** Finds a new ghost based on the evidence state. */
  const setPossibleNextGhost = useCallback(() => {
    if (possibleGhosts.length === 0) {
      const randomIndex = Math.floor(Math.random() * ghosts.length)
      setNextGhost({ data: ghosts[randomIndex] })
    } else {
      const randomIndex = Math.floor(Math.random() * possibleGhosts.length)
      setNextGhost({ data: possibleGhosts[randomIndex] })
    }
  }, [ghosts, possibleGhosts])

  /** Set a random next ghost whenever the possible ghosts or the current ghost change. */
  useEffect(() => {
    if (mounted) {
      setPossibleNextGhost()
    }
  }, [mounted, setPossibleNextGhost, ghost])

  /** Responsible for the timed "reel" of ghosts. */
  useEffect(() => {
    if (mounted) {
      timeout.current = setInterval(() => {
        setGhost(nextGhost)
      }, 15000)
    }

    return () => {
      if (timeout.current) {
        clearInterval(timeout.current)
      }
    }
  }, [mounted, setGhost, nextGhost, timeout])

  return (
    <AnimatePresence mode="wait">
      {possibleGhosts.length === 1 ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="solved"
        >
          It&apos;s {possibleGhosts[0].name === 'The Mimic' ? '' : 'a'}
          {VOWELS.indexOf(possibleGhosts[0].name.toLowerCase()[0]) !== -1 ? 'n' : ''}{' '}
          {possibleGhosts[0].name}!
        </motion.span>
      ) : (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="reel"
        >
          Could it be {ghost.data.name === 'The Mimic' ? '' : 'a'}
          {VOWELS.indexOf(ghost.data.name.toLowerCase()[0]) !== -1 ? 'n' : ''}{' '}
          <AnimatePresence mode="wait">
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, translateY: prefersReducedMotion ? 0 : 3 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: prefersReducedMotion ? 0 : -3 }}
              transition={{
                duration: 0.5,
              }}
              key={ghost.data.id}
            >
              {ghost.data.name}
            </motion.span>
            ?
          </AnimatePresence>
          ?
        </motion.span>
      )}
    </AnimatePresence>
  )
}
