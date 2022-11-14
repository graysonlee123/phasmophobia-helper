import Card from '@components/Card'
import Divider from '@components/Divider'
import Ghosts from '@components/Ghosts/Ghosts'
import Intro from '@components/Intro'

export default function GhostsCard() {
  return (
    <Card>
      <Intro
        primary="Possible ghosts"
        secondary="All of the possible ghost types you could be encountering, based on the evidence you've selected to the left. You can elimate ghost types as well."
      />
      <Divider />
      <Ghosts />
    </Card>
  )
}
