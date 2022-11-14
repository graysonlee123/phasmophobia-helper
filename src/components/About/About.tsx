import Card from '@components/Card'
import Divider from '@components/Divider'
import Intro from '@components/Intro'
import Writing from '@components/Writing'

export default function About() {
  return (
    <Card>
      <Intro primary="About Phasmophobia Helper" secondary="A little about the website." />
      <Writing>
        <p>
          The main purpose of this website is to help players narrow down their ghost type in the
          video game Phasmophobia.
        </p>
        <p>
          Additionally, I want to help players gain a better understanding of the game by providing
          summaries of things in the game. People retain information better when they are not
          overloaded, which is what a Wiki page can do. There are helpful links to Wiki pages in the
          app in case you do need to dig deeper into a topic.
        </p>
        <p>
          Phasmophobia Helper is currently a solo project, but it is open-source and available to be
          contributed to.
        </p>
      </Writing>
      <Divider />
      <Intro primary="Report a mistake" secondary="Let me know if something is wrong!" />
      <Writing>
        <p>
          I write and maintain the information on this site. Sometimes, especially after updates,
          information may be incorrect. Please let me know if you have found a mistake by submitting
          a bug report.
        </p>
      </Writing>
    </Card>
  )
}
