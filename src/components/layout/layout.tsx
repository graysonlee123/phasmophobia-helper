import { useEffect, useState, useRef } from 'react'
import Evidences from '@components/evidences'
import Ghosts from '@components/ghosts'
import { getPossibleGhosts } from '@lib/ghosts'
import { getPossibleEvidences } from '@lib/evidences'
import { getStorageItem, setStorageItem } from '@lib/storage'
import styles from './layout.module.css'
import { sendGtagEvent } from '@lib/analytics'

export default function Layout() {
  /**
   * Don't render anything until the component mounts.
   * We do this to prevent hydration errors.
   */
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])

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
   * Listen for evidence changes and send a Gtag event
   * if there is only one possible ghost.
   */
  useEffect(() => {
    if (timeoutRef.current) clearInterval(timeoutRef.current)

    const ghosts = getPossibleGhosts(checkedEvidences, disabledEvidences)

    if (ghosts.length === 1) {
      const ghost = ghosts[0]

      timeoutRef.current = setTimeout(() => {
        sendGtagEvent({
          name: 'ghost_solved',
          params: {
            ghost_slug: ghost,
          },
        })
      }, delay)
    }
  }, [checkedEvidences, disabledEvidences])

  const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null)
  const delay = 1250
  const possibleEvidences = getPossibleEvidences(checkedEvidences)
  const possibleGhosts = getPossibleGhosts(checkedEvidences, disabledEvidences)

  /**
   * Render something.
   */
  return !mounted ? null : (
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
