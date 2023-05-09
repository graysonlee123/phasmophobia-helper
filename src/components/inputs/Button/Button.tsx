import cn from 'classnames'
import { motion } from 'framer-motion'
import { MouseEvent, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  variant?: 'contained' | 'outlined'
  href?: string
  rel?: string
  target?: string
  children?: ReactNode
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function Button({
  variant = 'contained',
  href,
  rel,
  target,
  children,
  className,
  onClick,
}: ButtonProps) {
  return href ? (
    <motion.a
      href={href}
      rel={rel}
      target={target}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn([styles.base, styles[variant], styles.anchor, className])}
    >
      {children}
    </motion.a>
  ) : (
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
