import Tags from '@components/tags'
import { getGhostData } from '@lib/data'
import styles from './index.module.css'

interface GhostProps {
  slug: string
}

export default function Ghost({ slug }: GhostProps) {
  const data = getGhostData(slug)

  if (data === undefined) return null

  const { name, evidences, desc, wiki } = data

  return (
    <article className={styles.article}>
      <header className="subtitle">{name}</header>
      {desc}
      <Tags tags={evidences} />
    </article>
  )
}
