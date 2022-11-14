import { useState } from 'react'
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
import { MAX_EVIDENCE } from '@lib/constants'

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

  const isDisabled =
    (checkedEvidences.length >= MAX_EVIDENCE && !arrayContains(evidence.id, checkedEvidences)) ||
    !arrayContains(evidence.id, possibleEvidences)

  function onClick() {
    switch (state) {
      /** From false to neutral. */
      case false:
        setState(null)
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
        setState(true)
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
        setState(false)
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
