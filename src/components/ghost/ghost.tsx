import Tags from '@components/tags'
import Sanity from '@components/sanity'
import { getGhostData } from '@lib/data'
import styles from './index.module.css'

interface GhostProps {
  slug: GhostSlug
  addCheckedEvidences: (evidences: EvidenceSlug[]) => void
}

export default function Ghost({ slug, addCheckedEvidences }: GhostProps) {
  const { label, evidences, hunt, desc, wiki } = getGhostData(slug)

  function handleCheck() {
    addCheckedEvidences(evidences)
  }

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
        <p onClick={handleCheck}>Check</p>
        <Sanity int={hunt} />
      </header>
      {desc}
      <Tags tags={evidences} />
    </article>
  )
}
