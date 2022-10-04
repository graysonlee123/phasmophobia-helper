import { getGhostData, getEvidenceName } from '@lib/data'

interface GhostProps {
  slug: string
}

export default function Ghost({ slug }: GhostProps) {
  const data = getGhostData(slug)

  if (data === undefined) return null

  const { name, evidences, wiki } = data

  return (
    <p>
      <a href={wiki} target="_blank" rel="noopener noreferrer">
        {name}
      </a>{' '}
      {evidences.map((slug) => getEvidenceName(slug)).join(', ')}
    </p>
  )
}
