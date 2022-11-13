import { useEffect } from 'react'
import usePossibleGhosts from '@hooks/usePossibleGhosts'
import useAnalyticsDebounce from '@hooks/useAnalyticsDebounce'
import Ghost from '@components/Ghost'
import styles from './Ghosts.module.css'
import { AnimatePresence, motion } from 'framer-motion'

interface GhostsProps {}

export default function Ghosts({}: GhostsProps) {
  const possibleGhosts = usePossibleGhosts()
  const solvedDebounce = useAnalyticsDebounce()

  /**
   * Listen for evidence changes and send a Gtag event
   * if there is only one possible ghost.
   */
  useEffect(() => {
    if (possibleGhosts.length === 1) {
      solvedDebounce({
        name: 'ghost_solved',
        params: {
          ghost_slug: possibleGhosts[0].id,
        },
      })
    }
  }, [possibleGhosts, solvedDebounce])

  return (
    <section className={styles.section}>
      {possibleGhosts.length === 0 ? (
        <motion.p
          className={styles.none}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Sorry, no ghost types were found for those choices.
        </motion.p>
      ) : (
        <AnimatePresence initial={false}>
          {possibleGhosts.map((ghost, index) => (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              key={ghost.id}
            >
              <Ghost
                ghost={ghost}
                first={index === 0}
                last={index === possibleGhosts.length - 1}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </section>
  )
}
