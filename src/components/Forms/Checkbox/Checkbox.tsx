import { type ReactElement, useState } from 'react'
import { SCheckbox, SCheckboxInput, SCheckboxLabel } from './Checkbox.styled'

export const Checkbox = ({ onChange, checked: defaultChecked, label, icon, ...props }): ReactElement => {
  const [checked, setChecked] = useState(!!defaultChecked)

  const onChangeHandler = (event) => {
    setChecked(event.target.checked)
    if (onChange) onChange(event.target.checked)
  }

  return (
    <SCheckbox {...props}>
      <input type="checkbox" defaultChecked={checked} onChange={onChangeHandler} style={{ display: 'none' }} />
      <SCheckboxInput sref="CheckboxInput" checked={checked}>{icon || null}</SCheckboxInput>
      { label && <SCheckboxLabel sref="Checkbox_Label">{label}</SCheckboxLabel> }
    </SCheckbox>
  )
}

Checkbox.displayName = 'Checkbox'
