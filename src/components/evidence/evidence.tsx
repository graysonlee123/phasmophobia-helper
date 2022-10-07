import Checkbox from '@components/checkbox'
import { getEvidenceData } from '@lib/evidences'
import { arrayAddUnique, arrayContains, arrayRemoveAll } from '@lib/arrays'
import { sendGtagEvent } from '@lib/analytics'
import cn from 'classnames'
import styles from './evidence.module.css'

interface EvidenceProps {
  checkedEvidences: EvidenceSlug[]
  setCheckedEvidences: (checkedEvidences: EvidenceSlug[]) => void
  disabledEvidences: EvidenceSlug[]
  setDisabledEvidences: (disabledEvidences: EvidenceSlug[]) => void
  possibleEvidences: EvidenceSlug[]
  slug: EvidenceSlug
}

export default function Evidence({
  checkedEvidences,
  setCheckedEvidences,
  disabledEvidences,
  setDisabledEvidences,
  possibleEvidences,
  slug,
}: EvidenceProps) {
  /**
   * Determines a state for the Checkbox component,
   * based on the state of the evidence it is in.
   *
   * @returns The determined state for a Checkbox component.
   */
  function determineCheckboxState(): CheckboxState {
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
    return (
      (checkedEvidences.length >= 3 &&
        !arrayContains(slug, checkedEvidences)) ||
      !arrayContains(slug, possibleEvidences)
    )
  }

  /**
   * Handles the clicking through the three states.
   */
  function handleClick() {
    if (checked) {
      /** Move to disabled. */
      setCheckedEvidences(
        arrayRemoveAll(slug, checkedEvidences) as EvidenceSlug[]
      )

      setDisabledEvidences(
        arrayAddUnique(slug, disabledEvidences) as EvidenceSlug[]
      )

      sendGtagEvent({
        name: 'evidence_disabled',
        params: {
          evidence_slug: slug,
        },
      })
    } else if (disabled) {
      /** Move to neutral. */
      setDisabledEvidences(
        arrayRemoveAll(slug, disabledEvidences) as EvidenceSlug[]
      )

      sendGtagEvent({
        name: 'evidence_unchecked',
        params: {
          evidence_slug: slug,
        },
      })
    } else {
      /** Move to checked. */
      setCheckedEvidences(
        arrayAddUnique(slug, checkedEvidences) as EvidenceSlug[]
      )

      sendGtagEvent({
        name: 'evidence_checked',
        params: {
          evidence_slug: slug,
        },
      })
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
        <Checkbox state={determineCheckboxState()} />
        <span className={styles.label}>{getEvidenceData(slug).label}</span>
      </button>
    </span>
  )
}
