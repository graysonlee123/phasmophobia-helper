import '@assets/globals.css'
import Navbar from '@components/layout/Navbar'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import PreferencesContextProvider from 'src/context/preferences'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PreferencesContextProvider>
        <GoogleAnalytics trackPageViews />
        <Navbar />
        <Component {...pageProps} />
      </PreferencesContextProvider>
    </>
  )
}
