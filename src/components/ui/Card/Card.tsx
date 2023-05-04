import { ComponentPropsWithoutRef, ReactNode } from 'react'
import styles from './Card.module.css'
import cn from 'classnames'

type CardProps = {
  maxWidth?: 'sm' | 'md' | 'lg'
  sticky?: boolean
  children?: ReactNode
} & ComponentPropsWithoutRef<'div'>

export default function Card({
  className,
  maxWidth = 'lg',
  sticky = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn([styles.card, styles[maxWidth], sticky && styles.sticky, className])}
      {...props}
    >
      {children}
    </div>
  )
}
