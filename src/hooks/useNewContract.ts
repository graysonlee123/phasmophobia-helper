import {
  useSetCheckedEvidences,
  useSetDisabledEvidences,
  useSetEliminatedGhosts,
} from '@store/index'
import Router from 'next/router'
import useNotice from './useNotice'

export default function useNewContract() {
  const setCheckedEvidences = useSetCheckedEvidences()
  const setDisabledEvidences = useSetDisabledEvidences()
  const setEliminatedGhosts = useSetEliminatedGhosts()
  const { notice } = useNotice()

  return function handleClick() {
    setCheckedEvidences([])
    setDisabledEvidences([])
    setEliminatedGhosts([])
    notice('A new contract has begun!', { variant: 'success' })

    Router.push('/')
  }
}
