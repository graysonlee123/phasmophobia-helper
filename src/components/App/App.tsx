import { ReactNode } from 'react'
import Navbar from '@components/Navbar'
import styles from './App.module.css'
import { AnimatePresence } from 'framer-motion'

interface AppProps {
  children: ReactNode
}

export default function App({ children }: AppProps) {
  return (
    <div className={styles.grid}>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        {children}
      </AnimatePresence>
    </div>
  )
}
