import Identity from '@components/Identity'
import NavigationLinks from '@components/NavigationLinks'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.bar}>
      <Identity />
      <NavigationLinks />
    </div>
  )
}