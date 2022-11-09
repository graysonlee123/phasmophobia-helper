import Ghost from '@components/Ghost'
import styles from './Ghosts.module.css'
import { AnimatePresence, motion } from 'framer-motion'

interface GhostsProps {
  possibleGhosts: Ghost[]
  evidences: Evidence[]
  minimizedGhosts: GhostState
  setMinimizedGhosts: SetGhostState
}

export default function Ghosts({
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
        <AnimatePresence>
          {possibleGhosts.map((ghost) => (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              key={ghost.slug}
            >
              <Ghost
                ghost={ghost}
                evidences={evidences}
                minimizedGhosts={minimizedGhosts}
                setMinimizedGhosts={setMinimizedGhosts}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </section>
  )
}
