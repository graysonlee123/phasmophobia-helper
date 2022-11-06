import cn from 'classnames'
import styles from './Sanity.module.css'

interface SanityProps {
  int?: number
}

export default function Sanity({ int }: SanityProps) {
  if (int === undefined) return null

  return (
    <span
      className={cn([styles.sanity, int >= 50 ? styles.red : styles.green])}
      title="Sanity Average to Hunt"
    >
      {int}
      <small>%</small>
    </span>
  )
}
