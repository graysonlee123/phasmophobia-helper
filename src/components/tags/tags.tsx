import Tag from '@components/tag'
import styles from './tags.module.css'

interface TagsProps {
  tags: Tags
}

export default function Tags({ tags }: TagsProps) {
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <Tag tag={tag} key={tag.slug} />
      ))}
    </ul>
  )
}
