import { ReactNode } from 'react'
import Navbar from '@components/Navbar'
import { AnimatePresence } from 'framer-motion'

interface AppProps {
  children: ReactNode
}

export default function App({ children }: AppProps) {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        {children}
      </AnimatePresence>
    </>
  )
}
