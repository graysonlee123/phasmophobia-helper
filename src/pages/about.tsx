import DocumentHead from '@components/DocumentHead'
import PageTransition from '@components/PageTransition'
import AboutCard from '@components/AboutCard'

const AboutPage = () => {
  return (
    <>
      <DocumentHead pageTitle="About" />
      <PageTransition>
        <AboutCard />
      </PageTransition>
    </>
  )
}

export default AboutPage
