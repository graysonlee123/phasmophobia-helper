import Hint from '@components/Hint'
import Subtitle from '@components/Subtitle'
import styles from './Intro.module.css'
import cn from 'classnames'
import { ComponentPropsWithoutRef } from 'react'

interface IntroProps extends ComponentPropsWithoutRef<'div'> {
  primary: string
  secondary?: string
  nogap?: boolean
  margin?: boolean
}

export default function Intro({
  primary,
  secondary,
  nogap = false,
  margin = true,
  className,
  ...props
}: IntroProps) {
  return (
    <div
      className={cn([styles.block, nogap && styles.nogap, margin && styles.margin, className])}
      {...props}
    >
      <Subtitle>{primary}</Subtitle>
      {secondary && <Hint>{secondary}</Hint>}
    </div>
  )
}
