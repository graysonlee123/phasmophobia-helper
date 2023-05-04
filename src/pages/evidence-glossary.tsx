import Tags from '@components/ui/Tags'
import CardLayout from '@components/layout/CardLayout'
import Divider from '@components/ui/Divider'
import PageView from '@components/layout/PageView'
import Card from '@components/ui/Card'
import Intro from '@components/typography/Intro'
import Writing from '@components/typography/Writing'
import evidenceData from '@data/evidences.json'
import ghostsData from '@data/ghosts.json'

export default function EvidenceGlossaryPage() {
  return (
    <PageView pageTitle="Evidence Glossary">
      <CardLayout>
        {(evidenceData as Evidence[]).map((evidence) => (
          <Card maxWidth="md" key={evidence.id}>
            <Intro
              title={<Intro.Title>{evidence.name}</Intro.Title>}
              subtitle={
                <Intro.Subtitle>
                  {(ghostsData as Ghost[])
                    .filter((ghost) => ghost.evidences.indexOf(evidence.id) > -1)
                    .map((ghost) => ghost.name)
                    .join(', ')}
                </Intro.Subtitle>
              }
              after={
                <Tags
                  tags={[
                    {
                      label: evidence.shortName ?? evidence.name,
                      link: evidence.url,
                      slug: evidence.id,
                    },
                  ]}
                />
              }
            />
            <Divider />
            <Writing markdown>{evidence.about ?? 'No description provided.'}</Writing>
          </Card>
        ))}
      </CardLayout>
    </PageView>
  )
}
