import cn from 'classnames'
import styles from './GhostMinimize.module.css'

type GhostMinimizeProps = {
  onClick: () => void
  minimized: boolean
}

export default function GhostMinimize({ onClick, minimized }: GhostMinimizeProps) {
  return (
    <button
      className={cn(['button-reset', styles.button])}
      onClick={onClick}
      title="Minimize this ghost"
    >
      <svg
        className={cn([styles.icon, minimized && styles.open])}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm6.02-16.138-4.309 4.31 4.312 4.309a1.09 1.09 0 1 1-1.542 1.542l-4.31-4.31-4.31 4.31a1.09 1.09 0 1 1-1.542-1.542l4.31-4.31-4.31-4.31A1.09 1.09 0 0 1 7.862 6.32l4.31 4.31 4.309-4.31a1.09 1.09 0 0 1 1.54 1.543Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}
