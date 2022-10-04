import { useState } from 'react'
import Evidences from '@components/evidences'
import Ghosts from '@components/ghosts'

export default function Helper() {
  const [checkedEvidences, setCheckedEvidences] = useState<string[]>([])
  const [disabledEvidences, setDisabledEvidences] = useState<string[]>([])

  return (
    <>
      <Evidences
        checkedEvidences={checkedEvidences}
        setCheckedEvidences={setCheckedEvidences}
        disabledEvidences={disabledEvidences}
        setDisabledEvidences={setDisabledEvidences}
      />
      <Ghosts
        checkedEvidences={checkedEvidences}
        disabledEvidences={disabledEvidences}
      />
    </>
  )
}
