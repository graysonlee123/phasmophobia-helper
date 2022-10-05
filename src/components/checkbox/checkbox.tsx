import cn from 'classnames'
import styles from './index.module.css'

interface CheckboxProps {
  state?: CheckboxState
}

function getIcon(state: CheckboxState) {
  switch (state) {
    case 'locked':
      return (
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M15.818 9.867h-.545V7.2c0-.849-.345-1.663-.959-2.263A3.31 3.31 0 0 0 12 4c-.868 0-1.7.337-2.314.937A3.164 3.164 0 0 0 8.727 7.2v2.667h-.545a2.21 2.21 0 0 0-1.542.625c-.41.4-.64.942-.64 1.508v5.867c0 .565.23 1.107.64 1.508.409.4.963.624 1.542.625h7.636a2.21 2.21 0 0 0 1.542-.625c.41-.4.64-.943.64-1.508V12c0-.566-.23-1.108-.64-1.508a2.21 2.21 0 0 0-1.542-.625zm-1.636 0H9.818V7.2c0-.566.23-1.108.64-1.508.408-.4.963-.625 1.542-.625.579 0 1.134.224 1.543.625.409.4.639.942.639 1.508v2.667z"
            fill="currentColor"
          />
        </svg>
      )
    case 'checked':
      return (
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.665 6.383c.651.563.717 1.541.147 2.185l-7.886 8.903a1.578 1.578 0 0 1-2.288.075L5.26 14.209a1.535 1.535 0 0 1 0-2.19 1.581 1.581 0 0 1 2.217 0l2.195 2.168 6.782-7.657a1.58 1.58 0 0 1 2.212-.146z"
            fill="currentColor"
          />
        </svg>
      )
    case 'disabled':
      return (
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.796 12l5.028-5.028a1.271 1.271 0 1 0-1.796-1.8L12 10.202 6.972 5.173a1.272 1.272 0 1 0-1.8 1.8L10.202 12l-5.028 5.028a1.272 1.272 0 1 0 1.8 1.8L12 13.798l5.028 5.028a1.272 1.272 0 1 0 1.8-1.8L13.795 12z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return undefined
  }
}

export default function Checkbox({ state = 'neutral' }: CheckboxProps) {
  return (
    <span
      className={cn([
        styles.checkbox,
        state === 'checked' && styles.checked,
        state === 'disabled' && styles.disabled,
        state === 'locked' && styles.locked,
      ])}
    >
      {getIcon(state)}
    </span>
  )
}
