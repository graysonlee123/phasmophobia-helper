import Tag from '@components/Tag'
import styles from './Tags.module.css'

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
