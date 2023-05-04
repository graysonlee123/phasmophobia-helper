import { ReactNode } from 'react'
import styles from './Header.module.css'

type SubtitleProps = {
  children: ReactNode
}

export default function Subtitle({ children }: SubtitleProps) {
  return <h2 className={styles.subtitle}>{children}</h2>
}
