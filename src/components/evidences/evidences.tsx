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
    <div className={styles.flex}>
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
    </div>
  )
}
