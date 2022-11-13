import { Fragment, useContext } from 'react'
import { EvidencesContext } from '@contexts/Evidences'
import Evidence from '@components/Evidence'
import Help from '@components/Help'
import styles from './Evidences.module.css'

export default function Evidences() {
  const evidences = useContext(EvidencesContext)

  return (
    <section className={styles.section}>
      {evidences.map((evidence) => (
        <Fragment key={evidence.id}>
          <Evidence evidence={evidence} />
        </Fragment>
      ))}
      <Help />
    </section>
  )
}
