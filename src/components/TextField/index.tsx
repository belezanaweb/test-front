import React from 'react'
import { useState, InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'
import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  mask?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  iconPosition = 'left',
  label,
  initialValue = '',
  mask,
  error,
  name,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <InputMask mask={mask ?? ''} onChange={onChange} value={value}>
        {(inputProps: any) => (
          <S.Input
            type="text"
            name={name}
            {...(label ? { id: name } : {})}
            {...props}
            {...inputProps}
          />
        )}
      </InputMask>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default TextField
