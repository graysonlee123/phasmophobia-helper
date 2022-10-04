import { useEffect, useState } from 'react'

interface CheckboxProps {
  checkedEvidences: string[]
  setCheckedEvidences: (checkedEvidences: string[]) => void
  disabledEvidences: string[]
  setDisabledEvidences: (disabledEvidences: string[]) => void
  slug: string
  name: string
}

export default function Checkbox({
  checkedEvidences,
  setCheckedEvidences,
  disabledEvidences,
  setDisabledEvidences,
  slug,
  name,
}: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  const [locked, setLocked] = useState<boolean>(false)

  useEffect(
    function () {
      /**
       * Disable the evidence if 3 evidences have
       * been selected and it isn't one of them.
       *
       * Otherwise, unlock it.
       */
      if (checkedEvidences.length >= 3 && checkedEvidences.indexOf(slug) < 0) {
        setLocked(true)
        return
      }

      setLocked(false)
    },
    [checkedEvidences, slug]
  )

  function handleClick() {
    if (checked) {
      setCheckedEvidences(
        checkedEvidences.filter((evidence) => evidence !== slug)
      )
      setDisabledEvidences([...disabledEvidences, slug])
      setChecked(false)
      setDisabled(true)
    } else if (disabled) {
      setDisabledEvidences(
        disabledEvidences.filter((evidence) => evidence !== slug)
      )
      setDisabled(false)
    } else {
      setCheckedEvidences([...checkedEvidences, slug])
      setChecked(true)
    }
  }

  return (
    <span>
      <button
        onClick={handleClick}
        disabled={locked}
        style={{
          color: locked
            ? 'white'
            : checked
            ? 'green'
            : disabled
            ? 'red'
            : 'gray',
        }}
      >
        {name}
      </button>
    </span>
  )
}
