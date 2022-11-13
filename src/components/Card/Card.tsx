import { ComponentPropsWithoutRef, ReactNode } from 'react'
import styles from './Card.module.css'
import cn from 'classnames'

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
}

export default function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={cn([styles.card, className])} {...props}>
      {children}
    </div>
  )
}
