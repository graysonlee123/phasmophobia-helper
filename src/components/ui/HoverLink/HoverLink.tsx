import Anchor from '@components/ui/Anchor'
import { AnchorProps } from '@components/ui/Anchor'
import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './HoverLink.module.css'

type HoverLink = AnchorProps

export default function HoverLink({ children, ...rest }: HoverLink) {
  const [hover, setHover] = useState(false)

  return (
    <Anchor
      className={styles.a}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
      <motion.span
        className={styles.line}
        initial={false}
        animate={{
          scaleX: hover ? 1 : 0,
          opacity: hover ? 0.6 : 0,
          y: hover ? [2, 0] : 0,
        }}
        aria-hidden="true"
      />
    </Anchor>
  )
}
