import { ReactNode } from 'react'
import styles from './Button.module.css'
import cn from 'classnames'
import { motion } from 'framer-motion'

interface ButtonProps {
  variant?: 'contained' | 'outlined'
  children?: ReactNode
  className?: string
}

export default function Button({
  variant = 'contained',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
      className={cn([styles.base, styles[variant], className])}
    >
      {children}
    </motion.button>
  )
}
