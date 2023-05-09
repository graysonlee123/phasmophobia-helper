import CardLayout from '@components/layout/CardLayout'
import Divider from '@components/ui/Divider'
import PageView from '@components/layout/PageView'
import Card from '@components/ui/Card'
import Intro from '@components/typography/Intro'
import Writing from '@components/typography/Writing'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <PageView pageTitle="About">
      <CardLayout>
        <Card>
          <Intro
            title={<Intro.Title>About Phasmophobia Helper</Intro.Title>}
            subtitle={<Intro.Subtitle>Get to know the website a bit better!</Intro.Subtitle>}
            gutterBottom
          />
          <Writing>
            <p>
              Welcome to the Phasmophobia Helper website! My main mission is to make identifying
              ghost types in the thrilling video game{' '}
              <a href="https://kineticgames.co.uk/" target="_blank" rel="noopener noreferrer">
                Phasmophobia
              </a>{' '}
              a breeze for players like you.
            </p>
            <p>
              But wait, there&apos;s more! Phasmophobia Helper offers several handy features and
              quality of life improvements over the in-game journal!
            </p>
          </Writing>
          <Divider />
          <Intro
            title={<Intro.Title>Perks</Intro.Title>}
            subtitle={<Intro.Subtitle>Why choose this over the in-game journal?</Intro.Subtitle>}
            gutterBottom
          />
          <Writing>
            <p>
              In addition to ghost identification, here are the top reasons to use this website
              instead of the in-game journal!
            </p>
            <ul>
              <li>Offers concise summaries of in-game ghost types and equipment</li>
              <li>
                Impossible evidence is marked with a lock icon (e.g., Ghost Writing is impossible
                when you&apos;ve checked DOTS and EMF, as no ghost types have that combination)
              </li>
              <li>
                Quick sanity threshold info for each ghost type to help gauge when a ghost might
                start hunting
              </li>
              <li>
                Ghost minimization for when you&apos;re confident a particular ghost isn&apos;t the
                right choice
              </li>
              <li>
                Evidences marked with a dot indicate the evidence is guaranteed on Nightmare
                difficulty
              </li>
              <li>A handy button to reset your hunt to a fresh state for new rounds</li>
              <li>Speedy Wiki links for extra info</li>
            </ul>
          </Writing>
          <Divider />
          <Intro
            title={<Intro.Title>Report a mistake</Intro.Title>}
            subtitle={<Intro.Subtitle>Spotted something off? Let me know!</Intro.Subtitle>}
            gutterBottom
          />
          <Writing>
            <p>
              As the author and guardian of this site&apos;s content, I strive to keep things
              accurate. However, sometimes, especially after updates, the information might not be
              perfect. If you notice an error, I&apos;d be grateful if you could let me know by
              submitting a{' '}
              <a
                href="https://github.com/graysonlee123/phasmophobia-helper/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                bug report
              </a>
              . Your help keeps everything up-to-date and accurate!
            </p>
          </Writing>
          <Divider />
          <Intro
            title={<Intro.Title>Your privacy</Intro.Title>}
            subtitle={<Intro.Subtitle>TL;DR: some anonymous usage data is tracked.</Intro.Subtitle>}
            gutterBottom
          />
          <Writing>
            <p>
              This website uses a very basic configuration of Google Analytics 4. Read more on the{' '}
              <Link href="/privacy-policy">Privacy Policy page</Link>.
            </p>
          </Writing>
        </Card>
      </CardLayout>
    </PageView>
  )
}
