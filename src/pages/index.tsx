import path from 'path'
import { promises as fs } from 'fs'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { GhostsContextProvider } from '@contexts/Ghosts'
import { EvidencesContextProvider } from '@contexts/Evidences'
import Game from '@components/Game'
import Layout from '@components/Layout'

export const getStaticProps = async () => {
  const dataDir = path.join(process.cwd(), 'data')

  return {
    props: {
      ghosts: JSON.parse(
        await fs.readFile(path.join(dataDir, `ghosts.json`), 'utf-8')
      ) as Ghost[],
      evidences: JSON.parse(
        await fs.readFile(path.join(dataDir, `evidences.json`), 'utf-8')
      ) as Evidence[],
    },
  }
}

const Home = ({
  ghosts,
  evidences,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      <GhostsContextProvider ghosts={ghosts}>
        <EvidencesContextProvider evidences={evidences}>
          <Layout>
            <Game />
          </Layout>
        </EvidencesContextProvider>
      </GhostsContextProvider>
    </>
  )
}

export default Home
