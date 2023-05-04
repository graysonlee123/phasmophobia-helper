import cn from 'classnames'
import styles from './Sanity.module.css'

type SanityProps = {
  int?: number
  gutterLeft?: boolean
}

export default function Sanity({ int, gutterLeft }: SanityProps) {
  if (int === undefined) return null

  return (
    <span
      className={cn([
        styles.sanity,
        int >= 50 ? styles.red : styles.green,
        gutterLeft && styles.gutterLeft,
      ])}
      title="Sanity Average to Hunt"
    >
      {int}
      <small>%</small>
    </span>
  )
}
