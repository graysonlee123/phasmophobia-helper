import usePreferences from '@hooks/usePreferences'
import useWinner from '@hooks/useWinner'
import ReactConfetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import styles from './Confetti.module.css'

export default function Confetti() {
  const winner = useWinner()
  const { width, height } = useWindowSize()
  const { preferences } = usePreferences()

  if (!winner || preferences.confetti === false) return null

  return (
    <div className={styles.wrapper}>
      <ReactConfetti
        width={width}
        height={height}
        numberOfPieces={400}
        gravity={0.2}
        initialVelocityY={5}
        recycle={false}
        className={styles.canvas}
      />
    </div>
  )
}
