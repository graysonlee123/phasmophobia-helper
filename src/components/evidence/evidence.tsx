import { useEffect, useState } from 'react'
import Checkboxes from '@components/checkbox'
import cn from 'classnames'
import styles from './index.module.css'
import { getEvidenceData } from '@lib/data'

interface EvidenceProps {
  checkedEvidences: EvidenceSlug[]
  setCheckedEvidences: (checkedEvidences: EvidenceSlug[]) => void
  disabledEvidences: EvidenceSlug[]
  setDisabledEvidences: (disabledEvidences: EvidenceSlug[]) => void
  impossibleEvidences: EvidenceSlug[]
  slug: EvidenceSlug
}

export default function Evidence({
  checkedEvidences,
  setCheckedEvidences,
  disabledEvidences,
  setDisabledEvidences,
  impossibleEvidences,
  slug,
}: EvidenceProps) {
  const [checked, setChecked] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  const [locked, setLocked] = useState<boolean>(false)

  const { label } = getEvidenceData(slug)

  useEffect(
    function () {
      /**
       * Disable the evidence if 3 evidences have been selected and
       * it isn't one of them, or if it's listed as an impossible evidence.
       *
       * Otherwise, unlock it.
       */
      if (
        (checkedEvidences.length >= 3 && checkedEvidences.indexOf(slug) < 0) ||
        impossibleEvidences.indexOf(slug) > -1
      ) {
        setLocked(true)
        return
      }

      setLocked(false)
    },
    [checkedEvidences, impossibleEvidences, slug]
  )

  function handleClick() {
    if (checked) {
      setCheckedEvidences(
        checkedEvidences.filter((evidence) => evidence !== slug)
      )
      setDisabledEvidences([...disabledEvidences, slug])
      setChecked(false)
      setDisabled(true)
    } else if (disabled) {
      setDisabledEvidences(
        disabledEvidences.filter((evidence) => evidence !== slug)
      )
      setDisabled(false)
    } else {
      setCheckedEvidences([...checkedEvidences, slug])
      setChecked(true)
    }
  }

  function getCheckboxState(): CheckboxState {
    if (locked) return 'locked'
    else if (checked) return 'checked'
    else if (disabled) return 'disabled'
    else return 'neutral'
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
        <Checkboxes state={getCheckboxState()} />
        <span className={styles.label}>{label}</span>
      </button>
    </span>
  )
}
