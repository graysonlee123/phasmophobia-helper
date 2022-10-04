interface CheckboxProps {
  checkedEvidences: string[]
  setCheckedEvidences: (checkedEvidences: string[]) => void
  slug: string
  name: string
}

export default function Checkbox({
  checkedEvidences,
  setCheckedEvidences,
  slug,
  name,
}: CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    const slug = target.id

    if (checkedEvidences.filter((item) => item === slug).length === 0) {
      setCheckedEvidences([...checkedEvidences, slug])
    } else {
      setCheckedEvidences(checkedEvidences.filter((item) => item !== slug))
    }
  }

  return (
    <span>
      <label htmlFor={slug}>
        <span>{name}</span>
        <input
          id={slug}
          type="checkbox"
          onChange={handleChange}
          checked={checkedEvidences.indexOf(slug) > -1}
        />
      </label>
    </span>
  )
}
