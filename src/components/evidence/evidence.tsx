import { useEffect, useState } from 'react'
import Checkboxes from '@components/checkbox'
import cn from 'classnames'
import styles from './index.module.css'
import { getEvidenceData } from '@lib/data'

interface EvidenceProps {
  addCheckedEvidences: (evidences: EvidenceSlug[]) => void
  removeCheckedEvidence: (evidence: EvidenceSlug) => void
  addDisabledEvidences: (evidences: EvidenceSlug[]) => void
  removeDisabledEvidence: (evidence: EvidenceSlug) => void
  checkedEvidencesHasRoom: () => boolean
  evidenceIsChecked: (evidence: EvidenceSlug) => boolean
  evidenceIsDisabled: (evidence: EvidenceSlug) => boolean
  evidenceIsPossible: (evidence: EvidenceSlug) => boolean
  slug: EvidenceSlug
}

export default function Evidence({
  addCheckedEvidences,
  removeCheckedEvidence,
  addDisabledEvidences,
  removeDisabledEvidence,
  checkedEvidencesHasRoom,
  evidenceIsChecked,
  evidenceIsDisabled,
  evidenceIsPossible,
  slug,
}: EvidenceProps) {
  const [checked, setChecked] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  const [locked, setLocked] = useState<boolean>(false)
  const [checkboxState, setCheckboxState] = useState<CheckboxState>('neutral')

  /**
   * Update the local component state when the
   * external state is modified.
   */
  useEffect(
    function () {
      evidenceIsChecked(slug) ? setChecked(true) : setChecked(false)
      evidenceIsDisabled(slug) ? setDisabled(true) : setDisabled(false)
    },
    [evidenceIsChecked, evidenceIsDisabled, slug]
  )

  /**
   * Controls setting the checkbox state.
   */
  useEffect(
    function () {
      if (locked) setCheckboxState('locked')
      else if (checked) setCheckboxState('checked')
      else if (disabled) setCheckboxState('disabled')
      else setCheckboxState('neutral')
    },
    [locked, checked, disabled]
  )

  /**
   * Lock the evidence if 3 evidences have been selected or
   * or if it's not a possible evidence. Otherwise, unlock it.
   */
  useEffect(
    function () {
      if (!checkedEvidencesHasRoom() || !evidenceIsPossible(slug)) {
        setLocked(true)
        return
      }

      setLocked(false)
    },
    [checkedEvidencesHasRoom, evidenceIsPossible, slug]
  )

  /**
   * Handles the clicking through the three states.
   */
  function handleClick() {
    if (checked) {
      /** Move to disabled. */
      removeCheckedEvidence(slug)
      addDisabledEvidences([slug])
    } else if (disabled) {
      /** Move to neutral. */
      removeDisabledEvidence(slug)
    } else {
      /** Move to checked. */
      addCheckedEvidences([slug])
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
