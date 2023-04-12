import { useState, useEffect } from 'react'

// Components
import { Input as InputStyled, Label, Wrapper, Error } from './styles'

export interface InputProps {
  label: string;
  initial?: string;
  type?: string;
  placeholder?: string;
  error?: any;
  onChange: (event: any) => any;
  autocomplete?: string;
  width?: string;
  minlength?: string | number;
  maxlength?: string | number;
}

export function Input({
  label,
  initial = '',
  placeholder = '',
  autocomplete = '',
  type = 'text',
  onChange,
  width = '100%',
  ...other
}: InputProps) {
  // State
  const [value, setValue] = useState(initial)

  useEffect(() => {
    setValue(initial)
  }, [initial])

  return (
    <Wrapper width={width}>
      <Label>{label}</Label>
      <InputStyled
        type={type}
        value={value}
        onChange={(e: any) => {
          const val = onChange(e.target.value)

          if (val) {
            setValue(val)
          } else {
            setValue(e.target.value)
          }
        }}
        placeholder={placeholder}
        autoComplete={autocomplete}
        {...other}
      />
      <Error>{other.error ? other.error.message : ''}</Error>
    </Wrapper>
  )
}
