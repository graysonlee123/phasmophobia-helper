import '@assets/globals.css'
import Navbar from '@components/layout/Navbar'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import PreferencesContextProvider from 'src/context/preferences'
import { Provider as WrapBalancerProvider } from 'react-wrap-balancer'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PreferencesContextProvider>
        <WrapBalancerProvider>
          <GoogleAnalytics trackPageViews />
          <Navbar />
          <Component {...pageProps} />
        </WrapBalancerProvider>
      </PreferencesContextProvider>
    </>
  )
}
