import Checkbox from '@components/Checkbox'
import { useSetShowConfetti, useShowConfetti } from '@store/index'
import styles from './Preferences.module.css'

export default function Preferences() {
  const showConfetti = useShowConfetti()
  const setShowConfetti = useSetShowConfetti()

  return (
    <div className={styles.layout}>
      <Checkbox
        state={showConfetti}
        onClick={() => setShowConfetti(!showConfetti)}
        primary="Confetti"
        secondary="Shows confetti when you discover your ghost type"
      />
      <Checkbox
        state={null}
        disabled
        primary="Nightmare difficulty"
        secondary="For when you're playing in Nightmare difficulty (coming soon)"
      />
    </div>
  )
}
