import React from 'react'
import * as S from './Values.styled'

const Values = ({ subTotal, shippingTotal, discount, total }) => {
  return (
    <S.ValuesDiv>
      {subTotal}
      {shippingTotal}
      {discount}
      {total}
    </S.ValuesDiv>
  )
}

export default Values
