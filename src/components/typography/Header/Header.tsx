import { ReactNode } from 'react'
import styles from './Header.module.css'

type HeaderProps = {
  children: ReactNode
}

export default function Header({ children }: HeaderProps) {
  return <h2 className={styles.subtitle}>{children}</h2>
}
