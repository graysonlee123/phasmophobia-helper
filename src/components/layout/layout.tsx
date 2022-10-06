import { useEffect, useState } from 'react'
import Evidences from '@components/evidences'
import Ghosts from '@components/ghosts'
import { getPossibleGhosts } from '@lib/ghosts'
import { getPossibleEvidences } from '@lib/evidences'
import { getStorageItem, setStorageItem } from '@lib/storage'
import styles from './layout.module.css'

export default function Layout() {
  /**
   * Keeps state of checked evidences and saves updates to local storage.
   */
  const [checkedEvidences, setCheckedEvidences] = useState<EvidenceSlug[]>(
    getStorageItem('checkedEvidences') || []
  )
  useEffect(() => {
    setStorageItem('checkedEvidences', checkedEvidences)
  }, [checkedEvidences])

  /**
   * Keeps state of disabled evidences and saves updates to local storage.
   */
  const [disabledEvidences, setDisabledEvidences] = useState<EvidenceSlug[]>(
    getStorageItem('disabledEvidences') || []
  )
  useEffect(() => {
    setStorageItem('disabledEvidences', disabledEvidences)
  }, [disabledEvidences])

  /**
   * Keeps state of minimized ghosts and saves updates to local storage.
   */
  const [minimizedGhosts, setMinimizedGhosts] = useState<GhostSlug[]>(
    getStorageItem('minimizedGhosts') || []
  )
  useEffect(() => {
    setStorageItem('minimizedGhosts', minimizedGhosts)
  }, [minimizedGhosts])

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
