import Evidences from '@components/Evidences'
import Ghosts from '@components/Ghosts'
import styles from './App.module.css'

const App = () => {
  return (
    <main className={styles.main}>
      <Evidences />
      <Ghosts />
    </main>
  )
}

export default App
