import Tags from '@components/tags'
import Sanity from '@components/sanity'
import { getGhostData } from '@lib/data'
import styles from './index.module.css'

interface GhostProps {
  slug: GhostSlug
}

export default function Ghost({ slug }: GhostProps) {
  const { label, evidences, hunt, desc, wiki } = getGhostData(slug)

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <a
          className={styles.anchor}
          href={wiki}
          target="_blank"
          rel="noopener noreferrer"
          title="Visit Ghost Wiki Page"
        >
          {label}
        </a>
        <Sanity int={hunt} />
      </header>
      {desc}
      <Tags tags={evidences} />
    </article>
  )
}
