import { useEffect, useState } from 'react'
import Evidences from '@components/evidences'
import Ghosts from '@components/ghosts'
import { getImpossibleEvidences } from '@lib/data'
import styles from './index.module.css'

export default function Layout() {
  const [checkedEvidences, setCheckedEvidences] = useState<EvidenceSlug[]>([])
  const [disabledEvidences, setDisabledEvidences] = useState<EvidenceSlug[]>([])
  const [impossibleEvidences, setImpossibleEvidences] = useState<
    EvidenceSlug[]
  >([])

  useEffect(
    function () {
      setImpossibleEvidences(getImpossibleEvidences(checkedEvidences))
    },
    [checkedEvidences]
  )

  return (
    <main className={styles.main}>
      <Evidences
        checkedEvidences={checkedEvidences}
        setCheckedEvidences={setCheckedEvidences}
        disabledEvidences={disabledEvidences}
        setDisabledEvidences={setDisabledEvidences}
        impossibleEvidences={impossibleEvidences}
      />
      <Ghosts
        checkedEvidences={checkedEvidences}
        disabledEvidences={disabledEvidences}
      />
    </main>
  )
}
