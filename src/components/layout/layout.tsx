import { useEffect, useState } from 'react'
import Evidences from '@components/evidences'
import Ghosts from '@components/ghosts'
import { getPossibleGhosts } from '@lib/ghosts'
import { getPossibleEvidences } from '@lib/evidences'
import styles from './layout.module.css'

export default function Layout() {
  const [checkedEvidences, setCheckedEvidences] = useState<EvidenceSlug[]>([])
  const [disabledEvidences, setDisabledEvidences] = useState<EvidenceSlug[]>([])
  const [minimizedGhosts, setMinimizedGhosts] = useState<GhostSlug[]>([])

  /**
   * Updates the possible evidence when checked evidence changes.
   */
  const [possibleEvidences, setPossibleEvidences] = useState<EvidenceSlug[]>([])
  useEffect(() => {
    setPossibleEvidences(getPossibleEvidences(checkedEvidences))
  }, [checkedEvidences])

  /**
   * Updates the possible ghosts when evidence changes.
   */
  const [possibleGhosts, setPossibleGhosts] = useState<GhostSlug[]>([])
  useEffect(() => {
    setPossibleGhosts(getPossibleGhosts(checkedEvidences, disabledEvidences))
  }, [checkedEvidences, disabledEvidences])

  return (
    <main className={styles.main}>
      <Evidences
        checkedEvidences={checkedEvidences}
        setCheckedEvidences={setCheckedEvidences}
        disabledEvidences={disabledEvidences}
        setDisabledEvidences={setDisabledEvidences}
        possibleEvidences={possibleEvidences}
        setMinimizedGhosts={setMinimizedGhosts}
      />
      <Ghosts
        minimizedGhosts={minimizedGhosts}
        possibleGhosts={possibleGhosts}
        setMinimizedGhosts={setMinimizedGhosts}
      />
    </main>
  )
}
