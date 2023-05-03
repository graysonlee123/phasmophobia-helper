import Card from '@components/Card'
import Divider from '@components/Divider'
import Ghosts from '@components/Ghosts/Ghosts'
import Intro from '@components/Intro'

export default function GhostsCard() {
  return (
    <Card>
      <Intro
        primary="Possible ghosts"
        secondary="All of the possible ghost types you could be encountering, which are filtered based on the evidence you've marked to the left."
      />
      <Divider />
      <Ghosts />
    </Card>
  )
}
