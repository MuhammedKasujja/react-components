import React, { useState } from 'react'
import { mergeClassNames } from 'src/utils/utils'

import classes from './Checkbox.module.scss'

type CheckboxProps = {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  defaultChecked?: boolean
  isDisabled?: boolean
  checked?: boolean
  error?: boolean
  name?: string
}

const defaultCheckboxProps: CheckboxProps = {
  label: undefined,
  size: 'md',
  defaultChecked: undefined,
  onChange: undefined,
  isDisabled: undefined,
  checked: undefined,
  error: undefined,
  name: undefined,
}

const Checkbox = (props: CheckboxProps & React.ComponentProps<'div'>) => {
  const {
    label,
    size,
    defaultChecked,
    onChange,
    isDisabled,
    checked,
    error,
    name,
    ...rest
  } = props
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(defaultChecked || checked)

  const checkboxSizes = {
    sm: classes.checkbox_sm,
    md: classes.checkbox_md,
    lg: classes.checkbox_lg,
  }

  const checkboxId = label && label.toLowerCase().split(' ').join('_')
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) {
      setIsCheckboxChecked(event.target.checked)
    }
    onChange && onChange(event)
  }

  return (
    <div className={mergeClassNames(classes.checkbox_container)} {...rest}>
      <div
        className={mergeClassNames(
          classes.checkbox,
          isCheckboxChecked && classes.checkbox_checked,
          checkboxSizes[size || 'md'],
          isDisabled && classes.checkbox_disabled,
          error && classes.checkbox_error,
        )}
      >
        <input
          type="checkbox"
          id={checkboxId}
          onChange={handleCheckChange}
          defaultChecked={defaultChecked}
          disabled={isDisabled}
          checked={checked}
          name={name}
        />
        {isCheckboxChecked && (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="white" d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4Z" />
          </svg>
        )}
      </div>
      <label className={mergeClassNames(classes.checkbox_label)} htmlFor={checkboxId}>
        {label}
      </label>
    </div>
  )
}

Checkbox.defaultProps = defaultCheckboxProps

export default Checkbox
