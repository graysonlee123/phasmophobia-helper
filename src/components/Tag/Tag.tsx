import styles from './Tag.module.css'
import cn from 'classnames'

interface TagProps {
  tag: Tag
}

export default function Tag({ tag }: TagProps) {
  const { slug, label, link, important } = tag

  return (
    <li>
      <a
        className={styles.anchor}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        title="Visit Evidence Wiki Page"
      >
        <span
          className={cn([styles.tag, styles[slug]], {
            [styles.important]: important,
          })}
        >
          {label}
        </span>
      </a>
    </li>
  )
}