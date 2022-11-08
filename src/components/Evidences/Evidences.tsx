import { Fragment } from 'react'
import Evidence from '@components/Evidence'
import styles from './Evidences.module.css'
import Help from '@components/Help'

interface EvidencesProps {
  ghosts: Ghost[]
  evidences: Evidence[]
  checkedEvidences: EvidenceState
  setCheckedEvidences: SetEvidenceState
  disabledEvidences: EvidenceState
  setDisabledEvidences: SetEvidenceState
  reset: () => void
}

export default function Evidences({
  ghosts,
  evidences,
  checkedEvidences,
  setCheckedEvidences,
  disabledEvidences,
  setDisabledEvidences,
  reset,
}: EvidencesProps) {
  return (
    <section className={styles.section}>
      {evidences.map((evidence) => (
        <Fragment key={evidence.slug}>
          <Evidence
            evidence={evidence}
            ghosts={ghosts}
            evidences={evidences}
            checkedEvidences={checkedEvidences}
            setCheckedEvidences={setCheckedEvidences}
            disabledEvidences={disabledEvidences}
            setDisabledEvidences={setDisabledEvidences}
          />
        </Fragment>
      ))}
      <Help reset={reset} />
    </section>
  )
}
