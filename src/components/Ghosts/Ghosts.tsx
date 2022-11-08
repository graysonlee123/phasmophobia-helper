import Ghost from '@components/Ghost'
import Grow from '@components/Grow/Grow'
import styles from './Ghosts.module.css'
import { TransitionGroup } from 'react-transition-group'

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
        <TransitionGroup>
          {possibleGhosts.map((ghost) => (
            <Grow timeout={300} mountOnEnter key={ghost.slug}>
              <Ghost
                ghost={ghost}
                evidences={evidences}
                minimizedGhosts={minimizedGhosts}
                setMinimizedGhosts={setMinimizedGhosts}
              />
            </Grow>
          ))}
        </TransitionGroup>
      )}
    </section>
  )
}
