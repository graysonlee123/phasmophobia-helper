import DocumentHead from '@components/DocumentHead'
import Layout from '@components/Layout'
import About from '@components/About'

const AboutPage = () => {
  return (
    <>
      <DocumentHead pageTitle="About" />
      <Layout>
        <About />
      </Layout>
    </>
  )
}

export default AboutPage
