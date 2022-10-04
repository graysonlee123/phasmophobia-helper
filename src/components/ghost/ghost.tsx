import { getGhostData, getEvidenceName } from '@lib/data'

interface GhostProps {
  slug: string
}

export default function Ghost({ slug }: GhostProps) {
  const data = getGhostData(slug)

  if (data === undefined) return null

  const { name, evidences } = data

  return (
    <p>
      {name} {evidences.map((slug) => getEvidenceName(slug)).join(', ')}
    </p>
  )
}
