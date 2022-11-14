import { MouseEvent } from 'react'
import CheckboxIcon from '@components/CheckboxIcon'
import Hint from '@components/Hint'
import styles from './Checkbox.module.css'
import cn from 'classnames'

interface CheckboxProps {
  state: CheckboxState
  primary?: string
  secondary?: string
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function Checkbox({ state, primary, secondary, disabled, onClick }: CheckboxProps) {
  return (
    <button onClick={onClick} className={cn(['button-reset', styles.button])} disabled={disabled}>
      <CheckboxIcon state={state} disabled={disabled} />
      <div className={styles.text}>
        <span className={styles.label}>{primary ?? 'Checkbox'}</span>
        {secondary && <Hint>{secondary}</Hint>}
      </div>
    </button>
  )
}
