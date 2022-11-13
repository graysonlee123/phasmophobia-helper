import Head from 'next/head'

interface DocumentHeadProps {
  pageTitle?: string
}

export default function DocumentHead({ pageTitle }: DocumentHeadProps) {
  return (
    <Head>
      <title>{`Phasmophobia Helper${pageTitle ? ` | ${pageTitle}` : ''}`}</title>
      <meta
        name="description"
        content="A web app that helps you narrow down your ghost type in the video game Phasmophobia."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Grayson Gantek" />
      <meta name="color-scheme" content="dark" />
    </Head>
  )
}
