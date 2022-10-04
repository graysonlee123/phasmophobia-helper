import Checkbox from '@components/checkbox'
import { evidences } from '@data/evidences'
import styles from './styles.module.css'

interface CheckboxesProps {
  checkedEvidences: string[]
  setCheckedEvidences: (checkedEvidences: string[]) => void
}

export default function Checkboxes({
  checkedEvidences,
  setCheckedEvidences,
}: CheckboxesProps) {
  return (
    <div className={styles.flex}>
      {evidences.map(({ slug, name }) => (
        <Checkbox
          key={slug}
          checkedEvidences={checkedEvidences}
          setCheckedEvidences={setCheckedEvidences}
          slug={slug}
          name={name}
        />
      ))}
    </div>
  )
}
