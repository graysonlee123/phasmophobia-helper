import { useRef } from 'react'
import { getEvidenceData, getPossibleEvidences } from '@lib/evidences'
import { arrayAddUnique, arrayContains, arrayRemoveAll } from '@lib/arrays'
import { sendGtagEvent } from '@lib/analytics'
import { ANALYTICS_DEBOUNCE, MAX_EVIDENCE } from '@lib/constants'
import Checkbox from '@components/Checkbox'
import styles from './Evidence.module.css'
import cn from 'classnames'

interface EvidenceProps {
  checkedEvidences: EvidenceState
  setCheckedEvidences: SetEvidenceState
  disabledEvidences: EvidenceState
  setDisabledEvidences: SetEvidenceState
  slug: EvidenceSlug
}

export default function Evidence({
  checkedEvidences,
  setCheckedEvidences,
  disabledEvidences,
  setDisabledEvidences,
  slug,
}: EvidenceProps) {
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
   * Determines if the evidence should appear as locked.
   *
   * @returns True if the evidence is locked, false otherwise.
   */
  function isLocked() {
    const possibleEvidences = getPossibleEvidences(checkedEvidences)

    return (
      (checkedEvidences.length >= MAX_EVIDENCE &&
        !arrayContains(slug, checkedEvidences)) ||
      !arrayContains(slug, possibleEvidences)
    )
  }

  /**
   * Handles the clicking through the three states.
   */
  const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null)
  function handleClick() {
    if (timeoutRef.current) clearInterval(timeoutRef.current)

    if (checked) {
      /** Move to disabled. */
      setCheckedEvidences(
        arrayRemoveAll(slug, checkedEvidences) as EvidenceState
      )

      setDisabledEvidences(
        arrayAddUnique(slug, disabledEvidences) as EvidenceState
      )

      timeoutRef.current = setTimeout(() => {
        sendGtagEvent({
          name: 'evidence_disabled',
          params: {
            evidence_slug: slug,
          },
        })
      }, ANALYTICS_DEBOUNCE)
    } else if (disabled) {
      /** Move to neutral. */
      setDisabledEvidences(
        arrayRemoveAll(slug, disabledEvidences) as EvidenceState
      )

      timeoutRef.current = setTimeout(() => {
        sendGtagEvent({
          name: 'evidence_unchecked',
          params: {
            evidence_slug: slug,
          },
        })
      }, ANALYTICS_DEBOUNCE)
    } else {
      /** Move to checked. */
      setCheckedEvidences(
        arrayAddUnique(slug, checkedEvidences) as EvidenceState
      )

      timeoutRef.current = setTimeout(() => {
        sendGtagEvent({
          name: 'evidence_checked',
          params: {
            evidence_slug: slug,
          },
        })
      }, ANALYTICS_DEBOUNCE)
    }
  }

  const locked = isLocked()
  const checked = arrayContains(slug, checkedEvidences)
  const disabled = arrayContains(slug, disabledEvidences)

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
        <span className={styles.label}>{getEvidenceData(slug).label}</span>
      </button>
    </span>
  )
}
