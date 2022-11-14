import { ReactNode } from 'react'
import styles from './CardLayout.module.css'

interface CardGridProps {
  children?: ReactNode
}

export default function CardGrid({ children }: CardGridProps) {
  return <div className={styles.layout}>{children}</div>
}
