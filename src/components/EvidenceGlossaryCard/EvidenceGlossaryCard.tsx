import { useContext } from 'react'
import { GhostsContext } from '@contexts/Ghosts'
import Card from '@components/Card'
import Divider from '@components/Divider'
import Intro from '@components/Intro'
import Tags from '@components/Tags'
import Writing from '@components/Writing'
import styles from './EvidenceGlossaryCard.module.css'

interface EvidenceGlossaryCardProps {
  evidence: Evidence
}

export default function EvidenceGlossaryCard({ evidence }: EvidenceGlossaryCardProps) {
  const ghosts = useContext(GhostsContext)
  const ghostsList = ghosts
    .filter((ghost) => ghost.evidences.indexOf(evidence.id) > -1)
    .map((ghost) => ghost.name)
    .join(', ')

  return (
    <Card>
      <div className={styles.row}>
        <Intro primary={evidence.name} secondary={ghostsList} margin={false} />
        <div className={styles.tag}>
          <Tags
            tags={[
              {
                label: evidence.shortName ?? evidence.name,
                link: evidence.url,
                slug: evidence.id,
              },
            ]}
          />
        </div>
      </div>
      <Divider />
      <Writing markdown>{evidence.about ?? 'No description provided.'}</Writing>
    </Card>
  )
}
