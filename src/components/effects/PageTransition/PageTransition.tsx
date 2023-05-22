import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import styles from './PageTransition.module.css'

const variants = {
  hidden: { opacity: 0, x: -220, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const reducedMotionVariants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
}

type PageTransitionProps = {
  children?: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [contain, setContain] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className={contain ? styles.contain : undefined}>
      <motion.div
        variants={prefersReducedMotion ? reducedMotionVariants : variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.3 }}
        onAnimationStart={() => setContain(true)}
        onAnimationComplete={() => setContain(false)}
      >
        {children}
      </motion.div>
    </div>
  )
}
