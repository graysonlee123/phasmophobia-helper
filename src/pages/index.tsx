import { InferGetStaticPropsType } from 'next'
import ghostsData from '@data/ghosts.json'
import evidencesData from '@data/evidences.json'
import { GhostsContextProvider } from '@contexts/Ghosts'
import { EvidencesContextProvider } from '@contexts/Evidences'
import PageTransition from '@components/PageTransition'
import DocumentHead from '@components/DocumentHead'
import CardLayout from '@components/CardLayout'
import EvidenceCard from '@components/EvidenceCard'
import GhostsCard from '@components/GhostsCard'
import Confetti from '@components/Confetti'

export const getStaticProps = async () => {
  return {
    props: {
      ghosts: ghostsData as Ghost[],
      evidences: evidencesData as Evidence[],
    },
  }
}

const HomePage = ({ ghosts, evidences }: InferGetStaticPropsType<typeof getStaticProps>) => {
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

export default HomePage
