import { Ref, forwardRef } from 'react'

import { InputContainer, InputMasked, InputLabel, InputFeedback } from './InputMask.styled'
import { InputMaskProps } from './InputMask.types'

import { ReactInputMask } from 'react-input-mask'

const MaskInput = (
  { onChange, mask = '', value, label, placeholder, error, ...props }: InputMaskProps,
  ref: Ref<ReactInputMask>
) => {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}

      <InputMasked
        mask={mask}
        maskChar={null}
        onChange={onChange}
        error={error}
        ref={ref}
        defaultValue={value}
        placeholder={placeholder}
        {...props}
      />
      {error && <InputFeedback>{error}</InputFeedback>}
    </InputContainer>
  )
}

export const InputMask = forwardRef(MaskInput)
