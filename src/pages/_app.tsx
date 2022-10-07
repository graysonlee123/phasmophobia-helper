import type { AppProps } from 'next/app'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import '@styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
