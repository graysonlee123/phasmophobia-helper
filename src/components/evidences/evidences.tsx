import Evidence from '@components/evidence'
import { evidences } from '@data/evidences'
import cn from 'classnames'
import styles from './evidences.module.css'

interface EvidencesProps {
  checkedEvidences: EvidenceSlug[]
  setCheckedEvidences: (checkedEvidences: EvidenceSlug[]) => void
  disabledEvidences: EvidenceSlug[]
  setDisabledEvidences: (disabledEvidences: EvidenceSlug[]) => void
  setMinimizedGhosts: (minimizedGhosts: GhostSlug[]) => void
}

export default function Evidences({
  checkedEvidences,
  setCheckedEvidences,
  disabledEvidences,
  setDisabledEvidences,
  setMinimizedGhosts,
}: EvidencesProps) {
  /**
   * Resets the state of the application.
   */
  function reset() {
    setCheckedEvidences([])
    setDisabledEvidences([])
    setMinimizedGhosts([])
  }

  return (
    <section className={styles.section}>
      {evidences.map(({ slug }) => (
        <Evidence
          checkedEvidences={checkedEvidences}
          setCheckedEvidences={setCheckedEvidences}
          disabledEvidences={disabledEvidences}
          setDisabledEvidences={setDisabledEvidences}
          slug={slug}
          key={slug}
        />
      ))}
      <p className={styles.instruction}>
        As you update your findings, evidence that is not possible will be
        locked, and invalid ghosts will be hidden.{' '}
        <button className={cn(['button-reset', styles.reset])} onClick={reset}>
          (reset)
        </button>
      </p>
    </section>
  )
}
