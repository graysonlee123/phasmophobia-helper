import Checkbox from '@components/inputs/Checkbox'
import CardLayout from '@components/layout/CardLayout'
import PageView from '@components/layout/PageView'
import Intro from '@components/typography/Intro'
import Card from '@components/ui/Card'
import usePreferences from '@hooks/usePreferences'

export default function PreferencesPage() {
  const { preferences, setPreferences } = usePreferences()

  function handleChange(key: keyof Preferences, value: boolean) {
    setPreferences({
      ...preferences,
      [key]: value,
    })
  }

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
            state={preferences?.limitedEvidence ?? true}
            onClick={() => handleChange('limitedEvidence', !preferences?.limitedEvidence ?? false)}
            primary="Limited Evidence Mode"
            secondary="Have this checked if your game mode has limited evidence."
            gutterBottom
          />
          <Checkbox
            state={preferences?.confetti ?? true}
            onClick={() => handleChange('confetti', !preferences?.confetti ?? false)}
            primary="Confetti"
            secondary="Shows confetti when you discover your ghost type"
          />
        </Card>
      </CardLayout>
    </PageView>
  )
}
