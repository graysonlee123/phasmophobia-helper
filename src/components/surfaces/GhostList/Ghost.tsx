import { useEliminatedGhosts } from '@store/index'
import arrayContains from '@utils/arrayContains'
import { motion } from 'framer-motion'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import styles from './Ghost.module.css'
import GhostContext from './GhostContext'
import GhostDescription from './GhostDescription'
import GhostEvidence from './GhostEvidence'
import GhostHeader from './GhostHeader'

type GhostProps = {
  ghost: Ghost
  header?: ReactNode
  description?: ReactNode
  evidence?: ReactNode
  isFirst?: boolean
  isLast?: boolean
} & ComponentPropsWithoutRef<'article'>

export default function Ghost({
  ghost,
  header,
  description,
  evidence,
  isFirst = false,
  isLast = false,
}: GhostProps) {
  const eliminatedGhosts = useEliminatedGhosts()
  const eliminated = arrayContains(ghost.id, eliminatedGhosts)

  return (
    <GhostContext.Provider value={{ ghost }}>
      <motion.article
        className={styles.article}
        initial={false}
        animate={{
          opacity: eliminated ? 0.6 : 1,
          gap: eliminated ? '0.25rem' : '0.75rem',
        }}
        style={{
          paddingTop: isFirst ? 0 : undefined,
          paddingBottom: isLast ? 0 : undefined,
        }}
      >
        {header}
        {description && (
          <motion.div
            className={styles.description}
            initial={false}
            animate={{
              height: eliminated ? 0 : 'auto',
            }}
          >
            {description}
          </motion.div>
        )}
        {evidence}
      </motion.article>
    </GhostContext.Provider>
  )
}

Ghost.Header = GhostHeader
Ghost.Evidence = GhostEvidence
Ghost.Description = GhostDescription
