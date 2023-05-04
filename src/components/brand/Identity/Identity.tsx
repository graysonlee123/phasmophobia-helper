import Logo from '@components/brand/Logo'
import Intro from '@components/typography/Intro'
import styles from './Identity.module.css'

export default function Identity() {
  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Intro
        title={<Intro.Title>Phasmophobia Helper</Intro.Title>}
        subtitle={<Intro.Subtitle>Your Phasmophobia Companion</Intro.Subtitle>}
        nogap
      />
    </div>
  )
}
