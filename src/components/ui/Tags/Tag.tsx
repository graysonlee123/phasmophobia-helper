import Anchor from '@components/ui/Anchor'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styles from './Tag.module.css'

type TagProps = {
  variant: EvidenceId | 'success' | 'danger'
  size?: 'sm' | 'md'
  title?: string
  href?: string
  target?: string
  rel?: string
  special?: boolean
  children?: ReactNode
}

export default function Tag({
  variant,
  size = 'md',
  title,
  href,
  target,
  rel,
  special,
  children,
}: TagProps) {
  return href ? (
    <Anchor href={href} target={target} rel={rel} title={title}>
      <motion.span
        whileHover={{
          scale: 1.1,
        }}
        className={cn([styles.tag, styles[variant], styles[size]], {
          [styles.special]: special,
        })}
      >
        {children}
      </motion.span>
    </Anchor>
  ) : (
    <span
      className={cn([styles.tag, styles[variant], styles[size]], {
        [styles.special]: special,
      })}
      title={title}
    >
      {children}
    </span>
  )
}
