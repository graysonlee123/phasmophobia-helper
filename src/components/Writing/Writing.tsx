import { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './Writing.module.css'

interface WritingProps {
  children: ReactNode
  markdown?: boolean
}

export default function Writing({ children, markdown = false }: WritingProps) {
  return (
    <div className={styles.writing}>
      {typeof children === 'string' && markdown ? (
        <ReactMarkdown linkTarget="_blank">{children}</ReactMarkdown>
      ) : (
        children
      )}
    </div>
  )
}
