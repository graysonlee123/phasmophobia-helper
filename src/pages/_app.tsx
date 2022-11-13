import type { AppProps } from 'next/app'
import '@styles/globals.css'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import Navbar from '@components/Navbar'
import { AnimatePresence } from 'framer-motion'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}
