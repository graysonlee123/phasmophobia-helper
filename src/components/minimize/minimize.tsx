import cn from 'classnames'
import styles from './index.module.css'

interface MinimizeProps {
  callback: () => void
  open: boolean
}

export default function Minimize({ callback, open }: MinimizeProps) {
  return (
    <button className={cn(['button-reset', styles.button])} onClick={callback}>
      <svg
        className={cn({ [styles.open]: open })}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 28"
        width="28"
        height="28"
      >
        <path
          d="M14 2.625C7.718 2.625 2.625 7.718 2.625 14S7.718 25.375 14 25.375 25.375 20.282 25.375 14 20.282 2.625 14 2.625zm4.055 13.781h-8.11a.875.875 0 0 1-.672-1.434l4.054-4.872a.876.876 0 0 1 1.346 0l4.054 4.872a.874.874 0 0 1-.672 1.434z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}
