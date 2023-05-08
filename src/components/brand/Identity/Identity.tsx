import Logo from '@components/brand/Logo'
import Intro from '@components/typography/Intro'
import styles from './Identity.module.css'
import GhostReel from '@components/effects/GhostReel'

export default function Identity() {
  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Intro
        title={<Intro.Title>Phasmophobia Helper</Intro.Title>}
        subtitle={
          <Intro.Subtitle>
            <GhostReel />
          </Intro.Subtitle>
        }
        nogap
      />
    </div>
  )
}
