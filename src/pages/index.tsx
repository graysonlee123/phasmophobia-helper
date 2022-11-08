import Head from 'next/head'
import Layout from '@components/Layout'
import path from 'path'
import { promises as fs } from 'fs'

export async function getStaticProps() {
  const workDir = path.join(process.cwd(), 'src', 'data')
  const files = ['ghosts', 'evidences']
  const props = {}

  await Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(
        path.join(workDir, `${file}.json`),
        'utf-8'
      )
      props[file] = JSON.parse(content)
    })
  )

  return {
    props,
  }
}

interface HomeProps {
  ghosts: []
  evidences: []
}

export default function Home({ ghosts, evidences }: HomeProps) {
  console.log({ ghosts, evidences })

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
      <ul>
        {ghosts.map((ghost) => (
          <li key={ghost.slug}>{ghost.label}</li>
        ))}
      </ul>
      <hr />
      <ul>
        {evidences.map((evidence) => (
          <li key={evidence.slug}>{evidence.label}</li>
        ))}
      </ul>
    </>
  )
}
