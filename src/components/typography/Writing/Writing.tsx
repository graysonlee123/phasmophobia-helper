import { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './Writing.module.css'

type WritingProps = {
  children: ReactNode
  markdown?: boolean
}

export default function Writing({ children, markdown = false }: WritingProps) {
  return (
    <div className={styles.writing}>
      {typeof children === 'string' && markdown ? (
        <ReactMarkdown>{children}</ReactMarkdown>
      ) : (
        children
      )}
    </div>
  )
}
