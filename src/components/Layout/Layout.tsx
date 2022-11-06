import { useEffect, useState, useRef } from 'react'
import Evidences from '@components/Evidences'
import Ghosts from '@components/Ghosts'
import { getPossibleGhosts } from '@lib/ghosts'
import { getStorageItem, setStorageItem } from '@lib/storage'
import { ANALYTICS_DEBOUNCE } from '@lib/constants'
import { sendGtagEvent } from '@lib/analytics'
import styles from './Layout.module.css'

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
  const [checkedEvidences, setCheckedEvidences] = useState<EvidenceState>(
    getStorageItem('checkedEvidences') || []
  )
  useEffect(() => {
    setStorageItem('checkedEvidences', checkedEvidences)
  }, [checkedEvidences])

  /**
   * Keeps state of disabled evidences and saves updates to local storage.
   */
  const [disabledEvidences, setDisabledEvidences] = useState<EvidenceState>(
    getStorageItem('disabledEvidences') || []
  )
  useEffect(() => {
    setStorageItem('disabledEvidences', disabledEvidences)
  }, [disabledEvidences])

  /**
   * Keeps state of minimized ghosts and saves updates to local storage.
   */
  const [minimizedGhosts, setMinimizedGhosts] = useState<GhostState>(
    getStorageItem('minimizedGhosts') || []
  )
  useEffect(() => {
    setStorageItem('minimizedGhosts', minimizedGhosts)
  }, [minimizedGhosts])

  /**
   * Listen for evidence changes and send a Gtag event
   * if there is only one possible ghost.
   */
  const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null)
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
      }, ANALYTICS_DEBOUNCE)
    }
  }, [checkedEvidences, disabledEvidences])

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
        setMinimizedGhosts={setMinimizedGhosts}
      />
      <Ghosts
        checkedEvidences={checkedEvidences}
        disabledEvidences={disabledEvidences}
        minimizedGhosts={minimizedGhosts}
        setMinimizedGhosts={setMinimizedGhosts}
      />
    </main>
  )
}
