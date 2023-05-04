import Checkbox from '@components/inputs/Checkbox'
import CardLayout from '@components/layout/CardLayout'
import PageView from '@components/layout/PageView'
import Intro from '@components/typography/Intro'
import Card from '@components/ui/Card'
import { useSetShowConfetti, useShowConfetti } from '@store/index'

export default function PreferencesPage() {
  const showConfetti = useShowConfetti()
  const setShowConfetti = useSetShowConfetti()

  return (
    <PageView pageTitle="Preferences">
      <CardLayout>
        <Card maxWidth="md">
          <Intro
            title={<Intro.Title>Website preferences</Intro.Title>}
            subtitle={<Intro.Subtitle>Change how the website behaves here.</Intro.Subtitle>}
            gutterBottom
          />
          <Checkbox
            state={showConfetti}
            onClick={() => setShowConfetti(!showConfetti)}
            primary="Confetti"
            secondary="Shows confetti when you discover your ghost type"
          />
        </Card>
      </CardLayout>
    </PageView>
  )
}
