import type { AppProps } from 'next/app'
import App from '@components/App'
import '@assets/globals.css'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <App>
        <Component {...pageProps} />
      </App>
    </>
  )
}
