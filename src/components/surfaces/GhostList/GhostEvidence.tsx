import Tags from '@components/ui/Tags'
import Tag from '@components/ui/Tags/Tag'
import useGhostEvidences from '@hooks/useGhostEvidences'
import { useGhostContext } from './GhostContext'

export default function GhostEvidence() {
  const { ghost } = useGhostContext()
  const { evidences, falseEvidences } = useGhostEvidences(ghost)
  const ghostEvidences = [...evidences, ...(falseEvidences ?? [])]

  return (
    <Tags>
      {ghostEvidences.map((evidence) => {
        const guaranteed = Array.isArray(evidence.ghosts) && evidence.ghosts.indexOf(ghost.id) > -1

        return (
          <Tag
            variant={evidence.id}
            title={`${
              guaranteed
                ? 'Guaranteed on limited evidence games'
                : `Visit the ${evidence.name} Wiki`
            }`}
            href={evidence.url}
            target="_blank"
            rel="noopener noreferrer"
            special={guaranteed}
            key={evidence.id}
          >
            {evidence.shortName ?? evidence.name}
          </Tag>
        )
      })}
    </Tags>
  )
}
