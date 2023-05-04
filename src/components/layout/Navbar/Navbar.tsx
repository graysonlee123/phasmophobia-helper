import Identity from '@components/brand/Identity'
import styles from './Navbar.module.css'
import NavigationLinks from './NavbarLinks'
import Button from '@components/inputs/Button'
import useNewContract from '@hooks/useNewContract'

export default function Navbar() {
  const newContract = useNewContract()

  return (
    <div className={styles.bar}>
      <Identity />
      <NavigationLinks />
      <div className={styles.button}>
        <Button variant="contained" onClick={newContract}>
          New contract
        </Button>
      </div>
    </div>
  )
}
