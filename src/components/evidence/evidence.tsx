import { useEffect, useState } from 'react'
import Checkboxes from '@components/checkbox'
import { getEvidenceData } from '@lib/evidences'
import { arrayAddUnique, arrayContains, arrayRemoveAll } from '@lib/arrays'
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
   * Update the local component state when the
   * external state is modified.
   */
  const [checked, setChecked] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  useEffect(() => {
    setChecked(arrayContains(slug, checkedEvidences))
    setDisabled(arrayContains(slug, disabledEvidences))
  }, [checkedEvidences, disabledEvidences, slug])

  /**
   * Lock the evidence if 3 evidences have been selected and
   * `slug` isn't one of them, or if it's not a possible evidence.
   */
  const [locked, setLocked] = useState<boolean>(false)
  useEffect(() => {
    if (
      (checkedEvidences.length >= 3 &&
        !arrayContains(slug, checkedEvidences)) ||
      !arrayContains(slug, possibleEvidences)
    ) {
      setLocked(true)
      return
    }

    setLocked(false)
  }, [checkedEvidences, possibleEvidences, slug])

  /**
   * Controls the checkbox state.
   */
  const [checkboxState, setCheckboxState] = useState<CheckboxState>('neutral')
  useEffect(() => {
    if (locked) setCheckboxState('locked')
    else if (checked) setCheckboxState('checked')
    else if (disabled) setCheckboxState('disabled')
    else setCheckboxState('neutral')
  }, [locked, checked, disabled])

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
    } else if (disabled) {
      /** Move to neutral. */
      setDisabledEvidences(
        arrayRemoveAll(slug, disabledEvidences) as EvidenceSlug[]
      )
    } else {
      /** Move to checked. */
      setCheckedEvidences(
        arrayAddUnique(slug, checkedEvidences) as EvidenceSlug[]
      )
    }
  }

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
        <Checkboxes state={checkboxState} />
        <span className={styles.label}>{getEvidenceData(slug).label}</span>
      </button>
    </span>
  )
}
