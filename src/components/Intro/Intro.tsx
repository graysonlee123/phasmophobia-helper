import Hint from '@components/Hint'
import Subtitle from '@components/Subtitle'
import styles from './Intro.module.css'
import cn from 'classnames'
import { ComponentPropsWithoutRef } from 'react'

interface IntroProps extends ComponentPropsWithoutRef<'div'> {
  primary: string
  secondary?: string
  nogap?: boolean
}

export default function Intro({
  primary,
  secondary,
  nogap = false,
  className,
  ...props
}: IntroProps) {
  return (
    <div className={cn([styles.block, nogap && styles.nogap, className])} {...props}>
      <Subtitle>{primary}</Subtitle>
      {secondary && <Hint>{secondary}</Hint>}
    </div>
  )
}
