import {
  useCheckedEvidences,
  useDisabledEvidences,
  useSetCheckedEvidences,
  useSetDisabledEvidences,
  useSetEliminatedGhosts,
} from '@store/index'
import useAnalyticsDebounce from '@hooks/useAnalyticsDebounce'
import styles from './ResetButton.module.css'
import cn from 'classnames'

export default function ResetButton() {
  const setEliminatedGhosts = useSetEliminatedGhosts()
  const checkedEvidences = useCheckedEvidences()
  const setCheckedEvidences = useSetCheckedEvidences()
  const disabledEvidences = useDisabledEvidences()
  const setDisabledEvidences = useSetDisabledEvidences()
  const resetDebounce = useAnalyticsDebounce()

  function reset() {
    setEliminatedGhosts([])
    setCheckedEvidences([])
    setDisabledEvidences([])

    resetDebounce({
      name: 'game_reset',
      params: {
        evidences_checked: checkedEvidences.length,
        evidences_disabled: disabledEvidences.length,
      },
    })
  }

  return (
    <button className={cn(['button-reset', styles.reset])} onClick={reset}>
      (reset all)
    </button>
  )
}
