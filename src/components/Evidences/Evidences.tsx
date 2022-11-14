import { Fragment, useContext } from 'react'
import { EvidencesContext } from '@contexts/Evidences'
import styles from './Evidences.module.css'
import EvidenceCheckbox from '@components/EvidenceCheckbox'

export default function Evidences() {
  const evidences = useContext(EvidencesContext)

  return (
    <section className={styles.section}>
      {evidences.map((evidence) => (
        <Fragment key={evidence.id}>
          <EvidenceCheckbox evidence={evidence} />
        </Fragment>
      ))}
    </section>
  )
}
