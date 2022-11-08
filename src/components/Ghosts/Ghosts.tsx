import Ghost from '@components/Ghost'
import { Fragment } from 'react'
import styles from './Ghosts.module.css'

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
        <p>Sorry, no ghost types were found for those choices.</p>
      ) : (
        possibleGhosts.map((ghost) => (
          <Fragment key={ghost.slug}>
            <Ghost
              ghost={ghost}
              evidences={evidences}
              minimizedGhosts={minimizedGhosts}
              setMinimizedGhosts={setMinimizedGhosts}
            />
          </Fragment>
        ))
      )}
    </section>
  )
}
