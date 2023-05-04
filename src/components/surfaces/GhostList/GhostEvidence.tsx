import Tags from '@components/ui/Tags'
import useGhostEvidences from '@hooks/useGhostEvidences'
import { useGhostContext } from './GhostContext'

export default function GhostEvidence() {
  const { ghost } = useGhostContext()
  const { evidences, falseEvidences } = useGhostEvidences(ghost)

  const ghostEvidences = [...evidences, ...(falseEvidences ?? [])]
  const evidenceTags = ghostEvidences.map<Tag>((evidence) => ({
    slug: evidence.id,
    label: evidence.shortName ?? evidence.name,
    link: evidence.url,
    important: evidence.ghosts !== undefined && evidence.ghosts.indexOf(ghost.id) > -1,
  }))

  return <Tags tags={evidenceTags} />
}
