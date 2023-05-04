import cn from 'classnames'
import { motion } from 'framer-motion'
import { MouseEvent, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  variant?: 'contained' | 'outlined'
  children?: ReactNode
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function Button({
  variant = 'contained',
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn([styles.base, styles[variant], className])}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
