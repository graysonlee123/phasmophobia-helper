import { InferGetStaticPropsType } from 'next'
import ghostsData from '@data/ghosts.json'
import evidencesData from '@data/evidences.json'
import { EvidencesContextProvider } from '@contexts/Evidences'
import { GhostsContextProvider } from '@contexts/Ghosts'
import CardLayout from '@components/CardLayout'
import DocumentHead from '@components/DocumentHead'
import PageTransition from '@components/PageTransition'
import EvidenceGlossaryCard from '@components/EvidenceGlossaryCard'

export const getStaticProps = async () => {
  return {
    props: {
      ghosts: ghostsData as Ghost[],
      evidences: evidencesData as Evidence[],
    },
  }
}

const EvidenceGlossaryPage = ({
  ghosts,
  evidences,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <DocumentHead pageTitle="Evidence Glossary" />
      <GhostsContextProvider ghosts={ghosts}>
        <EvidencesContextProvider evidences={evidences}>
          <PageTransition>
            <CardLayout>
              {evidences.map((evidence) => {
                return <EvidenceGlossaryCard key={evidence.id} evidence={evidence} />
              })}
            </CardLayout>
          </PageTransition>
        </EvidencesContextProvider>
      </GhostsContextProvider>
    </>
  )
}

export default EvidenceGlossaryPage
