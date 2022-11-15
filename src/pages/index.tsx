import path from 'path'
import { promises as fs } from 'fs'
import { InferGetStaticPropsType } from 'next'
import { GhostsContextProvider } from '@contexts/Ghosts'
import { EvidencesContextProvider } from '@contexts/Evidences'
import PageTransition from '@components/PageTransition'
import DocumentHead from '@components/DocumentHead'
import CardLayout from '@components/CardLayout'
import EvidenceCard from '@components/EvidenceCard'
import GhostsCard from '@components/GhostsCard'
import Confetti from '@components/Confetti'

export const getStaticProps = async () => {
  const dataDir = path.join(process.cwd(), 'data')

  return {
    props: {
      ghosts: JSON.parse(await fs.readFile(path.join(dataDir, `ghosts.json`), 'utf-8')) as Ghosts,
      evidences: JSON.parse(
        await fs.readFile(path.join(dataDir, `evidences.json`), 'utf-8')
      ) as Evidences,
    },
  }
}

const Home = ({ ghosts, evidences }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <DocumentHead />
      <GhostsContextProvider ghosts={ghosts}>
        <EvidencesContextProvider evidences={evidences}>
          <Confetti />
          <PageTransition>
            <CardLayout>
              <EvidenceCard />
              <GhostsCard />
            </CardLayout>
          </PageTransition>
        </EvidencesContextProvider>
      </GhostsContextProvider>
    </>
  )
}

export default Home
