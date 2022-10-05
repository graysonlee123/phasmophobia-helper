import { useEffect, useState } from 'react'
import Evidences from '@components/evidences'
import Ghosts from '@components/ghosts'
import { getImpossibleEvidences } from '@lib/data'
import styles from './index.module.css'

export default function Layout() {
  const [checkedEvidences, setCheckedEvidences] = useState<string[]>([])
  const [disabledEvidences, setDisabledEvidences] = useState<string[]>([])
  const [impossibleEvidences, setImpossibleEvidences] = useState<string[]>([])

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
