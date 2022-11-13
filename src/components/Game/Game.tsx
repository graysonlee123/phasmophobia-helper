import Evidences from '@components/Evidences'
import Ghosts from '@components/Ghosts'
import styles from './Game.module.css'

const Game = () => {
  return (
    <main className={styles.main}>
      <Evidences />
      <Ghosts />
    </main>
  )
}

export default Game
