import Card from '@components/Card'
import Divider from '@components/Divider'
import Evidences from '@components/Evidences'
import Intro from '@components/Intro'

export default function EvidenceCard() {
  return (
    <Card width="sm" sticky>
      <Intro
        primary="Evidence selector"
        secondary="As you play through a contract, mark the evidence you find (or rule out) here."
      />
      <Divider />
      <Evidences />
    </Card>
  )
}
