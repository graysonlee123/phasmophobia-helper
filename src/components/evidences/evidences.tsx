import Evidence from '@components/evidence'
import { evidences } from '@data/evidences'
import styles from './styles.module.css'

interface CheckboxesProps {
  checkedEvidences: string[]
  setCheckedEvidences: (checkedEvidences: string[]) => void
  disabledEvidences: string[]
  setDisabledEvidences: (disabledEvidences: string[]) => void
}

export default function Checkboxes({
  checkedEvidences,
  setCheckedEvidences,
  disabledEvidences,
  setDisabledEvidences,
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
          slug={slug}
          name={name}
        />
      ))}
    </div>
  )
}
