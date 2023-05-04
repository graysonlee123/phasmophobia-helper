import PageTransition from '@components/effects/PageTransition'
import DocumentHead from '@components/utils/DocumentHead'
import { ReactNode } from 'react'

type PageViewProps = {
  pageTitle?: string
  children: ReactNode
}

export default function PageView({ pageTitle, children }: PageViewProps) {
  return (
    <>
      <DocumentHead pageTitle={pageTitle} />
      <PageTransition>{children}</PageTransition>
    </>
  )
}
