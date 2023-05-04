import EvidenceCheckbox from './EvidenceCheckbox'
import evidenceData from '@data/evidences.json'
import { Fragment } from 'react'
import styles from './Evidences.module.css'

export default function Evidences() {
  return (
    <section className={styles.section}>
      {(evidenceData as Evidence[]).map((evidence) => (
        <Fragment key={evidence.id}>
          <EvidenceCheckbox evidence={evidence} />
        </Fragment>
      ))}
    </section>
  )
}
