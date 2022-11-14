import {
  useCheckedEvidences,
  useDisabledEvidences,
  useSetCheckedEvidences,
  useSetDisabledEvidences,
} from '@store/index'
import usePossibleEvidences from '@hooks/usePossibleEvidences'
import useAnalyticsDebounce from '@hooks/useAnalyticsDebounce'
import { arrayAddUnique, arrayContains, arrayRemoveAll } from '@lib/arrays'
import { MAX_EVIDENCE } from '@lib/constants'
import Checkbox from '@components/Checkbox'
import styles from './Evidence.module.css'
import cn from 'classnames'
import Hint from '@components/Hint'

interface EvidenceProps {
  evidence: Evidence
}

export default function Evidence({ evidence }: EvidenceProps) {
  const checkedEvidences = useCheckedEvidences()
  const setCheckedEvidences = useSetCheckedEvidences()
  const disabledEvidences = useDisabledEvidences()
  const setDisabledEvidences = useSetDisabledEvidences()
  const possibleEvidences = usePossibleEvidences()

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
      setCheckedEvidences(arrayRemoveAll(evidence.id, checkedEvidences) as EvidenceIds)

      setDisabledEvidences(arrayAddUnique(evidence.id, disabledEvidences) as EvidenceIds)

      eventDebounce({
        name: 'evidence_disabled',
        params: {
          evidence_slug: evidence.id,
        },
      })
    } else if (disabled) {
      /** Move to neutral. */
      setDisabledEvidences(arrayRemoveAll(evidence.id, disabledEvidences) as EvidenceIds)

      eventDebounce({
        name: 'evidence_unchecked',
        params: {
          evidence_slug: evidence.id,
        },
      })
    } else {
      /** Move to checked. */
      setCheckedEvidences(arrayAddUnique(evidence.id, checkedEvidences) as EvidenceIds)

      eventDebounce({
        name: 'evidence_checked',
        params: {
          evidence_slug: evidence.id,
        },
      })
    }
  }

  const locked =
    (checkedEvidences.length >= MAX_EVIDENCE && !arrayContains(evidence.id, checkedEvidences)) ||
    !arrayContains(evidence.id, possibleEvidences)
  const checked = arrayContains(evidence.id, checkedEvidences)
  const disabled = arrayContains(evidence.id, disabledEvidences)

  return (
    <span>
      <button
        className={cn(['button-reset', styles.button, locked ? styles.locked : null])}
        onClick={handleClick}
        disabled={locked}
      >
        <Checkbox state={getCheckboxState()} />
        <div className={styles.text}>
          <span className={styles.label}>{evidence.name}</span>
          {evidence.tip && <Hint>{evidence.tip}</Hint>}
        </div>
      </button>
    </span>
  )
}
