import Button from '@components/Button'
import {
  useSetCheckedEvidences,
  useSetDisabledEvidences,
  useSetEliminatedGhosts,
} from '@store/index'

export default function NewContractBtn() {
  const setCheckedEvidences = useSetCheckedEvidences()
  const setDisabledEvidences = useSetDisabledEvidences()
  const setEliminatedGhosts = useSetEliminatedGhosts()

  function handleClick() {
    setCheckedEvidences([])
    setDisabledEvidences([])
    setEliminatedGhosts([])
  }

  return (
    <Button variant="outlined" onClick={handleClick}>
      New contract
    </Button>
  )
}
