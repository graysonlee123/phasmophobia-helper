import { arrayAddUnique, arrayContains, arrayRemoveAll } from '@lib/arrays'
import { MAX_EVIDENCE } from '@lib/constants'
import Checkbox from '@components/Checkbox'
import styles from './Evidence.module.css'
import cn from 'classnames'
import usePossibleEvidences from '@hooks/usePossibleEvidences'
import useAnalyticsDebounce from '@hooks/useAnalyticsDebounce'

interface EvidenceProps {
  evidence: Evidence
  ghosts: Ghost[]
  evidences: Evidence[]
  checkedEvidences: EvidenceState
  setCheckedEvidences: SetEvidenceState
  disabledEvidences: EvidenceState
  setDisabledEvidences: SetEvidenceState
}

export default function Evidence({
  evidence,
  ghosts,
  evidences,
  checkedEvidences,
  setCheckedEvidences,
  disabledEvidences,
  setDisabledEvidences,
}: EvidenceProps) {
  /**
   * Get the currently possible evidences.
   */
  const possibleEvidences = usePossibleEvidences(
    ghosts,
    evidences,
    checkedEvidences
  )

  /**
   * Determines a state for the Checkbox component,
   * based on the state of the evidence.
   *
   * @returns The determined state for a Checkbox component.
   */
  function getCheckboxState(): CheckboxState {
    if (locked) return 'locked'
    else if (checked) return 'checked'
    else if (disabled) return 'disabled'
    else return 'neutral'
  }

  /**
   * Handles the clicking through the three states.
   */
  const eventDebounce = useAnalyticsDebounce()
  function handleClick() {
    if (checked) {
      /** Move to disabled. */
      setCheckedEvidences(
        arrayRemoveAll(evidence.slug, checkedEvidences) as EvidenceState
      )

      setDisabledEvidences(
        arrayAddUnique(evidence.slug, disabledEvidences) as EvidenceState
      )

      eventDebounce({
        name: 'evidence_disabled',
        params: {
          evidence_slug: evidence.slug,
        },
      })
    } else if (disabled) {
      /** Move to neutral. */
      setDisabledEvidences(
        arrayRemoveAll(evidence.slug, disabledEvidences) as EvidenceState
      )

      eventDebounce({
        name: 'evidence_unchecked',
        params: {
          evidence_slug: evidence.slug,
        },
      })
    } else {
      /** Move to checked. */
      setCheckedEvidences(
        arrayAddUnique(evidence.slug, checkedEvidences) as EvidenceState
      )

      eventDebounce({
        name: 'evidence_checked',
        params: {
          evidence_slug: evidence.slug,
        },
      })
    }
  }

  const locked =
    (checkedEvidences.length >= MAX_EVIDENCE &&
      !arrayContains(evidence.slug, checkedEvidences)) ||
    !arrayContains(evidence.slug, possibleEvidences)
  const checked = arrayContains(evidence.slug, checkedEvidences)
  const disabled = arrayContains(evidence.slug, disabledEvidences)

  return (
    <span>
      <button
        className={cn([
          'button-reset',
          styles.button,
          locked ? styles.locked : null,
        ])}
        onClick={handleClick}
        disabled={locked}
      >
        <Checkbox state={getCheckboxState()} />
        <span className={styles.label}>{evidence.label}</span>
      </button>
    </span>
  )
}
