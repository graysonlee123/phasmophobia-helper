import ResetButton from '@components/ResetButton'
import styles from './Help.module.css'

export default function Help() {
  return (
    <div className={styles.instruction}>
      <p>
        <ResetButton />
      </p>
      <p>
        As you update your findings, evidence that is not possible will be locked, and invalid
        ghosts will be hidden.
      </p>
      <p>Evidences tags marked with a dot are guaranteed on Nightmare difficulty.</p>
    </div>
  )
}
