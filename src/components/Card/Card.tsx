import { ComponentPropsWithoutRef, ReactNode } from 'react'
import styles from './Card.module.css'
import cn from 'classnames'

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  width?: 'sm' | 'md'
  sticky?: boolean
  children?: ReactNode
}

export default function Card({
  width = 'md',
  sticky = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn([styles.card, styles[width], sticky && styles.sticky, className])}
      {...props}
    >
      {children}
    </div>
  )
}
