import { getEvidenceData } from '@lib/evidences'
import cn from 'classnames'
import styles from './tag.module.css'

interface TagProps {
  slug: EvidenceSlug
}

export default function Tag({ slug }: TagProps) {
  const { wiki, label } = getEvidenceData(slug)

  return (
    <li>
      <a
        className={cn([styles.tag, styles[slug]])}
        href={wiki}
        target="_blank"
        rel="noopener noreferrer"
        title="Visit Evidence Wiki Page"
      >
        {label}
      </a>
    </li>
  )
}
