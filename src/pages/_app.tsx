import '@assets/globals.css'
import Navbar from '@components/layout/Navbar'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
