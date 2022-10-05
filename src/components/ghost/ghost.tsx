import { useState } from 'react'
import Tags from '@components/tags'
import Sanity from '@components/sanity'
import Minimize from '@components/minimize'
import { getGhostData } from '@lib/data'
import cn from 'classnames'
import styles from './index.module.css'

interface GhostProps {
  slug: GhostSlug
}

export default function Ghost({ slug }: GhostProps) {
  const [disabled, setDisabled] = useState<boolean>(false)
  const { label, evidences, hunt, desc, wiki } = getGhostData(slug)

  function toggleDisabled() {
    setDisabled(!disabled)
  }

  return (
    <article className={cn([styles.article], { [styles.disabled]: disabled })}>
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
          <Minimize callback={toggleDisabled} open={disabled} />
        </span>
      </header>
      {!disabled && desc}
      <Tags tags={evidences} />
    </article>
  )
}
