import Tag from './Tag'
import styles from './Tags.module.css'

type TagsProps = {
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
