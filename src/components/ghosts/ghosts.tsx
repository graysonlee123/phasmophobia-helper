import { getEvidenceName, ghostHasEvidence } from '@lib/evidence'
import { ghosts } from '@data/ghosts'

interface GhostsProps {
  checkedEvidences: string[]
}

export default function Ghosts({ checkedEvidences }: GhostsProps) {
  return (
    <>
      <p>Ghosts:</p>
      {ghosts
        .filter((ghost) => {
          let passed = true

          checkedEvidences.forEach((check) => {
            if (!ghostHasEvidence(ghost, check)) {
              passed = false
            }
          })

          return passed
        })
        .map((ghost) => (
          <p key={ghost.slug}>
            {ghost.name}{' '}
            {ghost.evidences.map((slug) => getEvidenceName(slug)).join(', ')}
          </p>
        ))}
    </>
  )
}
