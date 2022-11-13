import path from 'path'
import { promises as fs } from 'fs'
import { InferGetStaticPropsType } from 'next'
import { GhostsContextProvider } from '@contexts/Ghosts'
import { EvidencesContextProvider } from '@contexts/Evidences'
import Game from '@components/Game'
import Layout from '@components/Layout'
import DocumentHead from '@components/DocumentHead'

export const getStaticProps = async () => {
  const dataDir = path.join(process.cwd(), 'data')

  return {
    props: {
      ghosts: JSON.parse(await fs.readFile(path.join(dataDir, `ghosts.json`), 'utf-8')) as Ghost[],
      evidences: JSON.parse(
        await fs.readFile(path.join(dataDir, `evidences.json`), 'utf-8')
      ) as Evidence[],
    },
  }
}

const Home = ({ ghosts, evidences }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <DocumentHead />
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
