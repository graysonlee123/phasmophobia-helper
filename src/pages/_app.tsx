import type { AppProps } from 'next/app'
import '@styles/globals.css'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
