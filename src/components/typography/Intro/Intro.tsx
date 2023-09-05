import Hint from '@components/typography/Hint'
import Header from '@components/typography/Header'
import cn from 'classnames'
import { ReactNode } from 'react'
import styles from './Intro.module.css'

type IntroProps = {
  title: ReactNode
  subtitle?: ReactNode
  after?: ReactNode
  noGap?: boolean
  gutterBottom?: boolean
}

export default function Intro({
  title,
  subtitle,
  after,
  noGap = false,
  gutterBottom = false,
}: IntroProps) {
  return (
    <div
      className={cn([
        styles.block,
        subtitle && styles.hasSubtitle,
        after && styles.hasAfter,
        noGap && styles.noGap,
        gutterBottom && styles.gutterBottom,
      ])}
    >
      {title}
      {subtitle}
      {after && <div className={styles.after}>{after}</div>}
    </div>
  )
}

Intro.Title = Header
Intro.Subtitle = Hint
