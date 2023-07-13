import React, { ReactElement, FC, useRef } from 'react'
import { forEach } from 'lodash'
import { ChevronDown as ChevronDownIcon } from 'react-feather'
import { SSelect, SSelectWrapper, SSelectIcon } from './Select.styled'

interface SelectOptionProps {
  label: string
  value: any
  selected?: boolean
}

interface SelectProps {
  options: SelectOptionProps[]
  multi?: boolean
  block?: boolean
  onChange?: any
  value?: any
}

export const Select: FC<SelectProps> = ({
  options,
  multi,
  onChange,
  value,
  ...props
}: SelectProps): ReactElement => {
  const selectRef: any = useRef()

  const onSelectChange = (event: any) => {
    const { value: newValue } = event.target

    if (multi) {
      const indexes: any[] = []

      forEach(selectRef.current.options, (option: any, index: number) => {
        if (option.selected) {
          indexes.push(option.value || index)
        }
      })

      const values = indexes.map((index: number) => {
        return options[index].value
      })

      onChange(values)
    } else {
      onChange(newValue)
      // forEach(selectRef.current.options, (option: any, index: number) => {
      //   if (option.selected) {
      //     setCurrentValue(option.value || index)
      //     onChange(option.value || index)
      //   }
      // })
    }
  }

  return (
    <SSelectWrapper sRef="Select_Wrapper" {...props}>
      <SSelect
        sRef="Select"
        multiple={multi}
        onChange={onSelectChange}
        data-testid="select"
        value={value}
        ref={selectRef}
      >
        {options &&
          options.map((option: SelectOptionProps) => (
            <option
              value={option.value}
              key={`selectOption${option.value}`}
              selected={option.selected}
              data-testid="select-option"
            >
              {option.label}
            </option>
          ))}
      </SSelect>
      <SSelectIcon sRef="SelectIcon">
        <ChevronDownIcon />
      </SSelectIcon>
    </SSelectWrapper>
  )
}

Select.displayName = 'Select'
