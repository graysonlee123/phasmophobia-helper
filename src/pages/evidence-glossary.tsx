import path from 'path'
import { promises as fs } from 'fs'
import { InferGetStaticPropsType } from 'next'
import { EvidencesContextProvider } from '@contexts/Evidences'
import { GhostsContextProvider } from '@contexts/Ghosts'
import CardLayout from '@components/CardLayout'
import DocumentHead from '@components/DocumentHead'
import PageTransition from '@components/PageTransition'
import EvidenceGlossaryCard from '@components/EvidenceGlossaryCard'

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
