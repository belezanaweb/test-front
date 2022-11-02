import React, { InputHTMLAttributes } from 'react'

import { useCreditCard } from '../../hooks/creditCard'

import { StyledInput, StyledLabel, StyledError } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  onlyNumbers?: boolean
  hasError: boolean
  errorLabel?: string
  maskPattern?: string
  maskDivider?: string
}

const Input: React.FC<Props> = ({
  label,
  name,
  onlyNumbers = false,
  hasError,
  errorLabel = 'Campo inválido',
  maskPattern,
  maskDivider = '',
  ...props
}) => {
  const { formData: value, handleChange }:{ formData: { [char: string]: string }, handleChange: (name: string, value: string) => void} = useCreditCard()

  const maskString = (str: string, pattern: string) => {
    let i = 0

    let slicePattern = pattern.slice(0, str.length)

    const formattedStr = str.replaceAll(maskDivider, '')

    if (slicePattern.substring(slicePattern.length - 1) === maskDivider) {
      if (formattedStr.length !== slicePattern.replaceAll(maskDivider, '').length)
        slicePattern = `${slicePattern}#`
    }

    const padded = slicePattern.replace(/#/g, () => {
      return formattedStr[i++]
    })
    return padded
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    let str = e.target.value

    if (onlyNumbers && str.length > value[name].length && !str.match(/[0-9]$/)) return

    const formattedStr = maskPattern ? maskString(str, maskPattern) : str

    handleChange(name, formattedStr)
  }

  return (
    <StyledLabel id={'label'}>
      {label}
      <StyledInput
        name={name}
        value={value[name]}
        onChange={handleOnChange}
        error={hasError}
        {...props}
      />
      {hasError && <StyledError>{errorLabel}</StyledError>}
    </StyledLabel>
  )
}

export default Input
