import { ReactNode, useState } from 'react'
import styles from './PageTransition.module.css'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: -220, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

interface PageTransitionProps {
  children?: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [contain, setContain] = useState(false)

  return (
    <div className={contain ? styles.contain : undefined}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'spring' }}
        onAnimationStart={() => setContain(true)}
        onAnimationComplete={() => setContain(false)}
      >
        {children}
      </motion.div>
    </div>
  )
}
