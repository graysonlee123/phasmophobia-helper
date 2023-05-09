import Checkbox from '@components/inputs/Checkbox'
import {
  ANALYTICS_EVENT_EVIDENCE_CHECKED,
  ANALYTICS_EVENT_EVIDENCE_DISABLED,
  ANALYTICS_EVENT_EVIDENCE_UNCHECKED,
} from '@data/constants'
import useAnalyticsDebounce from '@hooks/useAnalyticsDebounce'
import usePossibleEvidences from '@hooks/usePossibleEvidences'
import {
  useCheckedEvidences,
  useDisabledEvidences,
  useSetCheckedEvidences,
  useSetDisabledEvidences,
} from '@store/index'
import arrayContains from '@utils/arrayContains'
import filterValueOut from '@utils/filterValueOut'
import pushUnique from '@utils/pushUnique'
import { useEffect, useState } from 'react'

type EvidenceCheckboxProps = {
  evidence: Evidence
}

export default function EvidenceCheckbox({ evidence }: EvidenceCheckboxProps) {
  const [state, setState] = useState<boolean | null>(null)
  const checkedEvidences = useCheckedEvidences()
  const setCheckedEvidences = useSetCheckedEvidences()
  const disabledEvidences = useDisabledEvidences()
  const setDisabledEvidences = useSetDisabledEvidences()
  const possibleEvidences = usePossibleEvidences()
  const { debouncer: eventDebouncer } = useAnalyticsDebounce()
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
        setDisabledEvidences(filterValueOut(evidence.id, disabledEvidences) as EvidenceIds)

        eventDebouncer({
          name: ANALYTICS_EVENT_EVIDENCE_UNCHECKED,
          params: {
            evidence_slug: evidence.id,
          },
        })
        break

      /** From neutral to true. */
      case null:
        setCheckedEvidences(pushUnique(evidence.id, checkedEvidences) as EvidenceIds)

        eventDebouncer({
          name: ANALYTICS_EVENT_EVIDENCE_CHECKED,
          params: {
            evidence_slug: evidence.id,
          },
        })
        break

      /** From true to false. */
      case true:
        setCheckedEvidences(filterValueOut(evidence.id, checkedEvidences) as EvidenceIds)
        setDisabledEvidences(pushUnique(evidence.id, disabledEvidences) as EvidenceIds)

        eventDebouncer({
          name: ANALYTICS_EVENT_EVIDENCE_DISABLED,
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
