import usePossibleGhosts from '@hooks/usePossibleGhosts'
import { AnimatePresence, motion } from 'framer-motion'
import Ghost from './Ghost'

export default function GhostList() {
  const possibleGhosts = usePossibleGhosts()

  return possibleGhosts.length === 0 ? (
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Sorry, no ghost types were found for those choices.
    </motion.p>
  ) : (
    <AnimatePresence initial={false}>
      {possibleGhosts.map((ghost, index) => (
        <motion.div
          initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
          animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
          exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
          key={ghost.id}
        >
          <Ghost
            ghost={ghost}
            header={<Ghost.Header sanity={<Ghost.Header.Sanity />} />}
            description={<Ghost.Description />}
            evidence={<Ghost.Evidence />}
            isFirst={index === 0}
            isLast={index === possibleGhosts.length - 1}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  )
}
