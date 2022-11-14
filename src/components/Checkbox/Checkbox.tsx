import { MouseEvent } from 'react'
import CheckboxIcon from '@components/CheckboxIcon'
import Hint from '@components/Hint'
import styles from './Checkbox.module.css'
import { motion } from 'framer-motion'
import cn from 'classnames'

const variants = {
  default: { opacity: 1 },
  disabled: { opacity: 0.6 },
}

interface CheckboxProps {
  state: CheckboxState
  primary?: string
  secondary?: string
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function Checkbox({ state, primary, secondary, disabled, onClick }: CheckboxProps) {
  return (
    <motion.button
      className={cn(['button-reset', styles.button])}
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
