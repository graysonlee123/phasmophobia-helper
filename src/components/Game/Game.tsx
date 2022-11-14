import Card from '@components/Card'
import Divider from '@components/Divider'
import Evidences from '@components/Evidences'
import Ghosts from '@components/Ghosts'
import Intro from '@components/Intro'
import styles from './Game.module.css'

const Game = () => {
  return (
    <main className={styles.main}>
      <Card className={styles.evidence}>
        <Intro
          primary="Evidence selector"
          secondary="As you play through a contract, mark the evidence you find (or rule out) here."
          style={{ marginBottom: '2rem' }}
        />
        <Divider />
        <Evidences />
        <Divider />
        <Intro
          primary="Most likely"
          secondary="Based on your selection, we can show you what evidence is most likely left to be found."
        />
      </Card>
      <Card className={styles.ghosts}>
        <Intro
          primary="Possible ghosts"
          secondary="All of the possible ghost types you could be encountering, based on the evidence you've selected to the left. You can elimate ghost types as well."
          style={{ marginBottom: 0 }}
        />
        <Divider />
        <Ghosts />
      </Card>
    </main>
  )
}

export default Game
