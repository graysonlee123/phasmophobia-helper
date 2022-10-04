import { useState } from 'react'
import Checkboxes from '@components/checkboxes'
import Ghosts from '@components/ghosts'

export default function Helper() {
  const [checkedEvidences, setCheckedEvidences] = useState<string[]>([])

  return (
    <>
      <Checkboxes
        checkedEvidences={checkedEvidences}
        setCheckedEvidences={setCheckedEvidences}
      />
      <Ghosts checkedEvidences={checkedEvidences} />
    </>
  )
}
