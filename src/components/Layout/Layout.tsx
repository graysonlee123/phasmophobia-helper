import { ReactNode } from 'react'
import styles from './Layout.module.css'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: -220, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

interface LayoutProps {
  children?: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'spring' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
