import Intro from '@components/Intro'
import Logo from '@components/Logo'
import styles from './Identity.module.css'

export default function Identity() {
  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Intro
        primary="Phasmophobia Helper"
        secondary="Your Phasmophobia Companion"
        nogap
        style={{ marginBottom: 0 }}
      />
    </div>
  )
}
