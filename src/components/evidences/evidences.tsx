import Evidence from '@components/evidence'
import { evidences } from '@data/evidences'
import styles from './styles.module.css'

interface CheckboxesProps {
  checkedEvidences: string[]
  setCheckedEvidences: (checkedEvidences: string[]) => void
  disabledEvidences: string[]
  setDisabledEvidences: (disabledEvidences: string[]) => void
  impossibleEvidences: string[]
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
      {evidences.map(({ slug, name }) => (
        <Evidence
          key={slug}
          checkedEvidences={checkedEvidences}
          setCheckedEvidences={setCheckedEvidences}
          disabledEvidences={disabledEvidences}
          setDisabledEvidences={setDisabledEvidences}
          impossibleEvidences={impossibleEvidences}
          slug={slug}
          name={name}
        />
      ))}
      <p className={styles.instruction}>
        As you update your findings, evidence that is not possible will be
        locked, and invalid ghosts will be hidden.
      </p>
    </section>
  )
}
