import { ReactNode } from 'react'
import styles from './Tags.module.css'

type TagsProps = {
  children: ReactNode
}

export default function Tags({ children }: TagsProps) {
  return <div className={styles.tags}>{children}</div>
}
