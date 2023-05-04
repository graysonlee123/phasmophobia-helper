import { ReactNode } from 'react'
import styles from './Hint.module.css'

type HintProps = {
  children: ReactNode
}

export default function Hint({ children }: HintProps) {
  return <p className={styles.hint}>{children}</p>
}
