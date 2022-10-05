import Evidence from '@components/evidence'
import { evidences } from '@data/evidences'
import styles from './styles.module.css'

interface CheckboxesProps {
  addCheckedEvidences: (evidences: EvidenceSlug[]) => void
  removeCheckedEvidence: (evidence: EvidenceSlug) => void
  addDisabledEvidences: (evidences: EvidenceSlug[]) => void
  removeDisabledEvidence: (evidence: EvidenceSlug) => void
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
        locked, and invalid ghosts will be hidden.
      </p>
    </section>
  )
}
