import styles from './index.module.css'

interface TagsProps {
  tags: EvidenceSlug[]
}

export default function Tags({ tags }: TagsProps) {
  return (
    <ul className={styles.list}>
      {tags.map((tag) => (
        <li
          className={styles.item}
          style={{
            backgroundColor: `hsl(var(--clr--${tag}--100))`,
            color: `hsl(var(--clr--${tag}--700))`,
          }}
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
