import CardLayout from '@components/layout/CardLayout'
import Divider from '@components/ui/Divider'
import PageView from '@components/layout/PageView'
import Card from '@components/ui/Card'
import Evidences from '@components/surfaces/Evidences'
import GhostList from '@components/surfaces/GhostList'
import Intro from '@components/typography/Intro'
import Confetti from '@components/effects/Confetti'
import useReportWinner from '@hooks/useReportWinner'

export default function HomePage() {
  useReportWinner()

  return (
    <PageView>
      <Confetti />
      <CardLayout>
        <Card maxWidth="sm" sticky>
          <Intro
            title={<Intro.Title>Evidence selector</Intro.Title>}
            subtitle={
              <Intro.Subtitle>
                As you play through a contract, mark the evidence you find (or rule out) here.
              </Intro.Subtitle>
            }
          />
          <Divider />
          <Evidences />
        </Card>
        <Card maxWidth="md">
          <Intro
            title={<Intro.Title>Possible ghosts</Intro.Title>}
            subtitle={
              <Intro.Subtitle>
                All of the possible ghost types you could be encountering, which are filtered based
                on the evidence you&apos;ve marked.
              </Intro.Subtitle>
            }
          />
          <Divider />
          <GhostList />
        </Card>
      </CardLayout>
    </PageView>
  )
}
