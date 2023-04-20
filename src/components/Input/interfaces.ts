import { ChangeEventHandler, FocusEventHandler } from 'react'

export interface InputProps {
  label?: string
  errorMessage?: string
  placeholder?: string
  name: string
  value: string
  mask?: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onBlur: FocusEventHandler<HTMLInputElement>
}
