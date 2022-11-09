import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './HoverLink.module.css'
import Anchor from '@components/Anchor'
import { AnchorProps } from '@components/Anchor/Anchor'

type HoverLink = AnchorProps

const HoverLink = ({ children, ...rest }: HoverLink) => {
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

export default HoverLink
