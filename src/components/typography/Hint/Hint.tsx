import { ReactNode } from 'react'
import Balancer from 'react-wrap-balancer'
import styles from './Hint.module.css'

type HintProps = {
  children: ReactNode
}

export default function Hint({ children }: HintProps) {
  return (
    <p className={styles.hint}>
      <Balancer>{children}</Balancer>
    </p>
  )
}
