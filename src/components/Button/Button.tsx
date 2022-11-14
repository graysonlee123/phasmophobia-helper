import { ComponentPropsWithoutRef } from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'contained' | 'outlined'
}

export default function Button({
  variant = 'contained',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={cn([styles.base, styles[variant], className])}>
      {children}
    </button>
  )
}
