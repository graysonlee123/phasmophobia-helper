import { ReactNode } from 'react'
import styles from './Subtitle.module.css'

interface SubtitleProps {
  children: ReactNode
}

export default function Subtitle({ children }: SubtitleProps) {
  return <h2 className={styles.subtitle}>{children}</h2>
}
