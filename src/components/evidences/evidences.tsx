import Evidence from '@components/evidence'
import { evidences } from '@data/evidences'
import styles from './styles.module.css'

interface CheckboxesProps {
  checkedEvidences: EvidenceSlug[]
  setCheckedEvidences: (checkedEvidences: EvidenceSlug[]) => void
  disabledEvidences: EvidenceSlug[]
  setDisabledEvidences: (disabledEvidences: EvidenceSlug[]) => void
  impossibleEvidences: EvidenceSlug[]
}

export default function Checkboxes({
  checkedEvidences,
  setCheckedEvidences,
  disabledEvidences,
  setDisabledEvidences,
  impossibleEvidences,
}: CheckboxesProps) {
  return (
    <section className={styles.section}>
      {evidences.map(({ slug }) => (
        <Evidence
          key={slug}
          checkedEvidences={checkedEvidences}
          setCheckedEvidences={setCheckedEvidences}
          disabledEvidences={disabledEvidences}
          setDisabledEvidences={setDisabledEvidences}
          impossibleEvidences={impossibleEvidences}
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
