import React from 'react'
import { CheckIcon } from '../Icons/CheckIcon'
import * as S from './styles'

const CartSuccess = () => {
  return (
    <>
      <S.Wrapper>
        <S.Icon data-testid="checkIcon">
          <CheckIcon />
        </S.Icon>
        <S.Text>COMPRA EFETUADA COM SUCESSO</S.Text>
      </S.Wrapper>
    </>
  )
}

export default CartSuccess
