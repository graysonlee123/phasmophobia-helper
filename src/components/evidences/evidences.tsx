import Evidence from '@components/evidence'
import { evidences } from '@data/evidences'
import { ANALYTICS_DEBOUNCE } from '@lib/constants'
import { sendGtagEvent } from '@lib/analytics'
import cn from 'classnames'
import { useRef } from 'react'
import styles from './evidences.module.css'

interface EvidencesProps {
  checkedEvidences: EvidenceState
  setCheckedEvidences: SetEvidenceState
  disabledEvidences: EvidenceState
  setDisabledEvidences: SetEvidenceState
  setMinimizedGhosts: SetGhostState
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
  const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null)
  function reset() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    setCheckedEvidences([])
    setDisabledEvidences([])
    setMinimizedGhosts([])

    timeoutRef.current = setTimeout(() => {
      sendGtagEvent({
        name: 'game_reset',
        params: {
          evidences_checked: checkedEvidences.length,
          evidences_disabled: disabledEvidences.length,
        },
      })
    }, ANALYTICS_DEBOUNCE)
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
