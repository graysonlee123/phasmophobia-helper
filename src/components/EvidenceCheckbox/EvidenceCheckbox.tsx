import { useEffect, useState } from 'react'
import {
  useCheckedEvidences,
  useDisabledEvidences,
  useSetCheckedEvidences,
  useSetDisabledEvidences,
} from '@store/index'
import useAnalyticsDebounce from '@hooks/useAnalyticsDebounce'
import usePossibleEvidences from '@hooks/usePossibleEvidences'
import Checkbox from '@components/Checkbox'
import { arrayAddUnique, arrayContains, arrayRemoveAll } from '@lib/arrays'

interface EvidenceCheckboxProps {
  evidence: Evidence
}

export default function EvidenceCheckbox({ evidence }: EvidenceCheckboxProps) {
  const [state, setState] = useState<boolean | null>(null)
  const checkedEvidences = useCheckedEvidences()
  const setCheckedEvidences = useSetCheckedEvidences()
  const disabledEvidences = useDisabledEvidences()
  const setDisabledEvidences = useSetDisabledEvidences()
  const possibleEvidences = usePossibleEvidences()
  const eventDebounce = useAnalyticsDebounce()

  const isDisabled = !arrayContains(evidence.id, possibleEvidences)

  useEffect(() => {
    if (arrayContains(evidence.id, disabledEvidences)) {
      setState(false)
    } else if (arrayContains(evidence.id, checkedEvidences)) {
      setState(true)
    } else {
      setState(null)
    }
  }, [evidence.id, disabledEvidences, checkedEvidences])

  function onClick() {
    switch (state) {
      /** From false to neutral. */
      case false:
        setDisabledEvidences(arrayRemoveAll(evidence.id, disabledEvidences) as EvidenceIds)

        eventDebounce({
          name: 'evidence_unchecked',
          params: {
            evidence_slug: evidence.id,
          },
        })
        break

      /** From neutral to true. */
      case null:
        setCheckedEvidences(arrayAddUnique(evidence.id, checkedEvidences) as EvidenceIds)

        eventDebounce({
          name: 'evidence_checked',
          params: {
            evidence_slug: evidence.id,
          },
        })
        break

      /** From true to false. */
      case true:
        setCheckedEvidences(arrayRemoveAll(evidence.id, checkedEvidences) as EvidenceIds)
        setDisabledEvidences(arrayAddUnique(evidence.id, disabledEvidences) as EvidenceIds)

        eventDebounce({
          name: 'evidence_disabled',
          params: {
            evidence_slug: evidence.id,
          },
        })
        break
    }
  }

  return (
    <Checkbox
      state={state}
      primary={evidence.name}
      secondary={evidence.tip}
      disabled={isDisabled}
      onClick={onClick}
    />
  )
}
