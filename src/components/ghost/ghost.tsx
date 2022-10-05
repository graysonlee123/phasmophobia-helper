import Tags from '@components/tags'
import { getGhostData } from '@lib/data'
import styles from './index.module.css'

interface GhostProps {
  slug: GhostSlug
}

export default function Ghost({ slug }: GhostProps) {
  const { label, evidences, desc, wiki } = getGhostData(slug)

  return (
    <article className={styles.article}>
      <header className="subtitle">
        <a
          className={styles.anchor}
          href={wiki}
          target="_blank"
          rel="noopener noreferrer"
          title="Visit Ghost Wiki Page"
        >
          {label}
        </a>
      </header>
      {desc}
      <Tags tags={evidences} />
    </article>
  )
}
