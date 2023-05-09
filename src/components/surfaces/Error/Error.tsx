import Logo from '@components/brand/Logo'
import Button from '@components/inputs/Button'
import styles from './Error.module.css'

export default function Error() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <Logo width={200} height={200} className={styles.icon} />
        <div className={styles.text}>
          <h1 className={styles.header}>Not Found</h1>
          <p className={styles.subheader}>404</p>
          <div className={styles.actions}>
            <Button href="/">Back to Home</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
