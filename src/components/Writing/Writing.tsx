import { ReactNode } from 'react'
import styles from './Writing.module.css'

interface WritingProps {
  children: ReactNode
}

export default function Writing({ children }: WritingProps) {
  return <div className={styles.writing}>{children}</div>
}
