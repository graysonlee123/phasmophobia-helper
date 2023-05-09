import '@assets/globals.css'
import Navbar from '@components/layout/Navbar'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { Provider as WrapBalancerProvider } from 'react-wrap-balancer'
import AlertProvider from 'src/context/alert'
import PreferencesContextProvider from 'src/context/preferences'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PreferencesContextProvider>
        <WrapBalancerProvider>
          <AlertProvider />
          <GoogleAnalytics trackPageViews />
          <Navbar />
          <Component {...pageProps} />
        </WrapBalancerProvider>
      </PreferencesContextProvider>
    </>
  )
}
