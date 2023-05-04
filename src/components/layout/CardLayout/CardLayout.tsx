import { ReactNode } from 'react'
import styles from './CardLayout.module.css'

type CardLayoutProps = {
  children?: ReactNode
}

export default function CardLayout({ children }: CardLayoutProps) {
  return <div className={styles.layout}>{children}</div>
}
