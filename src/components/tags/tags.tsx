import Tag from '@components/tag'
import styles from './index.module.css'

interface TagsProps {
  tags: EvidenceSlug[]
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