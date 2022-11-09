import { useEffect } from 'react'
import useStorageState from '@hooks/useStorageState'
import usePossibleGhosts from '@hooks/usePossibleGhosts'
import Evidences from '@components/Evidences'
import Ghosts from '@components/Ghosts'
import styles from './App.module.css'
import useAnalyticsDebounce from '@hooks/useAnalyticsDebounce'

interface AppProps {
  ghosts: Ghost[]
  evidences: Evidence[]
}

const App = ({ ghosts, evidences }: AppProps) => {
  const [checkedEvidenceSlugs, setCheckedEvidenceSlugs] =
    useStorageState<EvidenceSlug>('checkedEvidences')

  const [disabledEvidenceSlugs, setDisabledEvidenceSlugs] =
    useStorageState<EvidenceSlug>('disabledEvidences')

  const [minimizedGhostSlugs, setMinimizedGhostSlugs] =
    useStorageState<GhostSlug>('minimizedGhosts')

  const possibleGhosts = usePossibleGhosts(
    ghosts,
    checkedEvidenceSlugs,
    disabledEvidenceSlugs
  )

  /**
   * Resets the game and sends a Gtag event.
   */
  const resetDebounce = useAnalyticsDebounce()
  function reset() {
    setCheckedEvidenceSlugs([])
    setDisabledEvidenceSlugs([])
    setMinimizedGhostSlugs([])
    resetDebounce({
      name: 'game_reset',
      params: {
        evidences_checked: checkedEvidenceSlugs.length,
        evidences_disabled: disabledEvidenceSlugs.length,
      },
    })
  }

  /**
   * Listen for evidence changes and send a Gtag event
   * if there is only one possible ghost.
   */
  const solvedDebounce = useAnalyticsDebounce()
  useEffect(() => {
    if (possibleGhosts.length === 1) {
      solvedDebounce({
        name: 'ghost_solved',
        params: {
          ghost_slug: possibleGhosts[0].slug,
        },
      })
    }
  }, [solvedDebounce, possibleGhosts])

  return (
    <main className={styles.main}>
      <Evidences
        ghosts={ghosts}
        evidences={evidences}
        checkedEvidences={checkedEvidenceSlugs}
        setCheckedEvidences={setCheckedEvidenceSlugs}
        disabledEvidences={disabledEvidenceSlugs}
        setDisabledEvidences={setDisabledEvidenceSlugs}
        reset={reset}
      />
      <Ghosts
        ghosts={ghosts}
        possibleGhosts={possibleGhosts}
        evidences={evidences}
        minimizedGhosts={minimizedGhostSlugs}
        setMinimizedGhosts={setMinimizedGhostSlugs}
      />
    </main>
  )
}

export default App
