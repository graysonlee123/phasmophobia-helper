import Evidence from '@components/evidence'
import { evidences } from '@data/evidences'
import cn from 'classnames'
import styles from './styles.module.css'

interface CheckboxesProps {
  addCheckedEvidences: (evidences: EvidenceSlug[]) => void
  removeCheckedEvidence: (evidence: EvidenceSlug) => void
  addDisabledEvidences: (evidences: EvidenceSlug[]) => void
  removeDisabledEvidence: (evidence: EvidenceSlug) => void
  resetEvidences: () => void
  checkedEvidencesHasRoom: () => boolean
  evidenceIsChecked: (evidence: EvidenceSlug) => boolean
  evidenceIsDisabled: (evidence: EvidenceSlug) => boolean
  evidenceIsPossible: (evidence: EvidenceSlug) => boolean
}

export default function Checkboxes({
  addCheckedEvidences,
  removeCheckedEvidence,
  addDisabledEvidences,
  removeDisabledEvidence,
  resetEvidences,
  checkedEvidencesHasRoom,
  evidenceIsChecked,
  evidenceIsDisabled,
  evidenceIsPossible,
}: CheckboxesProps) {
  return (
    <section className={styles.section}>
      {evidences.map(({ slug }) => (
        <Evidence
          key={slug}
          addCheckedEvidences={addCheckedEvidences}
          removeCheckedEvidence={removeCheckedEvidence}
          addDisabledEvidences={addDisabledEvidences}
          removeDisabledEvidence={removeDisabledEvidence}
          checkedEvidencesHasRoom={checkedEvidencesHasRoom}
          evidenceIsChecked={evidenceIsChecked}
          evidenceIsDisabled={evidenceIsDisabled}
          evidenceIsPossible={evidenceIsPossible}
          slug={slug}
        />
      ))}
      <p className={styles.instruction}>
        As you update your findings, evidence that is not possible will be
        locked, and invalid ghosts will be hidden.{' '}
        <button
          className={cn(['button-reset', styles.reset])}
          onClick={resetEvidences}
        >
          (reset)
        </button>
      </p>
    </section>
  )
}
