import { useEffect, useState } from 'react'
import Tags from '@components/tags'
import Sanity from '@components/sanity'
import Minimize from '@components/minimize'
import { getGhostData } from '@lib/data'
import cn from 'classnames'
import styles from './index.module.css'

interface GhostProps {
  toggleGhost: (slug: GhostSlug) => void
  ghostIsMinimized: (slug: GhostSlug) => boolean
  slug: GhostSlug
}

export default function Ghost({
  toggleGhost,
  ghostIsMinimized,
  slug,
}: GhostProps) {
  const [minimized, setMinimized] = useState<boolean>(false)
  const { label, evidences, hunt, desc, wiki } = getGhostData(slug)

  /**
   * Responsible for keeping the minimized state updated.
   */
  useEffect(
    function () {
      if (ghostIsMinimized(slug)) setMinimized(true)
      else setMinimized(false)
    },
    [ghostIsMinimized, slug]
  )

  return (
    <article
      className={cn([styles.article], {
        [styles.disabled]: minimized,
      })}
    >
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
        <span className={styles.button}>
          <Minimize callback={() => toggleGhost(slug)} open={minimized} />
        </span>
      </header>
      {!minimized && desc}
      <Tags tags={evidences} />
    </article>
  )
}
