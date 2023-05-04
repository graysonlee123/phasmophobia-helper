import Anchor from '@components/ui/Anchor'
import cn from 'classnames'
import { motion } from 'framer-motion'
import styles from './Tag.module.css'

type TagProps = {
  tag: Tag
}

export default function Tag({ tag }: TagProps) {
  const { slug, label, link, important = false } = tag

  return (
    <li>
      <Anchor
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        title={`Visit ${label} wiki page`}
      >
        <motion.span
          whileHover={{
            scale: 1.1,
          }}
          className={cn([styles.tag, styles[slug]], {
            [styles.important]: important,
          })}
        >
          {label}
        </motion.span>
      </Anchor>
    </li>
  )
}
