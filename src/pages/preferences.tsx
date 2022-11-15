import DocumentHead from '@components/DocumentHead'
import PageTransition from '@components/PageTransition'
import PreferencesCard from '@components/PreferencesCard'

const PreferencesPage = () => {
  return (
    <>
      <DocumentHead pageTitle="Preferences" />
      <PageTransition>
        <PreferencesCard />
      </PageTransition>
    </>
  )
}

export default PreferencesPage
