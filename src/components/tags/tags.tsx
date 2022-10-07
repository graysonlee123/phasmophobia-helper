import Tag from '@components/tag'
import styles from './tags.module.css'

interface TagsProps {
  tags: EvidenceState
}

export default function Tags({ tags }: TagsProps) {
  return (
    <ul className={styles.tags}>
      {tags.map((slug) => (
        <Tag slug={slug} key={slug} />
      ))}
    </ul>
  )
}
