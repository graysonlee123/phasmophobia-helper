import Ghost from '@components/Ghost'
import styles from './Ghosts.module.css'
import { AnimatePresence, motion } from 'framer-motion'

interface GhostsProps {
  ghosts: Ghost[]
  possibleGhosts: Ghost[]
  evidences: Evidence[]
  minimizedGhosts: GhostState
  setMinimizedGhosts: SetGhostState
}

export default function Ghosts({
  ghosts,
  possibleGhosts,
  evidences,
  minimizedGhosts,
  setMinimizedGhosts,
}: GhostsProps) {
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
        ghosts.map((ghost) => (
          <AnimatePresence key={ghost.slug}>
            {possibleGhosts.some(({ slug }) => slug === ghost.slug) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <Ghost
                  ghost={ghost}
                  evidences={evidences}
                  minimizedGhosts={minimizedGhosts}
                  setMinimizedGhosts={setMinimizedGhosts}
                />
              </motion.div>
            )}
          </AnimatePresence>
        ))
      )}
    </section>
  )
}
