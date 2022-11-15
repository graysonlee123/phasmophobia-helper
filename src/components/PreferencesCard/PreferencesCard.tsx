import Card from '@components/Card'
import CardLayout from '@components/CardLayout'
import Intro from '@components/Intro'
import Preferences from '@components/Preferences'

export default function PreferencesCard() {
  return (
    <CardLayout>
      <Card>
        <Intro primary="Website preferences" secondary="Change how the website behaves here." />
        <Preferences />
      </Card>
    </CardLayout>
  )
}
