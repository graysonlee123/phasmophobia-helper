import Layout from '@components/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Phasmophobia Helper</title>
        <meta
          name="description"
          content="A web app that helps you narrow down your ghost type in the video game Phasmophobia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Grayson Gantek" />
        <meta name="color-scheme" content="dark" />
      </Head>
      <Layout />
    </>
  )
}
