import Hint from '@components/typography/Hint'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { MouseEvent } from 'react'
import styles from './Checkbox.module.css'
import CheckboxIcon from './CheckboxIcon'

const variants = {
  default: { opacity: 1 },
  disabled: { opacity: 0.6 },
}

type CheckboxProps = {
  state: CheckboxState
  primary?: string
  secondary?: string
  disabled?: boolean
  gutterBottom?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function Checkbox({
  state,
  primary,
  secondary,
  disabled,
  gutterBottom,
  onClick,
}: CheckboxProps) {
  return (
    <motion.button
      className={cn(['button-reset', styles.button, gutterBottom && styles.gutterBottom])}
      disabled={disabled}
      variants={variants}
      animate={disabled ? 'disabled' : 'default'}
      onClick={onClick}
    >
      <CheckboxIcon state={state} disabled={disabled} />
      <div className={styles.text}>
        <span className={styles.label}>{primary ?? 'Checkbox'}</span>
        {secondary && <Hint>{secondary}</Hint>}
      </div>
    </motion.button>
  )
}
