import React from 'react'
import { CheckIcon } from '../Icons/CheckIcon'
import * as S from './styles'

const Success = () => {
  return (
    <>
      <S.Wrapper>
        <S.Icon>
          <CheckIcon />
        </S.Icon>
        <S.Text>COMPRA EFETUADA COM SUCESSO</S.Text>
      </S.Wrapper>
    </>
  )
}

export default Success
