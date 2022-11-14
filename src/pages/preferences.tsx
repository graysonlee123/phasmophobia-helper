import Card from '@components/Card'
import CardLayout from '@components/CardLayout'
import Checkbox from '@components/Checkbox'
import DocumentHead from '@components/DocumentHead'
import Intro from '@components/Intro'
import PageTransition from '@components/PageTransition'

const Preferences = () => {
  return (
    <>
      <DocumentHead pageTitle="Preferences" />
      <PageTransition>
        <CardLayout>
          <Card>
            <Intro primary="Website preferences" secondary="Change how the website behaves here." />
            <Checkbox
              state={null}
              disabled
              primary="Nightmare difficulty"
              secondary="For when you're playing in Nightmare difficulty (coming soon)"
            />
          </Card>
        </CardLayout>
      </PageTransition>
    </>
  )
}

export default Preferences
