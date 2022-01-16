import { useField } from 'formik'
import React, { ChangeEvent, useMemo } from 'react'

import ErrorText from '../../elements/errorText/ErrorText'
import Input from '../../elements/input/Input'
import Label from '../../elements/label/Label'

import { StyledFormControl } from './FormControl.styled'

type FormControlProps = {
  name: string,
  label: string,
  placeholder?: string,
  disabled?: boolean,
  mask?: string,
  'data-testid'?: string
}

function FormControl({
  name,
  label,
  placeholder = '',
  disabled = false,
  mask = undefined,
  ...props
}: FormControlProps): JSX.Element {
  const [field, meta, helpers] = useField({ name, type: 'text' })

  const invalid =
    useMemo <
    boolean >
    (() => {
      return meta.touched && !!meta.error
    },
    [meta])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    helpers.setValue(event.target.value)
  }

  return (
    <StyledFormControl {...props}>
      <Label htmlFor={name} text={label} />
      <Input
        id={name}
        placeholder={placeholder}
        value={field.value}
        onChange={handleChange}
        onBlur={() => helpers.setTouched(true)}
        disabled={disabled}
        invalid={invalid}
        mask={mask}
      />
      {invalid ? <ErrorText text={meta.error || ''} /> : null}
    </StyledFormControl>
  )
}

export default FormControl
