import React from 'react'
import InputMask from 'react-input-mask'
import * as S from './styled'

const Inputs = ({ valid, label, mask, onChange, value, name, type, placeholder }) => {
  return (
    <S.InputContainer valid={valid}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <InputMask
        mask={mask}
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
      />
      {!valid && <S.InputError>Campo Inválido</S.InputError>}
    </S.InputContainer>
  )
}

export default Inputs
