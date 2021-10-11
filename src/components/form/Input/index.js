import React from 'react'
import * as S from './styles'

const Input = ({ name, label, error, onChange, value, ...rest }) => {
  return (
    <S.InputBlock>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input name={name} value={value} onChange={onChange} error={error} {...rest} />

      {error && <S.ErrorMessage>Campo obrigatório</S.ErrorMessage>}
    </S.InputBlock>
  )
}

export default Input
