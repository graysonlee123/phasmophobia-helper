import { useRef } from 'react'
import Evidence from '@components/Evidence'
import { evidences } from '@data/evidences'
import { ANALYTICS_DEBOUNCE } from '@lib/constants'
import { sendGtagEvent } from '@lib/analytics'
import styles from './Evidences.module.css'
import cn from 'classnames'

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
      <div className={styles.instruction}>
        <p>
          <button
            className={cn(['button-reset', styles.reset])}
            onClick={reset}
          >
            (reset all)
          </button>
        </p>
        <p>
          As you update your findings, evidence that is not possible will be
          locked, and invalid ghosts will be hidden.
        </p>
        <p>
          Evidences tags marked with a dot are guaranteed on Nightmare
          difficulty.
        </p>
      </div>
    </section>
  )
}
