import {
  useSetCheckedEvidences,
  useSetDisabledEvidences,
  useSetEliminatedGhosts,
} from '@store/index'
import Router from 'next/router'

export default function useNewContract() {
  const setCheckedEvidences = useSetCheckedEvidences()
  const setDisabledEvidences = useSetDisabledEvidences()
  const setEliminatedGhosts = useSetEliminatedGhosts()

  return function handleClick() {
    setCheckedEvidences([])
    setDisabledEvidences([])
    setEliminatedGhosts([])

    Router.push('/')
  }
}
