import Hint from '@components/typography/Hint'
import Header from '@components/typography/Header'
import cn from 'classnames'
import { ReactNode } from 'react'
import styles from './Intro.module.css'

type IntroProps = {
  title: ReactNode
  subtitle?: ReactNode
  after?: ReactNode
  nogap?: boolean
  gutterBottom?: boolean
}

export default function Intro({
  title,
  subtitle,
  after,
  nogap = false,
  gutterBottom = false,
}: IntroProps) {
  return (
    <div
      className={cn([
        styles.block,
        subtitle && styles.hasSubtitle,
        after && styles.hasAfter,
        nogap && styles.nogap,
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
