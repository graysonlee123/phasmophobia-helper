import styles from './Help.module.css'
import cn from 'classnames'

interface HelpProps {
  reset: () => void
}

export default function Help({ reset }: HelpProps) {
  return (
    <div className={styles.instruction}>
      <p>
        <button className={cn(['button-reset', styles.reset])} onClick={reset}>
          (reset all)
        </button>
      </p>
      <p>
        As you update your findings, evidence that is not possible will be
        locked, and invalid ghosts will be hidden.
      </p>
      <p>
        Evidences tags marked with a dot are guaranteed on Nightmare difficulty.
      </p>
    </div>
  )
}
